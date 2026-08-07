---
title: "SPARQL Examples"
confluence_id: 1474695
source: "SPARQL-Examples_1474695.html"
---
# Split an arbitrary IRI into its namespace and local name.

```
PREFIX  skos: <http://www.w3.org/2004/02/skos/core#>  
SELECT ?x ?namespace ?localname  WHERE  
{  
VALUES (?splitr                ?ns ?delim ?ln)  
      {("^(.*)(/|#)([^#/]*)$" "$1" "$2"  "$3")}  
  
VALUES ?x {skos:broader}  
BIND (REPLACE(STR(?x), ?splitr, ?ln) AS ?localname )  
BIND (CONCAT(REPLACE(STR(?x), ?splitr, ?ns),  
  
             REPLACE(STR(?x), ?splitr, ?delim)) as ?namespace)  
  
}
```

# List all properties whose URIs start with a particular string

```
# List all properties whose URIs start with a particular string
```

```
SELECT DISTINCT ?p   
WHERE {   
 ?p rdf:type owl:ObjectProperty .   
 # ?p rdf:type owl:DatatypeProperty .   
 BIND ("https://spec.edmcouncil.org/fibo" as ?str)   
 FILTER (strstarts(str(?p), ?str))  
} ORDER BY ?p
```

# List all named graphs with how many triples for each

```
# Lists all named graphs with how many triples for each.
```

```
SELECT DISTINCT ?g1(COUNT(?s) AS ?triplesPerGraph)
```

```
WHERE {
```

```
                  GRAPH ?g1
```

```
          {
```

```
          ?s ?p ?o  .
```

```
          }
```

```
# BIND (STR(?g1) as ?gstr)
```

```
# FILTER(!(STRSTARTS(STR(?g1),"http://ontologies.semanticarts.com/backplane#_TNAN")))
```

```
# FILTER(!(STRSTARTS(STR(?g1),"http://ontologies.semanticarts.com/temporal#pay_")))
```

```
}
```

```
GROUP BY ?g1
```

```
ORDER BY DESC(?triplesPerGraph)
```

```
 Sparql Examples
```

## Canonical Forms

(these are mostly to cut and paste to get started with)   
  
Select   
  
  
SELECT ?s ?p ?o ?type WHERE {  
?s ?p ?o  
#FILTER (regex(?o,"test","i"))  
#FILTER (?o IN (owl:Class, rdfs:Class) OPTIONAL {?s rdf:type ?type }  
}  
ORDER BY DESC(?o) LIMIT 100

#### # for comments

Construct   
CONSTRUCT {  
spo:\_PRODREF\_A9F89210 rdf:type ?stype .  
#Product ID  
spo:\_PRODREF\_A9F89210 ?p ?id . ?id rdf:type ?idtype . ?id ?p2 ?id\_o .  
#Product Description  
spo:\_PRODREF\_A9F89210 ?p3 ?desc . ?desc rdf:type ?desctype . ?desc ?p4 ?desc\_o .  
#Product Specs  
spo:\_PRODREF\_A9F89210 ?p9 ?spec . ?spec rdf:type ?spectype . ?spec ?p10 ?char1 . ?char1 rdfs:label ?charLabel .  
?spec ?p11 ?value1 . ?value1 ?p12 ?value\_o .  
} WHERE {  
spo:\_PRODREF\_A9F89210 rdf:type spo:ProductReference . spo:\_PRODREF\_A9F89210 rdf:type ?stype .  
#Product ID  
spo:\_PRODREF\_A9F89210 ?p ?id . spo:\_PRODREF\_A9F89210 gist:identifiedBy ?id . ?id rdf:type spo:ProductID . ?id rdf:type ?idtype . ?id ?p2  
?id\_o .  
#Product Description  
spo:\_PRODREF\_A9F89210 ?p3 ?desc . ?desc rdf:type spo:ProductReferenceDescription . ?desc rdf:type ?desctype . ?desc ?p4 ?desc\_o .   
#Product Spec Entry  
spo:\_PRODREF\_A9F89210 gist:specifiedBy ?spec . ?spec rdf:type gist:SpecEntry . spo:\_PRODREF\_A9F89210 ?p9 ?spec . ?spec rdf:type  
?spectype .  
?spec gist:ofCharacteristic ?char1 . ?spec ?p10 ?char1 . ?char1 rdfs:label ?charLabel .  
?spec gist:textValue|gist:equalTo|gist:greaterOrEqualTo|gist:lessOrEqualTo ?value1 . ?spec ?p11 ?value1 . ?value1 ?p12 ?value\_o . OPTIONAL {?spec ^spo:validWhen ?tabspec }  
}

## Insert

