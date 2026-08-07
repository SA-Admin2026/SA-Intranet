---
title: "Metric: Consistency"
confluence_id: 868679690
source: "868679690.html"
---
*Michael Uschold and Rebecca Younes*

***Child Pages***

- [Metric: Consistency - Assessment Checklist](/ontology-quality-metrics/metric-consistency/metric-consistency---assessment-checklist/)
- [Metric:Consistency - Automated Tests](/ontology-quality-metrics/metric-consistency/metricconsistency---automated-tests/)
- [Metric: Consistency - Previous Work](/ontology-quality-metrics/metric-consistency/metric-consistency---previous-work/)

***Table of Contents***

- [What does consistency mean?](#Metric:Consistency-Whatdoesconsistencymean?)
  - [Types of consistency](#Metric:Consistency-Typesofconsistency)
  - [Out of Scope](#Metric:Consistency-OutofScope)
    - [External consistency](#Metric:Consistency-Externalconsistency)
    - [Standardized deliverables](#Metric:Consistency-Standardizeddeliverables)
- [Why is consistency important?](#Metric:Consistency-Whyisconsistencyimportant?)
- [Methods for assessing consistency](#Metric:Consistency-Methodsforassessingconsistency)
- [Consistency tests on gist](#Metric:Consistency-Consistencytestsongist)
  - [Test results](#Metric:Consistency-Testresults)
- [Previous work](#Metric:Consistency-Previouswork)

# What does consistency mean?

Aside from logical consistency (below), two things are involved in implementing an ontology consistently: (a) a pattern, principle, or convention must be defined, and (b) the defined pattern, principle, or convention is applied consistently. Here we are concerned only with (b); i.e., not *which* patterns, principles, and conventions are adopted (some of this will derive from work on the other metrics), but whether they are applied consistently.

## Types of consistency

There are different ways that an ontology can be regarded as consistent.  These include:

1. ***Logical consistency:*** There are no logical contradictions expressed or implied by the axioms.
2. ***Modeling (design) consistency:*** Similar things are modeled in a similar way; e.g., the choice between classes and categories for typing things is consistent. This type of consistency can be evaluated without reference to the actual OWL implementation if sufficiently detailed model diagrams exist.
3. ***Consistent level of granularity/abstraction.***Sibling classes should be at the same level of abstraction. Negative example: gist:PhysicalIdentifiableItem has direct subclasses Equipment, Landmark, and LivingThing.
4. ***Balance.*** The level of coverage is consistent across subareas of the defined domain.
5. ***Axiom-to-annotation consistency:***The annotations (human-readable semantics) are semantically aligned with the axioms (machine-readable semantics).
6. ***Structural/Stylistic consistency:***There are consistent patterns for implementing the model in OWL. Examples: terms from external ontologies are adopted or not adopted on the basis of consistent criteria – these could be general criteria or an enumeration of exactly which external terms to use; the same defined set of annotations is used in all term definitions, such as skos:definition rather than rdfs:comment;  language tags are used or not used; specification of datatype range for datatype properties is consistently used or not used; hash vs slash URIs; dividing the ontology into modules and how to name these modules (e.g., the PLEO standards); local names, labels, and other annotations follow defined, consistent stylistic patterns and conventions. Examples: verb-first object properties and nominal datatype properties; camel-casing in local names; local names are all word-like, all codes, or all random sequences; sentence vs title case in labels; definitions are full, grammatical sentences; uniform serialization; etc.

## Out of Scope

The following types of consistency are important but out of scope for consideration of consistency of an ontology per se.

### External consistency

In addition to internal consistency - I.e., consistency within one ontology or set of ontology modules (such as gist), we can consider “external” consistency - consistency of one ontology (or set of ontology modules) with another. This applies, for example, to consistency between gist and a client ontology.

Ontologies are consistent with one another when they follow the same principles, patterns, and conventions, as outlined above (only axiom-to-annotation consistency is not relevant across ontologies). This includes logical consistency when one ontology imports another; e.g., when a client ontology imports gist, it must be logically consistent with it.

External consistency affects the quality of deliverables and development of a consistent Semantic Arts brand as well as, possibly, the interoperability of ontologies.

### Standardized deliverables

A different type of consistency altogether is standardization of client deliverables. This is not related to ontology consistency per se, but to the package delivered to clients. It could include things like:

1. What is delivered to clients in a *typical* project – e.g., shacl, tarql, sparql, rdf dumps from the triplestore, etc. (obviously, not all of this can be standardized).
2. Directory and organizational structure
3. File and directory naming conventions
4. Documentation, both automated, such as Widoco, and manual
5. Model diagrams
6. Versioning (e.g., semver)

# Why is consistency important?

- Without logical consistency an ontology is invalid, and data modeled using the ontology may be contradictory.
- All types of consistency are essential to delivering a *well-functioning*, *professional*, and *easily understandable* product to clients.
- Axiom-to-annotation consistency is important to prevent confusion for all involved – developers, users, readers, etc.
- Consistent principles, patterns, and conventions can be documented to provide explicit guidelines to new Semantic Arts ontologists (as well as those not so new).
- Consistency presents a single brand to all clients. Both new and returning clients know what to expect from a Semantic Arts ontology.

# Methods for assessing consistency

As noted above, there are various dimensions of consistency, and each will be measured differently. The methods are the same whether within a single ontology module or across multiple modules.

***Logical consistency:***

a. Expressed contradictions are caught by running an OWL2 DL inference engine such as Hermit or Pellet.

b.   Implied contradictions are things that logically follow from the axioms by a human reasoning process, but that contradict one’s understanding of the subject matter, or of common sense more generally. These can be subtle and much harder to catch.  OntoClean offers a systematic way to check taxonomy links.

c.   Another way to spot these errors is to test the sensibleness of English text that should make sense according to the axioms. E.g. Because Rodent is a subclass of Animal, it makes sense to say, if you see a mouse run by, “Hey did you see that small animal?”  Perhaps no one would ever say this, but if someone did, you’d know what they meant. It makes sense.  Similarly, if Conference is a subclass of Event, it should make sense to ask someone who just returned from a conference: “Hey, did you learn much when you went to that event last week?” – and indeed this does make sense. If Event is a subclass of TimeInterval then it should also make sense to say “Hey, did you learn much when you went to that time interval last week?”  This is certainly something that no one would ever say.  Some would further argue that it does not make any sense, period. They would have no idea what the person might mean because it’s logically incoherent.  If that is you, then that puts you into the ontological camp that says an Event ***has*** a TimeInterval.  If on the other hand, this makes perfect sense to you, then you probably belong in the ontological camp that says an Event ***is*** a TimeInterval.  [RY2]

***Modeling (design) consistency:*** this is measured by manual inspection and is not at all straightforward.  It entails first spotting that two different aspects of the subject matter are similar to each other, and then checking to see whether the same ontology patterns were used in both cases.  A simple example of this is representing a length of time, such as one second, in two different ways, one as a Magnitude and one as a UnitOfMeasure. See <https://github.com/semanticarts/gist/issues/61> .

A more complex example of this is the Platts analytical measures vs. the symbols.  After months of effort, it was noticed that there was a fundamental similarity between the two that was not reflected in the model.  To resolve this inconsistency, we evaluated both approaches, chose the best one and then refactored the ontologies appropriately to use the same pattern.

There are always exceptions – in some cases there may be justifications in using two different approaches.

***Consistent level of granularity and abstraction:*** Requires manual inspection.

***Balance.*** There could be some correlation with formal characteristics of the ontology, such as depth of subclassing from each top-level class, but it remains to be determined whether this is an accurate measure. May require manual inspection.

***Structural/Stylistic consistency:***Some types of structural consistency can be evaluated through SHACL or SPARQL – e.g., the set of annotation properties used in term definitions. Other types may require manual inspection – e.g., which external terms are used.

***Axiom-to-annotation consistency:*** This is measured by manual inspection.  There are tools out there that automatically generate NL text from OWL which might assist this process.

# Consistency tests on gist

While we regard logical consistency as the most important type of consistency, we assume that published ontologies have been tested for consistency before publication, and therefore do not make it a priority to test.

For this first phase of testing we wanted to use automated testing with SPARQL, so we chose to run tests in the area of structural consistency. Specifically:

1. Ensure that all strings either all do or all do not use language tags.
2. Ensure that all literals either all do or all do not have explicit datatyping, possibly with the exception of xsd:string, which is the default datatype. Strings with language tags should be excluded (but test 1 should be applied to ensure consistency of language tagging).  
   E.g., “1”^^xsd:int vs. untyped “1”.
3. Always use same set of annotations for every term. For example:

   1. DO NOT: use rdfs:label and also skos:prefLabel
   2. DO NOT: use rdfs:comment and also skos:definition (may not be hard and fast)
   3. DO NOT: sometimes use skos:example and on other occasions embed an example in a skos:definition, skos:note, rdfs:comment using such language as (again may not be hard and fast):

      1. e.g. or E.g.
      2. For example, for example
      3. such as
      4. For instance, for instance

## Test results

1. Language tags. No language tag = 703, has language tag = 0. ***Consistency: 100%***.
2. Explicitly typed literals. No datatype = 0, has datatype = 703. ***Consistency: 100%***.
3. Consistent annotations (SKOS vs RDFS)

   1. ***Consistency: 100%***. gist uses no SKOS annotations.

# Previous work

[Metric: Consistency - Previous Work](/ontology-quality-metrics/metric-consistency/metric-consistency---previous-work/)

---

## In this section

- [Metric: Consistency - Assessment Checklist](/ontology-quality-metrics/metric-consistency/metric-consistency---assessment-checklist/)
- [Metric: Consistency - Previous Work](/ontology-quality-metrics/metric-consistency/metric-consistency---previous-work/)
- [Metric:Consistency - Automated Tests](/ontology-quality-metrics/metric-consistency/metricconsistency---automated-tests/)
