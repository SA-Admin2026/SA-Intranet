---
title: "Proposal to abandon use of 'TBox' and 'ABox'"
confluence_id: 2330689675
source: "Proposal-to-abandon-use-of-%27TBox%27-and-%27ABox%27_2330689675.html"
---

If you want to say something, you **A**ssert it, for example, Dave is a Person and the CEO of Semantic Arts. You need some kind of language to make such assertions, and languages contain **T**erms. In the land of ontologies and triples, assertions comprise the **A**Box and terms comprise the **T**Box. This is the origin of the terms, ABox and TBox.

The idea was that the ontology was the TBox and the data (often called the knowledge base) was the ABox. The problem with this is that you need to make assertions to create an ontology, e.g. Monkey is a subclass of Primate, so the idea of assertion does not distinguish ABox from TBox. But it gets worse, the idea of a term also does not distinguish ABox from TBox. Let's see why.

To make assertions while creating the ontology one needs terms from OWL, such as rdfs:subClassOf, owl:Class and rdf:type. So from this perspective the ontology is the ABox and the TBox is OWL itself. Very confusing - which makes it hard to teach.

Semantic Arts introduced a third box, the CBox for taxonomic **c**ategories. Categories are also terms, but we use TBox to exclude the categories. So all in all the terms TBox and ABox are ambiguous at multiple levels. Although we still speak of TBox and ABox in conversation and in training materials, what we do on the ground is bake these three levels into namespaces that make no mention of TBox or CBox or ABox.

- [https://**ontologies**.semancarts.com/gist/](https://ontologies.semancarts.com/gist/) (the TBox)
- [https://**taxonomies**.semanticarts.com/gist/](https://taxonomies.semanticarts.com/gist/) (the CBox)
- [https://**data**.semanticarts.com/gist/](https://data.semanticarts.com/gist/) (the ABox)

Summary:

- the idea of an assertion does not distinguish ABox from TBox
- the idea of a term does not distinguish ABox from TBox
- the idea of a term does not distinguish TBox from CBox

I propose that we stop using the terms TBox and ABox in all of our written materials except for in passing references for historical interest. If we like the boxy terms, we could instead use OBox, CBox and DBox which directly echoes what we in fact do internally and for our clients.

A couple years ago, I asked Dean Allemang about this - I was happy to learn that he long ago had stopped using those confusing boxy terms.

Terms to make such assertions such as Dave is the CEO of Sme . i
