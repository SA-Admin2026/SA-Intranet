---
title: "Class-Instance Mirror pattern - to avoid punning"
confluence_id: 2455273550
source: "2455273550.html"
---

**issue**: The double use of identifiers as both datatypes and class identifiers is not allowed by OWL2-DL, and there are problems in using the same identifier for individuals and class identifiers in other description logics. This double use is called “punning”.

Original references:

[Enterprise Architecture Reference Modelling in OWL/RDF](https://www.researchgate.net/publication/221466838_Enterprise_Architecture_Reference_Modeling_in_OWLRDF/link/5b7c0e3fa6fdcc5f8b591c7a/download)

<https://www.w3.org/TR/swbp-specified-values/> Pattern #2

**History of the solution**: In developing the Federal enterprise architecture reference model the pattern of an instance in a classification also being required to be represented as a class was observed over 200 times. The same challenge had been recognised in <https://www.w3.org/TR/swbp-specified-values/> where a variety of solutions were presented. The first pattern is similar to the use of categories in SA

![](/attachments/2455273550/2455306280.png)

The second pattern was later described as the “Class-Instance Mirror” pattern by the FEA-RMO authors

![](/attachments/2455273550/2455273563.png)![](/attachments/2455273550/2455404555.png)

In this last example the instance “Human Resources” is able to be represented as a class without violating OWL-DL reasoning using an equivalent class as illustrated here [example taken from <http://colab.cim3.net/file/work/SICoP/project/fea-rmo/fea-rmo.html> ]

<owl:Class rdf:ID="SSP\_TestManagement">  
 [rdfs:subClassOf](#)  
 <owl:Class rdf:ID="SSP\_SoftwareEngineering"/>  
 </rdfs:subClassOf>  
 [owl:equivalentClass](#)  
 [owl:Restriction](#)  
 [owl:onProperty](#)  
 <owl:FunctionalProperty rdf:about="#isServiceSpecificationOf"/>  
 </owl:onProperty>  
 [owl:hasValue](#)  
 <ST\_SoftwareEngineering rdf:ID="TestManagement">  
 <rdfs:comment rdf:datatype="<http://www.w3.org/2001/XMLSchema#string>"  
 >The consolidation of all testing activities and results. Test Management activities include test planning, designing (test cases), execution, reporting, code coverage, and heuristic and harness development.</rdfs:comment>  
 [rdfs:label](#)Test Management</rdfs:label>  
 </ST\_SoftwareEngineering>  
 </owl:hasValue>  
 </owl:Restriction>  
 </owl:equivalentClass>  
 </owl:Class>
