---
title: "Restarting HAL"
confluence_id: 1474656
source: Restarting-HAL_1474656.html
---

# Restarting HAL

### Start AllegroGraph

1. Log into the semartsdev account with the password Eva2001:
2. Type '. virt\_env/main/bin/activate'
3. Type 'sh ~/Scripts/sh/startServer.sh'
4. Logout

### Start Ibeam

1. Log into the monolith account with the password 'Galaxy2001:'
   1. ssh monolith@74.93.230.113
2. Type '. virt\_env/production/bin/activate'
3. Type 'sh ~/Scripts/sh/spinmeup.sh'
   1. press enter when done

### Start/restart nginx

1. Log into semartsdev for sudo
2. Type 'sudo service nginx restart'
3. When it prompts you for the PEM passphrase, enter '7diplo22!'
