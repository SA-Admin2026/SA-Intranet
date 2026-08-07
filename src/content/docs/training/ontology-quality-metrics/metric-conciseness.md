---
title: "Metric: Conciseness"
confluence_id: 868647004
source: "868647004.html"
---
Report on the Quality of Upper Level Ontologies

@Date 2020-02-13

@Authors Pelakh and Winstanley

### TODO: look at GoodRelations ontology as example of concise ontology.

<http://www.heppnetz.de/projects/goodrelations/>

## Conciseness

#### Quoting from the Vrandecic dissertation:

"Conciseness is the criteria that states if the ontology includes **irrelevant elements** with regards to the domain to be covered (i.e. an ontology about books including axioms about African lions) or **redundant representations** of the semantics. An ontology should impose a **minimal ontological commitment**, i.e. specify the weakest theory possible. Only essential terms should be defined. The ontology's underlying assumptions about the wider domain (especially about reality) should be as weak as possible in order to allow the reuse within and communication between stakeholders that commit to different theories. For example, an ontology about human resource department organization may take a naive view on what a human actually is. It is not required to state if a human has a soul or not, if humans are the result of evolution or created directly by God, when human life starts or ends. The ontology would remain silent on all these issues, and thus allows both creationists and evolutionists to use it in order to make statements about which department has hired whom and later exchange that data.

The following methods in this thesis can be used to measure this criteria: Method 5: **URI reuse** (Page 74), Method 10: **Blank nodes** (Page 82), Method 15: **Stability** (Page 140), Method 17: **Maximum depth** of the taxonomy (Page 145), Method 18: **Class / relation ratio** (Page 146), and Method 20: **Formalized competency questions** (Page 155).

## Method 5

#### Method 5: URI reuse (Page 74)

We define the following measures and metrics: • Number of namespaces used in the ontology NNS • Number of unique URIs used in the ontology NUN • Number of URI name references used in the ontology NN (i.e. every mention of a URI counts) • Ratio of name references to unique names RNU = NUN/NN • Ratio of unique URIs to namespaces RUNS = NUN/NNS

Check the following constraints. The percentages show the proportion of ontologies that fulfill this constraint within the Watson EA corpus, thus showing the probability that ontologies not fulfilling the constraint are outliers. • RNU < 0.5 (79:6%) • RUNS < 5 (90:3%) • NNS ge 10 (75:0%)

- Summary: report the 3 final metrics (RNU, RUNS & NNS) and how they relate to the above thresholds

### Italia l0-AP\_IT.owl

