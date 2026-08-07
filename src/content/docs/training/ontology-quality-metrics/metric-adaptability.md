---
title: "Metric: Adaptability"
confluence_id: 868745301
source: "868745301.html"
---
Steve Steward and Dalia Dahleh, May 2020

## What it means

An *adaptable* ontology can be used for other purposes beyond the original designers’ use cases. We can use an ontology by importing it wholesale, or using its terms without importing the axiom, or loading some but not all of its axioms into our triplestore.

We like our ontologies adaptable in a couple of ways. First, when we come across an important concept that’s not in the ontology already, it should have some natural home. We shouldn’t expect every ontology to adapt to every concept from every domain; finance ontologies won’t be expected to contain every concept that matters in oil and gas companies. Rather, we should expect an ontology to be able to adapt to every concept from the domain it’s designed to cover. An ontology for an enterprise ought to have enough classes and categories to cover all the kinds of things that matter in that enterprise; a finance ontology ought to have concepts for all the kinds of things matter in finance; an upper ontology should have concepts that cover all the kinds of things that matter in any industry. It’s a strike against an enterprise ontology’s adaptability if we encounter a concept that matters to the enterprise, but that doesn’t naturally fit into the ontology’s T-box or C-box. An adaptable ontology lets you add new concepts without removing or rewriting existing axioms.

An ontology can also fail to be adaptable by making overly restrictive assumptions. If we make customer a subclass of person, we’ve made an overly restrictive assumption about who customers will be, and as a result we can’t adapt to customers that are organizations rather than persons. Overly restrictive assumptions about domains and ranges can make a property totally unusable when otherwise it could be adapted to other purposes. For example, dcat:keyword originally had an overly restrictive domain of *dataset*, which was relaxed so that property could be adapted to cases where things other than datasets have keywords. Likewise, gist:fromAgent has a range of *Address or Person or Organization*, whereas gist:fromPlace has a range of *Place*. A more adaptable ontology might name a class that includes address, persons, organizations, and places and use that class in the range of a more general *from* property. Overly restrictive assumptions are related to but distinct from correctness. It’s arguably incorrect that only datasets have keywords, and the incorrectness made dcat:keyword version 1 less adaptable. But it’s correct that places are not agents, and thus it’s not incorrect to exclude places from the range of gist:fromAgent. A *fromAgent* property is just not as easily adapted to non-agents that things can be from. Since it’s so specific, adapting gist to talk about things that come from places requires either a redundant extension of the ontology that such us gist:fromPlace in gist, or a rethinking of the original axiom in order to capture the more general *from* property.

## Relevance to Semantic Arts and Clients

An ontology that’s adaptable can be reused with little to no extra work, saving us and our clients time and money.

## How we would measure

To measure adaptability, an ontologist will record their considered answers to the following questions:

Tailorability questions:

1. How many overly restrictive domain/range assertions are there, as a percentage of the totally number of properties?
2. Other problematic axioms

   1. Are there any other axioms about properties that would need to be removed to add to the ontology (inverse, etc.)? How many (out of the total number of properties)?
   2. Are there any other axioms about classes that would need to be removed to add to the ontology (subclass, disjoint, etc.)? How many (out of the total number of classes)?

Extendibility questions:

1. List about 20 of the critical concepts that this ontology should cover. (The ontologist may consult SMEs to create this list.)

   1. How many important concepts do not have a natural superclass in the ontology (out of 20)?
2. List 5 domains that the ontology might need to be extended to cover. List 5 critical concepts in each domain.

   1. How many of the critical concepts in those domains do not have a natural superclass in the ontology (out of 25)?

The answer to each question will be a percentage. Plug the answers into the following formula to calculate the final score. Basically, average the percentages, but give double weight to the tailorability metrics.

```
DomainRangeScore = # of problematic domain and range assertions / # of properties
```

```
PropertyScore = # of additional problematic property axioms / # of properties
```

```
ClassScore = # of problematic class axioms / # of classes
```

```
TailorabilityScore = Average(DomainRangeScore, PropertyScore, ClassScore)
```

```
DomainCoveringScore = # of critical concepts w/o superclass / # of critical concepts 
```

```
AdjacentDomainsCoveringScore = # of critical concepts w/o superclass / # of critical concepts 
```

```
ExtendibilityScore = Average(DomainCoveringScore, AdjacentDomainsCoveringScore)
```

```
AdaptabilityScore = Average(TailorabilityScore, TailorabilityScore, ExtendibilityScore)
```

## Can we follow these instructions?

Yes, although it takes human effort, and, depending on the ontology, may also need SME input. This type of metric is subjective and therefore hard to automate.

## Will it actually measure what we want to measure?

These metrics do represent important considerations for adapting an ontology. Finding a number of overly-restrictive axioms can definitely make an ontology hard to adapt, will likely cause an ontologist to not be able to fully import the ontology, and may even lead them to not using it entirely. Likewise, if many of the concepts an ontologist is trying to model do not fit into the ontology, it may render it useless to them.

## Limitations

The main limitation of our methodology is subjectivity. The ontologist thinking through these concepts may not consider some concepts that might be important to another user. There's always the question of "adapt it to what?".
