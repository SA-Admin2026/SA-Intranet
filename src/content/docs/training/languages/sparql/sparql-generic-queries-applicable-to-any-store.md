---
title: "SPARQL: Generic queries applicable to any store"
confluence_id: 200245252
source: "200245252.html"
---

## NOTE: all of the following queries exist. Find them here:

s:\ClientsAndPartners\Broadridge\2018September\MaterialWeHaveCreated\skos2owl\Queries\QualityChecks\

To test some of the queries, I created some buggy triples. The current version is here: [PurposfulBugsForTesting.ttl](/attachments/200245252/716341294.ttl)

Updateed versions may be here: \ClientsAndPartners\Broadridge\2018September\MaterialWeHaveCreated\skos2owl\PurposfulBugsForTesting.ttl

# **TBox or ABox**

****DEBUG:** : Find URIs with two or more distinct preflabels, ignoring language tags**

****DEBUG****:** Find skos prefLabels that are not plain strings**

****DEBUG:** Find skosxl prefLabels with values of wrong type**

****DEBUG:** Defnition length does not exceed label length**

****DEBUG**: Find repeated use of local names in different IRIs**

****DEBUG:** Find things with identical prefLabel and altLabel.**

****DEBUG:** Find two or more items that have the same label.**

******DEBUG:**** Find examples of punning, ignoring IRIs in W3C namespaces**

******DEBUG:**** Find classes and properties w/o a skos:definition or rdfs:comment.**

******DEBUG:**** Find classes with no formal definition except for a plain subclass relationship.**

******DEBUG****: Find classes with no formal definition.**

********DEBUG******: Finds URIs with slash in local name**

# **TBox checking**

******DEBUG:** a property URI that has two distinct inverses****

****DEBUG:** symmetric properties with different domain and range**

****DEBUG:** Find transitive properties with different domain and range**

****DEBUG:** Find a URI that is the inverse of itself**

****DEBUG:** subproperties with incompatible domains**

****DEBUG:** subproperties with incompatible ranges**

****DEBUG:** undefined classes used as the domain or range of an object property**

****DEBUG:** undefined classes used as the domain of a datatype property**

******DEBUG:**** Find classes and properties w/o a skos:prefLabel**

******DEBUG:**** Find undefined classes used as the domain of a property**

******DEBUG:**** Find undefined classes used as the range of an object property**

# **ABox checking**

**# DEBUG: Find undefined datatype properties used in triples**  
select distinct ?p where   
{?s ?p ?o.   
FILTER (isLiteral(?o))  
FILTER NOT EXISTS {?p a owl:DatatypeProperty}   
FILTER NOT EXISTS {?p a owl:AnnotationProperty}   
FILTER (!(STRSTARTS(STR(?p),"<http://www.w3.org/>"))) # ignore language constructs  
}

**# DEBUG: Find undefined object properties used in triples**  
select distinct ?p where   
{?s ?p ?o.   
FILTER (!(isLiteral(?o)))  
FILTER NOT EXISTS {?p a owl:ObjectProperty}   
FILTER (!(STRSTARTS(STR(?p),"<http://www.w3.org/>")))  
}

**# Find undefined properties. Exclude those with W3C namespaces.**  
SELECT DISTINCT ?x where   
{?s ?x ?o .   
FILTER (!(STRSTARTS(STR(?x),"<http://www.w3.org/>")))  
FILTER NOT EXISTS {?x a ?xType}} order by ?x

**# DEBUG: find subjects of triples that do not have types.**  
SELECT DISTINCT ?s where {?s ?p ?o.   
                 FILTER (!(?p in (owl:imports, owl:versionIRI )))  
                 FILTER (!isBlank(?s))  
                 FILTER NOT EXISTS {?s a ?c.}}

**# DEBUG: Find objects of triples that do not have types.**  
SELECT DISTINCT ?s ?p ?o where {?s ?p ?o.   
                 FILTER (!(?p in (owl:imports, owl:versionIRI )))  
                 FILTER (!isLiteral(?o))  
                 FILTER (!isBlank(?s))  
                 FILTER (!isBlank(?o))  
                 FILTER (!(STRSTARTS(STR(?o),"<http://www.w3.org/>")))  
                 FILTER NOT EXISTS {?o a ?c.}}

# **Exploration queries**

# **EXPLORE**: **Find the most popular classes**  
select ?c (COUNT(?s) as ?count)  
where {?s a ?c.  
           FILTER (!(STRSTARTS(STR(?c),"<http://www.w3.org/>")))}   #Ignore RDF, OWL, etc.  
GROUP BY ?c  
order by desc(?count)

# **EXPLORE**: **Find the most popular properties**  
select ?p (COUNT(?p) as ?count)  
where {?s ?p ?o.  
       ?p a owl:DatatypeProperty  
       FILTER (!(STRSTARTS(STR(?p),"<http://www.w3.org/>")))}   #Ignore RDF, OWL, etc.  
GROUP BY ?p  
order by desc(?count)

**# EXPLORE: List predicate usage counts by subject and object type, sampling (large repo)**  
select ?xType ?pred ?yType (count (?pred) as ?count)  
where {

        # sample the triples. Start with 10000, then start doubling till you get largest sample that you can query in a few seconds.  
        { select \* {?x ?pred ?y} limit 10000 }

    ?x ?pred ?y .  
    ?x a ?xType .  
    ?y a ?yType .   
}  
group by ?xType ?pred ?yType  
order by ?xType ?pred ?yType  
# order by desc(?count)
