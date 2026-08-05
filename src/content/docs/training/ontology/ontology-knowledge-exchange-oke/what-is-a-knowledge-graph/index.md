---
title: "What is a Knowledge Graph?"
confluence_id: 2381348868
source: "2381348868.html"
---

Followup Teams discussion from Ontology Knowledge Exchange meeting 2023-04-11.

> Mark W:
>
> What is a Knowledge Graph?
>
> • A graph representing a network of real-world entities and the relationships in between
>
> • Objects, events, situations, concepts
>
> • (Aka Semantic Network)
>
> • A graph-structured topology to integrate data
>
> • A directed, labeled graph in which the labels have well-defined meanings 3
>
> • Labels describe node type and edge type

![](/attachments/2381348868/2381348875.png)![](/attachments/2381348868/2381217821.png)

Discussion:

Rebecca:

> A couple of questions/comments:
>
> It would be good to bring LPG in for additional contrast. It sounds like an LPG is not a KG because the labels don't have well-defined meanings.
>
> Why is the KG a semantic network if it is not a semantic KG? Seems confusing.
>
> I think you mean "An RDF graph that uses AN OWL ontology as its schema." (I.e., an ontology based on OWL, not OWL itself)
>
> Do we want to say that only a graph built on an OWL ontology is a semantic KG? That is, there could be other languages that might be considered the basis of a Semantic KG. So maybe we need another layer: OWL Knowledge Graph?

Mark:

> Let me clarify that the slide shows 3 *different* definitions by 3 different parties of what a KG is.  My point to my audience being: not everyone agrees on the definition.  They are all similar, but not exactly saying same thing.
>
>  So I think LPGs would get a pass on definition 1 by IBM.  (Bullets 1 and 2 are IBM; I should make that more clear).
>
>  IBM says a KG is aka a Semantic Network, not me.  So they are using Semantic differently than in my later slide's definition.
>
>  Yes, I should say AN owl ontology, in fact that's a typo -- I thought AN was in there.  I'll fix that in my slide immediately.
>
>  For the "Semantic Knowledge Graph" (my invented term), the "Semantic" for me is *Semantic* Web (or *Semantic* Technology).   Which I then clarify as being RDF & OWL (minimally).

Danny:

> I think there are different levels of a knowledge graph. I think the wikipedia definition is all encompassing and the most general definition. An LPG and RDF are different ways to entail the knowledge in the graph (I assume there are other data models that exist to entail knowledge in a graph structure).
>
> If the labels in the LPG have a well-defined meaning, then it can be considered a semantic KG but with limitations like no ability to run a reasoner against it (well, maybe a proprietary reasoner could be created). That is, an LPG can have semantics but it doesn't seem like there are any standards to do so (I know little about LPG and its ecosystem, so please correct me if I am off base.)
>
> Similarly, an RDF graph with no use of RDFS and/or OWL contains little to no semantics. It's a KG using RDF but has limited semantics. An RDF graph using RDFS has more semantics and an RDF graph using an OWL ontology has even more.
>
> The KGs that Semantic Arts creates are semantic KGs using RDF with OWL.

Rebecca:

> Since there's no schema in an LPG, any "well-defined semantics" would be no more than an implicit understanding, which I wouldn't consider semantics.
>
>  How about a hierarchy from less to more specific along these lines:

![](/attachments/2381348868/2381250590.png)

# Consensus from Discussion on 2023-04-25

- We use the term “Semantic Knowledge Graph” to mean a (directed, labeled) graph based on formal semantics.
- We currently use OWL as the formal language, but this leaves open the possibility that we could use another language if a better one came along. (We wouldn’t express this to clients.)

## In this section

- [What are People Talking About When They Talk About Knowledge Graphs?](/ontology/ontology-knowledge-exchange-oke/what-is-a-knowledge-graph/what-are-people-talking-about-when-they-talk-about-knowledge-graphs/)
