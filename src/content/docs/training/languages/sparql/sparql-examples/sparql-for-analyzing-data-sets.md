---
title: "SPARQL for Analyzing Data Sets"
confluence_id: 521437189
source: "SPARQL-for-Analyzing-Data-Sets_521437189.html"
---

Useful SPARQL queries for analyzing data sets.  You can vary the limit to taste.

- 1 [Count type instances in a sample (for large TS)](#SPARQLforAnalyzingDataSets-Counttypeinstancesinasample(forlargeTS))
- 2 [Count property instances in a sample (for large TS)](#SPARQLforAnalyzingDataSets-Countpropertyinstancesinasample(forlargeTS))
- 3 [Find all restrictions on all classes](#SPARQLforAnalyzingDataSets-Findallrestrictionsonallclasses)

## Count type instances in a sample (for large TS)

select distinct ?type (count (?type) as ?count)

{ ?s a ?type .

  {

    select \*

    {?s ?p ?type.}

    limit 10000

  }

}

group by ?type

order by ?type

---

## Count property instances in a sample (for large TS)

select distinct ?prop (count (?prop) as ?count)

{ ?s ?prop ?o .

  {

    select \*

    {?s ?prop ?o.}

    limit 10000

  }

}

group by ?prop

order by ?prop

Sample results using LUBM 1 on RDF4J are below for 10K and 100K sample sizes.  Notice how, at least with this repo, the samples don't differ re top 10 property usages.   Your mileage may vary.

![](/attachments/521437189/520749113.png)

## Find all restrictions on all classes

This query separates out the cardinality restrictions so that all filters show up as filters and no cardinality numbers show up as filters. I was delighted to find that I could nest a UNION inside a UNION to tighten it up.  I used that to take care of the two different ways we use E6 to create equivalent classes, whether or not the ‘equivalent to’ is explicit adds another triple. I did not put in unions since we never use them, but it would easily be added. This query explores the TBox, not the ABox.

Possible enhancements:

- Output ‘some’ or ‘all’ vs. owl:some(all)ValuesFrom which will be easier for Jason and MarkH. I was not sure how to do that. I want something like an IF THEN ELSE and a BIND.

# Find all restrictions on all classes

SELECT distinct ?class ?property ?r\_type ?n ?filter

WHERE {?restriction rdf:type owl:Restriction .

?restriction owl:onProperty ?property .

?class a owl:Class.

FILTER (!isBlank(?class))

{?restriction ?r\_type ?filter .

?class rdfs:subClassOf ?restriction.

FILTER (?r\_type IN (owl:someValuesFrom , owl:allValuesFrom , owl:hasValue )) }

UNION

{?restriction ?r\_type ?n.

?class rdfs:subClassOf ?restriction.

FILTER (?r\_type IN (owl:minCardinality, owl:minQualifiedCardinality,

owl:maxCardinality, owl:maxQualifiedCardinality, owl:qualifiedCardinality))

?restriction owl:onClass ?filter.}

UNION

{{?class owl:intersectionOf ?intersection.} UNION

{?class owl:equivalentClass/owl:intersectionOf ?intersection.}

?intersection rdf:rest\*/rdf:first\* ?restriction.

?restriction ?r\_type ?filter .

FILTER (?r\_type IN (owl:someValuesFrom , owl:allValuesFrom , owl:hasValue )) }

UNION

{{?class owl:intersectionOf ?intersection.} UNION

{?class owl:equivalentClass/owl:intersectionOf ?intersection.}

?intersection rdf:rest\*/rdf:first\* ?restriction.

?restriction ?r\_type ?n.

FILTER (?r\_type IN (owl:minCardinality, owl:minQualifiedCardinality,

owl:maxCardinality, owl:maxQualifiedCardinality, owl:qualifiedCardinality))

?restriction owl:onClass ?filter. }

}

order by ?class ?r\_type ?property ?filter
