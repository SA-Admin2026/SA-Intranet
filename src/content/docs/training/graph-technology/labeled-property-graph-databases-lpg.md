---
title: "Labeled Property Graph Databases (LPG)"
confluence_id: 3013410820
source: "3013410820.html"
---
### Vendors (examples)

- Neo4J
- AWS Neptune
- TigerGraph
- Memgraph

### Modeling approach

Rather than focusing on knowledge representation, LPGs follow a schema-less approach limited to minimalistic modeling using simple labels. Focus is on getting data for a specific use case into a graph for analytics.

Types of modeling elements:

- Node type labels - names of kinds of things
- Relationship type labels - names of kinds of relationships between things
- Property key labels - names of kinds of associations with literal values

Identifiers are internal to the graph database and have no meaning outside of it.

### Problems this type of graph database is designed to solve

- Fast traversal and search of very high-volume graph data.
- Well-adapted for many graph algorithms, such as PageRank, Centrality, clique analysis, weighted path finding, etc.
- Many platforms support array and binary vector node attributes, which makes them a good choice for ML algorithms that require node-local embeddings.
- LPGs support Gremlin Query Language that is very imperative (as opposed to the sparse, declarative nature of SPARQL), and frequently extendable with custom functions and accumulators. This generally improves the performance of traversals on high-volume data. Taking advantage of these optimizations requires skilled GQL programming expertise.
