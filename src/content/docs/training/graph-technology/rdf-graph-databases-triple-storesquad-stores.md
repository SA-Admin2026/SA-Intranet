---
title: "RDF Graph Databases (Triple stores/Quad stores)"
confluence_id: 3013541900
source: "3013541900.html"
---

### Vendors (examples)

- Allegrograph - Franz Inc
- GraphDB - Graphwise (Ontotext)
- Neptune - AWS
- RDFox
- StarDog
- Virtuoso - <https://virtuoso.openlinksw.com/>, supposedly they have an open source version.
- Fluree
- Marklogic (more of a document store, not very W3C Standards compliant)

### Open Source (examples)

- Apache Jena - <https://jena.apache.org/>
- Eclipse RDF4J
- qEndpoint - [GitHub - the-qa-company/qEndpoint](https://github.com/the-qa-company/qEndpoint)
- QLever - [GitHub - ad-freiburg/qlever](https://github.com/ad-freiburg/qlever)

### Modeling approach

RDF Graph Databases use widely adopted World Wide Web Consortium (W3C) open standards for rich knowledge representation:

- OWL, RDF, and RDFS - to define ontologies - toolkits of modeling elements reusable enterprise-wide:

  - classes - kinds of things,
  - properties - kinds or relationships between things or between things and literal values,
  - axioms - generalized knowledge about classes and properties;
- SHACL - to define rules that enterprise data must conform to in order to be used in a specific information system.

In addition to the relationships between concepts, W3C open standards enable us to define shared meaning of the modeling elements through:

- text definitions,
- various labels,
- and formally defined semantics using axioms, such as:

  - Subclass relationship - all things of this kind are also of that kind
  - Subproperty relationship - all relationships of this kind are also of that kind
  - Class equivalence - if a thing and its relationships match a specified pattern then the thing is of this kind
  - Property domain - if a relationship is of this kind then its subject is of that kind
  - Property range - if a relationship is of this kind then its object is of that kind
  - etc.

Reasoning engines, often included with RDF graph databases, use axioms to infer new relationships that are not captured in the database explicitly, but are true due to the logical consistency of the ontology.

Meaning of the modeling elements captured in the ontology provides validated training material for natural language querying.

Any thing that can be reused is defined by a globally unique identifier - Internationalized Resource Identifier (IRI) - preserving the meaning of the thing within and outside of the graph database to prevent duplication of information across systems. Everything known about a thing is associated with its IRI.

Controlled terminologies, whose elements are represented by IRIs, can be managed in a single place and reused across the enterprise.

Data from different enterprise systems or sources represented in RDF graph databases using the shared flexible and extensible enterprise ontology are inherently integrated due to SPARQL query federation capability.

Many public datasets and resources are available in RDF format, ready for easy integration with enterprise data represented using W3C open standards. Examples: UniProt, DBpedia, GeoNames.

Using W3C open standards for knowledge and data representation protects from vendor software lock-in and allows your enterprise knowledge and data remain portable and outlive any tooling changes.

[W3C Standards and their value](https://semarts.atlassian.net/wiki/spaces/SD/pages/3033464845/W3C+Standards+and+their+value)

### Problems this type of graph database is designed to solve

Proprietary and public data integration / interoperability / harmonization.

Development of modeling elements reusable enterprise-wide.

Creation of single sources of truth reusable enterprise-wide.

Enterprise knowledge capture - building consensus around the meaning and definitions of business-relevant concepts and relationships between them.

Democratization of access to information:

- querying with SPARQL - an intuitive declarative language not requiring much programming expertise;
- natural language querying - facilitated by meaning of the data captured in the ontology.