INSERT {  
?br gist:decimalValue ?rate .  
?br gist:hasUoM sa:\_dollarsPerHour .  
} WHERE  
{  
?br rdf:type sa:BillingRate .  
?br gist:numerator ?n . ?n gist:currencyValue ?rate .  
}

## INSERT DATA

INSERT DATA  
{  
GRAPH yhd:SampleShapes  
{  
yhd:\_shape1 rdf:type sh:Shape . yhd:\_shape1 rdfs:label "Shape1" . yhd:\_shape1 gist:identifiedBy yhd:\_ID1 . yhd:\_ID1 rdf:type gist:ID .  
yhd:\_ID1 gist:allocatedBy gist:\_repo1 .  
yhd:\_ID1 gist:uniqueText "Shpe001"^^xsd:string . gist:\_repo1 rdf:type gist:Repository .   
  
yhd:\_shape2 rdf:type sh:Shape . yhd:\_shape2 rdfs:label "Shape2" . yhd:\_shape2 gist:identifiedBy yhd:\_ID2 . yhd:\_ID2 rdf:type gist:ID .  
yhd:\_ID2 gist:allocatedBy gist:\_repo1 .  
yhd:\_ID2 gist:uniqueText "Shpe002"^^xsd:string . gist:\_repo1 rdf:type gist:Repository .   
}

## Delete

DELETE  
{  
?m1 ?p ?o  
} WHERE  
{?s rdf:type sa:BillingRate .  
?s (gist:numerator |gist:denominator) ?m1 . ?m1 ?p ?o .  
}

## Update

DELETE {?s gist:residentAt ?zip}  
INSERT {GRAPH <gist:update> {?s gist:residentAt "23663" }} WHERE {  
?s gist:residentAt ?zip . FILTER (?zip IN ("23662"))  
}   
  
DELETE {?s gist:decimalValue ?br} INSERT {?s gist:decimalValue ?rand }  
#SELECT ?s ?br (round((rand()\*10000)/100) AS ?rand) WHERE {?s a sa:BillingRate . ?s gist:decimalValue ?br . BIND(round((rand()\*10000)/100) AS ?rand)  
#FILTER (?s IN (sa:90625))  
}

