---
title: "Metric: Complexity Reduction"
confluence_id: 868745294
source: "868745294.html"
---

Mark Wallace and Jamie Gulden, Feb 2020

## What it Means

Our measure of *complexity* is the sum total of all the items in the schema that developers and users must learn in order to master a system. In relational technology, this would be the number of relations (tables) plus the number of all attributes (columns).  In object-oriented systems, it is the number of classes plus the number of attributes.  In an XML or join-based system, it is the number of unique elements and/or keys.  [1]

*Complexity Reduction* is a measure of how many times a level of complexity is reduced, i.e., (old-complexity) / (new-complexity).

## Why it is Important to Clients

Reducing complexity is important to clients because the number of items in the schema directly drives the number of lines of application code that must be written and tested.  It also drives the level of complexity for the end user, since each item eventually surfaces in some form or report and the user must master what those items mean and how they relate to each other.

## How We Would Measure

Take the sum of all *used* schema items from the original schema and divide by the sum of all the *used* schema items in the new/resulting (OWL) schema.  This is the complexity reduction metric, e.g. 20X complexity reduction, meaning it is 20 times simpler, or "complexity is reduced by 20X".

E.g., if we went from 700 tables and 7000 columns to 46 classes and 36 properties, the metric would be (700+7000)/(46+36)  =  7700/82 = 93.9., or a 94X complexity reduction.  Bigger numbers are better.

## Where did it go?

There was a discussion about identifying what caused the reduction. It gave a list of ways it might have happened.

![](/attachments/868745294/1007255656.jpg)

From Dave:

- Redundant
- Unused
- Unchanged
- [can’t read the one that starts with Rod…?
- Junk / chaf
- Enums [booleans, which are mostly for processing flags,
- Unnecessary roles (don’t remember what that was now) (maybe that was out of scope)
- We may want to distinguish between some of the redundancies
- All foreign keys are redundant (that data is already in the primary key, so maybe that should be its own category)
- All denormalized data is also redundant, so when we copy the price from the item to the order line, its not a foreign key, but it is redundant
- All calculated data is redundant (so the payroll YTD deduction is redundant)
- All data that came from another system is redundant (which is a lot of it – so if the PR system gets SSN from the HR system, its redundant in PR)
- Others that just come to me now
- Derrivable / lookupable /inferencable  [if you have the zip code you can derive the state]

## References

[1] The Data-Centric Revolution. Dave McComb. p. 14
