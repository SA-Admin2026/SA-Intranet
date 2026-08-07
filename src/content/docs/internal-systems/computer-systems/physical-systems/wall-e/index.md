---
title: "WALL-E"
confluence_id: 777060365
source: WALL-E_777060365.html
---
External IP address: none yet, it will be taking over for HAL at: 74.93.230.113

Internal IP address: 192.168.2.39

See [here](https://www.pixar.com/feature-films/walle).

### Subpages:

- [Allegrograph on WALL-E](allegrograph-on-wall-e.md)
- [Anzograph on WALL-E](anzograph-on-wall-e.md)
- [Firewall on WALL-E](firewall-on-wall-e.md)
- [Setting up Services on WALL-E](setting-up-services-on-wall-e.md)

See also: [Deploying github.com repositories to HAL & WALL-E](https://semarts.atlassian.net/wiki/spaces/SD/pages/754352144/Deploying+github.com+repositories+to+HAL+WALL-E)

### Dell PowerEdge T640

```
Express Service Code: 10860730094
Manufacture Date: 2019-08-24
Warranty: Basic
Expires: Aug 28, 2022

(1) Intel(R) Xeon(R) Gold 6240 CPU @ 2.60GHz
(1) empty CPU slot

128 GByte RAM (as 2 64 Gbyte modules)
(2) 1T SATA hard drives in RAID 0
(1) 480 GByte NVMe PCIe SSD
```

Running CentOS 7, installed on RAID HDs. Tried to install OS on NVMe drive but it didn’t want to boot from it (it would install to it, but it showed up in Boot Sequence options as “unavailable”).

[CentOS Tips & Tricks](https://wiki.centos.org/TipsAndTricks)

### Users:

- root - don’t login as root
- shrek - the main shared user account used to manage the system
- agraph - the user that the Allegrograph database runs as. Don’t login as agraph.
- anzograph - the user that the Anzograph database runs as. Don’t login as anzograph.

### Yum

The package manager on CentOS is called “yum”.

- sudo yum update
- sudo yum list package-name
- sudo yum search package-name
- sudo yum install package-name

### SELinux

CentOS defaults to using SELinux. This adds extra security to the system which is good, but it can make it harder to get things to work particularly if you are not familiar with SELinux.

For now, we’ll leave it and see how it goes.

Some standard commands like `ls` and `ps` take a `Z` option which includes additional SELinux information in the output of the commands.

Some useful commands:

```
getenforce
setenforce Permissive
setenforce Enforcing
semanage [lots of options]
sesearch [lots of options]
seinfo
chcon -Rt httpd_sys_content_t /path/to/www ## change settings of files to allow Nginx to serve them
setsebool -P httpd_read_user_content 1 ## ? Allow nginx to access user files. Maybe the way to go?
semanage boolean -l
```

CentOS SELinux HowTo : <https://wiki.centos.org/HowTos/SELinux>

Nginx and SELinux : <https://www.nginx.com/blog/using-nginx-plus-with-selinux/>

SELinux Booleans: <https://wiki.centos.org/TipsAndTricks/SelinuxBooleans>

### Running Services:

Services (things that should be running all the time) should be managed with systemctl. If you are adding something to the system then make sure it works correctly with systemctl and restarts properly if the system is rebooted.

An easy starting guide for using systemctl is [here](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units).

Config files are stored at: `/etc/systemd/system/*.service`

```
sudo systemctl daemon-reload # reload config (service) files
sudo systemctl start unit-name
sudo systemctl stop unit-name
sudo systemctl status unit-name
```

### Node.js

I’ve installed NVM (Node Version Manager) and it is configured for user shrek to use node version 12.

Because systemd & systemctl want to use absolute paths for commands it takes a little indirection to make it work with NVM. Just follow the ones I did that are working for the DCA.

### Installed stuff:

- Allegrograph triplestore from Franz
- Anzograph from Cambridge Semantics

  - Requires use of docker to run. Not set to start on reboot.
- Nginx web server
- Let’s Encrypt certbot
- Stardog triplestore

### Where to install stuff?

`/home/ssd` and more specifically, `/home/ssd/www/` for any web service

### Transparent Hugepages

Allegrograph recommends to disable Transparent Hugepage support in the kernel and displays a warning in WebView if it is not disabled. I did a quick search and other databases recommend the same thing. I added a startup script `/etc/init.d/disable-transparent-hugepages` that should disable it everytime the system boots.

### Port Usage

Lots of programs are going to get installed using a lot of ports. Lets see if we can keep track of them…

Useful way to test configuration of servers before DNS is set up:

`curl --resolve 'agraph.semanticarts.com:443:192.168.2.39' https://agraph.semanticarts.com -v`

| **PORT** | **URL** | **Code Path** |
| --- | --- | --- |
| 80, 443 | \*  ontologies.semanticarts.com/o/  [www.semanticarts.co/](https://www.semanticarts.co/) | nginx |
|  |  |  |
| 3030 | [platts.semanticarts.com](http://platts.semanticarts.com) | Demo app & server: /home/ssd/www/platts/demo |
| 3031 | [platts-an.semanticarts.com](http://platts-an.semanticarts.com) | Platts annotation server: /home/ssd/www/platts/platts-annotation-service |
| 3032 | [platts-dms.semanticarts.com](http://platts-dms.semanticarts.com) | React app: /home/ssd/www/platts/platts-dms-application/client/build  Server code: /home/ssd/www/platts/platts-ontology/dms  Server runs in a docker container |
|  | platts-dms-app.semanticarts.com | Platts DMS app:  node express server |
|  |  |  |
| ?? | ibeam.semanticarts.com |  |
| 5100 | [dca.semanticarts.com](http://dca.semanticarts.com) (old client)  [dca.semanticarts.com/presenter](https://dca.semanticarts.com/presenter)  dca.semanticarts.com/review | /home/ssd/www/dca/? |
| 5200 | [presenter.semanticarts.com](http://presenter.semanticarts.com) | /home/ssd/www/dca/? |
| 5300 | ms.semanticarts.com | /home/ssd/www/dca/? |
| 5400 | dca.semanticarts.app | /home/ssd/www/dca/ |
| 5820 | stardog.semanticars.com | Code: /opt/stardog/ Data: /home/ssd/stardog |
|  | www.industrykg.com |  |
|  | [industryknowledgegraph.com](http://industryknowledgegraph.com) redirects to industrykg.com |  |
| 6100 | app.industrykg.com | /home/www/ikg/full/ |
|  |  |  |
| 8000 | Anzograph |  |
| 8001 | Zeppelin (for Anzograph) |  |
| 10035 | https://agraph.semanticarts.com:10035 | /usr/bin/agraph (we might change this) |

### Nginx

For issues getting things to work, beware [SELinux issues](https://www.nginx.com/blog/using-nginx-plus-with-selinux/).

For instance, SELinux restricts which ports nginx can connect/relay to.

A question for myself: does the firewall need to have the port open? Or, only for external access?

```
# List which ports NGINX can connect/relay to
sudo semanage port -l | grep http_port_t
http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000
pegasus_http_port_t            tcp      5988

# Add Allegrograph port to ports that NGINX (http_port_t) can relay to
sudo semanage port -a -t http_port_t -p tcp 10035
```

### uwsgi servers

Getting nginx to connect to uwsgi sockets on SELinux takes a few extra steps.

**Standard unix permissions**

I am running the uwsgi server (via systemctl) as user shrek (maybe there should be a uwsgi user? instead?)

[this didn’t fix the problem…] I added user shrek to the nginx group so that group permission can be used

sudo usermod -a -G shrek nginx

sudo usermod -a -G nginx shrek

[this didn’t fix the problem…] In the uwsgi config file set the gid=nginx (not sure if that is needed) and chmod-socket=660

**SELinux permissions**

I ran audit2allow and create a SELinux policy needed to let nginx access the socket. I put a copy in /home/shrek/SELinux

### Email

The OS default install included the postfix email server. I have not set it up yet so it probably doesn’t do anything.

### YUM Install History

```
sudo yum install epel-release
sudo yum install bind-utils
sudo yum install whois
sudo yum install net-tools
sudo yum install gcc
sudo yum install git
sudo yum install nginx
sudo yum install python2-certbot-nginx
sudo yum install python2-certbot-dns-digitalocean
sudo yum erase python2-certbot-dns-digitalocean
sudo yum install setools

sudo yum install python-virtualenv
sudo yum install python-pip
sudo yum install libcurl-devel

yum install build-essential
yum install java-1.8.0-openjdk
yum install stardog
```

<!-- section-nav:start -->

## In this section

- [Allegrograph on WALL-E](allegrograph-on-wall-e.md)
- [Firewall on WALL-E](firewall-on-wall-e.md)
- [Anzograph on WALL-E](anzograph-on-wall-e.md)
- [Setting up Services on WALL-E](setting-up-services-on-wall-e.md)

<!-- section-nav:end -->
