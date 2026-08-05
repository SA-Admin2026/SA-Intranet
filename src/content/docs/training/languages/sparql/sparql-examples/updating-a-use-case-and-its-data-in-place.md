---
title: "Updating a Use Case and its Data in Place"
confluence_id: 27688965
source: "Updating-a-Use-Case-and-its-Data-in-Place_27688965.html"
---

Situation: a use case changes by either adding new fields or removing existing fields.

Goal: update the existing data that was created using the old use case so that it matches the current use case.

Challenge: do so and maintain ability to edit the old use cases.

Approach:  Identify the graph (e.g. bp:\_TNAN17866) and add/remove triples as needed to/from that graph.

# Removing some fields.

Steps Summary:

1. remove unwanted triples
2. reload null data graph as needed
   1. DROP GRAPH sa:\_\_NullStuff-2016-07-11\_\_
   2. Import RDF from uploaded file
3. Update the use case
4. Test if edit still works

# Removing unwanted triples for new version of use case

Example: ProjectIdea needs to have a field removed.

The current use case and what is to be removed is listed below:

![](/attachments/27688965/27688967.png)

The following ProjectIdeas are in the TS.

![](/attachments/27688965/27688969.png) ProjectIdeas:

 We want to remove two before we do our update operation.

Use the following query to find what graphs the use case used when adding each new ProjectIdea

```
# Find named graphs where instances of a class were added.  
SELECT ?i ?name ?g   
WHERE {   
 GRAPH ?g { ?i rdf:type ?class . optional {?i gist:name ?name}}  
 VALUES ?class { sa:ProjectIdea }  
 }
```

Here are the results, highlighting the ones we want to delete.

