---
title: "Firewall on WALL-E"
confluence_id: 777027683
source: Firewall-on-WALL-E_777027683.html
---

# Firewall on WALL-E

The system has a firewall installed on it called “firewalld”. Here are some resources:

- [How to configure firewall | DigitalOcean](https://www.digitalocean.com/community/tutorials/additional-recommended-steps-for-new-centos-7-servers)
- [Introduction to FirewallD on CentOS | Linode](https://www.linode.com/docs/security/firewalls/introduction-to-firewalld-on-centos/)
- [FirewallD Official Site](http://www.firewalld.org/)
- [RHEL 7 Security Guide: Introduction to FirewallD](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Security_Guide/sec-Using_Firewalls.html#sec-Introduction_to_firewalld)
- [Fedora Wiki: FirewallD](https://fedoraproject.org/wiki/FirewallD)

## Configuration

Things that need to be allowed (everything else should not be allowed):

- Incoming ssh. (what about outgoing ssh?)
- Incoming http (port 80) and https (port 443). Handled by Nginx. Should outgoing be allowed?
- Future: outgoing smtp (email)

Rules to support various software:

```
# Allegrograph (10035 = SSL/TLS, 10036 internal use)
sudo firewall-cmd --permanent --add-port=10035/tcp
sudo firewall-cmd --permanent --add-port=10036/tcp
# Allegrograph transaction ports
sudo firewall-cmd --permanent --add-port=40000-40080/tcp

# Anzograph database test setup and Zeppelin
sudo firewall-cmd --permanent --add-port=8000/tcp # Anzograph database docker
sudo firewall-cmd --permanent --add-port=8001/tcp # Zeppelin notebook docker

sudo firewall-cmd --reload
```

## Useful commands

```
sudo systemctl enable firewalld
sudo systemctl start firewalld
sudo firewall-cmd --reload

sudo firewall-cmd --permanent --list-all # Show permanent rules
sudo firewall-cmd --list-all # Show current rules (including non-permanent rules)

sudo firewall-cmd --permanent --add-port=8000/tcp # Add permenant rule to allow port 8000
sudo firewall-cmd --add-port=8000/tcp # Add temporary rule to allow port 8000
sudo firewall-cmd --remove-port=40100/tcp # remove rule for port 40100

sudo firewall-cmd --permanent --add-service=ssh # Add permanent rule to allow ssh on the standard port
```
