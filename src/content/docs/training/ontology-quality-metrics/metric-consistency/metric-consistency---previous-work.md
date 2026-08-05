---
title: "Metric: Consistency - Previous Work"
confluence_id: 1230340104
source: "1230340104.html"
---

- [Denny’s Ph.D. Thesis](#Metric:Consistency-PreviousWork-Denny’sPh.D.Thesis)
  - [Some comments:](#Metric:Consistency-PreviousWork-Somecomments:)
- [Others cited by Denny](#Metric:Consistency-PreviousWork-OtherscitedbyDenny)
  - [Asunción Gómez-Pérez](#Metric:Consistency-PreviousWork-AsunciónGómez-Pérez)
  - [Thomas Gruber](#Metric:Consistency-PreviousWork-ThomasGruber)

## Denny’s Ph.D. Thesis

Consistency describes that the ontology does not include or allow for any contradictions. Whereas accuracy states the compliance of the ontology with an external source, consistency states that the ontology itself can be interpreted at all. Logical consistency is just one part of it, but also the formal and informal descriptions in the ontology should be consistent, i.e. the documentation and comments should be aligned with the axioms. Further ordering principles can be defined that the ontology has to be consistent with, such as the OntoClean constraints on the taxonomy (Guarino and Welty, 2002).

Note that within this thesis we will deal with logical consistency and coherence only superficially. There is an active research community in the area of ontology debugging ,that covers discovering, explaining, and repairing errors that lead to inconsistency and incoherence, see for example (Parsia et al., 2005; Lam, 2007; Haase and Qi, 2007).An example for a non-logical inconsistency is the description of the element ex:Jaguar being “The Jaguar is a feral cat living in the jungle.”, but having a logical axiom ClassAssertion(ex:Carmanufacturer ex:Jaguar). Such discrepancies are often the result of distributed ontology engineering or a badly implemented change management procedures in ontology maintenance.

The following methods in this thesis can be used to measure consistency:

- Method 3: Hash vs slash (Page 71),
- Method 4: Opaqueness of URIs (Page 73),
- Method 5: URI reuse (Page 74),
- Method 9: Labels and comments (Page 81),
- Method 12: Structural metrics in practice (Page 101),
- Method 13: Querying for anti-patterns (Page 114),
- Method 14: Analysis and Examples (Page 125),
- Method 16: Language completeness (Page 141),
- Method 21: Affirming derived knowledge (Page 157),
- Method 22: Expressive consistency checks (Page 160), and
- Method 23: Consistency checking with rules (Page 161).

### Some comments:

1. Many of the recommendations Denny relates to consistency do not, in my opinion. E.g., whether to use hash or slash namespaces is not a matter of consistency; *applying* the decision consistently is. This distinction was made above.
2. I agree with many, but not all, Denny’s rules for URI structure, but as in 1 ( don’t think this is a matter of consistency.

## Others cited by Denny

### Asunción Gómez-Pérez

…both the logical consistency (i.e. no contradictions can be inferred) and the consistency between the formal and the informal descriptions (i.e. the comments and the formal descriptions match).

### Thomas Gruber

Coherence: Inferred statements should be correct. At the least, the defining axioms should be logically consistent. Also, the natural language documentation should be coherent with the formal statements.

(Even though called “coherence,” this looks like consistency.)
