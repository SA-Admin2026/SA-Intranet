---
title: "A gistCyber Use Cases - Think Big, start Small"
confluence_id: 2823225346
source: "A-gistCyber-Use-Cases---Think-Big%2C-start-Small_2823225346.html"
---

# Primary Purposes of gistCyber

The main purpose of gistCyber is to provide a minimal, yet sufficient, model for representing things in cyberspace with a focus on the representation of cybersecurity. This in and of itself is a large scope. It is easy for the ontologist to lose footing on a slippery slope of scope creep and expansion.

gistCyber encapsulates the concepts expressed in the STIX 2.1 specification for exchanging cybersecurity information. An introduction to STIX can be found at: [Introduction\_to\_Structured\_Threat\_Information\_Expression.pdf](https://oasis-open.github.io/cti-documentation/docs/Introduction_to_Structured_Threat_Information_Expression.pdf)

A purpose of gistCyber is to provide a model of the concepts and notions concerning bad actors and their relationship to the enterprise. It is very important that gistCyber brings an ontological binding of the STIX 2.1 specification to the community. With such an ontological representation of STIX 2.1 cybersecurity analysts should be able to translate STIX 2.1 JSON documents into a semantic graph under the governance of gistCyber.

The gistCyber ontology needs to support the current practitioners who are exchanging threat intelligence with STIX 2.1 JSON documents. Hence the development is a bottom-up development with the need to support existing practices. Those existing practices are not the most efficient, but they are deeply seated.

## Problem Statements

The gistCyber ontology should aid in the solving of cybersecurity problems of businesses. There are so many problems that the difficulty is not one of coming up with the problem statements, but rather prioritizing the problem statements we should address first!

A separate page of problem statements is a work in progress.

# Scope Debate

The exact scope of gistCyber has not been clarified to the extent that we would like it to be.

The argument can be made that the gistCyber Ontology has a 100% overlap of the concepts that are in the STIX 2.1 Specification. In other words, cyber threat information is an integral part of general cybersecurity. It is not really a more specific extension of general cybersecurity. Threat Intelligence IS a component of general cybersecurity.

Scope Definitions:

***gist:*** gist represents the fundamental concepts and relationships that exist for most business use cases and is specifically designed to be domain independent. At Semantic Arts we describe gist as “… designed to have the maximum coverage of typical business ontology concepts with the fewest number of primitives and the least amount of ambiguity.”

***gistCyber:*** gistCyber represents the fundamental concepts and relationships that exist for most enterprise cybersecurity use cases. It extends gist by adding those concepts and relationships in the domain of cybersecurity.

***STIX 2.1 Specification:*** The STIX specification is not an ontology. It specifies an exchange format, or language (STIX 2.1 JSON). It is better described as documenting the syntax of data desired to be shared between enterprises about cyber threats. If it is to be compared to a graph structure, it is closer to a labeled property graph than it is to a semantic graph. This is due to its use of “relationship” nodes.

[STIX Version 2.1](https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.html)

## In this section

- [Cybersecurity Problems and Responsibilities](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/a-gistcyber-use-cases---think-big-start-small/cybersecurity-problems-and-responsibilities/)
- [Detection, Collection, and Sense Making](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/a-gistcyber-use-cases---think-big-start-small/detection-collection-and-sense-making/)
- [Use Case Reference Implementations](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/a-gistcyber-use-cases---think-big-start-small/use-case-reference-implementations/)
