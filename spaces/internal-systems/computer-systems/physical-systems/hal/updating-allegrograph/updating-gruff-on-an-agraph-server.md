---
title: "Updating Gruff (on an Agraph server)"
confluence_id: 2133491713
source: 2133491713.html
---

# Updating Gruff (on an Agraph server)

Gruff is release independently of the Allegrograph database, on it’s own schedule. We deploy/deliver gruff as a web app through the AG Webview front end. To update the latest version you have to download it to the server, install it, and activate the new version, before Webview will use it.

- On HAL, log in as `semartsdev` and `cd ~/Programs`
- I went to the source and downloaded the tarball. I had to provide my name & email to get the download. This page seems to have the links (2021-08-10) <https://franz.com/agraph/gruff/download/index.clp>
- `cd AG-current`
- `bin/agtool gruff install --from-tarball ../gruff-8.0.6-AG7.1.0-linuxamd64.64-ACL10.1.tar.gz 8.0.6`
- `bin/agtool gruff set-active 8.0.6`
- To verify that it is ready: `bin/agtool gruff list installed`
