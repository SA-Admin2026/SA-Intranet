---
title: "Change Management & Deprecation (2016) - DEPRECATED"
confluence_id: 5767203
source: 5767203.html
---

# Change Management & Deprecation (2016) - DEPRECATED

## **This document is out-of-date. The current process is documented in the gist GitHub repository: see [ChangeAndReleaseManagement](https://github.com/semanticarts/gist/blob/develop/docs/ChangeAndReleaseManagement.md)****and [Contributing](https://github.com/semanticarts/gist/blob/develop/docs/Contributing.md)****.**

FIBO folk just had a flurry of emails about deprecation, so I started a wiki page there to share what we did at Semantic Arts. So I'm putting it here on our own Wiki. This was the description we gave out with gist on 6.7.1, the last version before we split things into modules.  I'm not sure what we are doing now for deprecation.

# What we did to evolve [gist](http://semanticarts.com/gist/) at Semantic Arts

## Overall Approach

We gave very careul thought to deprecation as our upper enterprise ontology, gist, evolved.   Below I quote some materials we handed out with gist releases.

Our intention is to continue to evolve gist. We recognize though that if you are using gist, any change involves a risk that something you had depended on no longer works as you intended. Alfred North Whitehead said: “The art of progress is to preserve order amid change and to preserve change amid order”. Here’s our approach to evolving gist.

VERSIONS

- All changes from the previous version will be documented in the change log, each entry indicating which version the change was made in. The larger changes are further documented in supplementary notes.
- We categorize each change depending on the nature and degree of impact. Purely visual changes that only affect layout in Visio have the least impact. Backwards incompatible changes have the most.
- Some versions referenced in the change log are internal only. The last public version before 6.6 was 6.2; there was no public release of 6.3, 6.4 or 6.5
- Every ontology will have a version number (e.g. gistCore6.6).  Once published the ontology will not change.  When gist changes, it will have a new version number and the old one will always be out there.
- We will have the version number as the base URI as well as the version URI.  This is the most conservative position right now.  Not all tools recognize version IRIs

DEPRECATION

- We use the OWL2 deprecation mechanism which allows keeping around things that have been removed while annotating them as being deprecated. We have a separate section of the ontology for this. Importantly, it also include axioms that have been removed – NB there is no OWL mechanism for indicating their deprecated status.
- There are two main kinds of situations where deprecation is needed for a class or property: remove and rename. The latter is equivalent to a remove and an add. This gives rise to four common deprecation patterns.
- Deprecated things will stay around for one version only and be gone in the next. So a class in version N that is deprecated in version N+1 will be gone in version N+2.
- Tool support for deprecated concepts varies, so if you are starting from a clean slate and do not need the deprecated items for backward compatibility, we will have a separate version that has been cleaned of the deprecated things (called e.g. gistCore6.6c.owl). This may change as tool support evolves.
- There will from time be changes that are not backward compatible even using deprecation. In these cases, we will provide supplementary notes with guidelines on how to manually bring your ontology up to date.

## Process for Deprecation

1. Find all occurrences of the item to be deprecated, and make the necessary changes. Often it is just a simple name change, but each case should be carefully considered.
2. It is harder to find all references in comments and URIs, but try anyway. Run this SPARQL query to get all the comments into a text file then search that.     
   SELECT ?Thing ?Comment    
   WHERE {?Thing rdfs:comment ?Comment}   
   e.g. I have found things this way that I never would have otherwise noticed.
3. Save out new versions of any affected ontologies.
4. Put the deprecated items in a separate ontology for deprecated things.
5. Bring over any axioms that were originally there, but are no longer needed.
6. Load all of the ontology modules together. Check that there are no other occurrences of the deprecated item besides the one right here. Make sure the deprecated items that do appear are correctly related to the non-deprecated things that remain in gist

## Deprecation Patterns

1. There are 4 common patterns for renaming or removing a property or class (see below, the double arrow is equivalence, the single arrow is subProperty)
2. For renaming, you have to deprecate one and then go through all the files and change all occurrences of the old URI to be the new URI.
3. Importantly, we had all the deprecated axioms in a separate ontology so that people new to the standard don't have to load it. If they need the deprecated stuff, they load the ontology with the deprecated axioms it it, and that ontology imports gist itself.
4. It was very easy to do this when there was just one file. Now it is broking up into 15 or so - it is much more messy.

Below are the four common patterns for deprecation that we mostly used:

![](https://wiki.edmcouncil.org/download/attachments/5275770/image2016-2-15%2011%3A46%3A32.png?version=1&modificationDate=1455566444000&api=v2)

![](https://wiki.edmcouncil.org/download/attachments/5275770/image2016-2-15%2011%3A47%3A8.png?version=1&modificationDate=1455566444000&api=v2)

In the case of renaming MoneyAmout to AmountOfMoney, it would be this:

![](https://wiki.edmcouncil.org/download/attachments/5275770/image2016-2-15%2011%3A49%3A3.png?version=1&modificationDate=1455566444000&api=v2)

The owl generated for this (in RDF/XML) is:

<!-- <http://ontologies.semanticarts.com/gist#AmountOfMoney> -->

<owl:Class rdf:about="&gist;AmountOfMoney">  
<owl:equivalentClass rdf:resource="&gist;MoneyAmount"/>  
</owl:Class>

<!-- <http://ontologies.semanticarts.com/gist#MoneyAmount> -->

<owl:Class rdf:about="&gist;MoneyAmount">  
<owl:deprecated rdf:datatype="&xsd;boolean">true</owl:deprecated>  
</owl:Class>

## Several types of ontology change

We identified sever kinds of changes, and we categorized them in our change log. They are listed below, roughly in increasing degree of disruption when adopting  a new version.

- V: **V**isualization changes only, not affect the owl (callouts, layout, grouping etc)
- CL: for **CL**arity only, better comments, fixing typos, laying out differently, etc. No changes to axioms
- AD: purely **AD**ditive, will not affect anything already existing.
- RF: **R**e**F**actoring, no semantic import. Includes changing names where old name is deprecated.
- SU: has **S**emantic import from **U**sage perspective, e.g. a comment changes usage which could give semantic errors.
- SI: has **S**emantic import from **I**nference perspective. axiom added, removed, changed etc.
- BI: **B**ackwards **I**ncompatible
