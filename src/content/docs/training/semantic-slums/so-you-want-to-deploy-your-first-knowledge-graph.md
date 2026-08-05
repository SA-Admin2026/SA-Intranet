---
title: "So you want to deploy your first knowledge graph?"
confluence_id: 1494024193
source: "1494024193.html"
---

This is a cheat sheet I used for an informal interview on the KGC Knowledge Espresso series on December 17. 2020.

### **Advertised Summary**:

*You’ve heard enough, you see the value of knowledge graphs and you want one. But what do you do first? What do you do after that? What kind of thinking about the longer term do you need to do up front?  We talk about the whole process of building, deploying and maintaining production systems based on knowledge graphs.*

I sent the interviewer (Ellie) a list of questions and gave brief bullets for each to use as a cheat sheet reproduced below. We got through all but the last question.

[Link to recording](https://conference.knowledgegraph.tech/Title/94038a8e-e088-4106-b8ef-32a5a1fad6a0)

### **Cheat sheet**

*What is the first thing to do in the overall process of creating and deploying solutions driven by knowledge graphs*?

·        Think big, start small

·        Have a clear overall vision

·        Have clear scope for first project

·        Have a sense of where you might go after that.

*What are the various phases of a project, from start to deployment?*

·        Define initial scope

·        Identify sources of data

·        Identify preliminary CQs

·        Build ontology

o   Think long term, build covering concepts for the larger scope

o   Flesh out details

·        Create and load data into a triple store

·        Write SPARQL to answer initial CQs

o   Validate what you know already

o   Show new possibilities

·        Build applications

o   Add to existing

o   From scratch

·        Evolve and extend

*What do you put in place so that the deployed system can be maintained and evolve successfully.*

·        SemOps

·        Change management

o   Refactor with care!

o   Semantic versioning

o   Manage dependencies & downstream impacts

·        Create and follow conventions

·        Quality control – hygiene queries, SHACL / SPARQL

·        Automation - data pipelines

*What skills do I need to have on the team to ensure success?*

·        Ontology engineering, SPARQL & SHACL

·        Semantic software architecture

·        Developers

*What are some common pitfalls to avoid?*

·        Semantic silos

·        Not agreeing on conventions up front

*How do I convince nay-sayers that it is important to have a solid ontology to use as the basis for the knowledge graph?*

·        The ontology establishes common agreement

·        Avoids downstream headaches – technical debt

·        Time spent developing the ontology is relatively small