1. note I should have used a longer interger to reduce the chance of collsion DELETE {?s gist:name ?name }  
   INSERT {?s gist:name ?newName }   
   #SELECT ?s ?name ?newName WHERE {  
   ?s a sa:Client . ?s gist:name ?name .  
   BIND(CONCAT("Client","-",STR(xsd:integer((round(rand()\*10000)))))AS ?newName ) FILTER (?s in (sa:91340))   
     

   ## Ask

     
     
     
   A SPARQL ASK Query that acts as a constraint   
   ASK {SELECT ?emp (COUNT(?name) AS ?nameCount )  
   WHERE {?emp rdf:type sa:Employee . OPTIONAL {?emp gist:name ?name} } GROUP BY ?emp HAVING((COUNT(?name)> 1 ) || (COUNT(?name) <1)) }   

   ## Describe

     
     
     
     
     
   DESCRIBE sa:\_person6   
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     

   ## Aggregates

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   Tbox (Meta) Queries   
     
   Instances by class   
     
     
   select ?class (Count(?i) AS ?instances) WHERE {?class rdf:type owl:Class .  
   ?i rdf:type ?class} Group By ?class  
   ORDER BY DESC(?instances)   
     

   ## Classes and superclasses

     
   select DISTINCT ?class ?super WHERE {  
   {?class rdf:type owl:Class . FILTER (!isBlank(?class))} UNION  
   { ?class rdf:type owl:Class . ?class rdfs:subClassOf\* ?super . FILTER (!isBlank(?class)) FILTER (!isBlank(?super)) FILTER (?class !=  
   ?super)}  
   }  
   ORDER BY ?super   
     

   ## Properties used

     
   select ?type ?prop (Count(?s) AS ?instances) WHERE {?prop rdf:type ?type .  
   ?s ?prop ?o .  
   FILTER (?type IN (owl:ObjectProperty, owl:DatatypeProperty))  
   }  
   Group By ?type ?prop  
   ORDER BY ?type DESC(?instances)   
     
     

   #### alternatively

     
     
   select ?p (Count(?s) AS ?instances) WHERE {  
   ?s ?p ?o .  
   }  
   Group By ?p  
   ORDER BY DESC(?instances)   
     

   ## Properties and superproperties

     
   select DISTINCT ?type ?prop ?superProp WHERE {  
   { ?prop rdf:type ?type .FILTER (?type IN (owl:ObjectProperty, owl:DatatypeProperty)) }  
   UNION   
   {?prop rdf:type ?type . ?prop rdfs:subPropertyOf\* ?superProp . FILTER (!isBlank(?superProp)) FILTER (?type IN (owl:ObjectProperty, owl:DatatypeProperty)) }   
     
     
   }   
   ORDER BY DESC(?type) ?superProp ?prop   
     

   ## How often is a value asserted

     
   SELECT (xsd:float(?products\_with\_segment)/xsd:float(?all\_products) AS ?percentage\_with\_segment) WHERE {  
   { SELECT (count(?product) as ?products\_with\_segment) { ?product gist:specifiedBy / gist:ofCharacteristic / spo:fieldName "D\_X\_MARKET\_SEGMENT" . } }  
   { SELECT (count(?product) as ?all\_products) { ?product a spo:ProductReference } } }   
     

   ## Tbox Vocabulary

     
   SELECT DISTINCT ?term ?type ?comment WHERE {  
   ?term ?prop ?type .  
   OPTIONAL {?term rdfs:comment ?comment } FILTER (?prop in (rdf:type))  
   FILTER (!isBlank(?term))  
   FILTER (?type IN (owl:ObjectProperty, owl:DatatypeProperty, owl:Class))  
   }  
   ORDER BY ?term   
     

   ## Getting all the Tbox (in prep for a Tbox-ectomy)

   **Then just substitute DELETE {?s ?p ?o}** **for the** **select**  
   SELECT DISTINCT ?s ?p ?o WHERE  
   {  
   {?s ?p ?o . ?s ?p1 ?o1 FILTER (?o1 IN (owl:DatatypeProperty, owl:ObjectProperty, owl:AnnotationProperty))} UNION  
   {?s ?p ?o . FILTER (isBlank(?s))} UNION  
   {?s ?p ?o . FILTER (?o IN (owl:Class))} UNION  
   {?s ?p ?o . FILTER (isBlank(?o))} UNION  
   {?s ?p ?o . ?s rdf:type ?o1 . FILTER (?o1 IN (owl:Class, owl:Ontology)) }   
     
     
   }   
     

   ## Getting rid of orphaned nodes

     
     
     
   **This would occur if you deleted a class that you had been using, or if you used a namespace and class without getting the** **definition.**   
   **We currently have 3 git:GeoCountry s that** \*are orphans\*SELECT ?instance ?type WHERE  
   {  
   ?instance rdf:type ?type .  
   FILTER (?type NOT IN (owl:ObjectProperty, owl:DatatypeProperty,owl:Class, owl:Ontology, owl:AnnotationProperty,  
   owl:TransitiveProperty, owl:FunctionalProperty, owl:SymmetricProperty, owl:InverseFunctionalProperty))  
   FILTER (!isBlank(?instance))  
   MINUS {?instance rdf:type / rdf:type owl:Class}  
   }   
     

   ## Orphaned predicates

     
   **This is meant to be run after the tbox ectomy** **to see what Tbox we removed that we still might need.**   
   **It is normal not to have rdf: and owl:** **properties without tBox** **info.**   
   **Note though several bp:properties (bp:authoredBy, bp:querySubject, bp:displayQuery, gist:hasPermission) do not** **have type** \*information,\*select ?pred (COUNT(?s) AS ?count) WHERE {  
   ?s ?pred ?o .  
   FILTER NOT EXISTS {?pred rdf:type ?type}  
   }  
   GROUP BY ?pred ORDER BY DESC(?count)   
     

   ## Getting Restrictions

     
     
     
   SELECT DISTINCT ?class ?restrictionProperty ?fClass ?namedInstance WHERE   
   {?class rdf:type owl:Class .  
   {?class owl:equivalentClass / owl:intersectionOf / (rdf:first | rdf:rest)\* ?x .} UNION  
   {?class owl:intersectionOf / (rdf:first | rdf:rest)\* ?x .} UNION  
   { ?class rdfs:subClassOf ?x .}  
   ?x rdf:type owl:Restriction .  
   ?x owl:onProperty ?restrictionProperty . OPTIONAL {?x owl:someValuesFrom ?fClass .}   
   OPTIONAL {?x owl:hasValue ?namedInstance }
2. IF((!isBlank(?fClass)),BIND(?fClass AS ?filterClass),BIND("UNION" AS ?filterClass)) . FILTER (!isBlank(?class)) .  
   }

This doesn't have the all values or min, max and exactly, but they will just be additional optionals.   
Also need to figure out the if statement to get rid of the blank nodes that represent unions in the filters   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
Constraints   
  
Check for exactly one name   
\*Note this one returns "False" when everything is alright\*ASK {SELECT ?emp (COUNT(?name) AS ?nameCount )  
WHERE {?emp rdf:type sa:Employee . OPTIONAL {?emp gist:name ?name} } GROUP BY ?emp HAVING((COUNT(?name)> 1 ) || (COUNT(?name) <1)) }

