---
title: "Sample Interview Questions"
confluence_id: 2621505540
source: Sample-Interview-Questions_2621505540.html
---

# Sample Interview Questions

## Background Questions

- Tell me about how you understand this role, why it interests you, and how your background qualifies you for it.
- How would you define success in this role?

  - If you got this job and worked at Semantic Arts for five years and you succeeded beyond your wildest dreams, what would you have accomplished in that time?
- How did you get interested in semantic technology?
- How does your background/degree help provide a foundation for your semantic work?
- What is your favorite part of your current job?
- What is your least favorite part of your current job?
- Why are you leaving your current job or considering other options?
- What size project teams have you worked on?
- For PhD holders: What was the topic of your dissertation? Speak briefly about it.
- Keep to questions that are job related, focus on determining qualification, and are justified by business purpose!
- *For applicants who’ve been asked to come back after improving their skills: What have you done to improve your skills since we last interviewed you?*

## Behavioral Questions

### Ideal Team Player Focused (Hungry, Humble, Smart)

**Humble**

- Tell me about the most important accomplishments of your career (look for “we”, not “I”).
- What was the most embarrassing moment in your career, or biggest failure? (Celebrate embarrassment, comfort with imperfect.)
- How did you handle that embarrassment or failure? (Accept responsibility and learn from it.)
- What is your greatest weakness? (Is it at least a little painful?)
- How do you handle apologies, either giving or accepting them? (Not afraid to say it and appreciate others that feel the same.)
- Tell me about someone who is better than you in an area that really matters to you. (Appreciation for others, not ego-driven.)

**Hungry**

- What is the hardest you’ve ever worked on something in your life? (Real and joyful sacrifice, grateful.)
- What do you like to do when you’re not working? (Avoidance of too many time-consuming hobbies but a life outside of work.)
- Did you work hard when you were a teenager? (Looking for sacrifice and hardship, work ethic.)
- What kinds of hours do you generally work? (Flexibility, ok with unpredictability.)

**Smart**

*This is less about the questions and more about general behavior. Ideally finding ways to throw them off or move beyond traditional interview to see reaction. Ask yourself: Would I want to work with this person every day?*

- How would you describe your personality? (Introspective)
- What do you do that others in your personal life might find annoying? (Awareness of self)
- What kind of people annoy you the most, and how do you deal with them? (Pet peeves, can deal with them in others in a constructive, productive way)
- Would your former colleagues describe you as an empathic person? **or** Can you give me an example of how you’ve demonstrated empathy to a teammate? (Do they understand what others are feeling?)

### General Behavorial by Topic

![image-20220816-230936.png](/administrative/attachments/2621505540/2621702146.png)![image-20220816-231003.png](/administrative/attachments/2621505540/2621407254.png)

## Technical Questions

### General / Modeling / Design

- Describe one of your more satisfying modeling achievements where you solved a challenging problem in an elegant fashion. Specifically, what did you do?
- It is often but not always clear whether to model something as a class, a property or an individual. Describe some situations where it is not so clear. Tell us what some of the tradeoffs are and how you decide what is best in what kinds of circumstances.
- Are there instances in which you would recommend the use of a relational database over a knowledge graph?
- Describe a significant ontology (or model) you have designed and developed. What was the goal of the ontology (or model)? What language was it represented in? What tools did you use?  What was the outcome?
- What are the advantages of semantic modeling over traditional relational databases?
- What are the major differences between an ontology and other kinds of data models and schema? Why are these differences important?
- What are the major similarities and differences between an ontology, a taxonomy, a thesaurus, and a set of tags?
- Say a client had some existing taxonomies and you were building an enterprise ontology for them.  How would you relate the two to maximize reuse and minimize the workload for maintenance and governance moving forward? *[Looking for knowledge of how to represent tags and term hierarchies in OWL and link to formal definitions; looking for an understanding of how to do governance.]*
- What is a URI (IRI) and what is it for?
- Can one object have two URIs (IRIs)? If yes: what problems does that raise?
- Have you used any third party ontologies? What criteria do you use when deciding whether or not to use a particular third party ontology?
- What is the rough size of the largest ontology you’ve worked on, in terms of number of classes and properties? Is it weighted towards classes or properties?
- Discuss the pros and cons of OWL inferencing vs SPARQL “inferencing.”
- Have you looked at the gist ontology? What are your thoughts/impressions?
- What do you think about the schema ontology at <http://schema.org> ?

### OWL

