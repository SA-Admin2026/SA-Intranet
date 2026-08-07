---
title: "Representing Text and Other Content Fields"
confluence_id: 10321949
source: "Representing-Text-and-Other-Content-Fields_10321949.html"
---
The question often arises: should a text field be represented:

1. as a string valued data property
2. as a  gist:Content-valued object property (including of course, gist:Text)

In IBeam, we are creating a new use case for Opportunity where we want to point to:

1. a name (obviously a datatype property)
2. a summary (could be either)
3. a proposal document (obviously an object property)

Other common text fields include the following (some from Broadridge):

1. short name (probably a string)
2. long name (could be either)
3. short description / summary  (could be either)
4. long description / extended abstract (could be either)

#### Consistency vs. Elegance

There is a tradeoff:

1. We are very keen on elegance, so we don't want unnecessary triples.
2. We are also keen on consistency, so ideally we will do things one way throughout.

Using object properties for descriptions adds lots of triples because they arise all the time.  It is partly a matter of whether consistency trumps elegance., but we already lack consistency, since we have name text fields as data properteis and other text fields as object properties.  Can the principle used to justify having name as data properties also be used to justify having hasSummmary be a data property? That principle can be consistently applied, so we can have both consistency and elegance.

#### One property, many classes, or vice versa?

Let's say we always go with object properties; then how do we distinguish the different purposes of the text? Two options are:

1. one property, several subclasses of gist:Content or gist:Text
   1. describedIn :Summary
   2. describedIn :ShortDescription
   3. describedIn :LongDescription
   4. describedIn :ProposalDocument
2. one class, several subproperties of describedIn (unless there already is a class for a type of Content or Text)  
   1. hasSummary gist:Text
   2. hasShortDescription gist:Text
   3. hasLongDescription gist:Text
   4. describedIn :ProposalDocument