## Named Graphs

Get a list of Named Graphs used   
  
  
SELECT DISTINCT ?g1 WHERE {  
GRAPH ?g1  
{  
?s ?p ?o .  
}  
}  
ORDER BY ?g1

## Negation

MINUS   
SELECT DISTINCT ?class WHERE {  
?class rdf:type ?type .  
VALUES (?type){(owl:Class rdfs:Class)} FILTER (!isBlank(?class))  
MINUS {?class owl:disjointWith / ^rdfs:range gist:hasMagnitude }   
}  
ORDER By ?class

## Sub Queries

This performs very well   
#Most recent query above rewritten with URIs  
#we of course should settle on the official uris we would like to use - I made these by hand   
SELECT DISTINCT ?act2 ?min2 ?max2 WHERE {  
?rule spo:hasValidPart ?node2 .  
?node2 gist:basedOn ?act2 .  
?act2 rdf:type spo:AssemblyComponentType .  
?node2 gist:minCardinality ?min2 .  
?node2 gist:maxCardinality ?max2 .  
{  
SELECT ?rule WHERE {  
?rule rdf:type spo:AssemblyRule .  
?rule spo:hasValidPart ?node .  
?node rdf:type spo:AssemblyNode .  
?node gist:basedOn ?act .  
?act rdf:type spo:AssemblyComponentType .  
?node gist:minCardinality ?min .  
?node gist:maxCardinality ?max . FILTER ( ?act IN (spo:\_Config\_ACT\_011))  
FILTER ( ?min <= 2  
&& ?max >= 2 )  
}  
}  
{  
SELECT ?rule WHERE {  
?rule rdf:type spo:AssemblyRule .  
?rule spo:hasValidPart ?node .  
?node rdf:type spo:AssemblyNode .  
?node gist:basedOn ?act .  
?act rdf:type spo:AssemblyComponentType .  
?node gist:minCardinality ?min .  
?node gist:maxCardinality ?max . FILTER ( ?act IN (spo:\_Config\_ACT\_004))  
FILTER ( ?min <= 1  
&& ?max >= 1 )  
}  
}  
}

## Minus with subselect

SELECT DISTINCT ?prop WHERE {  
?prop rdf:type owl:ObjectProperty .   
MINUS  
{  
SELECT ?prop  
WHERE{ ?disClass owl:disjointWith ?parentClass. ?prop rdfs:domain ?disClass .  
?shapeClass rdfs:subClassOf\* ?parentClass .  
}  
VALUES (?shapeClass) {( gist:BuildingAddress )}  
}  
}  
ORDER By ?prop

## Insert and Update Queries

Asserting SameAs, in a named Graph   
**This isn't** **very efficient**  
#Note this is for example only, this says any two things with same label are same  
#you would really use this when you got say cities from two different sources and wanted  
#to collapse their uris based on name and state similarity INSERT  
{GRAPH <gist:merge> {?instance1 owl:sameAs ?instance2} }   
WHERE {  
?instance1 rdf:type ?type .  
?instance2 rdf:type ?type .  
?instance1 ?p ?label1 .  
?instance2 ?p ?label2 . FILTER(!isBlank(?instance1)) FILTER(!isBlank(?instance2)) FILTER (?label1 = ?label2)  
FILTER (?instance1 != ?instance2) FILTER (?instance1 NOT IN(?instance2))  
FILTER (?p NOT IN (rdf:type, owl:disjointWith, rdfs:subPropertyOf, owl:equivalentClass, rdfs:subClassOf, owl:unionOf))  
}

## Changing the value of a property

First check that you got the ones you want,SELECT ?s ?zip WHERE {  
?s gist:residentAt ?zip . FILTER (?zip IN ("23662"))  
}   
  
  
Then replace zip code 23662 with  
23663DELETE {?s gist:residentAt ?zip}  
INSERT {GRAPH <gist:update> {?s gist:residentAt "23663" }} WHERE {  
?s gist:residentAt ?zip . FILTER (?zip IN ("23662"))  
}

## Federated Queries

To federate within Allegrograph   
Create a session, with the two repositories combined as so:  
<demo-catalog:MagInferred>+<schneider:clipsal\_dev> Once started you can query as any other   
![](/attachments/1474695/1474694.png)

## This should work but we haven't found an endpoint that will process it

