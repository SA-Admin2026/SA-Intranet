---
title: "Big Picture Elements of gistCyber"
confluence_id: 2976874497
source: "Big-Picture-Elements-of-gistCyber_2976874497.html"
---

# The Big Picture

This page captures some of big picture elements of gistCyber development so we can continue effectively with implementation. Basically, practicing our “think big, and start small” philosophy. Of course, we are well along this path with gistCyber.

## Big Picture Element One:

The OASIS STIX 2.1 Specification is a good foundational reference for the basis of a cyber-ontology. However, it is sorely lacking beyond the foundation. It is a simple exchange language that is built on strings and not on things. STIX is an exchange language. Federal agencies use the STIX language extensively. Some agencies, like the FBI, have asked OASIS to improve the STIX language by moving to an ontological representation.

To allow enterprises, both government and private, to continue to exchange data in STIX documents it is a good idea for a Cyber Ontology to support the many string-based “open vocabularies”, “enumerations”, and “data types” of STIX 2.1.  In other words, a cyber-ontology should take STIX from “strings” to “things”.

## Big Picture Element Two:

The OASIS STIX 2.1 Specification is non-hierarchical, which means that subsumptive relationships are not expressed well, if at all. Additionally, relationships between STIX objects are represented with STIX Relationship Objects (SROs). This makes STIX more like a Labeled Property Graph than a semantic graph.

The ability to make inferences from the facts represented is absent because of the lack of semantics. To enable description logics reasoning a cyber-ontology must allow us to govern a logically consistent semantic graph.

The things and the relationships between those things are incomplete in STIX. A more comprehensive representation of the cyber domain of discourse needs to be covered by gistCyber. The scope of gistCyber should allow the practitioner to express the facts used to execute their tradecraft. The state of gistCyber will undoubtedly expand as essential concepts that are missing now are added. This leads us to the next big picture element.

## Big Picture Element Three:

Adoption by practitioners is a requirement of success. Our gistCyber ontology is not the first, nor the only, cyber-ontology to be constructed. However, given who we are at Semantic Arts, I strongly believe that it can be the best representation available to the government and private sectors. Understand though that the metric of success is its adoption, not its elegance. I have participated in several efforts to create a cyber-ontology. They struggle to be adopted, and even fail, due to the practitioner’s frustration in trying to use it.

The gistCyber ontology should make the life of cybersecurity practitioners easier, not harder, or more complicated. That said, gistCyber must be a well formed ontology which allows for reasoning based on the encapsulation of the practitioner’s tradecraft logic. It must be intuitive AND logically consistent.

There are two cyber-ontology development efforts that I think are worth commenting on with respect to their adoptability; 1) the Unified Cyber Ontology (UCO), and 2) the Detection, Denial, Disruption Framework (D3FEND) ontology. Interestingly, the UCO was originally a MITRE project. The D3FEND ontology still is.

[UCO Community | Home](https://unifiedcyberontology.org/)

[D3FEND Matrix | MITRE D3FEND™](https://d3fend.mitre.org/)

These ontology efforts are considered successful by some because of their adoption. I would argue that some of the adoption they have enjoyed is because MITRE has the funding and has become the de facto resource. I am very familiar with the principal developers behind UCO/CASE and D3FEND.

Peter Kaloroumakis of the  D3FEND ontology is quite like minded with Semantic Arts principles, and particularly like minded with me on adoption as a success criteria. The D3FEND ontology is part of the DoD-IC Ontology Foundry Working Group (DIOWG).

Sean Barnum (MITRE), Alex Nelson (NIST), Eoghan Casey (SaaS Data Security, ex MITRE), Patrick Maroney (AT&T), Paul Patrick (DarkLight, ex MITRE, ex Fireeye) are contributors to UCO/CASE which is now a Linux Foundation effort.  The effort is practitioner driven to the detriment of good ontological representation. However, they are improving.  In it’s earlier years, I was a maintainer of the GitHub repository and influenced the group to use the RDF Toolkit. Ontology development by non-graph savvy committee is a troublesome road. Their primary practitioners are the Digital Forensics folks.

## Big Picture Element Four:

As is the case with every ontology development project I have ever had the privilege to work on, data is paramount.  Getting data into a graph that the practitioners can relate to is the key to successful adoption. It is not enough to create the ontology, we must show its value by solving painful problems with real data.

We have TARQL and SPARQL Anything templates to convert STIX JSON to a gistCyber governed graph. Unfortunately, the trip back into STIX JSON would be “lossy” as much information is beyond the language.

When we demonstrate how easy it is to get data from enterprise systems into a semantic graph it excites people. When we demonstrate the value of inference, it creates enthusiasm. Enthusiasm sells.

## Big Picture Element Five:

The success of gistCyber is going to be a function of our Semantic Arts team. It is not an effort that can be made by one of us alone.

Restarting the Cyber Group Check-in meetings and starting up a regular gistCyber Ontology Development meeting (modeled after the gist Development Meetings) is a good idea. The gistCyber GitHub repository is starting to reflect more structure in the issue tracker. The issues are exposing the big picture elements mentioned in this email.
