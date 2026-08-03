---
title: "Upgrading AllegroGraph0"
confluence_id: 1474646
source: Upgrading-AllegroGraph0_1474646.html
---

# Upgrading AllegroGraph0

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

<!-- section-nav:start -->

## In this section

- [Administering Allegrograph users](administering-allegrograph-users.md)

<!-- section-nav:end -->
