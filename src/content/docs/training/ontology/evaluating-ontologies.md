---
title: "Evaluating Ontologies"
confluence_id: 669712446
source: "Evaluating-Ontologies_669712446.html"
---
## From [*Ontology Evaluation*](https://link.springer.com/chapter/10.1007/978-3-540-92673-3_13) by Denny Vrandecic

- Accuracy (p. 38)
  - Do the axioms comply to the expertise of one or more users (p. 17)?
  - Does the ontology correctly capture and represent aspects of the real world (p. 38)?
- Adaptability (p. 38)
  - Does the ontology anticipate its uses?
  - Does it offer a conceptual foundation for a range of anticipated tasks?
  - Can the ontology be extended and specialized monotonically, i.e., without the need to remove axioms?
  - How does the ontology react to small changes in the axioms (p. 19)?
  - Does the ontology comply to procedures for extension, integration, and adaptation (p. 17)? (also named expandability and sensitiveness by (19), extendability by (22), and flexibility by (17).
- Clarity (p. 22)
  - Does the ontology communicate effectively the intended meaning of the defined terms?
  - Are the definitions objective and independent of context?
  - Does the ontology use definitions or partial descriptions?
  - Are the definitions documented?
  - Is the ontology understandable (also named cognitive ergonomics, transparency (p. 17), and intelligiblity (p. 38).
- Completeness (p. 19) / Competency (p. 23)
  - Is the domain of interest appropriately covered?
  - Are competency questions defined?
  - Can the ontology answer them?
  - Does the ontology include all relevant concepts and their lexical representations (also called richness and granularity (p. 38)
- Computational efficiency (p. 17, 38)
  - How easy and successful can reasoners process the ontology?
  - How fast can the usual reasoning services (satisfiability, instance classification, querying, etc.) be applied to the ontology?
- Conciseness
  - Does the ontology include irrelevant axioms with regard to the domain to be covered (e.g., a book ontology includes axioms about African lions)? Does it include redundant axioms?
  - Does it impose a minimal ontological commitment (p. 22), e.g., does it specify the weakest theory possible and define only essential terms?
  - How weak are the assumptions regarding the ontology's underlying philosophical theory about reality (p. 38)?
- Consistency / Coherence (p. 22)
  - Do the axioms lead to contradictions (i.e., is there logical consistency)?
  - Are the formal and informal descriptions of the ontology consistent, (e.g, does the documentation match the specification)?
  - Does the translation from the knowledge level to the encoding show a minimal encoding bias?
  - Are any representation choices made purely for the convenience of notation or implementation (p. 22)?
    - Covers also meta-level integrity, [e.g., following ordering principles (p. 17) like OntoClean (see chapter, "An Overview of OntoClean")].
- Organizational Fitness (17) / Commercial Accessibility
  - Is the ontology easily deployed within the organization?
  - Do ontology-based tools within the organization put constraints upon the ontology?
  - Was the proper process for creating the ontology used?
  - Was it certified, if required?
  - Does it meet legal requirements?
  - Is it easy to access?
  - Does it align to other ontologies already in use?
  - Is it well-shared among potential stakeholders?

## Evaluation of Upper Ontologies (Stefano)

- Evaluation of the designer's ontological choices versus evaluation of the state of the ontology
- Evaluation of the relationship between ontological choices and actual axiomatization
- Evaluation of the relationship between the axiomatizations of the UO in different formal languages
- Evaluation with regard to some use versus evaluation as an upper ontology per se
- Evaluation of the use of ontological machinery (e.g., part-hood, inheritance, persistence, property, role)
- Evaluation of the constraints imposed on and the flexibility with regard to domain notions
- Evaluation of the ontology versus evaluation of the populated ontology

## Barry's List of How to Evaluate a General Ontology

- The quality of the documentation of the ontology - should address experts, different users, end users, etc.
- Versioning, then use data to measure statistically the quality of the ontology
- Frequency of updates
- Community support of ontology
- Number of users
- Efficiency comparable to CMMI maturity model
