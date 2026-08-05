---
title: "Metric: Consistency - Assessment Checklist"
confluence_id: 1007157266
source: "1007157266.html"
---

***Table of Contents***

- [Assignment](#Metric:Consistency-AssessmentChecklist-Assignment)
- [Evaluation (by others)](#Metric:Consistency-AssessmentChecklist-Evaluation(byothers))
- [Checklist](#Metric:Consistency-AssessmentChecklist-Checklist)
- [Automated Tests](#Metric:Consistency-AssessmentChecklist-AutomatedTests)
  - [Structural/Stylistic Consistency](#Metric:Consistency-AssessmentChecklist-Structural/StylisticConsistency)

# Assignment

1. Reduce the assessment to a one-page checklist.
2. It may refer to scripts.
3. It should be clear and unambiguous enough for someone else to execute.

# Evaluation (by others)

1. Do you think you could follow these instructions?
2. Do you think these will measure what we are trying to measure?

# Checklist

See [Metric: Consistency](/ontology-quality-metrics/metric-consistency/) for the meaning of each criterion.

1. ***Logical consistency:*** Run an OWL-DL reasoner over the ontology and check to see whether there are any errors.  Also check for unsatisfiable classes that are equivalent to owl:Nothing or unusable properties that are equivalent to owl:BottomObjectProperty.
2. ***Modeling (design) consistency:*** Through manual inspection, find where the following concepts show up in the ontology to see that they are modeled the same way throughout. Look for any other examples of concepts in the ontology. Examples:

   1. **Identifiers**: Identifiers are always either classes or properties - e.g., hasSSN or SSN subclass of Identifier.
   2. **Categories**: For example, for gist, check that only gist:Category is used (subclassed), never skos:Concept.
3. ***Consistent level of granularity/abstraction:***Through manual inspection, examine the inferred hierarchy to see whether there are any examples of two sibling classes at very different levels of granularity/abstraction. Negative example: if the parent class is PhysicalObject, and two different direct subclasses are Vehicle and ThreeInchLongBolt.
4. ***Balance.*** TBD
5. ***Axiom-to-annotation consistency:***Through manual inspection, check to see whether the annotations (human-readable semantics) are semantically aligned with the axioms (machine-readable semantics).
6. ***Structural/Stylistic consistency:***Through a combination of manual inspection, SHACL, SPARQL, or scripting, ensure that :

   1. The same family of annotations are used throughout the ontology for the same purpose.

      1. If skos: definition is used at all, it should be used everywhere, not intermixed with, e.g., rdfs:comment.
      2. If skos:prefLabel is used at all, it should be used everywhere, not intermixed with, e.g., rdfs:label.
      3. Use the same convention for indicating examples and other kind of annotations.
   2. Apply camel casing conventions consistently.
   3. Use a consistent pattern for minting instances.
   4. Use only hash or only slash URIs.
   5. Naming conventions for a collection of ontology modules logically comprising a single ontology.
   6. Language tags are always used or never used.
   7. Are there consistent grammatical patterns for labels and local names for classes and properties – noun, verb, tense, singular/plural, sentence case vs title case?
   8. Are there consistent grammatical patterns for defining classes and for defining properties? For the latter, how is the subject related to the object?
7. ***Semantic redundancy:***For a given situation, the ontology either includes or does not include redundant assertions which can be deduced by a reasoner. This is not about assessing whether the redundancy is a good idea or not – it’s generally good to avoid, but there are times when it is sensible choice. This exercise is only about whether the (good or bad) choices were executed consistently. Each situation is likely amenable to automation via SPARQL or SHACL to find issues. Different situations where the redundancy choice exists include:

   1. adding both sides of an inverse
   2. typing a property as inverse functional when it is the inverse of a functional property
   3. redundant disjoints
   4. redundant imports

# Automated Tests

Most of the proposed metrics, and in fact the most interesting ones, require manual inspection. Only a few are amenable to automated testing: logical consistency, structural/stylistic consistency, and (to some extent) modeling consistency and semantic redundancy. See [Metric:Consistency - Automated Tests](/ontology-quality-metrics/metric-consistency/metricconsistency---automated-tests/) .

## Structural/Stylistic Consistency

See [Metric:Consistency - Automated Tests](/ontology-quality-metrics/metric-consistency/metricconsistency---automated-tests/) .
