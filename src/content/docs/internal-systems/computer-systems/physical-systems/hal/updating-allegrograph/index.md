---
title: "Updating AllegroGraph"
confluence_id: 676888586
source: Updating-AllegroGraph_676888586.html
---

# Updating AllegroGraph

**Current Version**: 7.0.3

**Server**: HAL-9000

**Directory Location**: /home/semartsdev/Programs/AG-current/ (a symbolic link to the directory of the currently active version)

Replace all **square brackets** inside commands:

```
Command:  AG-[oldVersion]
Typed:    AG-6.4.5

Command:  agraph-[newVersion]-linuxamd64.64.tar.gz
Typed:    agraph-6.4.6-linuxamd64.64.tar.gz
```

• [SSH Access into HAL-9000](../ssh-access-into-hal-9000.md)

## Download and unpack the .tar of the newest version

1. SSH/log into the **semartsdev** user:

   ```
   ssh semartsdev@192.168.2.38
   ```
2. Download the .tar by *either*

   1. Bash Terminal:

      ```
      cd ~/Programs/
      curl -O [linkURL]
      ```
   2. Download directly on the computer using a browser; Move file into **Programs** directory
3. Unpack the **.tar** file

   1. Bash Terminal:

      ```
      cd ~/Programs/
      tar -xzf agraph-[newVersion]-linuxamd64.64.tar.gz
      ```
   2. This will unpack into a directory named **[agVersion]**; You can delete the **.tar** file after this

## Install and migrate AllegroGraph

1. Install the newest version of AllegroGraph

   1. Bash Terminal:

      ```
      cd ~/Programs/
      agraph-[newVersion]/install-agraph AG-[newVersion]
      ```
   2. Answer all prompted questions
   3. After completed, you will have a new directory named **AG-[newVersion]**; You can delete the **agraph-[newVersion]** directory after this
2. Copy the current **agraph.cfg** file into the newer AllegroGraph folder

   1. Bash Terminal:

      ```
      cp ~/Programs/AG-[oldVersion]/lib/agraph.cfg ~/Programs/AG-[newVersion]/lib/agraph.cfg
      ```
   2. Edit the agraph.cfg file and update everywhere that has the 'oldVersion' and replace with the 'newVersion', these are (mostly?) all directory paths.
3. Copy the SSL certificate from the old directory to the new one

   ```
   cp ~/Programs/AG-current/data/agraph-ssl.pem ~/Programs/AG-[newVersion]/data/
   ```
4. Backup the databases using the current version of AllegroGraph (w/ current server running)

   1. Bash Terminal (Do NOT overwrite any existing directories):

      ```
      cd ~/Programs/
      agtool archive backup-all AGBU-[oldVersion]
      ```
5. Stop the old server

   ```
   ~/Programs/stop.bash
   ```
6. **I think this can be ignored now that I have created new scripts ~/Programs/\*.bash** - Change the Script file for starting AllegroGraph

   1. Open **startServer.sh** file in nano/vim/(any text editor):

      ```
      nano ~/Scripts/sh/startServer.sh
      vim ~/Scripts/sh/startServer.sh
      ```
   2. Inside **startServer.sh**, ONLY comment out the script for starting the current server:

      ```
      # Stop AllegroGraph
      # -----------------
      /home/semartsdev/Programs/AG-[oldVersion]/bin/agraph-control --config /home/semartsdev/Programs/AG-[oldVersion]/lib/agraph.cfg stop

      # Start AllegroGraph
      # ------------------
      #/home/semartsdev/Programs/AG-[oldVersion]/bin/agraph-control --config /home/semartsdev/Programs/AG-[oldVersion]/lib/agraph.cfg start
      ```
   3. Run the script to stop the current version of AllegroGraph:

      ```
      sh ~/Scripts/sh/startServer.sh
      ```
   4. Add the newer server scripts to **startServer.sh**; Comment out the script for stopping the current server:

      ```
      # Stop AllegroGraph
      # -----------------
      #/home/semartsdev/Programs/AG-[oldVersion]/bin/agraph-control --config /home/semartsdev/Programs/AG-[oldVersion]/lib/agraph.cfg stop
      /home/semartsdev/Programs/AG-[newVersion]/bin/agraph-control --config /home/semartsdev/Programs/AG-[newVersion]/lib/agraph.cfg stop

      # Start AllegroGraph
      # ------------------
      #/home/semartsdev/Programs/AG-[oldVersion]/bin/agraph-control --config /home/semartsdev/Programs/AG-[oldVersion]/lib/agraph.cfg start
      /home/semartsdev/Programs/AG-[newVersion]/bin/agraph-control --config /home/semartsdev/Programs/AG-[newVersion]/lib/agraph.cfg start
      ```
   5. Start the newer version of AllegroGraph:

      ```
      sh ~/Scripts/sh/startServer.sh
      ```
7. Migrate the older version of AllegroGraph to the newer version (w/ new server running)

   1. Change the AG-current link to point to the new server

      ```
      cd ~/Programs/
      rm AG-current
      ln -s ./AG-[newVersion]/ ./AG-current/
      ```
   2. Start the new server then restore databases

      ```
      cd ~/Programs/
      ./agstart.bash
      agtool archive restore-all --supersede AGBU-[oldVersion]
      ```

<!-- section-nav:start -->

## In this section

- [Allegrograph - Copy Repository](allegrograph---copy-repository.md)
- [Allegrograph - bulk load from command line](allegrograph---bulk-load-from-command-line.md)
- [AllegroGraph restore database/repository from backup](allegrograph-restore-databaserepository-from-backup.md)
- [Updating Gruff (on an Agraph server)](updating-gruff-on-an-agraph-server.md)

<!-- section-nav:end -->