- Describe how you decide whether to assert subclass relationships vs. allow inference to do it for you? *[Class Hierarchies]*
- What is the difference between object and data properties?
- How do you validate the logical consistency of an ontology?
- Do you know what symmetric, transitive, functional properties are?
- What is the difference between declaring that SocialBeing is a union of Person and Org vs. Person and Org are subclasses of SocialBeing?
- Describe the inferences that can be drawn using domain and range.
- How might domain and range in OWL be confusing for someone from a different modeling background?
- Describe when to use subproperty, and when would you perhaps not want to, even if the relationship were valid.
- How would you explain the concept of the “open world” to someone learning OWL?
- What are the most often used constructs in OWL when building ontologies?
- What does OWL add to RDF and RDFS?
- What are OWL property chains and what are their limitations?
- What would you expect to see in an OWL ontology? Relate each of these expected things to the use of an ontology.
- What do you know about reasoners and inferencing in OWL?
- What RDF and OWL axioms have you used, such as domains, ranges, restrictions? Give an example of a restriction.
- Sample OWL questions:

| **Question** | **Solution** |
| --- | --- |
| What can be inferred from the following two triples?  `:hasBirthDate rdfs:domain :Person .`  `:john :hasBirthDate "2022-04-12T00:00:00" .` | `:john a :Person .` |
| What does an OWL reasoner have to say about the following four triples?  `:hasBirthDate rdfs:domain :Person .`  `:john :hasBirthDate "2022-04-12T00:00:00" .`  `:Person owl:disjointWith :Dog .`  `:john a :Dog .` | The set of triples is inconsistent. |
| A Risk Event is any event that has an associated Risk Ranking. | Looking for OWL definition of class that would include things like parent class and some-values-from restriction.   - E.g., (pseudo owl)  `:RiskEvent  equivalentClass  ( :Event and ( categorizedBy  some  RiskRanking ) )` |
| In OWL, what would be inferred from this:  `:hasBiologicalMother a owl:FunctionalProperty.`  `:Mark :hasBiologicalMother :Anne.`  `:Mark :hasBiologicalMother :Tilly.` | `:Anne` and `:Tilly` are two IRIs for the same person (they are owl:sameAs). |

#### Family Tree Ontology

Supposes you were developing an ontology for family trees/genealogy.

- Considerations when deciding whether certain concepts should be classes or properties: sibling, parent, adult, birthdate/age. (You’d also like them to point out that birthdate is better than age, since it’s constant.)
- How would you represent that two people are married? (Usually they will use an object property.)
- How would you handle the fact that people can get married, divorced, widowed, remarried, etc.? (Looking for a temporal relation.)
- How would you relate someone to their brother? (Looking for an object property.)
- Is the hasBrother relationship: Functional/InverseFunctional/Reflexive/Irreflexive/Transitive/Symmetric? Include all that apply. (Looking for irreflexive only. A lot of people will say it’s symmetric, forgetting that the first person could be a sister.
- What might be the role of property chain axioms in this ontology? (e.g., hasGrandparent = hasParent/hasParent)
- Give an example of:

  - A transitive relationship (e.g., hasAncestor, hasRelative)
  - A symmetric relationship (e.g., hasSibling)
  - An asymmetric relationship (e.g., hasParent/hasChild)
  - A functional relationship (e.g., hasBiologicalMother)
  - An inverse functional relationship (e.g., isBiologicalMotherOf)
- What is the minimal set of properties you could define from which all familial relationships could be derived? (Answer: For genetic relationships, you only need `hasParent` or `hasChild`, and all other relationships can be derived from it. If you want to include marriage you will need a temporal relation with some properties.)

### SPARQL

- Write a query that tells us how many triples are in the database.  
  ANSWER: *select (count (?s) as ?count) {?s ?p ?o}*
- When and how do you use a GROUP BY construct?
- Describe how FILTER works using an example query.
- What is the first query you enter when exploring a new triplestore?
- How do you find all classes in a triplestore?
- How do you find the most popular classes in a triplestore?

#### DBPedia SPARQL Exercises:

[![](https://semarts.atlassian.net/wiki/download/thumbnails/2621505540/DBPedia%20SPARQL%20Exercises.txt?version=1&modificationDate=1755281383146&cacheVersion=1&api=v2&viewType=fileMacro)](/administrative/attachments/2621505540/3072065552.txt)

### SHACL

- When and how do you use SHACL vs OWL?

### Tools

- Have you used any tools that were specifically designed for developing ontology or model-driven software?  Tell us about your experiences. If you lack direct experience, tell us what the major advantages are of ontology/model-driven software engineering.
- What tools have you used for converting non-RDF data to RDF?

### Process

- Describe your process for developing and evaluating an ontology.
- How do you work with SMEs in the dev process?
