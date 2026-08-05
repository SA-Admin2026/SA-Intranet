---
title: "PROV-O & TriG"
confluence_id: 524058626
source: "524058626.html"
---

## W3C Standards Information

- [PROV Overview](https://www.w3.org/TR/prov-overview/) (adds provenance info)
- [TRiG Overview](https://www.w3.org/TR/trig/) (adds named graphs to triples; it's like Turtle with optional named graphs)
- [N-Quads](https://www.w3.org/TR/n-quads/.) (NQuads are like NTriples with optional names graphs)

## Proposal for Using PROV-O & TRiG at Semantic Arts

From Dave McComb:

I’ve been doing some experiments, and think we should switch over to TRiG and PROV-O as soon as convenient. Attached is a simple TRiG file that loads a very simple shape to a database.

ng\_1 is “named graph 1” obviously we’d have to generate or hand craft a different NG for each load.

As you can see I can put the NG in its own NG (why not?, makes it easy to completely clean up when you want to drop a NG. ) When you load to AllegroGraph, you don’t have to supply the context (I didn’t try what would happen if you did)

I’ve added a bit of representative PROV-O assertions to the named graph, so they will now apply to any triple in this NG.

### Sample File

[![](https://semarts.atlassian.net/wiki/download/thumbnails/524058626/dcaoShacl-sample3.trig?version=1&modificationDate=1535670674225&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/524058626/524812292.trig)

Note: line 28 should end with DTPShape\_002**a**

### Integrating with e6

- Can we modify e6 to export .ttl files?
- Michael Uschold recommends using FIBO RDF toolkit serializer as the way e6 exports, it has a turtle option
- Michael also suggested adding rdfs:isDefinedBy annotations to every concept so when they move around the annotation goes with
- Mark Ouska will look at Excel2RDF code to see how easy it would be to add to ???
- Mark Ousks also noted that a potentially more challenging change, inspired by MS Risk, is to change consolidating multiple illegal characters into multiple underscores, e.g. one underscore for each. At present if there are two or more  in a row, our code consolidates them into a single underscore. The triples MS are generating are creating URIs with the multiple underscores (one per, rather than consolidating many into one). I haven’t looked at this code yet, but am guessing it could be pretty tricky and will certainly change both the URIs and data we mint.

## TRiG versus N-Quads

From Mark Wallace:

They serialize same RDF, but address different needs (just like Turtle vs. NTriples).  The needs are: terseness + human readability vs. line oriented raw triples (simpler parsing for machines).

- NQuads has no qualified names, and each triple / quad gets its own line.
- TriG is more terse, and definitions can span file lines.

### N-Quad

![](/attachments/524058626/524976132.png)

### TRiG

###
