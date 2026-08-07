---
title: "Metric: Accuracy"
confluence_id: 1226244097
source: "1226244097.html"
---
## Summary

An Ontology is accurate to the degree that it’s concepts, terms and axioms align with the consensus view of industry and client experts within the domain.

Accuracy should be evaluated after completeness is evaluated.  Anyone reviewing the accuracy of an ontology will be distressed if they are evaluating something that is woefully incomplete. Accuracy, like completeness, is a dimension that cannot be evaluated by merely looking at the artifact itself.  It must be compared to the world, and independent interpretations of the world.

## Proposed Approach

We will examine some algorithmic takes on accuracy, including OntoClean and using SPARQL to look for anti-patterns, but these might end up in other dimensions.

Our primary approach will be to have subject matter experts review the artifact in detail.  For our own ontologies, this will be mediated by the slow reveal tool.  For other ontologies it will have to be the result of expert review that is generally less structured.  For instance, the excellent review of BIBFRAME by Rob Sanderson (4/17/2015), has a bit of accuracy evaluation in it (although it is primarily about consistency and the adherence to common design patterns).

Additionally, it appears that one use of Competency Questions may be to assess accuracy.  A knowledge base that can answer the competency questions has probably accurately reflected the domain (although that isn’t a guarantee, we need to explore this relationship)

To appropriately evaluate accuracy, we need to know four things:

- How many reviewers were there, and what was their level of expertise relative to the target domain
- How thoroughly did each reviewer review the artifact (how much time did they spend, which concepts or axioms did they look at)
- What were their negative findings (for instance “this part of the ontology is inaccurate”, most evaluations focus on the negative, is there a way to separate true inaccuracies from style and preference issues?  For instance, if an ontology says “Engine part Car” stylistically and for consistency we may suggest that it should be “Engine hasPart Car” or even “Engine hasDirectPart Car” but the accuracy review should find that Engines don’t have Cars as parts, Cars have engines as parts.  )
- Was there any indication of affirmation?  In other words, is there some way in the evaluation for the evaluator to say what parts of the ontology are accurate?

One possible clue to inaccuracies is where the term name (the fragment) the description and the formal definition do not agree.  At one level this is an inconsistency, but it may well first show up in the accuracy assessment.

