---
title: "DigitalOcean"
confluence_id: 28049413
source: DigitalOcean_28049413.html
---
| Name | IP Address | Created | |
| --- | --- | --- | --- |
| ubuntu-status-server  512 MB / 20 GB Disk / SFO1 - Ubuntu LAMP on 14.04    Used to run <http://status.semanticarts.com> | 159.203.242.208 | Could not find that it was doing anything. Turned it off but didn't delete it yet.  Exists but some of the statuses say they have not been updated since 2016. Do we still need it? | |
| etim-demo  512 MB / 20 GB Disk / NYC3 - Ubuntu Django on 14.04    ETIM POC for Schneider - <http://etim.apps.semanticarts.com> | 104.236.94.187 | Exists. Wants a password to view. Do we still need it? | |
| data-centric-manifesto  1 GB / 30 GB Disk / NYC3 - Ubuntu Django on 14.04    The web server for <http://datacentricmanifesto.org> | 45.55.154.99 | Good as of 5/2019 | |
| sa-website  1 GB / 30 GB Disk / NYC3 - Ubuntu LAMP on 14.04  Our company website <https://semanticarts.com> | 104.131.101.103 | Old website? | |
| Nostromo | 138.197.209.189 | ?? Do we still need it?  nginx config: dnb-webvowl.semanticarts.com, emi-facet.semanticarts.com, nginx.semanticarts.com, sift.semanticarts.com, stardog.semanticarts.com, sunburst.semanticarts.com | |
| Covenant | 159.203.94.99 | ?? Do we still need it?  Nothing running on boot that I saw. Lots of docker images were being run with names like: queryviewer, dca, excel2rdf.  Has Dave's macbook air ssh public key on it. | |

# Domains

While most domains are managed at Enom. **DNS for the domains below (including all subdomains and email config stuff) are managed through the DigitalOcean admin page**. It provides a much cleaner, more robust interface and allowed us to have more A records than Enom.

- semanticarts.com
- semarts.com
- semanticarts.app
