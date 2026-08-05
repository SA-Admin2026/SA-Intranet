---
title: "Ontology Engineering Best Practices"
confluence_id: 2423914497
source: "Ontology-Engineering-Best-Practices_2423914497.html"
---

- [Baseline Assumptions](#OntologyEngineeringBestPractices-BaselineAssumptions)
- [Cardinality](#OntologyEngineeringBestPractices-Cardinality)
- [Imports](#OntologyEngineeringBestPractices-Imports)

# Baseline Assumptions

1. All SA-built ontologies will be OWL DL-compliant.
2. Keep SHACL out of the ontology because it takes you out of OWL DL.
3. If the semantics you care about can be represented in OWL DL, then do represent the semantics in OWL DL.
4. Important semantic information that cannot be expressed in OWL DL should be documented in an annotation.
5. Only put axioms in the ontology if they express the semantics of the concept, independent of the data.

   1. Consequence: never use min 0 restrictions; they have no semantics at all.
6. Use SHACL for representing data constraints.
7. Use stub definitions for terms used from an external ontology which is not imported (e.g., SKOS annotations), in order to maintain DL compliance.

# Cardinality

1. To express the semantics of a minimum cardinality restriction which uses the number 1, always use `owl:someValuesFrom` rather than minimum cardinality.  In particular, use `owl:someValuesFrom` rather than the logically equivalent `minQualifiedCardinality 1`, and use `owl:someValuesFrom owl:Thing` rather than the logically equivalent `minCardinality 1`.
2. To express the semantics of a cardinality restriction which uses a number N greater than 1 use `minCardinality` N or `minQualifiedCardinality` N.

# Imports

For every term that is referenced in an ontology but is not in that ontology, there should be a direct import of the ontology that does define that term, rather than relying on transitivity of import. This is a maintenance issue. Consider the following:

1. Ontology A imports ontology B but not C.
2. Ontology B imports ontology C.
3. Ontology A uses a term `:Foo` that is in ontology C but not B, relying on the indirect import through B.
4. The maintainer of ontology C removes the term `:Foo`.
5. Because there is no explicit dependency on ontology C, the maintainer of ontology A might not know about this change.
6. It is easier for an ontology maintainer to track direct imports than to track possibly long transitive chains of imports.
