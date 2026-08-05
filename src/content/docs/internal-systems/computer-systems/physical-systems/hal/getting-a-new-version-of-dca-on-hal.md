---
title: "Getting a new version of DCA on HAL"
confluence_id: 532938756
source: Getting-a-new-version-of-DCA-on-HAL_532938756.html
---

# Getting a new version of DCA on HAL

Easiest way (for Dave) is to get the files to Mac where I have a certificate that allows me to write to HAL.  You may have to do something more involved.

1. Copy the new server files to the Mac
2. copy the files to the server
3. > scp Documents/Staging/\*.py monolith@192.168.2.38:/home/monolith/Development/data-centric-architecture
4. log in to HAL
5. > ssh monolith@192.168.2.38
6. get to the data-centric-architecture directory (only if you need to delete some files and/or make sure the ones you just uploaded are there)
7. > cd Development/data-centric-architecture
8. right now the driving file is dca.py if that changes, go to the shell script for data-centric-architecture and change dca to the new driving file
9. > cd Scripts/sh
10. > nano data-centric-architecture.sh
11. then restart everything (there are several versions of spinemup.sh you want the on in teh Scripts/sh directory
12. > ./ spinemup.sh
13. get in your browser and go to dca.semanticarts.com   (right now there is a hello world)
