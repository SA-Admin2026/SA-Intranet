---
title: "Protege 5.x Nested Turtle Import Bug"
confluence_id: 775389187
source: "Protege-5.x-Nested-Turtle-Import-Bug_775389187.html"
---
Confirmed in Protege 5.2.0, and 5.5.0

# TL;DR

**Issue**: For files stored in RDF Turtle format, Protege does not correctly handle multiple levels of indirect import if you try to do the import by selecting a file from the file system. It only handles 1-level of import in this case.

**Workaround**: Multi-level import works if the Turtle ontologies are already loaded into the Protege workspace.

# Details

## Test Files

Attached.

[![](https://semarts.atlassian.net/wiki/download/thumbnails/775389187/orgs.ttl?version=1&modificationDate=1570720655278&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/775389187/775028755.ttl)[![](https://semarts.atlassian.net/wiki/download/thumbnails/775389187/myco.ttl?version=1&modificationDate=1570720655287&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/775389187/775028761.ttl)[![](https://semarts.atlassian.net/wiki/download/thumbnails/775389187/people.ttl?version=1&modificationDate=1570720655290&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/775389187/775028767.ttl)[![](https://semarts.atlassian.net/wiki/download/thumbnails/775389187/catalog-v001.xml?version=1&modificationDate=1570720649860&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/775389187/775847937.xml)

## Steps to reproduce:

Using the test files attached:

1. Start Protégé
2. File > Open..
3. Navigate to and open `myco.ttl`
4. Ontology Imports tab > Direct Imports > "+"
5. Select Import an ontology contained in a specific file
6. Click Continue
7. Browse to `orgs.ttl` file, click Open
8. Click Continue
9. On confirm imports window: OBSERVE that there are no ontologies that will be imported!
10. Click Finish
11. OBSERVE that no Direct imports exist. THIS IS THE BUG.
12. File > Open…
13. Click "No" in dialog
14. Navigate to and open `orgs.ttl`
15. OBSERVE that Direct Import works in case where there is only 1 level of import (orgs.ttl imports people.ttl)

## Steps for the Work Around

1. Start Protégé
2. File > Open… 'myco.ttl'
3. File > Open… 'orgs.ttl'
4. Click Yes in dialog (to open in the CURRENT WINDOW)
5. In top selector bar, Switch back to 'myco' ontology
6. Ontology Imports tab > Direct Imports > "+"
7. Select "Import an ontology that is already loaded in the workspace"
8. Select the orgs ontology, Continue, Finish
9. OBSERVE that the direct import works.

## A much easier workaround

I was startled to learn of this, I have been loading ontologies with chains of imports for 15 years, never had a problem. So I was curiuos. Here is what I do, it has always worked. Maybe the advice is: “Don’t import from within Protege”. Except for messing around and learning, I cannot think why this would ever be necessary.

1. Put import statements into the file that should import another ontology
2. Do this for all files, creating a import graph
3. Load the ontology that has import statements into Protege
4. All the ontology directly or indirectly are loaded into Protege.
5. FIBO has low 100s of files that do this, it has always worked just fine.
