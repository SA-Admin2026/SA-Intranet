---
title: "RDF Reification vs. mscore:ComplexRelationship & gist:TemporalRelation"
confluence_id: 1160216595
source: "1160216595.html"
---
At MorganStanley (MS) we created a superclass of TemporalRelation for instances of turning any relationship between two things into a separate thing. An instance of ComplexRelationship attaches an IRI to the fact of something being in a relationship with something else. An important example as MS the relationship that says a particular risk is a concern in a particular process. We created a class called ProcessRisk for this. There are two generic properties:

- hasRelSubject points from the complex relationship instance to the subject of the reified property (e.g. a risk)
- hasRelObject points from the complex relationship instance to the object of the reified property (e.g. a process)
- there is an annotation property that I often use that points to the property being reified. But that was always optional, for information only. In this case it might be isPotentialRiskFor

But this is structurally identical to [RDF Reification](https://www.w3.org/TR/rdf-primer/#reification) which gives an arbitrary triple an IRI. There is a class called rdf:Statement whose instances have three properties:

- rdf:subject points to the subject of the triple
- rdf:object points to the object of the triple
- rdf:predicate points to the property of the triple

The questions is: what’s the difference?

These are a few initial thoughts.

There is one syntactic difference that to stay in OWL DL we could not use rdf:predicate, since its values are not OWL individuals. But I think there is a more fundamental difference.

A triple is a syntactic artifact with out any semantics per se. There is not a lot to say about a triple other than what its subject, predicate and object are and some provenance information, such as maybe:

- date inserted into the triple store
- weight indicating importance
- level of confidence/certainty in the truth of the assertion

The date asserted into a store is not unique. The same exact triple might be asserted into many stores at many different times for many different applications.

A (mscore) complex relationship (and so also, a gist:TemporalRelation) is a real semantic thing, more than just a syntactic artifact. Examples we have seen with our clients are many and varied. A simple one is reifying the employs property linking an organization to a person. This has semantic meaning, it has a start date that has nothing to do with when the triple was asserted. It has an attached employment contract, say and any number of other things.

Another example is a patient having a condition. Say I have a sore throat. But this is temporal. I have a sore throat for a period of time, it has a degree of intensity, etc. I can say all this and more about my having had a sore throat. I can say who I got it from, for example. It makes no sense to talk about the intensity of a triple.

So this is my intuition

- RDF reification is about turning a syntactic artifact into a thing. There is not a lot you can say about a triple, per se, and what you can say about it is largely independent from the subject domain.
- reifying a relationship is something that has semantic import. You can relate a reified relationship to things in the domain of interest beyond merely the subject, predicate and object.

This is probably why it never occurred to me to use RDF reification but I frequently use(d) reified relationships (mscore:ComplexRelationship and gist:TemporalRelation)
