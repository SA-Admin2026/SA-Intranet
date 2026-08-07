---
title: "Usage Patterns and Examples for gist"
confluence_id: 2440986629
source: "Usage-Patterns-and-Examples-for-gist_2440986629.html"
---
[![](https://semarts.atlassian.net/wiki/download/thumbnails/2440986629/OntologyExamples.pptx?version=2&modificationDate=1695162544369&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/2440986629/2441117697.pptx)

Michael presented an earlier versin of the above deck. Examples of examples are included in the new [operators-ontology](https://github.com/semanticarts/operators-ontology) git repo. Decisions to be made include:

1. Should examples all go into a separate folder called ‘examples’?
2. What documentation to be included, e.g. screenshots, .docx or .pptx files?

   1. .png ok.
   2. avoid proprietary formats, maybe just use markdown or just comment or annotations in the .ttl file
   3. align with <https://gist-doc.semanticarts.com/>
   4. maybe have separate repo for gist documentation
3. Should triple patterns be in a different file, since they are not part of the example per se?

   1. separate file for triple patterns, include in repo but NOT in release
   2. better yet, automatically generate the diagram showing the triple patterns which may or may not need to have triple patterns in a turtle file.
4. Convention for naming files. E.g.

   1. examplesOrderedCollections.ttl
   2. examplesCategories.ttl
5. Should we use ex: namespaces for all new TBox and ABox triples?

   1. Yes
6. Should the examples be ontologies that import gist, or just a bunch of triples?

   1. don’t import
7. For stand-alone ontologies that are independent of gist, should we use IRIs in the gist namespace or use the same local names in the ex: namespace
