---
title: "Materializing Triples"
confluence_id: 60325928
source: "Materializing-Triples_60325928.html"
---
When saving out materialized triples from Protégé, there are some choice points.

1. which inference engine to use
2. which inferences to save out
3. what to include that is already asserted

# Which inference engine to use

Pellet seems to take a very long time both to run inference, and also to materialize the inferred triples. Use Hermit instead. [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) did some experiments on the agileTC ontologies and Hermit took only a few seconds to infer, Pellet took 10 or so minutes.  To materialize everything other than disjoints after running Hermit took just a few seconds, I never got that far after running Pellet.

# Which inferences to save out

The first window you will see is this, with about half of the boxes selected

![](/attachments/60325928/76382232.png)

We like to **select them all**, because can make use of them in Theseus etc. But sometimes including the disjoint axioms can take a very long time, so you might need to skip them.

# What to include that is already asserted

Sleuthing by [AndiE (Unlicensed)](https://semarts.atlassian.net/wiki/people/557058:5e5c1946-535e-453c-b93e-2f7bcf35b1cf?ref=confluence).

I would recommend saving out just the inferred axioms to their own file. Then upload that inferred triples file along with your other regular ontology files. In other words, on the second screen of “Export inferred axioms as ontology” I would leave the boxes **UN**checked:

![](/attachments/60325928/60457000.png)

I  recommend this because when trying to save out both inferred and asserted axioms to one file I actually lost some of the asserted axioms (on properties at the very least) using both Hermit and Pellet. Specifically, any time we have defined a property, but it’s definition does not include at least one of - domain, range, inverse or some other characteristic like “Transitive” (or is itself the inverse) – both Hermit and Pellet are stripping the rdf:type declaration from the property.

 While I generally know when it is doing it, I don’t know why – if it is related to e6 or Protégé or the reasoners themselves.
