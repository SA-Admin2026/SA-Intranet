---
title: "Allegrograph on WALL-E"
confluence_id: 777060382
source: Allegrograph-on-WALL-E_777060382.html
---

# Allegrograph on WALL-E

Installed as a RPM package.

This is different than how it was installed on HAL. Do not use the HAL instructions on WALL-E. A problem with this method is that it does not allow us to have 2 versions running so we can’t install a new version to test while keeping the old version running.

## Basics

Config file: `/etc/agraph/agraph.cfg`

Data files & settings: `/home/ssd/agraph`

Log files: `/var/log/agraph`

Port: `10035`

Run as user: `agraph`

NOTE: even though the systemcatalog directory is in the agraph.cfg file, it doesn’t seem to like it if you just move the directory and point to it with the config file. If you want to move the systemcatalog directory it looks like you should start with the configuration script to start a new setup (save your old config file first) and specify the directory that way.

Allegrograph SuperUser account: `super / @SA4rdf@` \* this may change after restoring the settings from HAL

Check status: `sudo systemctl status agraph.service`

Start AllegroGraph by running: `sudo systemctl start agraph.service`

Stop AllegroGraph by running: `` `sudo systemctl stop agraph.service` ``

## Command line tools

It seems that `agtool` wants to be run by the same user that the server runs as. So to restore the databases I had to do this:

```
sudo su agraph
agtool archive restore-all ./upgrade-backup/
```

## SSL

I’ve started trying to set up Allegrograph to use SSL but it isn’t complete.

IMPORTANT: Refer to the [SSL Renewals page](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/747077637) for info on the SSL certificates and how to update and install them.

I’ve tried to set up port 10036 for SSL. That includes having the site firewall (Meraki) forward it to WALL-E, opening the port on [server firewall](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/777027683/Firewall+on+WALL-E), and configuring Allegrograph at `/etc/agraph/agraph.cfg`.

## SELinux

Not sure if this was required but I made all the files in the data/ directory have similar SELinux settings with commands like this:

```
sudo chcon -R -v --user=system_u /home/ssd/agraph/data/
```

## Commands I’ve used to get things done

```
# restore settings (user accounts)
# Needed to use "sudo" but that cause at least one file in
# /home/ssd/agraph/data/settings/user/ to have different permissions
sudo agtool archive restore-settings --config /etc/agraph/agraph.cfg upgrade-backup
```

## Updating versions (highlights)

1. ? Download new RPM file
2. Disable access to Allegrograph so no one can make changes to data during the process.

   1. A good way to do that is to change the server port number in the config file and restart it. That stops access from nginx and direct access to port 10035 (which a lot of our apps like iBeam use).
3. Backup all databases
4. Shutdown allegrograph
5. Install new version from RPM file
6. Verify config file is correct
7. Start allegrograph service
8. Restore all databases
9. Verify things are working and data is restored
10. Re-Enable access to Allegrograph

### Update WALL-E to AG 7.0.1 on June 25, 2020

1. First, disable access

   1. sudo rm /etc/nginx/sites-enabled/agraph.conf
   2. sudo nginx -s reload
2. Backup existing data & users

   1. sudo su - agraph
   2. cd /home/ssd/
   3. agtool archive backup-all --config /etc/agraph/agraph.cfg agbackup >& output.txt
   4. exit
3. Update Allegrograph

   1. sudo systemctl stop agraph
   2. sudo yum install <https://franz.com/ftp/pri/acl/ag/ag7.0.1/linuxamd64.64/agraph-7.0.1-1.x86_64.rpm>
   3. sudo systemctl start agraph
   4. sudo systemctl status agraph
   5. ps -ef | grep AG
4. Restore databases

   1. sudo su - agraph
   2. cd /home/ssd/
   3. agtool archive --supersede restore-all --config /etc/agraph/agraph.cfg ./agbackup/ >& output-restore.txt
   4. exit
5. Restart Allegrograph

   1. sudo systemctl stop agraph
   2. sudo systemctl start agraph
   3. sudo systemctl status agraph
   4. sudo ps -ef | grep AG
6. Re-enable access

   1. cd /etc/nginx/sites-enabled/
   2. sudo ln -s ../sites-available/agraph.conf agraph.conf
   3. sudo nginx -s reload
7. Test that it works

   1. Currently it seems to be at: https://[agraph2.semanticarts.com](http://agraph2.semanticarts.com)
