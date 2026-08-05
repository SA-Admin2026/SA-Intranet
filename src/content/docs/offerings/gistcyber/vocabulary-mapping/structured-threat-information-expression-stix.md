---
title: "Structured Threat Information Expression (STIX)"
confluence_id: 3289382914
source: 3289382914.html
---

# Structured Threat Information Expression (STIX)

- [Intro](#StructuredThreatInformationExpression(STIX)-Intro)
- [Current gistCyber State (updated as of 3/27/2026)](#StructuredThreatInformationExpression(STIX)-CurrentgistCyberState(updatedasof3/27/2026))
  - [gist:StixObject](#StructuredThreatInformationExpression(STIX)-gist:StixObject)
  - [gist:StixDomainObject](#StructuredThreatInformationExpression(STIX)-gist:StixDomainObject)
  - [gist:StixRelationshipObject](#StructuredThreatInformationExpression(STIX)-gist:StixRelationshipObject)
  - [gist:StixBundle](#StructuredThreatInformationExpression(STIX)-gist:StixBundle)
  - [gist:StixCategoryObject](#StructuredThreatInformationExpression(STIX)-gist:StixCategoryObject)

# Intro

From the [STIX home page](https://oasis-open.github.io/cti-documentation/stix/intro.html): Structured Threat Information Expression (STIX) is a language and serialization format used to exchange cyber threat intelligence (CTI). STIX is open source and free allowing those interested to contribute and ask questions freely.

STIX is used in creating JSON objects to represent aspects of CTI with a standard library of tags/codes and properties of the JSON object. For example, from [this subsection of the home page](https://oasis-open.github.io/cti-documentation/stix/intro.html#a-look-at-the-structure):

```
{
    "type": "campaign",
    "id": "campaign--8e2e2d2b-17d4-4cbf-938f-98ee46b3cd3f",
    "spec_version": "2.1",
    "created": "2016-04-06T20:03:00.000Z",
    "modified": "2016-04-06T20:03:23.000Z",
    "name": "Green Group Attacks Against Finance",
    "description": "Campaign by Green Group against targets in the financial services sector."
}
```

This shows a JSON object that represents a “campaign”, with correlates with details available at [this documentation link](https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.html#_pcpvfz4ik6d6). Many properties are optional and not included in the sample JSON. This object also represents a STIX 2.1 object - notably different from a STIX 1 object. The differences can be shown on the following page: [Comparing STIX 1.X/CybOX 2.X with STIX 2](https://oasis-open.github.io/cti-documentation/stix/compare)

Since STIX is one of many industry standard vocabularies, it is beneficial to have this mapped and included in gistCyber. As a personal note, I believe many decisions towards naming and instantiation of different vocabularies and classes were to preserve the STIX reference as well as make it easier to convert from one to the other. I have the most experience with instantiating things in the stix-vocabs.ttl, which are instances of `StixCategoryObject`.

# Current gistCyber State (updated as of 3/27/2026)

In the current state of gistCyber, there are a number of instantiated classes to represent the different types of STIX objects. These include one parent class of `StixObject`, two sub-classes of `StixDomainObject` and `StixRelationshipObject`, a sub-class of `gist:Category` called `StixCategoryObject`, and another standalone class called `StixBundle`.

## gist:StixObject

Current definition in gistCyber: *A STIX Object is an identified entity with associated STIX metadata and tags.*

I believe this object is intended mostly to be a parent of different kinds of StixObjects and the sub-classes are used to instantiate actual STIX objects. An instance of a StixObject could be assumed to represent one of the JSON objects referenced above.

## gist:StixDomainObject

Current definition in gistCyber: *A STIX Domain Object is an identified domain with associated STIX metadata and tags.*

The sub-classes of gist:StixDomainObject detail a number of the domains identified on [the objects section of the STIX home page](https://oasis-open.github.io/cti-documentation/stix/intro.html#stix-21-objects). The current state does not include all the domains, though it’s unclear if these domains were passed over due to prioritization or maybe they exist elsewhere in gistCyber. The only Domain that has sub-classes is `gist:ThreatActor`, and notably, those sub-classes are not necessarily referring to other STIX object references or STIX Threat Actor Types.

## gist:StixRelationshipObject

There are no definitions or annotation properties on the definition of `gist:StixRelationshipObject` in the current version of gistCyber.

The [STIX documentation on relationship objects](https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.html#_e2e1szrqfoan) says, paraphrasing, that a STIX relationship object is a JSON object that represents the edge between two other STIX objects, like an object property. The full set of possible relationships as a table of Source → Relationship Type → Targets (read: Subject, Predicate, Object) is available in [this appendix](https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.html#_6n2czpjuie3v).

## gist:StixBundle

There are no definitions or annotation properties on the definition of `gist:StixBundle`in the current version of gistCyber. It is notably set up as a top-level class in the ontology.

From [the STIX documentation on STIX Bundle Object](https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.html#_gms872kuzdmg): *A Bundle is a collection of arbitrary STIX Objects grouped together in a single container. A Bundle does not have any semantic meaning and the objects contained within the Bundle are not considered related by virtue of being in the same Bundle.*

## gist:StixCategoryObject

In the current version of gistCyber, this is a sub-class of gist:Category and has sub-classes based on what’s detailed on [the STIX Vocabulary section on the documentation page](https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.html#_izngjy1g98l2). Names of the sub-classes are intended to be verbatim from STIX, which results in deviations from general Semantic Arts standards. Instances of the categories are based on the lists of terms in the referenced page with a specific property of gist:stix-term to indicate the STIX code from the documentation.

As one example, see this instance of a ToolType:

```
gistx:_ToolType_information-gathering
	a gist:ToolType ;
	skos:definition """STIX 2.1 description: 
Tools used to enumerate system and network information, e.g., NMAP."""^^xsd:string ;
	skos:prefLabel "Information Gathering"^^xsd:string ;
	gist:stixTerm "information-gathering"^^xsd:string ;
	.
```
