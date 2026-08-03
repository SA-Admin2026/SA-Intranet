---
title: "Upgrading AllegroGraph"
confluence_id: 950365
source: Upgrading-AllegroGraph_950365.html
---

# Upgrading AllegroGraph

1. Login to semartsdev
2. Backup by copying:
   1. ```
      /home/semartsdev/Programs/agraph<old-version>/data
      ```
   2. ```
      /home/semartsdev/Programs/agraph<old-version>/lib/agraph.cfg
      ```
3. Backup by Agraph script: (This is necessary to restore data into newer version without issues)

   1. ```
      /home/semartsdev/Programs/agraph<old-version>/bin/agraph-backup --port 10035 backup-all <backup-directory>
      ```
4. Install new version: install script from AG source bundle, making sure to install in /home/semartsdev/Programs/agraph<version>/
   1. During the installation the script will configure agraph by asking for input, refer agraph.cfg for answers
   2. Copy the commands the installer script gives at the end
5. Stop the current instance: By running the command in /home/semartsdev/Scripts/sh/startServer.sh
6. Edit the new agraph.cfg file and copy the following from the old one:
   1. License
   2. Catalog(s)
      1. Make sure you edit the location of the catalogs to refer new agraph
7. Start the new version by running the command the installer gave you in step 4b
8. Restore by Agraph script:
   1. ```
      /home/semartsdev/Programs/agraph<new-version>/bin/agraph-backup --port 10035 restore-all <backup-directory>
      ```
9. Edit the /home/semartsdev/Scripts/sh/startServer.sh file and replace the old commands with new ones from step 4b.
10. Log into ibeam and AllegroGraph and make sure everything is working.

AllegroGraaph Upgrade Guide

# [AllegroGraph Upgrade Guide](http://franz.com/agraph/support/documentation/current/upgrade-guide.html)

---

**Upgrading AllegroGraph**

1. Back up repositories you want to keep by exporting to nquads
   1. it's helpful to note which catalog they came from since that isn't maintained in the dump
   2. **Make sure you back up the system>meta repo**
2. Save queries you want to keep by copying them into text files and/or by backing up the user files in semartsdev/Programs/agraph/data/settings/user
3. Back up namespace definitions file. They will be stored in a file at …/<catalog>/<repo>/data/namespaces/<username>.
4. Run install script from AG source bundle, making sure to install in Programs/agraph
5. Redefine your catalogs in agraph.cfg (or whatever you called the config file). The basic definition for named catalog is below. You may need to create the data directory for the catalog by hand.
6. Start allegro with the command the installer gave you in step 4.
7. Log in and recreate the repos you need in each catalog. Once the repo is created, upload the .nq file to reimport the RDF. If it's a large file (maybe 50MB+?) you may have better luck uploading the file to the server and then going the "add from server" route.
8. Either recreate namespaces by hand or copy the namespace files from step 3 into the same location.
9. Log into ibeam and make sure everything is working

**An example catalog definition:**   
 <Catalog ibeam-catalog>  
 Main /home/semartsdev/Programs/agraph/data/ibeam-catalog  
 InstanceTimeout 10  
 </Catalog>   
 \*An example namespaces file:\*   
 (("temp" "http://ontologies.semanticarts.com/temporal#")  
 ("sa" "http://ontologies.semanticarts.com/SemArts#")  
 ("bp" "http://ontologies.semanticarts.com/backplane#")  
 ("gist" "http://ontologies.semanticarts.com/gist#")  
 ("dc" "http://purl.org/dc/elements/1.1/")  
 ("dcterms" "http://purl.org/dc/terms/")  
 ("err" "http://www.w3.org/2005/xqt-errors#")  
 ("fn" "http://www.w3.org/2005/xpath-functions#")  
 ("foaf" "http://xmlns.com/foaf/0.1/")  
 ("fti" "http://franz.com/ns/allegrograph/2.2/textindex/")  
 ("owl" "http://www.w3.org/2002/07/owl#")  
 ("rdf" "http://www.w3.org/1999/02/22-rdf-syntax-ns#")  
 ("rdfs" "http://www.w3.org/2000/01/rdf-schema#")  
 ("skos" "http://www.w3.org/2004/02/skos/core#")  
 ("xs" "http://www.w3.org/2001/XMLSchema#")  
 ("xsd" "http://www.w3.org/2001/XMLSchema#"))