- Source [l0-AP\_IT.owl](https://github.com/italia/daf-ontologie-vocabolari-controllati/blob/master/Ontologie/l0/latest/l0-AP_IT.rdf)

#### Results

Number of namespaces used in the ontology [NNS] is: 27. Number of unique URIs used in the ontology [NUN] is: 61. Number of URI name references used in the ontology [NN] is: 198. Ratio of name references to unique names RNU = NUN/NN is:0.3081. Ratio of unique URIs to namespaces RUNS = NUN/NNS is:2.2593.

### BFO

- Source [bfo.owl](https://github.com/BFO-ontology/BFO/blob/master/bfo.owl)

#### Results

Number of namespaces used in the ontology [NNS] is: 9. Number of unique URIs used in the ontology [NUN] is: 52. Number of URI name references used in the ontology [NN] is: 155. Ratio of name references to unique names RNU = NUN/NN is:0.3355. Ratio of unique URIs to namespaces RUNS = NUN/NNS is:5.7778.

### Gist

- Source [gist9.0.0\_webDownload.zip](https://www.semanticarts.com/wp-content/uploads/2019/08/gist9.0.0_webDownload.zip)

| **Module** | **Size** | **No of Triples** |
| --- | --- | --- |
| gistAddress9.0.0.owl | 5.3kb | 55 |
| gistAgreement9.0.0.owl | 13.7kb | 243 |
| gistCategory9.0.0.owl | 7.2kb | 106 |
| gistContent9.0.0.owl | 10.4kb | 166 |
| gistCore9.0.0.owl | 2.1kb | 16 |
| gistEvent9.0.0.owl | 13.1kb | 198 |
| gistIntention9.0.0.owl | 8.9kb | 115 |
| gistIoT9.0.0.owl | 5.4kb | 67 |
| gistMagnitude9.0.0.owl | 7.8kb | 119 |
| gistMeasure9.0.0.owl | 7.1kb | 84 |
| gistNetwork9.0.0.owl | 9.3kb | 129 |
| gistOrganization9.0.0.owl | 6.7kb | 93 |
| gistPlace9.0.0.owl | 11.7kb | 201 |
| gistTemporalRelation9.0.0.owl | 3.4kb | 33 |
| gistTime9.0.0.owl | 9.6kb | 143 |
| gistTop9.0.0.owl | 56.4kb | 859 |
| gistUnit9.0.0.owl | 10.0kb | 146 |
| gistUnitDim9.0.0.owl | 8.1kb | 110 |
| gistWiki9.0.0.owl | 3.4kb | 37 |

#### Results

Number of namespaces used in the ontology [NNS] is: 8. Number of unique URIs used in the ontology [NUN] is: 319. Number of URI name references used in the ontology [NN] is: 1355. Ratio of name references to unique names RNU = NUN/NN is:0.2354. Ratio of unique URIs to namespaces RUNS = NUN/NNS is:39.875.

### Comparison

|  | **NNS** | **NUN** | **NN** | **RNU** | **RUNS** |
| --- | --- | --- | --- | --- | --- |
| Gist | 8 | 319 | 821 | 0.2354 | 39.875 |
| BFO | 9 | 52 | 155 | 0.3355 | 5.7778 |
| l0 | 27 | 61 | 198 | 0.3081 | 2.2593 |
| MDEO | 12 | 159 | 258 | 0.616 | 13.25 |
| - - | - - | - - | - - | - - | - - |
| Vrandecic Criteria | ge 10 | - - | - - | < 0.5 | < 5 |

#### Key:

- NNS = Number of namespaces used in the ontology
- NUN = Number of unique URIs used in the ontology
- NN = Number of URI name references used in the ontology
- RNU = Ratio of name references to unique names
- RUNS = Ratio of unique URIs to namespaces

### ISSUE - comparison of triplestores (Allegrograph, Fuseki and RDFLib v4.2.2)

Calculation of the results on Fuseki and RDFLib were in agreement for each of NNS, NUN and NN. However, Allegrograph gives different results for NN. For Gist the calculation of NN on Allegrograph is 2026. There were also issues in the bind to provide a report in Allegrograph and RDFLib, but Fuseki worked without any problems.

### Code

```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
​
select ?report
​
where
​
{
    
​
  {
## Number of URI name references used in the ontology NN
SELECT (count(?n) as ?NN) WHERE
{?n a [] .  [] ?p ?n
  FILTER (isURI(?n)).
}
  }
  optional
{
  ## Number of unique URIs used in the ontology NUN
SELECT (count(DISTINCT ?n) as ?NUN) WHERE 
{?n a [] . 
  FILTER (isURI(?n)). 
}
}
  optional
  {
    ## Number of namespaces used in the ontology NNS
select (count(distinct ?ns) as ?NNS) where { 
  {
    ?x a [] .
  bind( replace( str(?x), "(#|/)[^#/]*$", "$1" ) as ?ns )
    filter(isURI(?x))
        
  }
  union
  {
    [] ?x  [] .
  bind( replace( str(?x), "(#|/)[^#/]*$", "$1" ) as ?ns )
    filter(isURI(?x))
        
  }
    union
  {
    [] ?p ?x .
  bind( replace( str(?x), "(#|/)[^#/]*$", "$1" ) as ?ns )
    filter(isURI(?x))
  }
    union
  { graph ?x {
    [] ?p  [] .
  bind( replace( str(?x), "(#|/)[^#/]*$", "$1" ) as ?ns )
    filter(isURI(?x))
  }
  }  
  }
}
​
  bind(fn:format-number(xsd:double(?NUN/?NNS),'#.####') as ?RUNS)
  bind(fn:format-number(xsd:double(?NUN/?NN),'#.####') as ?RNU)
  bind(concat(
      "Number of namespaces used in the ontology [NNS] is: ", xsd:string(?NNS), ". \n\n ", 
      "Number of unique URIs used in the ontology [NUN] is: ",xsd:string(?NUN), ". \n\n", 
      "Number of URI name references used in the ontology [NN] is: ",xsd:string(?NN), ". \n\n ",  
      "Ratio of name references to unique names RNU = NUN/NN is:", xsd:string(?RNU), ". \n\n ", 
      "Ratio of unique URIs to namespaces RUNS = NUN/NNS is:", xsd:string(?RUNS), ". \n "
    ) as ?report)
​
  }
​
​
```

### Comparison of Triplestore SPARQL engines

Using the Gist ontology

|  | **NNS** | **NUN** | **NN** | **RNU** | **RUNS** |
| --- | --- | --- | --- | --- | --- |
| AGraph | 8 | 319 | 2026 | 0.1575 | 39.875 |
| Fuseki | 8 | 319 | 821 | 0.2354 | 39.875 |
| RDFLib | 8 | 319 | 821 | 0.2354 | 39.875 |
| Stardog | 8 | 319 | 821 | 0.2354 | 39.875 |

## Other metrics and considerations

#### Method 15: Stability (Page 140)

Method 15 (Ensuring a stable class hierarchy) Calculate a normalized class depth measure, i.e. calculate the length of the longest subsumption path on the normalized version of the ontology md(N(O)). Now calculate the stable minimal depth of the ontology mdmin(O). If md(N(O)) 6= mdmin(O) then the ontology hierarchy is not stable and may collapse.

#### Method 17: Maximum depth of the taxonomy (Page 145)

Method 17 (Explicitness of the subsumption hierarchy) Calculate ET(O). • If ET(O) = 1 everything seems fine • If ET(O) < 1 then some of the classes in the ontology have collapsed. Find the collapsed classes and repair the explicit class hierarchy • If ET(O) > 1 part of the class hierarchy

#### Method 18: Class / relation ratio (Page 146)

Method 18 (Explicit terminology ratio) Calculate RC(O) and RP (O). • If RC(O) = RP (O) = 1 then this indicates no problems with the coverage of elements with names in the ontology

Summary: should be no two properties with the same name *and* no two classes with the same name [DN: we need to give a comparison limit i.e. a fuzzy match]

#### Method 20: Formalized competency questions (Page 155)

Method 19 (Checking competency questions against results) Formalize your competency question as a SPARQL query. Write down the expected answer as a SPARQL query result, either in XML (Beckett and Broekstra, 2008) or in JSON (Clark et al., 2007). Compare the actual and the expected results. Note that the order of results is often undefined.

Method 20 (Checking competency questions with constraints) Formalize your competency question for ontology O as a SPARQL CONSTRUCT query that formulates the result in RDF as ontology R. Merge R with O and a possibly empty ontology containing further constraints C. Check the merged ontology for inconsistencies.

Summary:

### Other metrics coming from the retreat discussions

#### Class count

Number of classes divided into primary, derived, and ones with restrictions

#### Property count

Number of properties broken down by object, data, annotation What number of these properties is used in restrictions?

#### Disjoint count

Count the numbers of pairwise disjoints ?what is the desirable? perhaps it has to be related to the number of primary classes

#### Ratio of Primary to derived classes

This is something generated from the group rather than from the Vrandecic thesis

## Things to read

- Vrandecic thesis at <https://publikationen.bibliothek.kit.edu/1000018419/1355289>
- <https://keet.wordpress.com/2016/03/20/ontology-authoring-with-a-test-driven-development-approach/>
- <http://ceur-ws.org/Vol-1577/paper_15.pdf>
- <https://github.com/iliannakollia/owl-bgp>
- <http://miuras.inf.um.es/evaluation/oquare/>
- <https://jbiomedsem.biomedcentral.com/articles/10.1186/s13326-018-0188-7>
