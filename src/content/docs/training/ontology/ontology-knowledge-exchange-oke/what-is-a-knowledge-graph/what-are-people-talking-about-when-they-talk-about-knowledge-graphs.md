---
title: "What are People Talking About When They Talk About Knowledge Graphs?"
confluence_id: 2385838088
source: "2385838088.html"
---
Blog post

Suggestions in red by JT.

**Suggestions** in turquoise by Rebecca

**Suggestions** in this colour (sic!) by Peter

Words are fascinating.  We use them as one of our means to communicate, but the can end up being the biggest source of misunderstanding.  The Brit who is in the US and wants some biscuits with his cup of tea is perplexed when faced with a plate of scones covered in gravy.  A recent Scientific American article [1] points to similar confusion with words like “penguin.”  So, what are we to make of this term “Knowledge Graph”?  It certainly isn’t like the graphs we were using at high school.  So, what is a “Knowledge Graph”? Semantic Arts deals with meaning and representation. They should know. Let’s ask them.

~~What is a knowledge graph?~~ We get asked that question all the time. There is no one right answer, and our thinking on it is evolving.

Let’s dissect the term and see if we can get some clarity. Starting with the “graph” bit. It’s not a “graph” in the high school sense of points plotted on X and Y coordinates, but it refers to a “directed labeled graph.” That is a mouthful, but it is simple to explain, particularly if we start with an everyday example. When looking at a family tree, each person is separated out and joined to others with lines that have a direction and a label. That is, the lines have an origin and a destination. As we talk through the family tree we use patterns such as “Susie is married to Derek,” “Derek and Susie have a daughter named Clare,” and so on. In these patterns, “married to” and “has daughter” and “is named” would be the labels on the lines. The people are nodes in a network of directed relationships. We can speak to the relationships that are presented in the family tree, and we can infer other relationships, such as “is the uncle of” using rules that we know from our natural language. So this is what the “graph” part refers to - a set of nodes and directed relationships. But notice, the rules of inferring relationships such as “is the uncle of” are not present in the family tree. These come from our implicit understanding of families and the words and phrases we use to describe the relationships we are interested in. Some of these relationships, such as “second cousin once removed” can be rather technical.[2]

Let’s see where we get to with the “knowledge” part. Well, we all know what “knowledge” is, don’t we? Yet when you ask a London cabbie about “the knowledge,” that is a very specific term relating to knowing the roads of London [3] so that they (and their fares) can be assured of finding the fastest way from the London Eye to Euston Station. Of course, “knowledge” here has a specific and technical meaning. Perhaps this is also the case for the “knowledge graph.” Well, it is a term introduced by Google in 2012, [4] where they suggested that we would have less ambiguity in search if we moved from “strings to things,” that is, from labels to persistent identifiers. The Alan Turing Institute present knowledge graphs as a way to “encode knowledge to use at scale in open, evolving, decentralized systems,” and suggest that knowledge graphs “organize data from multiple sources, capture information about entities of interest in a given domain or task (like people, places or events), and forge connections between them.” [5]

So knowledge graphs really are like the family trees and the taxi driver’s “the knowledge” - they are structures based on things (not strings) and relationships that are directed (origin to destination) that can be used to arrange information in a way that connects everything together. The corollary being that we can then either follow the thread of connections Ariadne-style to see what is connected to what, and how, or else query to extract what we might call a sub-graph.

If only things were so simple! As with the penguins in the SciAm article, the reality of knowledge graphs is much more complex. So let’s see what the Semantic Arts take on the term is.

On a basic level, a knowledge graph is an information representing a network of real-world entities and the relationships between them. This may include objects, events, situations and concepts.

To take that a step further, according to this [overview paper](https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/19119/18891) [6], a knowledge graph (KG) is “a directed labeled graph in which domain-specific meanings are associated with nodes and edges. A node could represent any real-world entity, for example, people, companies, and computers. An edge label captures the relationship of interest between the two nodes.”

Anything that anyone is likely to call a knowledge graph will match this definition.  But some people regard this definition as too weak, and they use the term ‘knowledge graph’ only when, other things are true, such as using formal semantics to specify the meaning of the nodes and edges.  Such people will tend not to use the term KG if the meaning is specified much less formally, as it is for a property graph.

~~This post does not attempt to come up with yet another definition and propose that it is any better than any other; rather, we aim to answer the question:~~ *What are people talking about when they talk about a knowledge graph*?  The answer always includes: “a directed labeled graph in which domain-specific meanings are associated with nodes and edges.”, but we are aware that there are ~~This article highlights some of the~~ dimensions of variation that give rise to different flavors of knowledge graphs.  For example,

- Representing semantics

  - How is it represented?
  - How formal is it?
- Use and role of schema
- Support for reasoning
- Integrity checking (e.g., SHACL)

In seeking to define more clearly, we looked at what turns out to be a hierarchy of graph data stores (listed from most to least inclusive)

~~There is a hierarchy of graph data stores from most to least inclusive:~~

- Graph: a data store consisting of nodes and (directed or undirected) edges.

  - Directed graph: a graph containing only directed edges, but the edges have no label or meaning.
  - Labeled graph: a graph containing only labeled edges, but without any direction.

    - Directed, labeled graph: a graph with labeled and directed edges.

      - Knowledge graph (KG): a directed, labeled graph with meanings attached to the edges.

        - Labeled property graph (LPG): a labeled, directed graph without a schema. (Some definitions of *knowledge graph* do not consider an LPG a knowledge graph.)
        - Semantic knowledge graph: a KG with a schema (i.e., formal semantics). This is a term original to Semantic Arts. At Semantic Arts we use schemas formulated in OWL (Web Ontology Language), but we do not preclude the possibility of semantic knowledge graphs based on other semantic schema languages. In addition to providing formal semantics to the edges, a semantic knowledge graph defines classes that nodes representing particular objects instantiate.

![](/attachments/2385838088/2385903636.png)

[Next up - I think that we need to say something about why we think that this is ‘better’ than the other approaches. I think we can talk about the rich definition being something done once, but it allows degraded forms (e.g. plain CSV) to be derived easily if that is what is needed for an application, but the semantic richness allows for the widest possible approaches to querying, and also gives the best chances of unambiguous merging with other information sources]

Would we maybe want to close by defining a few reasons we feel strongly about semantic knowledge graphs vs others? This maybe goes against the earlier statement: “This post does not attempt to come up with yet another definition and propose that it is any better than any other; rather, we aim to answer the question…” but may provide some clarity about why we think the distinction is important…

[1] <https://www.scientificamerican.com/article/people-differ-widely-in-their-understanding-of-even-a-simple-concept-such-as-the-word-penguin1/>

[2] <https://www.familysearch.org/en/blog/what-is-a-second-cousin>

[3] <https://tfl.gov.uk/info-for/taxis-and-private-hire/licensing/learn-the-knowledge-of-london>

[4] <https://blog.google/products/search/introducing-knowledge-graph-things-not/>

[5] <https://www.turing.ac.uk/research/interest-groups/knowledge-graphs>

[6] <https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/19119/18891>
