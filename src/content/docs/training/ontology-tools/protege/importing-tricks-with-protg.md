---
title: "Importing Tricks with Protégé"
confluence_id: 3407960
source: "3407960.html"
---

Here is an easy way to find a large number of imported ontologies.

Open Protégé

Open the ontology you want to load. If it cannot find files, just keep clicking NO, do not go find the file.  There may be an option that mean skip over.

IMPORTANT: close the ontology and then open it up again.

DO: File > Edit active ontology library

A window will pop up, mine looks like this:

![](/attachments/3407960/3407956.png)

Click the left most icon at upper left.       

![](/attachments/3407960/3407957.png)

This window pops up:

![](/attachments/3407960/3407958.png)

Select FolderRepository Tab on left.

Click Browse and browse to the top level directory where the ontologies are.

Click the box for Recursive search subdirectories. It should look like this:

![](/attachments/3407960/3407959.png)

The full URL in this case is below.

D:\SEMANTIC-ARTS\NAS\ClientsAndPartners\EDM Council\FIBO FCT project spring 2015\Ontologies

Click OK.

Save the ontology (not sure if this matters, but it might ensure the connection of the ontology to this setting)

Exit protégé, and come back again.

Then open up any ontology anywhere underneath that folder and it should load.

For the mother of all tests, try it out on FIBO. Open the file: AboutBE-1.0.rdf in the folder:

d:\SEMANTIC-ARTS\NAS\ClientsAndPartners\EDM Council\FIBO FCT project spring 2015\Ontologies\FIBO-git-7July15\be\

I was amazed that it worked first time.

If it does NOT work the first time, you may have to do it 1 or 2 more times, on a complex set of folders like FIBO.

Supersititions:

1. do not open directly from the file, open Protégé and load the file from in Protégé
