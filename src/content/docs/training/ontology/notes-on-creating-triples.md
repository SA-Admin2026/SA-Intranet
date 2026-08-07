---
title: "Notes on creating triples"
confluence_id: 39583746
source: "Notes-on-creating-triples_39583746.html"
---
I got an odd error, when I generated triples from a script.  I had triples that used a gist property (gist:categorizedBy for one).  I imported gist, but didn't redeclare this to be an object property in my ontology.

The behavior I got was it was declared to be a annotation in addition to being an object property.  For most views the annotation trumped.

On experimenting what I discovered was that the object of the triple had not be expressly typed, and at least on one pass the system assumed it to be a string and coerced the property to be an annotation.  Even though elsewhere, and or later, it concluded that the object was a uri.

Fix: make sure all the uris that are minted are typed.
