---
title: "Metric:Consistency - Automated Tests"
confluence_id: 1225654295
source: "1225654295.html"
---
This page provides automated tests for [Metric: Consistency](/ontology-quality-metrics/metric-consistency/) . See [Metric: Consistency - Assessment Checklist](/ontology-quality-metrics/metric-consistency/metric-consistency---assessment-checklist/) for overall approach to evaluation. Note that most consistency tests, and certainly the more interesting ones, require manual inspection.

Note also that these are *example* tests. Given the breadth of the consistency metric, it is not practical to provide a complete set of tests.

***Table of Contents***

- [Test for Logical Consistency](#Metric:Consistency-AutomatedTests-TestforLogicalConsistency)
- [Tests for Modeling/Design Consistency](#Metric:Consistency-AutomatedTests-TestsforModeling/DesignConsistency)
  - [All categories are defined using (subclassing) skos:Concept, or all use some other base Category class](#Metric:Consistency-AutomatedTests-Allcategoriesaredefinedusing(subclassing)skos:Concept,orallusesomeotherbaseCategoryclass)
- [Tests for Structural/Syntactic Consistency](#Metric:Consistency-AutomatedTests-TestsforStructural/SyntacticConsistency)
  - [Language tags are always used or never used](#Metric:Consistency-AutomatedTests-Languagetagsarealwaysusedorneverused)
  - [Literals either all do or all do not have explicit datatyping](#Metric:Consistency-AutomatedTests-Literalseitheralldooralldonothaveexplicitdatatyping)
    - [Numeric only](#Metric:Consistency-AutomatedTests-Numericonly)
    - [All literals, both strings and numeric](#Metric:Consistency-AutomatedTests-Allliterals,bothstringsandnumeric)
  - [Labels, definitions, and comments are either all SKOS or all RDFS](#Metric:Consistency-AutomatedTests-Labels,definitions,andcommentsareeitherallSKOSorallRDFS)
  - [All terms have a definition](#Metric:Consistency-AutomatedTests-Alltermshaveadefinition)
  - [All terms have a label](#Metric:Consistency-AutomatedTests-Alltermshavealabel)
  - [Property labels start with either lower or uppercase, not a mix](#Metric:Consistency-AutomatedTests-Propertylabelsstartwitheitherloweroruppercase,notamix)
  - [Class labels start with either lower or uppercase, not a mix](#Metric:Consistency-AutomatedTests-Classlabelsstartwitheitherloweroruppercase,notamix)
  - [Forthcoming](#Metric:Consistency-AutomatedTests-Forthcoming)

# Test for Logical Consistency

Run through an OWL reasoner.

# Tests for Modeling/Design Consistency

## All categories are defined using (subclassing) skos:Concept, or all use some other base Category class

The idea here is that one should either use skos:Concept and skos:broader to create category hierarchies or one should use gist:Category and gist:hasDirectSuper(Sub)Category to create category hierarchies, not both. The query below assumes that one will be making subclasses of skos:Concept much as we do for gist:Category, but that might not be accurate. Users of skos may not do that.

This test must be designed for a specific ontology. For example, in the case of gist the alternate class is gist:Category. One must manually inspect the ontology to see if there is an alternative category class defined.

```
SELECT (COUNT(?gistCategory) AS ?gistCategorySubclasses ) 
(COUNT(?skosConcept) AS ?skosConceptSubclasses )
WHERE {{
  ?gistCategory rdfs:subClassOf gist:Category 
} UNION {
  ?otherCategory rdfs:subClassOf skos:Concept
} }
```

# Tests for Structural/Syntactic Consistency

These are non-exhaustive samples. Tests could alternatively be constructed in SHACL.

## Language tags are always used or never used

```
 SELECT (COUNT(?o1) AS ?noLanguageTag) (COUNT(?o2) AS ?hasLanguageTag) WHERE { {   
   ?s ?p ?o1 .
   FILTER (isLiteral(?o1) && datatype(?o1) = xsd:string && lang(?o1) = "")  
} UNION {
   ?s ?p ?o2 .
   FILTER (isLiteral(?o2) && datatype(?o2) = xsd:string && !lang(?o2) = "")
} }
```

## Literals either all do or all do not have explicit datatyping

### Numeric only

```
SELECT (COUNT(?o1) AS ?noDatatype) (COUNT(?o2) AS ?hasDatatype) WHERE { {
  ?s ?p ?o1 .
  FILTER(isNumeric(?o1))
  BIND(datatype(?o1) as ?dt)
  FILTER(!BOUND(?dt))
} UNION {
  ?s ?p ?o2 .
  FILTER(isNumeric(?o2))
  BIND(datatype(?o2) as ?dt)
  FILTER(BOUND(?dt))  
} }
```

### All literals, both strings and numeric

```
SELECT (COUNT(?o1) AS ?noDatatype) (COUNT(?o2) AS ?hasDatatype) WHERE { {
  ?s ?p ?o1 .
  FILTER(isLiteral(?o1))
  BIND(datatype(?o1) as ?dt)
  FILTER(!BOUND(?dt))
} UNION {
  ?s ?p ?o2 .
  FILTER(isLiteral(?o2))
  BIND(datatype(?o2) as ?dt)
  FILTER(BOUND(?dt))  
} }
```

## Labels, definitions, and comments are either all SKOS or all RDFS

This test allows for RDFS annotations such as rdfs:isDefinedBy and rdfs:seeAlso, which have no SKOS equivalent.

```
SELECT (COUNT(?p1) AS ?skosAnno) (COUNT(?p2) AS ?rdfsAnno ) 
WHERE { {
   ?s ?p1 ?o
   FILTER (REGEX(URI(?p1),"http://www.w3.org/2004/02/skos/core#") ) 
   } UNION {
   ?s ?p2 ?o
   FILTER ( ?p2 = rdfs:label || ?p2 = rdfs:comment )
   }
 }
```

## All terms have a definition

```
SELECT (COUNT(?s1) AS ?rdfsComment ) (COUNT(?s2) as ?noRdfsComment )
WHERE {{
  ?s1 ?p ?o1
  # NB Change to skos:definition if ontology uses skos:definition
  FILTER ( isIRI(?s1) && EXISTS { ?s1 rdfs:comment ?def } )
} UNION {
  ?s2 ?p ?o1
  # NB Change to skos:definition if ontology uses skos:definition
  FILTER ( isIRI(?s2) && NOT EXISTS { ?s2 rdfs:comment ?def } )  
}}
```

## All terms have a label

```
SELECT (COUNT(?s1) AS ?rdfsLabel ) (COUNT(?s2) as ?noRdfsLabel )
WHERE {{
  ?s1 ?p ?o1
  # NB Change to skos:prefLabel if ontology uses skos:prefLabel
  FILTER ( isIRI(?s1) && EXISTS { ?s1 rdfs:label ?def } )
} UNION {
  ?s2 ?p ?o1
  # NB Change to skos:prefLabel if ontology uses skos:prefLabel
  FILTER ( isIRI(?s2) && NOT EXISTS { ?s2 rdfs:label ?def } )  
}}
```

## Property labels start with either lower or uppercase, not a mix

```
SELECT ( COUNT(?lower) AS ?initialLower) (COUNT(?upper) as ?initialUpper) WHERE { {
  ?prop a owl:DatatypeProperty 
} UNION {
  ?prop a owl:ObjectProperty
} UNION {
  ?prop a owl:AnnotationProperty
} 
  # NB Change to skos:prefLabel if ontology uses skos:prefLabel
  ?prop rdfs:label ?def 
  BIND( SUBSTR(?def, 1, 1) AS ?initial )
  BIND( LCASE(SUBSTR(?def, 1, 1)) as ?lowerInitial )
  BIND( UCASE(SUBSTR(?def, 1, 1)) AS ?upperInitial )
  BIND( IF (?initial = ?lowerInitial , ?lowerInitial, ?blank ) AS ?lower )
  BIND( IF (?initial = ?upperInitial , ?upperInitial, ?blank ) AS ?upper )
}
```

## Class labels start with either lower or uppercase, not a mix

***FIX:*** Counts 206 initial uppercase in gist, whereas there are only 143 named classes.

Change ?class a owl:Class to ?property a owl:DatatypeProperty or ?property a owl:ObjectProperty to run the same test on properties.

```
SELECT ( COUNT(?lower) AS ?initialLower) (COUNT(?upper) as ?initialUpper) WHERE { 
  ?class a owl:Class ;
  # NB Change to skos:prefLabel if ontology uses skos:prefLabel
      rdfs:label ?label 
  FILTER( isIRI(?class) )
  BIND( SUBSTR(?label, 1, 1) AS ?initial )
  BIND( LCASE(SUBSTR(?label, 1, 1)) as ?lowerInitial )
  BIND( UCASE(SUBSTR(?label, 1, 1)) AS ?upperInitial )
  BIND( IF (?initial = ?lowerInitial , ?lowerInitial, ?blank ) AS ?lower )
  BIND( IF (?initial = ?upperInitial , ?upperInitial, ?blank ) AS ?upper )
}
```

## Forthcoming

- Camel case vs underscore in local names
- Definitions all end in period or all don’t
- Labels all end in period or all don’t
