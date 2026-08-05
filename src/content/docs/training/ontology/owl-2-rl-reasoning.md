---
title: "OWL 2 RL Reasoning"
confluence_id: 2377908225
source: "OWL-2-RL-Reasoning_2377908225.html"
---

RDFox, which uses an OWL 2 RL reasoner, generates the warning in the attached text file when gist 11.1.0 is loaded.

[![](https://semarts.atlassian.net/wiki/download/thumbnails/2377908225/gist11.1.0.txt?version=2&modificationDate=1680721705969&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/2377908225/2377908235.txt)

Below is the record of a Slack conversation with Valerio at OST on why RDFox and/or OWL 2 RL cannot process the restrictions.

## OWL DL to RL - Conversation with Valerio - 2023-04-04

**Rebecca**  [10:00 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680530609968969)

Hi Valerio, we want to develop a tool that will take an OWL DL ontology as input and output the RL version of that ontology so that we can load RL versions into RDFox. I was wondering if OST has or knows of a tool that can be used for this purpose. I imagine it has to involve materializing DL inferences to get, say, the subclass triples from the equivalences to intersections, and then the non-RL compliant stuff has to be dropped.

**Valerio**  [10:01 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680530477529299)

Is this so that you don't get any warnings from RDFox?

**Rebecca**  [10:03 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680530609968969)

yes

**Rebecca**  [10:04 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680530676978059)

The other purpose is to get the subclass axioms so that RDFox can use them to reason over

**Valerio**  [10:07 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680530826111619)

And would you want this in Turtle, or Functional Style?

[10:07](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680530875120809)

Or is it ok if they're all converted into Datalog?

**Rebecca**  [10:08 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680530906928529)

I prefer Turtle to functional

[10:08](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680530934946829)

For use with RDFox, datalog would be OK, but I was hoping to find or build a more general purpose tool.

**Valerio**  [10:10 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680531027154259)

One possible solution would be to import the axioms in dstore1, and separately, in dstore2 you import the axioms, turn the RL ones into datalog, export the datalog, and import it into dstore1 , so that you can query the axioms in dstore1 (and dstore2), and in dstore1 you also have the data with inferences

When you run importaxioms the axioms are turned into datalog.

**Rebecca**  [10:20 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680531629032139)

But the problem, I thought, is that since RL doesn’t process the

```
Class1 owl:equivalentClass owl:intersectionOf (ClassA ClassB ClassC)
```

it won’t generate the subclass inferences

```
Class1 rdfs:subClassOf ClassA, ClassB, ClassC .
```

**Valerio**  [10:24 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680531848753059)

Actually this inference should be made

[10:24](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680531882887449)

You will need to write this turtle however:

```
:Class1 a owl:Class ;
  owl:equivalentClass [
    a owl:Class;
    owl:intersectionOf (
      :ClassA
      :ClassB
      :ClassC)
  ] .

:ClassA a owl:Class .
:ClassB a owl:Class .
:ClassC a owl:Class .
```

**Valerio**  [10:29 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680532191481589)

I.e. you need to declare a bunch of classes. This is because OWL is quite strict in order to make sure that the ontology is valid.

[10:30](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680532239517379)

i.e.

```
:Class1 owl:equivalentClass :Class2 ; rdfs:subPropertyOf :propA .
```

would be invalid...

**Rebecca**  [10:31 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680532295194509)

Well, in our ontologies they’re declared as either classes or restrictions. The pattern we use is:

```
:Class1 a owl:Class ;
  owl:equivalentClass [
    a owl:Class;
    owl:intersectionOf (
      [ a owl:Restriction ; owl:onProperty :propX ; owl:allValuesFrom :ClassA ]
      :ClassB)
  ] .

:ClassB a owl:Class . # defined elsewhere in the ontology
```

[10:32](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680532371887199)

Does that work?

**Valerio**  [10:41 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680532862796149)

The problem here is with the restriction rather than the intersection

**Rebecca**  [11:02 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680534169873339)

So even if we were to turn that into

```
:Class1 a owl:Class ;
    rdfs:subClassOf :ClassB ,
    [ a owl:Restriction ; owl:onProperty :propX ; owl:allValuesFrom :ClassA ]
.

:ClassB a owl:Class . # defined elsewhere in the ontology
```

This wouldn’t work?

**Valerio**  [11:04 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680534273366439)

This would work. The issue is that owl:equivalentClass and owl:Restriction don't work together when the restriction is owl:someValuesFrom or owl:allValuesFrom

**Valerio**  [11:15 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680534935185059)

SVF and AVF are different. Let me explain

```
:Class1 a owl:Class ;
    rdfs:subClassOf [ 
        a owl:Restriction ; 
        owl:onProperty :propX ; 
        owl:allValuesFrom :ClassA 
    ]
.
```

means that

```
 if :john a :Class1 and :john :propX :alice then :alice a :ClassA .
```

This is fine.

If we try to say the converse, what do we get? John is a member of the restriction class if:

```
:john :propX :alice, :bob, ...    and 
:alice a :ClassA . :bob a :classA . ... a :ClassA
```

i.e. if  all of John's propX objects are of type :ClassA . This is not expressible in datalog (not without negation), and therefore not in RL. The rule might be something like this:

```
[?y, a, :NotA] :-
  [?y, :someProp, ?sthElse],
  NOT [?y, a, :ClassA] .

[?x, a, :Class1] :- 
  [?x, :someProp, ?sthElse], 
  NOT EXISTS ?y IN ([?x, :propX, ?y], [?y, a, :NotA]).
```

**Valerio**  [11:35 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680536151317429)

So only one of the two directions works. With owl:SomeValuesFrom (aka SVF), the same is true, except that the direction that works is the opposite direction.

I cay say that:

```
:ParentOfMale a owl:Class ;
 rdfs:subClassOf [
   a owl:Restriction ;
   owl:OnProperty :hasChild ;
   owl:SomeValuesFrom :Male ] .
```

This says that

```
if :john a :ParentOfMale then there exists  some :x such that:

:john :hasChild :x . :x a :Male
```

Obviously we cannot invent who this :x is, and also :x might already exist and then we'd have two...

This is known as an existential, and can be done with SKOLEM within RDFox, but not in OWL 2 RL.

```
[?x, :hasChild, ?y], [?y, a, :Male] :-
  [?x, a, :ParentOfMale],
  SKOLEM("someMaleChild", ?x, ?y) .
```

The other direction of inference on the other hand is very straightforward:

```
:john :hasChild :harry. :harry a :Male   --> :john  a :ParentOfMale
```

**Rebecca**  [11:42 AM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680536562749469)

When you say “Obviously we cannot invent who this :x is, and also :x might already exist and then we’d have two...” - it could be that the two things are the same - i.e., different IRIs for the same object - though depending on other axioms this could result in a contradiction. And how does the RDFox skolemization sidestep the problem of possibly two?

**Thread: 3 replies**

**Valerio**

Yes, they could be the same, or only one, this is for another axiom to decide.

Skolemisation won't sidestep the issue, but the issue is only an issue in RL, which is a standard -- I was just trying to explain why the standard is as it is.

If you do use skolemisation, then. you have more freedom, but at the same time need to ensure that there are no issues.

**End thread**

**Rebecca**  [12:03 PM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680537805465259)

And the logic makes sense with the cardinality warnings I’m seeing as well. E.g., minCardinality and cardinality are existential, and maxCardinality  and oneOf work like allValuesFrom, So the upshot is that the existential quantifiers are expressible in RDFox but not OWL 2 RL, and the universal quantifiers are not expressible in either.

**Thread: 1 reply**

**Valerio**

Universals are difficult in RDFox in general yeah, but I think they can be expressed using the approach above with negation.

**End thread**

**Rebecca**  [12:04 PM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680537890149629)

It seems the best we can do is create the explicit subclass axioms from the equivalences so at least the named classes are handled by RL, and if we wanted a solution tailored to RDFox we could also include the existential restrictions.

**Valerio**  [12:51 PM](https://oxfordsemantictech.slack.com/archives/D02GG2B1JCC/p1680540709784219)

That makes sense.