Also inference unit tests can be used to asses accuracy.  If our axioms state that the brother of my parent is my uncle, we should be able to load my family tree and find “Bob’s my uncle!” (twice actually I have a Bob Adams that is my uncle on my dads side and a Bob Evans who is (was) my uncle on my mothers side.

## Proposed Specific Measures

- Number of reviewers, by expertise level
- Number of reviewers that agreed with each slide in the slow reveal
- How much time was spent by each reviewer on each slide
- What percent of the target ontology (the part that is planned to be populated) was reviewed?  We should count the unique concepts in SHACL and see what percentage appeared in slow reveal
- For 3rd party ontologies, we should try to triangulate some other indications of accuracy:  how well adopted is this, the absence of negative reviews, star ratings etc.
- OntoClean violations (R+ subsuming R- for instance)
- Anti-patterns that indicate inaccuracy (as opposed to in consistency.  More work needed here)
- Inference use cases predicted and passed (and agreed by SMEs)
- # of orphan classes (this is probably more a measure of completeness of the upper ontology, but it might be a measure of whether domain modeler understood, and agreed with the upper ontology where appropriate.

# Ontology Quality: Accuracy

## **Overarching Objective**

An Ontology is accurate to the degree that it’s concepts, terms and axioms align with the consensus view of industry and client experts within the domain.

## **Initial Focus**

Ensure the ontology design is accurate as determined by client expert(s) within the domain.

## **Pre-Requisite(s)**

A business-level, client stakeholder has reviewed the ontology using the slow reveal tool.

## **Accuracy Check List**

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Client Name: | |  |  | Project Name: |  | | | | |
| Author: | |  |  | Reviewer: |  | | | | |
| Review Date: | | MM/DD/YYYY |  | Reviewer Role: |  | | | | |
|  | | | | | | Assessment (1 | | | |
|  | | | | | | 1 | 2 | 3 | 4 |
| 1. I can see how the Ontology design demonstrated through the Slow Reveal will capture the key business concepts critical to addressing the targeted business problem. | | | | | |  |  |  |  |
| Comments: |  | | | | | | | | |
|  | | | | | | 1 | 2 | 3 | 4 |
| 2. The Ontology design demonstrated through the Slow Reveal is detailed enough to distinguish concepts at a level unique to my business. | | | | | |  |  |  |  |
| Comments: |  | | | | | | | | |
|  | | | | | | 1 | 2 | 3 | 4 |
| 3. The Ontology design demonstrated through the Slow Reveal was easily understood by me, a non-modeler. | | | | | |  |  |  |  |
| Comments: |  | | | | | | | | |
|  |  |  |  |  |  |  |  |  |  |

1. Degree to which Reviewer agrees with statement:

|  |  |  |  |
| --- | --- | --- | --- |
| 1 = Disagree | 2 = Mostly disagree | 3 = Mostly agree | 4 = Agree |

# Ontology Accuracy QA Checklist

Access the “size” of the ontology being assessed, using these three metrics (Express as C/P/T : Classes, Properties, Taxonomic Instances) :

- Reachable Ontology (all concepts in import closure, see procedure 1).
- Referenced Ontology (all concepts that were referenced in the definition of the ontology in scope – see procedure 2)
- Populated or to be populated Ontology (all concepts in use – see procedure 3)

Determine if you think the whole Populated Ontology was reviewed more or less uniformly, or if some areas were more reviewed than others.  Name the areas (for instance the CBox might have been more or less reviewed, or maybe the Payroll part was highly reviewed and the HR part not as much)

Estimate the number of people that have reviewed the concepts, sorted between naive users and domain experts (see procedure 4)

Estimate the amount of time spent on each review (see procedure 5)

Construct this matrix (initially for all three sizings), and assess the accuracy

|  |  |  |  |
| --- | --- | --- | --- |
| Area | Concepts (C/P/T) | Expert Minutes/ Min / concept | Naïve Minutes / Min / concept |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

Note: until we do several of these, we won’t know how many minutes per concept we need to get to “good” nor which of the three concept metrics is most telling.

 After reviewing this material, assess how confident you are in the accuracy of the ontology:

## Procedure 1 – Size the reachable ontology

 Load the ontology with all the imports into protégé.  This is all the concepts that are potentially available and to be understood by a reviewer.  Note in most cases much of this will be out of scope to the review, but lets capture it anyway and see where we get to.  In the case the size is 189/146/33

 Generally the instances are taxonomic, in this case many of them are units of measure, but that isn’t too far from categorical instances.  Interestingly, SMEs seem to be very fascinated by the CBox.

![](/attachments/1226244097/1226375175.png)

## Procedure 2 – Size the referenced Ontology

If you delete all the imports from Protégé you get these counts, which are all the classes you added or referred to.  This may likely be an undercount for the ontology size, as you may directly create instances of classes that you imported but it gives a second measure.

 In this case our size would be 69/24/15. (maybe those instances really are categories, seems odd they didn’t go down)

![](/attachments/1226244097/1226309639.png)

## Procedure 3 – size the populated ontology

 Load the ontology into a triple store and run this query

### Populated Classes

SELECT ?class (COUNT(?i) AS ?count)

WHERE {

  ?class rdf:type owl:Class .

  ?i rdf:type ?class .

  }

GROUP BY ?class

ORDER BY DESC(?count)

 This will give a list of populated classes.  We should probably eliminate architectural classes, and maybe make a cutoff (classes with less than 5 instances don’t count)

 In this case timecard had 92 populated classes, but 28 were either architectural or has fewer than 3 instances.  So let’s call populated classes 64

### Populated Properties

This conveniently eliminates most of the owl and rdf triples (which don’t need reviewing)

 SELECT ?p ?pType (COUNT(?i) AS ?count)

WHERE {

  ?i ?p ?o .

  ?p rdf:type ?pType

  }

GROUP BY ?pType ?p

ORDER BY DESC(?count)

 Time card had 79 used properties.

### CBox

This query

SELECT ?cat (COUNT(?i) AS ?count)

WHERE {

  ?cat  rdf:type owl:Class .

  ?cat rdfs:subClassOf+ gist:Category .

  ?i rdf:type ?cat .

  }

GROUP BY ?cat

ORDER BY DESC(?count)

 Gives us the CBox, showing us that we’ve populated 12 Taxonomies (already counted in the class count above, but just for general interest

 Summarized we have 49 taxo intances

SELECT  (COUNT(?i) AS ?count)

WHERE {

  ?cat  rdf:type owl:Class .

  ?cat rdfs:subClassOf+ gist:Category .

  ?i rdf:type ?cat .

  }

ORDER BY DESC(?count)

 So the populated size of the time card database is

64/79/69

## Procedure 4—How many people reviewed the ontology

 Ask around and find out who has reviewed the ontology in any detail.  Divide them into two categories: subject matter experts in the domain and everyone else.

|  |  |
| --- | --- |
|  | Number of reviewers |
| Domain SMEs |  |
| Others |  |

## Procedure 5 – Time Spent per Ontology

 We’d like to get a sense for how much quality time was spent reviewing the ontology

 A query something like this one that Mark Wallace came up with

 select ?commentType ?commentText ?reviewerName ?slideNumber ?presentationName  
where {  
?commentURI rdf:type dcao:ReviewNote .  
?commentURI gist:regarding ?slideURI .  
?slideURI gist:directPartOf ?presentationURI .  
?presentationURI gist:name ?presentationName .  
?slideURI gist:sequence ?slideNumber .  
?commentURI gist:categorizedBy ?commentType .  
?commentURI dcao:user ?reviewerName  
OPTIONAL {  
?commentURI gist:containedText ?commentText .  
}  
}

 This tells us the total number of people who reviewed a slide.  It also says whether they had a comment.  We should consider, most comments other than disagreement to be evidence of review and of accuracy.

A lot of “got it” is ok but some actual feedback even better.

 We’re looking at adding the time spent reviewing the presentation and using that as a proxy.

 For projects that used slow reveal this will give a much more objective number.

 If you can get this, or even just estimate it from interviews, then fill in the last column

|  |  |  |
| --- | --- | --- |
|  | Number of reviewers | Total number of Hours spent reviewing |
| Domain SMEs |  |  |
| Others |  |  |
