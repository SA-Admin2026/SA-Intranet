---
title: "Property Definitions"
confluence_id: 2381185071
source: "Property-Definitions_2381185071.html"
---
# WIP Published by mistake - please do not comment yet.

Follow-up to [Ontology Knowledge Exchange](#) meeting 2023-03-28 and proposal for discussion at a subsequent meeting.

If we can come to consensus on these guidelines they can be included in the [gist style guide](https://github.com/semanticarts/gist/blob/develop/docs/gistStyleGuide.md).

# Circularity

*Should we avoid the use of the English word in the definition in order to prevent a circular definition?*

Consensus seems to be no, provided the English word is sufficiently similar in meaning to the local name of the property. Unlike a dictionary, we are not defining English words in terms of other English words, in which case reuse of the word in its own definition would be circular. In an ontology we are defining ontology concepts using English words, in which case there’s no actual circularity.

Having said that, a definition that repeats the local name with no additional clarification feels odd:

```
:name 
  a owl:DatatypeProperty ;
  skos:definition "Name." .
  
:name 
  a owl:DatatypeProperty ;
  skos:definition "A name." .
```

Better?

```
:name
  a owl:DatatypeProperty ;
  skos:definition "A word or combination of words by which a person or thing is regularly known." ;
  .
```

# Datatype Properties

Bad:

```
gist:conversionOffset skos:definition "Add this number to get to the zero point." .
```

Proposal to use nouns. Examples

```
gist:actualEndDate skos:definition "The actual date that something ended, with precision of one day."
```

# Object Properties

This is where the complexity enters in. A guiding principle is that directionality *must* be indicated in the definition.

There are four possible structures an object property definition can take:

1. A noun phrase
2. A sentence
3. A verb phrase

1. Noun phrases cannot generally indicate direction and often do not contain enough information. Examples:

```
gist:isAbout skos:definition "Subject matter of a document." .
gist:goesToPlace skos:definition "Destination" .
gist:hasDirectSubTask skos:definition "Immediate child task" 
gist:hasParty skos:definition "The people or organizations participating in an event, agreement or obligation" .
```

Noun phrases using interrogative pronouns are bad for the same reason:

```
gist:hasOffsetToUniversal skos:definition "How many hours the time zone is off GMT" .
gist:hasPhysicalLocation skos:definition "Where something is located" .
```

2. Sentences can indicate directionality.   
a. Some people like to use “subject” and “object”:

```
gist:governs skos:definition "The subject controls or inhibits the object in some way." .
```

b. Some people use “relationship”. This can be awkward:

```
gist:governs skos:definition "The relationship of something to another thing that it controls or inhibits in some way." .
```

3. Verb phrases. Some people like verb phrases because a property is verbal.

a. Using the word “relates” or “links.” This can also be awkward, but less so than the bulky “relationship of…” in 2b.

```
gist:governs skos:definition "Relates something to another thing that it controls or inhibits in some way.".
gist:providesOrderFor skos:definition "Links a member of an ordered collection to the real-world item it represents in that collection." ;
```

This type of definition is less awkward when there is an implicit or explicit type of subject or object:

```
gist:hasNumerator skos:definition "Relates a ratio unit such as meter(s)/second to the numerator unit (e.g. meter)." .
```

Note: While generally we prefer examples to occur in `skos:example`s rather than in the definition, in some cases, as above, the meaning is unclear enough without the example that the example is warranted.

b. Infinitives seem like the wrong structure.

```
gist:hasMagnitude skos:definition "To have a comparable numeric value."
```

c. “Points to” (also bad):

```
gist:isCategorizedBy "Points to a taxonomy item or other less formally defined class." .
```

# General Considerations

*Should we use ontology terms or ordinary words in definitions and other annotations?* Example:

```
# Ordinary language. Not sure if datetime is a word. Other options: date and/or time (awkward), date/time
gist:ScheduledTask
	a owl:Class ;
	owl:equivalentClass [
		a owl:Class ;
		owl:intersectionOf (
			gist:ScheduledEvent
			gist:Task
		) ;
	] ;
	skos:definition "A task with a planned start datetime."^^xsd:string ;
	skos:prefLabel "Scheduled Task"^^xsd:string ;
	skos:scopeNote "If work on the task has already started, but has not yet ended, it will have an actual start datetime. If the task is completed, it will also have an actual end datetime. The task always retains its planned start time, and thus continues to be a scheduled task."^^xsd:string ;
	.
	
# Ontology classes (in caps)
gist:ScheduledTask
	a owl:Class ;
	owl:equivalentClass [
		a owl:Class ;
		owl:intersectionOf (
			gist:ScheduledEvent
			gist:Task
		) ;
	] ;
	skos:definition "A Task with a planned start datetime."^^xsd:string ;
	skos:prefLabel "Scheduled Task"^^xsd:string ;
	skos:scopeNote "If work on the Task has already started, but has not yet ended, it will have an actual start datetime. If the Task is completed, it will also have an actual end datetime. The Task always retains its planned start time, and thus continues to be a Scheduled Task."^^xsd:string ;
	.
	
# Ontology classes and properties
# Ontology classes (in caps)
gist:ScheduledTask
	a owl:Class ;
	owl:equivalentClass [
		a owl:Class ;
		owl:intersectionOf (
			gist:ScheduledEvent
			gist:Task
		) ;
	] ;
	skos:definition "A Task with a planned startDateTime."^^xsd:string ;
	skos:prefLabel "Scheduled Task"^^xsd:string ;
	skos:scopeNote "If work on the Task has already started, but has not yet ended, it will have an actualStartDateTime. If the Task is completed, it will also have an actualEndDateTime. The Task always retains its plannedStartDateTime, and thus continues to be a Scheduled Task."^^xsd:string ;
	.
```

My preference is for the ordinary language version.

*Definitions in which one term is defined solely in terms of others.* Example:
