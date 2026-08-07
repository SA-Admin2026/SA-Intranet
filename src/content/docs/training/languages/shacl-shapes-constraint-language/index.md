---
title: "SHACL (Shapes Constraint Language)"
confluence_id: 519733251
source: "519733251.html"
---
Shapes Constraint Language (SHACL) is a language for validating RDF graphs against a set of conditions. These conditions are provided as shapes and other constructs expressed in the form of an RDF graph. RDF graphs that are used in this manner are called "shapes graphs" in SHACL and the RDF graphs that are validated against a shapes graph are called "data graphs". As SHACL shape graphs are used to validate that data graphs satisfy a set of conditions they can also be viewed as a description of the data graphs that do satisfy these conditions. Such descriptions may be used for a variety of purposes beside validation, including user interface building, code generation and data integration.

## Technical Specifications

- [W3C Recommendation](https://www.w3.org/TR/shacl/)

## Resources

- [SHACL Playground](http://shacl.org/playground/)
- [TopQuadrant's SHACL tutorial](https://www.topquadrant.com/technology/shacl/tutorial/)

## Semantic Arts Materials

- Y:\\_SemanticArts\TechnicalAndResearchResources\\_\_SemanticRelatedResearch\\_SHACL
- Y:\\_SemanticArts\TechnicalAndResearchResources\\_\_SemanticRelatedResearch\\_SHACL\DCA Functional Requirements for Constraints -(MJO).pptx
  - I made some minor updates to this deck
    - added numbers to the functional requirements
    - carried those numbers through to the slides covering each requirement
    - added my own comment in response to MarkW's response
- <https://github.com/semanticarts/shacl-validator> - a tool to test your SHACL rules, either with local files or a SPARQL endpoint. Supports the entire SHACL standard by utilizing TopQuadrant's [shacl-js](https://github.com/TopQuadrant/shacl-js) package, but loads both the rules and the data into memory, so size is inherently limited.
- <https://github.com/semanticarts/shacl-validator/tree/master/queries> - apply SHACL validation directly to a triple store via a series of queries. Each query produces an [RDF graph of violations](https://www.w3.org/TR/shacl/#results-validation-result) as a result, or an empty graph for valid RDF. The following subset of SHACL is supported:  
  - [Closed class](https://www.w3.org/TR/shacl/#ClosedConstraintComponent)
  - [Max count](https://www.w3.org/TR/shacl/#MaxCountConstraintComponent)
  - [Min count](https://www.w3.org/TR/shacl/#MinCountConstraintComponent)
  - [Node kind](https://www.w3.org/TR/shacl/#NodeKindConstraintComponent)
  - [Property class](https://www.w3.org/TR/shacl/#ClassConstraintComponent)
  - [Property datatype](https://www.w3.org/TR/shacl/#DatatypeConstraintComponent)
  - [Value pattern](https://www.w3.org/TR/shacl/#PatternConstraintComponent)

## Readings

- Spahiu, Blerina, et al. (2008). Towards Improving the Quality of Knowledge Graphs with Data-Driven Ontology Patterns and SHACL <http://ceur-ws.org/Vol-2195/research_paper_2.pdf>

## In this section

- [SHACL via SPARQL Query](/languages/shacl-shapes-constraint-language/shacl-via-sparql-query/)
