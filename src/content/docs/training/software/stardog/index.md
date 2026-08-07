---
title: "StarDog"
confluence_id: 8126467
source: "StarDog_8126467.html"
---
## 2016-03-2 Telecon with Kendal Clark & Steve Bastini

Had telecon with Kendal Clark, went through short 11 slide deck,much Q&A..

4.0 release in Oct ’15, now raising funds.

SPARQL 1.1. and property graph,

pure Java, very programmable fromany moder runtime, middleware, lots of architectural flexibility. Annual subscription model, not about CPUs or cores.

DMc: Scott has downloaded this and played a bit. Can we get it and do a PoC?

KC: yes, 3 versions of product.

1. Enterprise: production use, per node license.
2. Product developer: (way cheaper) as many machines as you like, use for anything BUT production, can download for free and can do two 30 day eval periods for free
3. Community: free to use always, some limitations

Enterprise DB, not academic research.

Unique value:

1. all OWL 2
2. rules (SWRL)
3. closed world reasoning (W3C trying to standardize this now, some differences )
4. explanations & repair plans (in some cases).

R2RML capability – can do SPARQL query evaluation under management or

LDAP

graph versioning, like git.

property graph graphs as well as SPARQL. TinkerPop is to property graphs as SPARQL is to RDF.

We do materialize sameAs, only way to do this. Not materialize anything else.

Virtual Graphs: seems similar to Capsenta offering.

Scalability: add nodes to cluster 10s of billions of triples on $10k server.

Reasoning: still hard to say much in general about scalability of reasoning. QL roughly as scalable as SPARQL. For EL, embed Elk (Elf?) for SnoMed, Pharma ontologies we have very good performance. Strategy is to delegate modeling patterns with commercial value to reasoners optimized for that, hide behind Stardog API.

Finance, healdh care, life sciences, media, power management

Roadmap:

- 4.1, faceted graph browser (Pelorus), lean solutions
- 4.2 HDFS backend (Hadoop), Stardocs
- 4.3-5.0 Hybrid, NLP, ML, semantic graph.

Interested in what we are doing at Schneider.

Q: have you hosted tens of billions of triples that we can play around with in some endpoint?

A: anybody is free to download and evaluate for 60 days. We publish every night comprehensive suite, publish in google spreadsheet every day.

Q: can we tailor reasoning?

A: can ask for OWL profile per query, plus new profile with everything including SWRL. There is unreleased version of Pellet 3.0, only for schema, only in memory.  Other reasoning is over secondary storage. Do not have ability to go finer granularity than the existing profiles. Some combinations are toxic regarding performance.

Q: rule syntax?

A: prettier than SWRL, added more builtins. Stopped paying attention to SHACL. For integrity constraints, you can write it in SWRL, SPARQL, OWL or our Stardog syntax. Still closed world.

Q: can you evaluate constraints at transaction time?

A: two ways. oracle mode (ask of any payload, are these value with respect to these rules – get yes/no answer). Also guard mode. If enabled cannot write dirty data.

Q: why not like SHACL?

A: not need to exist, just busy work. No reason to do this, we had constraints language in 2013, and anyway is terrible syntax. SWRL equally vile for similar reasons, nice semantics though, to be sure. TimB-L hates OWL, will not support it. I will be shocked if any clients askes for SHACL. We will do it if we need to.

Q: can you use prop graphs and SPARQL simultaneously, or separately?

A: not two separate worlds, we bring them together in maximal way. Not just integrated with reasoning, but with R2RML, integrity constraints, etc. Reduce it all to SPARQL querying. Difference between the two models very little, essentially the same. More difference between SPARQL and Gremlin. Latter not really a query language, is domain specific language embedded in a query. More procedural than SPARQL (good and bad).

Q: R2RML: how your offering compare to Capsenta’s? Direct competitor?

A: we are a DB, some overlap, [Kendal] thinks their main claim is a bit misleading. I think value of R2RML is the way we do it, make it appear to be part of the graph, rather than just make SPARQL go as fast as SQL (not very interesting acc. to Kendal).

Q: NLP on the horizon?

Q: how distinct from AG? Virtuoso?

## In this section

- [Getting Started with Stardog](/software/stardog/getting-started-with-stardog/)
