---
title: "Managing & Renewing SSL"
confluence_id: 747077637
source: 747077637.html
---
Our setup is getting more complex over time. Last time around I missed a couple steps so I've started a script(or at least the steps needed) on HAL: /etc/letsencrypte/sa-renewal-script.bash

On WALL-E, follow the instructions in the file /home/shrek/notes.txt.

## Server: WALL-E

Initially I will try to capture the differences between what is written below for HAL and how WALL-E is configured.

TODO: after set up, check instructions in this section: [Step 5 — Updating Diffie-Hellman Parameters](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-centos-7#step-5-%E2%80%94-updating-diffie-hellman-parameters) and verify the [SSL Labs Server Test rating](https://www.ssllabs.com/ssltest/).

WALL-E has a firewall installed. I've opened ports 80 for HTTP and 443 for HTTPS. If you need any other ports open follow the instructions and document it on the [Firewall on WALL-E page](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/777027683/Firewall+on+WALL-E).

```
sudo yum install epel-release
sudo yum install python2-certbot-nginx
sudo yum install python2-certbot-dns-digitalocean
sudo yum erase python2-certbot-dns-digitalocean

sudo certbot certonly --manual -d '*.semanticarts.app' --email grant.sisson@semanticarts.com --agree-tos
sudo certbot certonly --manual -d '*.semanticarts.com' --email grant.sisson@semanticarts.com --agree-tos --preferred-challenges=dns ## -n ??
```

In the future it says to just run `sudo certbot renew`

#### `Allegrograph & agraph.semanticarts.com`

I've added a separate certificate just for Allegrograph. Allegrograph wants things done a little differently so:

- it has it own certificate for agraph.semanticarts.com
- there is a program (`/home/ssd/agraph/update-ssl-cert`) that needs to be run as root after the certificates are updated
- then the allegrograph service has to be restarted

```
sudo systemctl stop agraph
sudo systemctl start agraph
sudo systemctl status agraph
```

#### Digital Ocean plugin

I installed the Digital Ocean certbot DNS plugin but decided not to use it because of security implications. You must have a API token available to run it and if your token is compromised, anyone with it has full control of your Digital Ocean account. So I uninstalled it for now...

#### Resources:

Certbot for nginx on CentOS: <https://certbot.eff.org/lets-encrypt/centosrhel7-nginx.html>

Information on the Digital Ocean certbot plugin: <https://certbot-dns-digitalocean.readthedocs.io/en/stable/>

How to secure Nginx on CentOS with Let's Encrypt: <https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-centos-7>

## Server: HAL

We're currently using [Certbot](https://certbot.eff.org/about/) to fetch and deploy a wildcard SSL certificate for all semanticarts.com subdomains. These certificates require renewal every 90 days.

The wildcard certificate verification currently only works via a dns challenge that requires deploying a TXT record with a specific value. Certbot checks for that record to verify we own the semanticarts domain (details below). In order to configure auto-renewal, we'll need to investigate whether Digital Ocean provides an API through which we can update the value of the TXT record with the value Certbot provides in the verification challenge. If so, we could set up a cron job to handle the renewal. For now, we'll just have to follow the process outlined in this document.

In order to set up or renew a wildcard certificate (same process either way), follow the steps below after you've ssh-ed into the monolith user on Hal.

In order to check for/get info on any Certbot-managed certificates run:

```
sudo certbot certificates
```

## Step 1: Initial setup

These should generally be fulfilled if we are staying up to date, but just in case:

Python 2.7 or 3 & git should be installed on the server. To install, if needed:

```
apt-get update
apt-get install python-minimal
apt-get install git-core
```

Certbot should be installed on the server. To add the repository and then install, if needed:

```
sudo add-apt-repository ppa:certbot/certbot
```

Press `Enter` to accept. Then:

```
sudo apt install python-certbot-nginx
```

## Step 2: Generate Wildcard SSL Certificate

Run the following (it's one line):

```
sudo certbot certonly \ 
	--manual \
	--preferred-challenges=dns \
	--email grant.sisson@semanticarts.com \
	--server https://acme-v02.api.letsencrypt.org/directory \
	--agree-tos -d *.semanticarts.com
```

```
sudo certbot certonly --manual --preferred-challenges=dns \
--email jamie.gulden@semanticarts.com  --agree-tos \
-d *.semanticarts.app --server https://acme-v02.api.letsencrypt.org/directory
```

Each piece explained:

- `certonly` - obtain or renew the certificate, but do not install it.
- `--manual` - obtain certificate interactively, or using shell script hooks.
- `--preferred-challenges` - `dns` is how we'll authenticate domain ownership.
- `--email` - the email/account associated with the certificate. Any email will do. This is where renewal reminders will show up, so best to use one that gets checked.
- `--server` - specify the endpoint to generate a wildcard certificate. Currently, only the `acme-v02` endpoint supported.
- `--agree-tos` - agree to the ACME server's subscriber agreement.
- `-d` - specify the domain name.

## Step 3: Authenticate Ownership of the Domain

After executing the command in step 2, Certbot will share a text record to add to our DNS:

```
Please deploy a DNS TXT record under the name
_acme-challenge.semanticarts.com with the following value:

<long-string-value-here>

Before continuing, verify the record is deployed.
-------------------------------------------------------------------------------
Press Enter to Continue
```

Log in to our [Digital Ocean](https://cloud.digitalocean.com/networking/domains/semanticarts.com?i=ecb001) semanticarts.com domain: Digital Ocean Home → Networking tab → Click `semanticarts.com` under domains.

Under **Create a New Record**: Select `TXT` → enter the hostname `_acme-challenge` under `HOSTNAME` (note that digital ocean will fill in semanticarts.com, so don't include that in the name) → paste the value Certbot provided (from the code block above) into `VALUE` → Click `Create Record`.

## Step 4: Get the Certificate

Once you've deployed the text record as per step 3. Return to the server's terminal and hit `Enter`. Upon success, you'll see something like the following output:

```
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/semanticarts.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/semanticarts.com/privkey.pem
   Your cert will expire on 2019-07-28. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
```

In order to verify that the certificate was created, you can run `sudo certbot certificates` and check that the entry for the certificate you just created or renewed looks correct.

## Step 5: Restart the Web Server

First, test that the configuration is corrrect. Then tell nginx to reload it's configuration.

```
sudo nginx -t
sudo nginx -s reload
```

Resources

This documentation was compiled from the following sources:

<https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04>

<https://medium.com/@saurabh6790/generate-wildcard-ssl-certificate-using-lets-encrypt-certbot-273e432794d7>

Next expiration date:

~~2019-10-17~~

~~2020-01-06~~

~~2020-04-05~~

2020-06-27