| i | name | g |
| --- | --- | --- |
| [sa:\_ProjectIdea\_unspecified](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23_ProjectIdea_unspecified%3E) | ["project idea unspecified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22project%20idea%20unspecified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | [sa:\_\_NullStuff-2016-07-11\_\_](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23__NullStuff-2016-07-11__%3E) |
| [sa:114118](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114118%3E) | ["Semantics Workshop"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Semantics%20Workshop%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | [bp:\_TNAN17928](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17928%3E) |
| [sa:114037](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114037%3E) | ["Test FED Idea"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Test%20FED%20Idea%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) |
| [sa:114026](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114026%3E) | ["Semantics Workshop"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Semantics%20Workshop%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) |

 It is best to first look at all the triples you want to delete, before deleting them. Use this query:

```
# Find all triples in one or more given named graphs.  
SELECT ?g ?s ?c ?p ?o   
WHERE {   
 GRAPH ?g { ?s ?p ?o. optional {?s rdf:type ?c}}  
 VALUES ?g { bp:_TNAN17920 bp:_TNAN17922   
 }  
 } order by ?g ?s ?c
```

Here are the results, showing the triples you want to remove. The **s**, **p** & **o**, are what you expect in a triple. The **c**(lass) is just a handy way to know what kind of thing the subject is.

| g | s | c | p | o |
| --- | --- | --- | --- | --- |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114023](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114023%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) | [gist:containedText](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23containedText%3E) | ["Make SIRI group aware of the benefits of semantic technology so that they can find ways to leverage it. "](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Make%20SIRI%20group%20aware%20of%20the%20benefits%20of%20semantic%20technology%20so%20that%20they%20can%20find%20ways%20to%20leverage%20it.%20%22) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114023](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114023%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) | [rdf:type](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114024](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114024%3E) | [gist:Goal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Goal%3E) | [gist:describedIn](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23describedIn%3E) | [sa:114023](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114023%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114024](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114024%3E) | [gist:Goal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Goal%3E) | [gist:name](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23name%3E) | ["Learn basic semantic technology"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Learn%20basic%20semantic%20technology%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114024](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114024%3E) | [gist:Goal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Goal%3E) | [rdf:type](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E) | [gist:Goal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Goal%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114025](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114025%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) | [gist:containedText](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23containedText%3E) | ["Give a one-day workshop introducing semantic technology."](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Give%20a%20one-day%20workshop%20introducing%20semantic%20technology.%22) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114025](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114025%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) | [rdf:type](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114026](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114026%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [gist:name](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23name%3E) | ["Semantics Workshop"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Semantics%20Workshop%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114026](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114026%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [gist:connectedTo](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23connectedTo%3E) | [sa:113823](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23113823%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114026](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114026%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [gist:describedIn](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23describedIn%3E) | [sa:114025](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114025%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114026](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114026%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [gist:hasGoal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23hasGoal%3E) | [sa:114024](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114024%3E) |
| [bp:\_TNAN17920](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17920%3E) | [sa:114026](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114026%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [rdf:type](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114034](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114034%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) | [gist:containedText](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23containedText%3E) | ["No really, go get em like never before"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22No%20really,%20go%20get%20em%20like%20never%20before%22) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114034](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114034%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) | [rdf:type](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114035](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114035%3E) | [gist:Goal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Goal%3E) | [gist:describedIn](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23describedIn%3E) | [sa:114034](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114034%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114035](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114035%3E) | [gist:Goal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Goal%3E) | [gist:name](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23name%3E) | ["Go get em"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Go%20get%20em%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114035](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114035%3E) | [gist:Goal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Goal%3E) | [rdf:type](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E) | [gist:Goal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Goal%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114036](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114036%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) | [gist:containedText](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23containedText%3E) | ["We fix their enterprise architecture."](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22We%20fix%20their%20enterprise%20architecture.%22) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114036](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114036%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) | [rdf:type](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E) | [gist:Text](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23Text%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114037](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114037%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [gist:name](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23name%3E) | ["Test FED Idea"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Test%20FED%20Idea%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114037](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114037%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [gist:connectedTo](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23connectedTo%3E) | [sa:114032](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114032%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114037](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114037%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [gist:describedIn](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23describedIn%3E) | [sa:114036](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114036%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114037](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114037%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [gist:hasGoal](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/gist%23hasGoal%3E) | [sa:114035](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114035%3E) |
| [bp:\_TNAN17922](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17922%3E) | [sa:114037](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114037%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) | [rdf:type](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E) | [sa:ProjectIdea](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23ProjectIdea%3E) |

Verify that the structure of the use case matches these sets of triples. If not, there is something wrong.

The easiest way to delete these triples is to use DROP GRAPH

```
DROP GRAPH bp:_TNAN17922
```

```
DROP GRAPH bp:_TNAN17920
```

After executing this, that query above now returns no triples. This is good.

NEXT: remove unwanted triples from the use cases we want to keep.

I added one more to show how it works for two. with the two deleted and one more added, we now have:

| name | lead | org | goal | goalDesc | projectDesc |  |
| --- | --- | --- | --- | --- | --- | --- |
| project idea unspecified | lead unspecified | organization unspecified | goal unnamed | no description | no description | [Edit](http://ibeam.semanticarts.com/mfu-pipelog-dev/project-idea/edit_entry?context=sa:_ProjectIdea_unspecified)[Delete](http://ibeam.semanticarts.com/mfu-pipelog-dev/project-idea/remove?context=sa:_ProjectIdea_unspecified) |
| PoC RDB and Taxonomy to Triple Store | Stephanie Lemieux | Dovecot Studio | Demonstrate some benefits of semtech to bosses. | SHow how great inference is. | Create product ontology and convert taxonomy to TS and load some data using R2RML. | [Edit](http://ibeam.semanticarts.com/mfu-pipelog-dev/project-idea/edit_entry?context=sa:114223)[Delete](http://ibeam.semanticarts.com/mfu-pipelog-dev/project-idea/remove?context=sa:114223) |
| Semantics Workshop | Mark Drummond | Apple | SIRI team has basic understanding of semantics | SIRI team undersatnds basics of can leverage semantic technology. | Teach SIRI team the value of semantics. Give a one day workshop overivew of semantic technology with specific examples |

The graphs that these were asserted into are:

| i | name | g |
| --- | --- | --- |
| [sa:114118](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114118%3E) | ["Semantics Workshop"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22Semantics%20Workshop%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | [bp:\_TNAN17928](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17928%3E) |
| [sa:114223](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23114223%3E) | ["PoC RDB and Taxonomy to Triple Store"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22PoC%20RDB%20and%20Taxonomy%20to%20Triple%20Store%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | [bp:\_TNAN17952](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/backplane%23_TNAN17952%3E) |
| [sa:\_ProjectIdea\_unspecified](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23_ProjectIdea_unspecified%3E) | ["project idea unspecified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%22project%20idea%20unspecified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | [sa:\_\_NullStuff-2016-07-11\_\_](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23__NullStuff-2016-07-11__%3E) |

**Special Case: Null Data**

The graph called [sa:\_\_NullStuff-2016-07-11\_\_](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev#node/%3Chttp://ontologies.semanticarts.com/SemArts%23__NullStuff-2016-07-11__%3E) has a variety of nulls in it used for not specified.

The definition in the nult data ABox needs to change. The ProjectIdea\_unspecified individual can stay the way it is, what changes is the unspecified goal individual which no longer needs a description.

![](/attachments/27688965/27688982.png)

Goal\_unspecified changes  FROM: ![](/attachments/27688965/27688983.png)   TO: ![](/attachments/27688965/27688984.png)

In any event, you need to go change the null data ABox. Two way to approach this.

1. IDEALLY: Export the owl right away and then reload the new version of the null data ABox replacing the old one in the repo.
2. ALSO POSSIBLE, but a tad RISKY: : don't reload the new null data ABox now, just manually delete the triples not wanted as described below. The next time the null data is brought over it will be in synch.:

We just want to remove two triples from each project idea graph.

1. Goal describedIn Text
2. Text containtedText string

The triples that need to be removed are:

![](/attachments/27688965/27688979.png)

Found using this query:

```
CONSTRUCT {?goal gist:describedIn ?text.  
 ?text gist:containedText ?string.}
```

```
WHERE { VALUES ?g {sa:__NullStuff-2016-07-11__}
```

```
{GRAPH ?g   
 {?x rdf:type sa:ProjectIdea.  
 ?x gist:hasGoal ?goal.  
 ?goal gist:describedIn ?text.  
 ?text gist:containedText ?string. }}}
```

For the other two cases, the tripels we want to remove are found by changing the values statement above to:

```
VALUES ?g {bp:_TNAN17952 bp:_TNAN17928}
```

This results in:

![](/attachments/27688965/27688976.png)

```

```

There are so few, you can easily just delete them manually. If there were more, you would want to do it with an update query.  Just replace the CONSTRUCT with a DELETE . Then you can confirm that what happened was correct by noticing the triple count in the repo went down by 4, and also when you re-run the CONSTRUCT query, you get no results.

**Update Display Query**

None of the project ideas show up now in the use case, because the display query expects to see the goal description. IN this case I just made the unused field optional, later I will remove it when I change the use case itself.  The project ideas show up fine.

**See if Edit works.**

But they are no longer editable. Hmmmm. Maybe that's ok, since the fields no longer match. 

**Change the use case to remove the uneeded bit.**

I removed the exttra stuff, and lo and behold, the existing data is now editable!

# Adding a new field

Steps Summary:

1. Decide what you want to add, in general terms
2. Examine existing individuals in the use case and in the TS.
3. Decide what triples you want to add for a given individual,  and exactly how you will change the use case.
4. Specify the values that will be added.
   1. IF there are just a handful, make a note of it, this will go into a VALUES clause later on.
   2. ELSE: 
      1. export the list of individuals to a spreadsheet
      2. enter values for each individual
      3. keep it handy, you will cut and past these into a VALUES clause later.
5. Update the ontologies if necessary
   1. decide what if anything needs to change in the ontology(s)
   2. If necessary, add to the agile TBox ,and replace the existing TBox with the new one
   3. If necessary, update the null data ABox (i.e. the use case class has a null data individual)
      1. change the ontology (e.g. in Visio)
      2. replace the graph in the TS with a new graph with the updated ABox
   4. OPTIONAL: make draft changes to the use case in NailGun, but don't save yet. This is a way to partially test the ontology changes.
6. Add the triples
   1. CRITICALLY IMPORTANT: make sure that the triples are added to the same graph that the individual was asserted into.
   2. If there are just a few triples, you might want to use INSERT DATA and do it all manually, other wise...
   3. Write an CONSTRUCT query to get exactly the triples you want to add to the existing individuals in the TS that will match the new use case.
   4. Change the CONSTRUCT to INSERT
   5. Run the query, be sure to check the triples count before and after so it matches.
7. Update the display query in the use case and see if the individuals show up as they should
8. Change the use case
9. Try to edit an existing individual
10. Add a new individual and try to edit that
11. Edit one of the original individuals again to make sure it all works.

**Decide what to add**

I will add a project budget field, just for practice, since I will be adding this to Project for real. Sticking with same use case to change as little as possible.

**Examine existing individuals**

From the use case:

| name | lead | org | goal | projectDesc |  |
| --- | --- | --- | --- | --- | --- |
| project idea unspecified | lead unspecified | organization unspecified | goal unnamed | no description |  |
| PoC RDB and Taxonomy to Triple Store | Stephanie Lemieux | Dovecot Studio | Demonstrate some benefits of semtech to bosses. | Create product ontology and convert taxonomy to TS and load some data using R2RML. |  |
| Semantics Workshop | Mark Drummond | Apple | SIRI team has basic understanding of semantics | Teach SIRI team the value of semantics. Give a one day workshop overivew of semantic technology with specific examples |  |

Use the following query to find what graphs the use case used when adding each new ProjectIdea

```
# Find named graphs where instances of a class were added.  
SELECT ?i ?name ?g # ?i is for individual  
WHERE {   
 GRAPH ?g { ?i rdf:type ?class . optional {?i gist:name ?name}}  
 VALUES ?class { sa:ProjectIdea }  
 }
```

![](/attachments/27688965/27688986.png)

**Decide what triples to add**

I want to add:

1. ProjectIdea gist:hasMagnitude gist:Monetary
2. Monetary    gist:hasUom           gist:uSDollar
3. Monetary    gist:decimalValue  xsd:double

**Specify any new values**

Each individual will need some values (objects of triples).  In this case, the dollar amount in the 3rd triple. that are needed for each individual. In this case, we will use $60k for sa:114118 and $100k for sa:114223.  We only need to enter the decimal number.  These will go into a values statement used in the INSERT query.  Like this:

```
VALUES (?uri ?budget) # Budget for each individual  
      {(sa:114118 "6E4"^^xsd:double)   
       (sa:114223 "1E5"^^xsd:double)
```

If there are more than a dozen or two, this might be a pain. In that case, you can do a query to get all the individuals and export them to a spreadsheet and edit the values there, and then cut/paste that into a bigger values statement.  If you don't care what a value is, enter a blank or a zero or something if it is a literal. If it is an individual, then you will want to replace it with an appropriate instance of NullData. You might be able to just use one that exists, or else you might have to add one to the null data items ontology.

This is mostly straight-forward. The only thing to decide is how to create a uniqule URI for the new instance of Monetary. These are usually created automatically. Here is a CONSTRUCT query that does the job.

WARNING:

Intead of entering a 0, you migth be tempted to use an unspecified NullThing. Only do this if the use case itself offers it as a dropdown option. Do not do the folowing:

```
sa:114223 gist:hasMagnitude bp:_TNAN17952_Monetary   
bp:_TNAN17952_Monetary gist:hasUoM         gist:uSDollar   
bp:_TNAN17952_Monetary gist:decimalValue   "1.0E5"
```

```
sa:114118              gist:hasMagnitude    sa:_Monetary_zeroUSD
```

Don't do it because the pattern will be messed up for editing that use case. Just enter 0 and get the same effect, or a blank if a string in another situation.  Only use an instance of NullThing if it is one of the options in a dropdown in the use case that you are adding. In this case, there is none.

**Update the Ontologies as needed**.

If you are adding something to the use case, you might be adding a new property or class. If not, go to the next step. Other wise you must make some changes to the model, make a new TBox and the replace the current TBox.

OPTIONAL: one way to test the ontology change is to make draft changes  to the use case to make sure you did not misspell or forget something. Do not save the use case, because that will mess up ability to see the old use case if you need to.

In this case, nothing needs to change in the TBox.  However, I might have used hasMagnitude some ProjectBudget instead. In that case, you need to add that class to the ontology and possibly add a corresponding NullThing instance to allow for an unspecified ProjectBudget.

However, there is a change the needs to be made to the

**Add the triples**

You will first write a CONSTRUCT query to create the triples you want to add, to the existing individuals in the TS that will match the new use case. when you are satisfied they are correct, then change the construct to INSERT.

*Create CONSTRUCT query:*

You will use the VALUES you specified earlier in this query.  The following query was used for this test:

```
CONSTRUCT {  
 ?uriM gist:decimalValue ?budget;  
 gist:hasUoM gist:uSDollar.  
 ?uri gist:hasMagnitude ?uriM.  
 }
```

```
WHERE {  
 VALUES ?class {sa:ProjectIdea} # The use case class  
 VALUES (?uri ?budget) # Budget for each individual  
       {(sa:114118 "6E4"^^xsd:double)   
        (sa:114223 "1E5"^^xsd:double)  
 }  
 GRAPH ?g {?uri rdf:type ?class}
```

```
 BIND (URI(CONCAT(STR(?g),"_Monetary")) as ?uriM)  
  } order by desc(?uri)
```

The query is fairly straight-forward.  The triples this produces are listed below.  Note how I created a unique URI for the new Monetary instances. There may be a better way to generate URIs, but this has some advantages: It signifies that it was manually done, vs. by the system. It gives information about it.

```
sa:114223              gist:hasMagnitude bp:_TNAN17952_Monetary   
bp:_TNAN17952_Monetary gist:hasUoM       gist:uSDollar   
bp:_TNAN17952_Monetary gist:decimalValue "1.0E5"  
   
sa:114118              gist:hasMagnitude bp:_TNAN17928_Monetary   
bp:_TNAN17928_Monetary gist:hasUoM       gist:uSDollar   
bp:_TNAN17928_Monetary gist:decimalValue "6.0E4"
```

It could be made more efficient by including the URI of the use case class in the VALUES statement, to avoid looking it up again. This would be the obvious way to do it if there were many instances.

*Use INSERT to add the triples.*

Ideally, I would add the graph to the CONSTRUCT query so that also shows up so that all I need to do is literally change the CONSTRUCT to INSERT.  For example:

```
CONSTRUCT {  
GRAPH ?g {  
 ?uriM gist:decimalValue ?budget;  
 gist:hasUoM gist:uSDollar.  
 ?uri gist:hasMagnitude ?uriM.  
 } }
```

Unfortunately, I cannot find a way to to that.  See:

- <https://www.w3.org/TR/sparql11-query/#construct> (section 16.2)
- <http://stackoverflow.com/questions/18345908/construct-into-a-named-graph> (forum post)
- <https://jena.apache.org/documentation/query/construct-quad.html> (Jena/ARQ added this as a feature)

But it should work with an INSERT, inserting sets of 3 triples into different graphs in one go.   It works like this:

Change this:

```
CONSTRUCT {  
 ?uriM gist:decimalValue ?budget;  
 gist:hasUoM gist:uSDollar.  
 ?uri gist:hasMagnitude ?uriM.  
 }
```

to this:

```
CONSTRUCT {  
GRAPH ?g {  
 ?uriM gist:decimalValue ?budget;  
 gist:hasUoM gist:uSDollar.  
 ?uri gist:hasMagnitude ?uriM.  
 } }
```

and leave the rest of the query the same. This does not give a warm fuzzy by being certain what triples will go in correctly into the rigght graph, but I cannot find a way around that.  You also need to remove the order by statement which is no longer relevant. The complete new query is:

```
INSERT {  
GRAPH ?g {  
 ?uriM gist:decimalValue ?budget;  
 gist:hasUoM gist:uSDollar.  
 ?uri gist:hasMagnitude ?uriM.  
          }}
```

```
WHERE {  
 VALUES ?class {sa:ProjectIdea} # The use case class  
 VALUES (?uri ?budget) # Budget for each individual  
       {(sa:114118 "6E4"^^xsd:double)   
        (sa:114223 "1E5"^^xsd:double)  
 }  
 GRAPH ?g {?uri rdf:type ?class}
```

```
 BIND (URI(CONCAT(STR(?g),"_Monetary")) as ?uriM)  
  }
```

1. Look at the number of triples in the repo
2. Get a count of the number of triples you want to add
3. Change the CONSTRUCT to INSERT into the variable named graph and run the query.
4. Verify that the number of triples in the repo is incremented by number of triples you added (in this case, 6).

*Good practice:*It is a good idea to run various queries to verify that what should have happened did happen and happened that should not have. In this case, I ran a query showing all the triples for the graph bp:\_TNAN17952 and we can see that the triples have been correctly asserted.

```
# Find all triples in one or more given named graphs.  
SELECT ?g ?s ?c ?p ?o   
WHERE {   
 GRAPH ?g { ?s ?p ?o. optional {?s rdf:type ?c}}  
 VALUES ?g { bp:_TNAN17952 }  
 } order by ?g ?s
```

![](/attachments/27688965/28049427.png)

**Update the display query**

At this point, the display query will not work properly, so update it to see the new information.  Initially you might just want to test it not save it. In this case, I added a variable ?budget, which works fine, but for one thing. There is no budget for the unspecified project idea.

Output

| name | lead | org | goal | budget | projectDesc |
| --- | --- | --- | --- | --- | --- |
| project idea unspecified | lead unspecified | organization unspecified | goal unnamed | None | no description |
| PoC RDB and Taxonomy to Triple Store | Stephanie Lemieux | Dovecot Studio | Demonstrate some benefits of semtech to bosses. | 1.0E5 | Create product ontology and convert taxonomy to TS and load some data using R2RML. |
| Semantics Workshop | Mark Drummond | Apple | SIRI team has basic understanding of semantics | 6.0E4 | Teach SIRI team the value of semantics. Give a one day workshop overivew of semantic technology with specific examples |

```
 
```

This means I forgot to upated the nullData ontology in a prior step. I needed to add a trilple connecting sa:\_ProjectIdea\_unspecified to sa:\_Monetary\_zeroUSD.  Now it has the exact same shape as the others, which is important to keep things cleanly working. Adding this new connection resulted in adding three new triples in the same pattern. Running the query again correctly shows a 0 in the budget column.

OOPS: this does not see right, should have only added 1 triple, since the other two existed already in the pattern of 3. Not sure what that is about. Possibly triples are duplicated? No good answer for this. SKip it for now.

**Update the use case**

I drafed this before, so now all I need to do is save the display question and the use case, after checking int over one more time.

Here is the new bit of the use case hanging directly off of the top ProjectIdea node:

![](/attachments/27688965/28049428.png)

**Try editing an existing individual**

Does not work.

**Add a new individual and try to edit that.**

Also did not work. Weird.

**Decide what to add**

Add a new field to Opportunity use case: gist:basedOn some ProjectIdea

**Examine existing individuals**

Opportunities:

| uri | name | sponsor | contact | summary | status | value | ltr |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [sa:128931](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23128931%3E) | ["Semantics-based search"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Semantics-based%20search%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Euromonitor"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Euromonitor%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Earl Spooner"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Earl%20Spooner%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Add semantics to their taxonomy-based search. Work alongside @StephanieLemieux"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Add%20semantics%20to%20their%20taxonomy-based%20search.%20Work%20alongside%20@StephanieLemieux%22) | ["Pending"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Pending%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["4.2E4"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%224.2E4%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23float%3E) | ["6.0E-1 W403-416 "](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%226.0E-1%20W403-416%20%22) |
| [sa:128919](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23128919%3E) | ["Taxonomy to Ontology Planning Workshop"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Taxonomy%20to%20Ontology%20Planning%20Workshop%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Dovecot Studio"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Dovecot%20Studio%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Stephanie Lemieux"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Stephanie%20Lemieux%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["1.5 day workshop to clarify value of converting the taxonomy to the ontology and set a future path."](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%221.5%20day%20workshop%20to%20clarify%20value%20of%20converting%20the%20taxonomy%20to%20the%20ontology%20and%20set%20a%20future%20path.%22) | ["Declined"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Declined%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["6.3E3"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%226.3E3%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23float%3E) | ["6.0E-1 W401-401 "](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%226.0E-1%20W401-401%20%22) |
| [sa:\_Opportunity\_unquantified](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23_Opportunity_unquantified%3E) | ["opportunity unquantified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22opportunity%20unquantified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["organization unspecified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22organization%20unspecified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["person unspecified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22person%20unspecified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["no summary"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22no%20summary%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Unspecified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Unspecified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["0.0E0"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%220.0E0%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23float%3E) | ["0.0E0 W0-0 "](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%220.0E0%20W0-0%20%22) |
| [sa:128945](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23128945%3E) | ["Apple semantic training"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Apple%20semantic%20training%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Apple"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Apple%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Mark Drummond"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Mark%20Drummond%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["One day training to provide both a breadth first look at semantics, so that everyone can start with the same basic concepts and vocabulary, and then to go deep in the areas of interest for the group."](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22One%20day%20training%20to%20provide%20both%20a%20breadth%20first%20look%20at%20semantics,%20so%20that%20everyone%20can%20start%20with%20the%20same%20basic%20concepts%20and%20vocabulary,%20and%20then%20to%20go%20deep%20in%20the%20areas%20of%20interest%20for%20the%20group.%22) | ["Pending"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Pending%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["3.6E3"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%223.6E3%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23float%3E) |

Project Ideas:

| uri | name | lead | org | goal | budget | projectDesc |
| --- | --- | --- | --- | --- | --- | --- |
| [sa:128950](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23128950%3E) | ["Semantics Workshop for SIRI folk"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Semantics%20Workshop%20for%20SIRI%20folk%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Mark Drummond"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Mark%20Drummond%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["Apple"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Apple%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["SIRI team trained up on semantic technology"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22SIRI%20team%20trained%20up%20on%20semantic%20technology%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["4.0E3"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%224.0E3%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23float%3E) | ["Teach SIRI team the value of semantics. Give a one day workshop overview of semantic technology with specific examples."](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22Teach%20SIRI%20team%20the%20value%20of%20semantics.%20Give%20a%20one%20day%20workshop%20overview%20of%20semantic%20technology%20with%20specific%20examples.%22) |
| [sa:\_ProjectIdea\_unspecified](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23_ProjectIdea_unspecified%3E) | ["project idea unspecified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22project%20idea%20unspecified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["lead unspecified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22lead%20unspecified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["organization unspecified"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22organization%20unspecified%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["goal unnamed"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22goal%20unnamed%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) | ["0.0E0"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%220.0E0%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23float%3E) | ["no description"](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%22no%20description%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23string%3E) |

**Decide what triples to add**

**Each triple must be added to the graph it was asserted in.**

sa:128931 gist:basedOn [sa:\_ProjectIdea\_unspecified](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23_ProjectIdea_unspecified%3E).

sa:128919 gist:basedOn [sa:\_ProjectIdea\_unspecified](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23_ProjectIdea_unspecified%3E).

sa:128945 gist:basedOn [sa:128950](http://agraph.semanticarts.com/catalogs/ibeam-catalog/repositories/mfu-pipelog-dev-2#node/%3Chttp://ontologies.semanticarts.com/SemArts%23128950%3E).

**Specify any new values**

n/a

**Update the Ontologies as needed**

already updated, anticipating this change

**Add the triples**

```
INSERT DATA {
```

```
sa:128931 gist:basedOn sa:_ProjectIdea_unspecified.
```

```
sa:128919 gist:basedOn sa:_ProjectIdea_unspecified.
```

```
sa:128945 gist:basedOn sa:128950.
```

```
}
```

**Update the display query**

```
Added one line:   
OPTIONAL {?uri gist:basedOn / gist:name ?projectIdea. } 
```

New output:

| name | sponsor | contact | summary | projectIdea | status | value | ltr |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apple semantic training | Apple | Mark Drummond | One day training to provide both a breadth first look at semantics, so that everyone can start with the same basic concepts and vocabulary, and then to go deep in the areas of interest for the group. | Semantics Workshop for SIRI folk | Pending | 3600 | None |
| Semantics-based search | Euromonitor | Earl Spooner | Add semantics to their taxonomy-based search. Work alongside @StephanieLemieux | project idea unspecified | Pending | 42000 | 6.0E-1 W403-416 |
| Taxonomy to Ontology Planning Workshop | Dovecot Studio | Stephanie Lemieux | 1.5 day workshop to clarify value of converting the taxonomy to the ontology and set a future path. | project idea unspecified | Declined | 6300 | 6.0E-1 W401-401 |
| opportunity unquantified | organization unspecified | person unspecified | no summary | project idea unspecified | Unspecified | 0 | 0.0E0 W0-0 |
|  |  |  |  |  |  |  |

**Update the use case**

**![](/attachments/27688965/29556742.png)**

Be sure to save it!

**Try editing an existing individual**

Did not work, I forgot to add them to the original named graph. Grrrr!

**Add a new individual and try to edit that.**

Also did not work.
