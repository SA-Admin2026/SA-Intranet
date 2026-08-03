---
title: "Evolution and Improvement"
confluence_id: 3407945
source: Evolution-and-Improvement_3407945.html
---

# Evolution and Improvement

# Ideas for New Content

## DBpedia & SPARQL (suggested by DMc)

After introducing the worlds simplest ontology (gist:hasParent) maybe the next thing we do is get some triples from dbpedia and see what we can do with them.

This one is a pretty good start

select ?prop (COUNT(?person) AS ?numberPeople)

WHERE

{

  ?person ?prop ?p .

  VALUES (?prop)

  {

   (dbo:mother ) ( dbo:father) (dbo:parent ) (dbo:partner) (dbo:relation) (dbo:relative) (dbo:spouse)

   (dbo:child)(dbo:currentParent) (dbo:sibling )

  }

}GROUP BY ?prop

|  |  |
| --- | --- |
| **prop** | **numberPeople** |
| <http://dbpedia.org/ontology/spouse> | ``` 33824 ``` |
| <http://dbpedia.org/ontology/relative> | ``` 12190 ``` |
| <http://dbpedia.org/ontology/child> | ``` 14143 ``` |
| <http://dbpedia.org/ontology/partner> | ``` 1342 ``` |
| <http://dbpedia.org/ontology/parent> | ``` 28443 ``` |
| <http://dbpedia.org/ontology/relation> | ``` 8265 ``` |

By the way, its kind of incredible how much dbpedia has been cleaning up their ontology.  There is now only 739 classes (trivia: bowlingLeague and mixedMartialArtsLeague tied as the least popular classes with one instance each)

# Errata and other Issues with Platts Version

### **File: Day 1 PM - HandsOn.pptx**

The version of this file may change messign up line numbers, this link, ([Day 1 PM - HandsOn.pptx](../../attachments/3407945/3407949.pptx)) is to the one I reviewed.

****Slide 5:****It is potentially misleading to equate literal with value.  Often, one can choose either a dataprop or an object prop to represent the same information. In both cases, the thing at the other end of the triple is logically and conceptually thought of as the value of the proeprty. e.g height.  We use a magnitude.

**Slide 7:** The following statement is not strictly accurate.

"Typically all instances of a given class have the same properties (relationships), but different values"

Many or most classes have lots of optional properties, so there can be large differences among instances of the same class. Should be reworded accordingly.

Also, "Subclass (e.g., “Oil Company” is a subclass of “Organization”) is a subset with different properties" is misleading. The truth is that the subset has the exact same propeties as the subperclasss, and some additional ones too.

**Slide 8:** Defining taxonomy here is likely to cause confusion because our definition is quite different from the common one in that we frequently use flat sets of values, where most taxonomies are hierarchical.  So I recommend not introducing it so soon.  If we do include it, we should not call it a "label, used to categorize other things".  There are three problems:

1. It is misleading the category has a label, it is not itself a label.
2. It is ambiguous with rdfs:label which will come later.
3. It conflates two distinct notions: 
   1. the taxonomy as a set of categories
   2. an individual category in the taxonomy.

 

**Slide 77:**  The statement "You can have many inverses for one property" is misleading, because every single one of the many inverses is inferred to be equivalant.

**Slide 80**:  Mention that there is a much easier way than reversing the order, there is a notation both in OWL and in SPARQL to anonymously refer to the inverse of a property. SPARQL uses ^, I think, and owl uses something like (inverse owns). Depends on the syntax. In fact, given this, it is hard to know why you would ever reverse the order, so don't mention it.

**Slide 112**:  Recap 2/2. This mentions restrictions which have not been discussed at all. Might be able to skip this whole slide, and put it later on in the class. Or try to keep the last bullet, which is a nice punch line - but only if it follows from what we have said so far, or perhaps mention it but do explicitly as a foreshadowing.

Day 2 PM TBox

SLide 55-56 Import is Directional

Te new slide looks better but has more information on it. One thing that is missing is the direct contrast in red. That was the point of the slide.  The current slide forces you to infer this point.

(A imports B)  
means that when you use ontology A, you always get B’s triples. You can still use ontology B on its own.  
(B imports A)  
means you cannot use ontology B on its own. You always get A’s triples. You can use ontology A on its own.

<!-- section-nav:start -->

## In this section

- ["Things not covered"](things-not-covered.md)
- [Union & Intersection graphic](union-intersection-graphic.md)

<!-- section-nav:end -->
