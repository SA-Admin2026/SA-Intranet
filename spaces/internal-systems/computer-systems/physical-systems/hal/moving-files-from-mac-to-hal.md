---
title: "Moving Files from Mac to HAL"
confluence_id: 544342017
source: Moving-Files-from-Mac-to-HAL_544342017.html
---

# Moving Files from Mac to HAL

To get files to HAL

1. try scp
2. the main.js didn't go, so then try this:
3. On mac / system pref / sharing
   1. To unlock the sharing page need admin password
   2. Turn on remote logging
4. On the ssh into HAL  (note the mac IP is under network preferences)
   1. scp davemccomb@10.0.1.45:/users/davemccomb/Documents/Staging/main.js ./
