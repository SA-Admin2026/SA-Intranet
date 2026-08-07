---
title: "When OWL-DL is too restrictive"
confluence_id: 2421424129
source: "When-OWL-DL-is-too-restrictive_2421424129.html"
---
OWL-DL allows us to say a lot, but sometimes we want to say things that are not allowed. This page pulls out a few highlights from Chapter 7 in my book on OWL limitations on this topic - go there for details. The main limitations are:

1. Metaclasses are not allowed.
2. Classes, properties, and datatypes cannot be objects of most triples.
3. N-ary relations are not allowed.
4. You cannot specify just a date, it has to include a time i.e., xsd:dateTime.
5. **Certain kinds of rules are not allowed.**
6. **Some properties cannot be used in some restrictions.**

There are workarounds for each of these, which involve different patterns and tradeoffs. This page is concerned mainly with 5 and 6. Options for conveying the intended meaning that you cannot express in OWL-DL are to supplement the OWL-DL axioms with:

1. *an annotation expressed in natural language*.
2. *an annotation expressed in a precise machine-readable syntax* which is less ambiguous than natural language. SHACL is one possibility, as is any formal logic notation.
3. *additional RDF triples*. SHACL is one possibility.

Regarding option 3, some objections have been raised about not putting SHACL in the ontology itself because SHACL is for constraints and OWL is for meaning. The valid point behind this objection is that *option 3 should ONLY be used for expressing meaning, not for expressing data constraints*. But that is saying something different.

Expressing something in SHACL does not make it a data constraint any more than writing a computer program in LISP or Prolog makes it AI. In addition to being used for constraints as a primary objective, SHACL has a variety of other intended uses. Also, anyone can come along and invent additional non-intended uses. To drive home the point, if I use a hammer to flatten some bent sheet metal, the sheet metal does not suddenly become a nail because hammers are for pounding nails.

Option 3 needs to be explored to understand the pros and cons.

See also: [Cardinality and Value Restrictions: Proposed Design Patterns and Best Practices - Technical and Research Resources - Confluence (atlassian.net)](https://semarts.atlassian.net/wiki/spaces/TRR/pages/2413232140/Cardinality+and+Value+Restrictions+Proposed+Design+Patterns+and+Best+Practices)
