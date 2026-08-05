---
title: "HAL"
confluence_id: 25460740
source: HAL_25460740.html
---

# HAL

## 74.93.230.113 (from outside)

192.168.2.38 (from inside)

## HAL Accounts

**semartsdev** - this is the root account and the account responsible for allegrograph.

**monolith** - this is the production app account.  This is where all apps hosted on HAL live.

The rest are user accounts.

## Backups and Logs

Backups and logs on the /media/hdd disk.  It's a separate spinning disk.  Database data and app files go on the main SSD disk.

## Uploading data for agraph server loading

Connect to the **semartsdev** account either with an sftp client to drag and drop, or **scp** to the semartsdev account. To do this, your ssh key must be in semartsdev's authorized\_keys file.

## TODO

- Eventually you should rewrite the startup scripts on HAL (spinemup.sh and all the individual init scripts) to use a process manager like suporvisord or upstart. This would get us a couple things -- the ability to automagically restart failed processes if we want and the ability to [remotely start these deatched processes with Fabric](http://www.fabfile.org/faq.html#why-can-t-i-run-programs-in-the-background-with-it-makes-fabric-hang).

<!-- section-nav:start -->

## In this section

- [Getting a new version of DCA on HAL](getting-a-new-version-of-dca-on-hal.md)
- [Moving Files from Mac to HAL](moving-files-from-mac-to-hal.md)
- [SSH Access into HAL-9000](ssh-access-into-hal-9000.md)
- [DCA & Slow Reveal deployment](dca-slow-reveal-deployment.md)
- [Starting AllegroGraph and iBeam](starting-allegrograph-and-ibeam.md)
- [Old (out-of-date) Stuff](old-out-of-date-stuff/README.md)
- [Updating AllegroGraph](updating-allegrograph/README.md)

<!-- section-nav:end -->