PREFIX movie: [<http://data.linkedmdb.org/resource/movie/](http://data.linkedmdb.org/resource/movie/)> PREFIX dbpedia: <<http://dbpedia.org/ontology/>>  
PREFIX foaf: [<http://xmlns.com/foaf/0.1/](http://xmlns.com/foaf/0.1/)> SELECT ?actor\_name ?birth\_date ?actor ?actor2  
FROM [<http://dig.csail.mit.edu/2008/webdav/timbl/foaf.rdf](http://dig.csail.mit.edu/2008/webdav/timbl/foaf.rdf)> # placeholder graph WHERE {  
{  
SERVICE [<http://data.linkedmdb.org/sparql](http://data.linkedmdb.org/sparql)> {  
[<http://data.linkedmdb.org/resource/film/675](http://data.linkedmdb.org/resource/film/675)> movie:actor ?actor .  
?actor movie:actor\_name ?actor\_name  
}  
BIND(STRLANG(?actor\_name, "en") AS ?actor\_name\_en)  
}  
SERVICE [<http://dbpedia.org/sparql](http://dbpedia.org/sparql)> {  
?actor2 a foaf:Person ; foaf:name ?actor\_name\_en ; dbpedia:birthDate ?birth\_date . FILTER(STR(?actor\_name\_en) = ?actor\_name)  
}  
}

## Logic

Coalesce   
  
If   
SELECT DISTINCT ?eCID ?etimClassName ?ID ?etimFID ?etimFeatureName ?value ?uom ?value2 WHERE {  
?pr rdf:type spo:ProductReference . ?pr gist:identifiedBy / gist:uniqueText ?ID .  
?pr gist:specifiedBy ?spec . ?spec gist:ofCharacteristic ?ch .  
?pr gist:categorizedBy / spo:equivalent ?eClass . ?eClass gist:containedText ?etimClassName .  
?eClass gist:identifiedBy / gist:uniqueText ?eCID.   
{ # start sub select  
SELECT DISTINCT (SAMPLE(?pr1) AS ?pr) ?feature ?etimFID ?etimFeatureName (MAX(?v2) AS ?value) (SAMPLE(?uom1) AS ?uom) WHERE  
{  
?pr1 gist:specifiedBy ?spec . ?spec gist:ofCharacteristic ?ch .  
?spec (gist:textValue | gist:equalTo | gist:greaterOrEqualTo | gist:greaterThan ) ?v1 .  
OPTIONAL { ?v1 rdf:type gist:Magnitude . ?v1 gist:decimalValue ?v2 . ?v1 gist:hasUoM / gist:unitSymbol ?uom1} FILTER ( ?ch IN (spo:\_char\_586 , spo:\_char\_1640 ))  
?spec spo:validWhen /gist:textValue ?std . ?std rdf:type spo:Standard . ?std rdfs:label ?stdLabel .  
?spec spo:validWhen /gist:textValue spo:\_category\_instance\_45 .  
?spec spo:validWhen / ( gist:equalTo | gist:lessOrEqualTo | gist:lessThan ) ?mag . ?mag rdf:type gist:Magnitude . ?mag gist:hasUoM gist:volt .  
?mag gist:decimalValue ?dv .  
BIND (IF (regex(?stdLabel , "60947"), "EF1", "EF2") AS ?efN )

1. note this should be >= 400 but for best data I'm using this  
   BIND (IF (?dv >= 230 && ?dv <= 400 , "EFa", IF (?dv > 400 , "EFb", "")) AS ?efA )   
   #BIND (IF (?efN = "EF1" && ?efA = "EFa", "EF009556", "") AS ?feature )  
   BIND (IF (?efN = "EF1", if (?efA = "EFa", etim:\_EF009556, etim:\_EF009555),If (?efA = "EFa", etim:\_EF009557, etim:\_EF009558)) AS ?feature )  
   ?feature gist:identifiedBy / gist:uniqueText ?etimFID . ?feature gist:containedText ?etimFeatureName .   
   FILTER (?pr1 IN ( @@uri ))  
   }  
   GROUP BY ?feature ?etimFID ?etimFeatureName   
   } # end sub select UNION   
     

   ## Bind

     
     
   Values   
     
   Not same URI   
   SELECT ?prod ?se1 ?se2 WHERE {  
   ?prod gist:specifiedBy ?se1 . ?se1 gist:ofCharacteristic spo:\_Char\_OPS2\_1172541 .  
   ?prod gist:specifiedBy ?se2 . ?se2 gist:ofCharacteristic spo:\_Char\_OPS2\_1172541 .   
   FILTER (?se1 != ?se2)  
   }  
   ORDER BY ?prod   

   ## Math

   from stack overflow   
   SELECT (xsd:float(?a)/xsd:float(?b) AS ?result) WHERE { ?c property:name "myThing"@en .  
   ?c property:firstValue ?b .  
   ?c property:secondValue ?a . }   
   Note:  
   integer / integer = decimal float / double = double   
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     

   ## Presentation

   ### Getting to a json tree

   (this approach with some code will give a d3 style tree) (could substitute a type for the value clause and get a d3 style  
   list)  
   CONSTRUCT {  
   ?s bp:queryResultPragma "root" .?s ?p1 ?o1 . ?o1 ?p2 ?o2 . ?o2 ?p3 ?o3 } WHERE  
   {?s ?p1 ?o1 . ?o1 ?p2 ?o2 . ?o2 ?p3 ?o3 . FILTER (!isBlank(?s))  
   FILTER (!isBlank(?o1)) FILTER (!isBlank(?o2)) FILTER (!isBlank(?o3)) VALUES (?s) {(sh:\_sh\_0001)}  
   FILTER (?p1 NOT IN (owl:disjointWith)) FILTER (?p2 NOT IN (owl:disjointWith)) FILTER (?p3 NOT IN (owl:disjointWith))  
   }   
     

   ## Decimal values

     
   select ?s ?label ?decimal ?d ?unit ?unitSymbol ?displaySymbol WHERE {  
   ?s rdf:type gist:Magnitude .  
   ?s rdfs:label ?label .  
   ?s gist:decimalValue ?decimal .
2. ?s rdfs:comment ?displaySymbol.  
   ?s gist:hasUoM ?unit . ?unit gist:unitSymbol ?unitSymbol . BIND(round(xsd:decimal(?decimal)) AS ?d )
3. FILTER(?unitSymbol IN ("A"))  
   }   
     

   ## Rounding

     
   select ?s ?decimal (round(xsd:decimal(?decimal)\*1000)/1000 AS ?d2) (concat(str(?d2),str(' '),str(?unitSymbol))AS ?displaySymbol ) WHERE {  
   ?s rdf:type gist:Magnitude .  
   ?s gist:decimalValue ?decimal .  
   ?s gist:hasUoM / gist:unitSymbol ?unitSymbol .  
   }  
   LIMIT 10   
     

   ## Concatenating with delimiters

     
     
   Group Concat   
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   Backplane Queries   
     
   Getting the transaction data   
   In backplane each transaction is it's own named graphselect ?g ?tc ?user ?posted ?dateTime  
   WHERE { GRAPH ?g {?tc rdf:type sa:TimeCharge }  
   ?g bp:authoredBy ?user .  
   ?g gist:recordedOn ?posted .  
   ?posted gist:universalDateTime ?dateTime .  
   FILTER (?dateTime < xsd:dateTime("2015-06-30T23:59:59"))  
   }  
   ORDER BY DESC(?dateTime)   
     

   ## Looking for (erroneous) duplicate sequences

   SELECT ?s ?p ?o WHERE {  
   ?s gist:sequence ?o .  
   ?s rdf:type bp:NAN  
   }   
     
     
     
     
     
   Should only get one per NAN instance

   |  |  |  |
   | --- | --- | --- |
   | s | p | o |
   | bp:\_TNAN |  | "13628" |
   | bp:\_NAN1 |  | "82946" |
   | bp:\_UNAN |  | "0" |

   ## List all the use cases

     
     
     
   SELECT ?uc ?name WHERE {  
   ?uc rdf:type bp:Event .  
   ?uc rdfs:label ?name .  
   }   

   ## List all the classes and properties that are referred to in use cases

     
   SELECT DISTINCT ?e ?type WHERE {  
   ?s rdf:type bp:Node .  
   ?s bp:owlEntity ?e .  
   ?e rdf:type ?type  
   }  
   ORDER BY ?type ?e   
     

   ## Details of a Use Case

     
   SELECT DISTINCT ?uc ?ucName ?ucLabel ?menu ?permission ?o ?entity ?pred ?succ ?attType ?attValue ?displayText  
   ?querySubject ?displayQuery  
   WHERE {  
   ?uc rdf:type bp:Event .  
   ?uc gist:name ?ucName.  
   ?uc rdfs:label ?ucLabel .  
   ?uc gist:memberOf ?menu .  
   ?uc bp:requiresPermission ?permission .  
   ?uc gist:text ?displayText .  
   ?uc bp:querySubject ?querySubject .  
   ?uc bp:displayQuery ?displayQuery .  
   ?uc gist:hasDirectPart ?o .  
   ?o bp:owlEntity ?entity  
   OPTIONAL {?o bp:hasPredecessor ?pred} OPTIONAL {?o bp:hasSuccessor ?succ} OPTIONAL {?o bp:hasAttribute ?a .  
   ?a bp:attributeType ?attType .  
   Substitute your usecase here?a bp:hasValue /gist:text ?attValue } FILTER (?uc IN (bp:32325))   
   }   
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     

   ## Timecard Queries

     
     
   Attaching tcs to weeks   
     
   Time and earned rev by week   
   Select ?empName ?week  
   (CONCAT(STR(SAMPLE(?empName)), "-",STR(SAMPLE(?week)) )AS ?label )  
   (SUM(?hours) AS ?totalhours) (SUM(?amount) AS ?totalamount) (SUM(?earnedRev) AS ?totalEarnedRev) (SAMPLE(?week) AS ?selWeek) WHERE {?tc rdf:type sa:TimeCharge . ?tc sa:consumptionOf ?p .  
   ?p gist:hasA ?br . ?br gist:decimalValue ?rate .  
   ?p gist:name ?empName .  
   ?tc gist:hasMagnitude ?m . ?m gist:decimalValue ?hours .  
   ?tc gist:directPartOf ?ww . ?ww rdf:type sa:WorkWeek . ?ww gist:sequence ?week .  
   ?tc sa:consumedToward ?t . ?t gist:name ?task .  
   ?t sa:hasSponsor ?s . ?s gist:name ?sponsor .  
   ?t gist:directPartOf ?project . ?project gist:hasMagnitude ?wo .  
   ?wo rdf:type sa:WriteOff . ?wo gist:decimalValue ?woPercent . BIND((1-?woPercent) AS ?realizedPercent) .  
   BIND (?rate \* ?hours AS ?amount)  
   BIND ((?amount \* ?realizedPercent) AS ?earnedRev )   
   FILTER (?s NOT IN (sa:\_unpaid, sa:\_empCD38, sa:\_emp1ED3, sa:\_emp1779, sa:\_ecallmann, sa:\_emp9D58, sa:\_emp3642))  
   }  
   GROUP BY ?empName ?week   
     
     
     
     
     
   orTimeEarnedRevTaskLevel   
   Select ?empName ?week (SAMPLE(?week) AS ?selWeek) ?t ?project (SAMPLE(?projectN) AS ?projectName) ?spons (CONCAT(STR(SAMPLE(?empName)), "-",STR(SAMPLE(?week)) )AS ?label )  
   (SAMPLE(?task) AS ?taskDesc)  
   (SUM(?hours) AS ?totalhours) (SUM(?amount) AS ?totalamount) (SUM(?earnedRev) AS ?totalEarnedRev)  
   WHERE {?tc rdf:type sa:TimeCharge . ?tc sa:consumptionOf ?p . ?p gist:hasA ?br .  
   ?p gist:name ?empName .  
   ?br gist:decimalValue ?rate .  
   ?tc gist:hasMagnitude ?m . ?m gist:decimalValue ?hours .  
   ?tc gist:directPartOf ?ww . ?ww rdf:type sa:WorkWeek .  
   ?ww gist:sequence ?week .  
   ?tc sa:consumedToward ?t . ?t gist:name ?task .  
   ?t sa:hasSponsor ?s . ?s gist:name ?sponsor .  
   ?tc gist:occurredAt ?l .  
   ?t gist:directPartOf ?project . ?project gist:name ?projectN .  
   ?project gist:hasMagnitude ?wo . ?wo rdf:type sa:WriteOff .  
   ?wo gist:decimalValue ?woPercent . BIND((1-?woPercent) AS ?realizedPercent) . BIND (?rate \* ?hours AS ?amount)  
   BIND ((?amount \* ?realizedPercent) AS ?earnedRev )

Note: should change this to have a more general definition for unpaid than the last filter  
FILTER (?s NOT IN (sa:\_unpaid, sa:\_empCD38, sa:\_emp1ED3, sa:\_emp1779, sa:\_ecallmann, sa:\_emp9D58, sa:\_emp3642))   
}  
GROUP BY ?empName ?week ?t ?project ?sponsor

## TimeCardDetail

Select ?empName ?week (CONCAT(STR(?empName), "-",STR(?week) )AS ?label ) ?selWeek  
?t ?task ?project ?projectN ?woPercent ?hours ?amount ?earnedRev ?s ?sponsor ?tc ?location  
?diary  
?startDateTime ?endDateTime ?postDateTime   
  
WHERE {?tc rdf:type sa:TimeCharge . ?tc sa:consumptionOf ?p . ?p gist:hasA ?br .  
?p gist:name ?empName .  
?br gist:decimalValue ?rate .  
?tc gist:hasMagnitude ?m . ?m gist:decimalValue ?hours .  
?tc gist:directPartOf ?ww . ?ww rdf:type sa:WorkWeek .  
?ww gist:sequence ?week .  
?tc sa:consumedToward ?t . ?t gist:name ?task .  
?t sa:hasSponsor ?s . ?s gist:name ?sponsor .  
?tc gist:occurredAt ?l . ?l gist:name ?location .  
?t gist:directPartOf ?project . ?project gist:name ?projectN .  
?project gist:hasMagnitude ?wo . ?wo rdf:type sa:WriteOff .  
?wo gist:decimalValue ?woPercent .  
?tc gist:actualEnd ?e . ?e gist:universalDateTime ?endDateTime .  
?tc gist:actualStart ?startTime . ?startTime gist:universalDateTime ?startDateTime .  
?tc gist:recordedOn ?r . ?r gist:universalDateTime ?postDateTime . BIND((1-?woPercent) AS ?realizedPercent) .  
OPTIONAL {?tc gist:describedIn ?c . ?c gist:text ?diary .} BIND (?rate \* ?hours AS ?amount)  
BIND ((?amount \* ?realizedPercent) AS ?earnedRev ) BIND(?week AS ?selWeek)  
FILTER (?s NOT IN (sa:\_unpaid, sa:\_empCD38, sa:\_emp1ED3, sa:\_emp1779, sa:\_ecallmann, sa:\_emp9D58, sa:\_emp3642))   
}

## The check to see if anything is screwed up

This totals everything up to March 31,2015 (we won't be posting any transactions with an earlier posted date, and we should n't be changing the write off % of any projects that old.Select  
(COUNT(?tc) AS ?numberOfTimeCharges) (SUM(?hours) AS ?totalhours) (SUM(?amount) AS ?totalamount) (SUM(?earnedRev) AS ?totalEarnedRev) WHERE {  
GRAPH ?g { ?tc rdf:type sa:TimeCharge . }  
?tc sa:consumptionOf ?p .  
?p gist:hasA ?br . ?br gist:decimalValue ?rate .  
?p gist:name ?empName .  
?tc gist:hasMagnitude ?m . ?m gist:decimalValue ?hours .  
?tc gist:directPartOf ?ww . ?ww rdf:type sa:WorkWeek . ?ww gist:sequence ?week .  
?tc sa:consumedToward ?t . ?t gist:name ?task .  
?t sa:hasSponsor ?s . ?s gist:name ?sponsor .  
?t gist:directPartOf ?project . ?project gist:hasMagnitude ?wo .  
?wo rdf:type sa:WriteOff . ?wo gist:decimalValue ?woPercent . BIND((1-?woPercent) AS ?realizedPercent) .  
BIND (?rate \* ?hours AS ?amount)  
BIND ((?amount \* ?realizedPercent) AS ?earnedRev )  
?g bp:authoredBy ?user .  
?g gist:recordedOn ?posted .  
?posted gist:universalDateTime ?dateTime .  
FILTER (?dateTime < xsd:dateTime("2015-03-31T23:59:59"))  
}

|  |  |  |  |
| --- | --- | --- | --- |
| numberOfTimeCharges | totalhours | totalamount | totalEarnedRev |
| "2759" | "7.4628804E3" | "1.4866695E6" | "5.149424E5" |

## Experiments with Dates

Finding the start and end of a pay period   
SELECT ?pp (MIN(?wwS) AS ?start) (MAX(?wwE) AS ?end) WHERE  
{  
?pp rdf:type sa:PayPeriod .  
?ww gist:directPartOf ?pp .  
?ww gist:plannedStart ?wwS .  
?ww gist:plannedEnd ?wwE .  
}  
GROUP BY ?pp

## Getting to NIMOB

SELECT ?emp ?month ?loc (COUNT(?date) AS ?nimob) WHERE {   
select DISTINCT ?emp ?month ?date ?loc WHERE {  
?tc rdf:type sa:TimeCharge . ?tc gist:actualEnd ?end .  
?tc gist:occurredAt ?loc .  
?tc sa:consumptionOf ?emp .  
?end gist:universalDateTime ?endDT . BIND(YEAR(?endDT) AS ?yyyy ) BIND(MONTH(?endDT) AS ?mm) BIND(DAY(?endDT) AS ?dd)  
BIND(CONCAT(str(?yyyy),"",str(?mm)) AS ?month ) BIND(CONCAT(str(?yyyy),"",str(?mm),"-",str(?dd) ) AS ?date) FILTER (?emp IN (bp:\_person6))  
}  
#GROUP BY ?emp ?month ?loc ?date ORDER BY ?emp ?month ?loc ?date  
}  
GROUP BY ?emp ?month ?loc ORDER BY ?emp ?month ?loc

## In this section

- [SPARQL FIBO Queries](/languages/sparql/sparql-examples/sparql-fibo-queries/)
- [SPARQL for Analyzing Data Sets](/languages/sparql/sparql-examples/sparql-for-analyzing-data-sets/)
- [String Conversions for TARQL / SPARQL Anything](/languages/sparql/sparql-examples/string-conversions-for-tarql-sparql-anything/)
- [Updating a Use Case and its Data in Place](/languages/sparql/sparql-examples/updating-a-use-case-and-its-data-in-place/)
