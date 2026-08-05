---
title: "LLMs and Knowledge Graphs"
confluence_id: 2428567557
source: "LLMs-and-Knowledge-Graphs_2428567557.html"
---

I’ve been in a few sales calls now (and I’m sure this is happening with clients) that bring up the idea of large language models and how what we do can intersect.

I’m not sure if this is a good blog topic or just something for internal discussion, but my goal is to get feedback as to the intersections of our work, and what knowledge graphs can do to support, augment, limit, etc. large language models.

I’m going to start a list, but please add/remove or comment. I’m over my head on much of the technical descriptions in these articles, so appreciate correction where I’ve interpreted incorrectly.

## Extracting triples from unstructured text (with ontology prompt)

<https://www.linkedin.com/pulse/llm-ontology-prompting-knowledge-graph-extraction-peter-lawrence/>

## LLMs can be enriched with structured data

Reference: [Harnessing the Power of Knowledge Graphs: Enriching an LLM with Structured Data | by Steve Hedden | Jul, 2023 | Towards Data Science](https://towardsdatascience.com/harnessing-the-power-of-knowledge-graphs-enriching-an-llm-with-structured-data-997fabc62386)

LLMs excel in the area of unstructured data, while knowledge graphs excel with structured data. LLMs derive their answers in a “black box” and can struggle with factual knowledge, while a KG is a collection of facts, fully interpretable and verifiable.

Results on this are mixed thus far, but one promising option may be to gain insight into unstructured information *within* structured data (a column of notes with unstructured text for instance)

## Populating a Graph from an LLM

Reference: [How to use large language models and knowledge graphs to manage enterprise data | VentureBeat](https://venturebeat.com/ai/how-to-use-large-language-models-and-knowledge-graphs-to-manage-enterprise-data/)

Utilizing an ontology, build a text prompt for the LLM to create a query to populate the database.

An LLM can also be used as an intermediate layer, taking natural language inputs and helping to create queries (which, as we know is not that great)

## LLM as a Knowledge Graph Store

Reference: [Large Language Model = Knowledge Graph Store? Yes, by Fine-Tuning LLM With KG | by Peter Lawrence, answering users' data questions | Better Programming](https://betterprogramming.pub/large-language-model-knowledge-graph-store-yes-by-fine-tuning-llm-with-kg-f88b556959e6)

In theory, an LLM can be tuned by training data from a graph, but in reality this would be a huge cost (gathering, cleaning, preparing material).

## Graphs to tame LLMS

Reference: [Superpowers of Knowledge Graphs, part 3: Taming Unruly Language Models | LinkedIn](https://www.linkedin.com/pulse/superpowers-knowledge-graphs-part-3-taming-unruly-mike-dillinger-phd%3FtrackingId=odo1u5y8%252BWuJF05PAiyLaA%253D%253D/?trackingId=odo1u5y8%2BWuJF05PAiyLaA%3D%3D)

KGs provide adult supervision to improve behavior of LLM systems

LLMS cannot replace graphs, but can help us build them better

Ideas:

- Add graphs to the training inputs
- Model-Building, Analysis and fine tuning
- Guardrails: KG constraints to test outputs against
- Evaluate: Fact checking LLMs

Interesting note from this article: prompt engineering assumes an LLM is complete, accurate, and relevant…which we know isn’t true. Focus must remain on building better LLMS, then how to query them.

One other article from Kurt Cagle I couldn’t even get through: [ChatGPT (LLMs) vs. Knowledge Graphs - The Cagle Report](https://thecaglereport.com/2023/03/24/chatgpt-llms-vs-knowledge-graphs/)

## In this section

- [Untitled whiteboard 2026-05-22 (2)](/ai-usage/llms-and-knowledge-graphs/untitled-whiteboard-2026-05-22-2/)
- [Untitled whiteboard 2026-05-22 (3)](/ai-usage/llms-and-knowledge-graphs/untitled-whiteboard-2026-05-22-3/)
- [Untitled whiteboard 2026-05-22](/ai-usage/llms-and-knowledge-graphs/untitled-whiteboard-2026-05-22/)
