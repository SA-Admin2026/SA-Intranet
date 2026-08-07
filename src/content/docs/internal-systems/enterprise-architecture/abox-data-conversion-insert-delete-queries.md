---
title: "ABox data conversion Insert-Delete queries"
confluence_id: 950394
source: ABox-data-conversion-Insert-Delete-queries_950394.html
---
# TBox-ectomy Query

Removes all the Tboxes.  
Delete {?s ?p ?o}  
WHERE  
{  
{?s ?p ?o . ?s ?p1 ?o1   
FILTER (?o1 IN (owl:DatatypeProperty, owl:ObjectProperty)) }  
UNION  
{?s ?p ?o . FILTER (isBlank(?s))}  
UNION  
{?s ?p ?o . FILTER (?o IN (owl:Class))}  
UNION  
{?s ?p ?o . FILTER (isBlank(?o))}  
UNION  
{?s ?p ?o . ?s rdf:type ?o1 .   
FILTER (?o1 IN (owl:Class, owl:Ontology, owl:Thing,   
owl:AnnotationProperty, owl:NamedIndividual)) }  
}

# ABox-ectomy Queries

**These queries must be executed in the order they appear and BEFORE the new TBox is loaded.**

### <SAEmployee>

- All employees must be changed from sa:Employee to sa:SAEmployee

DELETE { ?s rdf:type sa:Employee }  
INSERT { GRAPH ?g { ?s rdf:type sa:SAEmployee } }  
WHERE { ?s rdf:type sa:Employee OPTIONAL { GRAPH ?g { ?s rdf:type sa:Employee }}  
}

### <SASubContractor>

- Now convert the sa:SAEmployee people that were actually subcontractors to sa:SASubContractor?
  - Benjamin Grosof, Janine Bloomfield, Michael Kifer, Atif Mohammad

DELETE { ?s rdf:type sa:SAEmployee }  
INSERT { GRAPH ?g { ?s rdf:type sa:SASubContractor } }  
WHERE { ?s rdf:type sa:SAEmployee .   
FILTER (?s IN (bp:\_person40,sa:\_amohammad,bp:\_person36,bp:\_person38))  
OPTIONAL { GRAPH ?g { ?s rdf:type sa:SAEmployee }}  
}

### <StatusCategory>

- The other three instances (In Progress, Abandoned, Complete) to become rdf:type sa:ProgressCategory and will need the gist:name to be swapped for rdfs:label

DELETE { ?s rdf:type sa:StatusCategory . ?s gist:name ?label }  
INSERT { GRAPH ?g { ?s rdf:type sa:ProgressCategory }   
GRAPH ?g { ?s rdfs:label ?label } }  
WHERE { ?s rdf:type sa:StatusCategory . ?s gist:name ?label  
OPTIONAL { GRAPH ?g { ?s rdf:type sa:StatusCategory }}  
OPTIONAL { GRAPH ?g { ?s gist:name ?label }}  
FILTER(?s IN(sa:41804,sa:28515,sa:23915))  
}

- Remove the gist:name triples on the active and inactive instances. AE 8/12/15 – Actually remove the rdfs:label as well because it is lowercase – the new tbox will upload these with capital letters.

DELETE { ?s gist:name ?label1 . ?s rdfs:label ?label2 }   
WHERE { ?s rdf:type sa:StatusCategory . ?s gist:name ?label1 . ?s rdfs:label ?label2 }

### <ProjectTask>

- All tasks must be changed from rdf:type sa:SponsoredTask to sa:ProjectTask AND
- Replace the gist:name triples with rdfs:label equiv. AND
- Remove the sa:hasSponsor Sponsor triples from all tasks

DELETE { ?s rdf:type sa:SponsoredTask . ?s gist:name ?label . ?s sa:hasSponsor ?sponsor }  
INSERT { GRAPH ?g { ?s rdf:type sa:ProjectTask }  
GRAPH ?g { ?s rdfs:label ?label } }  
WHERE { ?s rdf:type sa:SponsoredTask . ?s gist:name ?label . ?s sa:hasSponsor ?sponsor   
OPTIONAL { GRAPH ?g { ?s rdf:type sa:SponsoredTask } }  
OPTIONAL { GRAPH ?g { ?s gist:name ?label } }  
}

- Assign a StatusCategory to the 10 tasks that are missing one (add to use case)

Via new use case?

### <Project>

- All chargeable projects must be changed from rdf:type sa:ClientProject to sa:Project and given the sa:ChargeabilityType of sa:\_Chargeable
  - I also don't think we need them to be both rdf:type sa:Project and gist:Project – Dave agrees, delete the gist:Project triple.
- Replace the gist:name triples with rdfs:label equiv.

DELETE { ?s rdf:type sa:ClientProject . ?s rdf:type ?type . ?s gist:name ?label }  
INSERT { GRAPH ?g { ?s rdf:type sa:Project }   
GRAPH ?g { ?s rdfs:label ?label }   
GRAPH ?g { ?s gist:categorizedBy sa:\_Chargeable }}  
WHERE { ?s rdf:type sa:ClientProject . ?s rdf:type ?type . ?s gist:name ?label   
OPTIONAL { GRAPH ?g { ?s rdf:type sa:ClientProject }}  
OPTIONAL { GRAPH ?g { ?s gist:name ?label }}  
}

- All remaining instances of gist:Project are non-chargeable. They need to be changed to rdf:type sa:Project and given the chargeability type of either sa:\_Internal or sa:\_Unpaid.
- Replace the gist:name triples with rdfs:label equiv.

Internal:  
DELETE { ?s rdf:type gist:Project . ?s gist:name ?label }  
INSERT { GRAPH ?g { ?s rdf:type sa:Project }   
GRAPH ?g { ?s rdfs:label ?label }   
GRAPH ?g { ?s gist:categorizedBy sa:\_Internal }}  
WHERE { ?s rdf:type gist:Project . ?s gist:name ?label . ?s sa:hasSponsor sa:\_FEIN841555871   
OPTIONAL { GRAPH ?g { ?s rdf:type gist:Project }}  
OPTIONAL { GRAPH ?g { ?s gist:name ?label }}  
}

- The class sa:UnpaidSponsor and its instance sa:\_unpaid need to be removed. The sponsor for these can be switched to Semantic Arts but with a chargeability type of sa:\_Unpaid. I was getting a bus error 7 message in AG trying to do this all at once, so I split it up.
  - First give it the chargeability type:

DELETE { ?s rdf:type gist:Project . ?s gist:name ?label }  
INSERT { GRAPH ?g { ?s rdf:type sa:Project }   
GRAPH ?g { ?s rdfs:label ?label }   
GRAPH ?g { ?s gist:categorizedBy sa:\_Unpaid }}  
WHERE { ?s rdf:type gist:Project . ?s gist:name ?label . ?s sa:hasSponsor sa:\_unpaid   
OPTIONAL { GRAPH ?g { ?s rdf:type gist:Project }}  
OPTIONAL { GRAPH ?g { ?s gist:name ?label }}  
}

- - Then switch the sponsor:

DELETE { ?s sa:hasSponsor sa:\_unpaid }  
INSERT { GRAPH ?g { ?s sa:hasSponsor sa:\_FEIN841555871 } }  
WHERE { ?s rdf:type sa:Project . ?s sa:hasSponsor sa:\_unpaid   
OPTIONAL { GRAPH ?g { ?s sa:hasSponsor sa:\_unpaid }}  
}

- - The instance called sa:\_unpaid will get taken care of in the instances section below.
  - Delete the remaining 7 projects that have nothing attached to them/sponsored by employees:

DELETE { ?s ?p ?o . ?s gist:hasMagnitude ?mag . ?mag ?p2 ?o2 }  
WHERE{ ?s rdf:type gist:Project . ?s ?p ?o . ?s gist:hasMagnitude ?mag . ?mag ?p2 ?o2 }

### <Client> (and Sponsor)

- Almost all of the instances of sa:Client are also instances of sa:Sponsor. We have decided to remove the class sa:Sponsor from the ontology. The rdf:type sa:Sponsor triple should be deleted from any class that has it. All instances of sa:Sponsor are also instances of another class.

DELETE { ?s rdf:type sa:Sponsor }  
WHERE { ?s rdf:type sa:Sponsor . ?s rdf:type ?type FILTER( ?type NOT IN (sa:Sponsor)) }

### <WriteOff>

- Need to add a UoM to all of the sa:WriteOff instances – sa:\_writeOffDecimal

INSERT { GRAPH ?g { ?s gist:hasUoM sa:\_writeOffDecimal } }  
WHERE { GRAPH ?g { ?s rdf:type sa:WriteOff } }

### <ChargeabilityType>

- The currently existing instances should be deleted – they are also rdf:type sa:ResourceConsumptionCategory (and owl:Thing), but only two will continue to exist. The new instances will be uploaded with the new tbox.

DELETE { ?s ?p ?o }  
WHERE { ?s rdf:type sa:ChargeabilityType . ?s ?p ?o }

### <StateRegion>

- Change these instances from rdf:type sa:Province to sa:StateRegion
- They are also typed as gist:GeoRegion – needed? Leaving them on for now.
- LABELS: currently the state name spelled out uses gist:name and the state acronym uses rdfs:label, but the last 5 added do not have an acronym. Consider creating an sa:acronym predicate – Dave says yes.

DELETE { ?s rdf:type sa:Province . ?s gist:name ?label . ?s rdfs:label ?acronym }  
INSERT { GRAPH ?g { ?s rdf:type sa:StateRegion }  
GRAPH ?g { ?s rdfs:label ?label }  
GRAPH ?g { ?s sa:acronym ?acronym } }  
WHERE { ?s rdf:type sa:Province OPTIONAL {?s gist:name ?label } OPTIONAL { ?s rdfs:label ?acronym }  
OPTIONAL { GRAPH ?g { ?s rdf:type sa:Province }}  
OPTIONAL { GRAPH ?g { ?s gist:name ?label }}  
OPTIONAL { GRAPH ?g { ?s rdfs:label ?acronym }}   
}

- At some point someone made England a province, contained in the UK (country). I guess this is technically accurate, but is also technically its own country.

### <CountryRegion>

- Country is a little bit of a mess. There are 3 instances of just gist:GeoCountry, 4 instances of just sa:GeoCountry, and 3 instances that are both gist:GeoCountry and sa:GeoCountry. There are 3 instances of Canada in various forms and 2 of the UK.
- For duplicate instances of Canada and the UK. Delete the UK with uri sa:44744 (nothing attached). Delete the Canadas with uri sa:\_Canada (nothing attached and has the weird underscore label) and uri sa:32585 (nothing attached).

DELETE { sa:44744 ?p ?o }  
WHERE { sa:44744 ?p ?o }
  
DELETE { sa:\_Canada ?p ?o }  
WHERE { sa:\_Canada ?p ?o }
  
DELETE { sa:32585 ?p ?o }  
WHERE { sa:32585 ?p ?o }

- Now there are 6 instances of gist:GeoCountry and 4 of sa:GeoCountry, with 3 still overlapping.
- Change these instances from rdf:type sa:GeoCountry to sa:CountryRegion
- They are also typed as gist:GeoCountry – remove as this no longer exists
- Replace the gist:name triple with the rdfs:label equiv. Consider adding acronyms at a later date.

Starting with gist:GeoCountry:   
DELETE { ?s rdf:type ?type . ?s gist:name ?label }  
INSERT { GRAPH ?g {?s rdf:type sa:CountryRegion }  
GRAPH ?g {?s rdf:type gist:GeoRegion }   
GRAPH ?g {?s rdfs:label ?label }  
}  
WHERE { ?s rdf:type gist:GeoCountry . ?s rdf:type ?type . ?s gist:name ?label  
OPTIONAL { GRAPH ?g {?s rdf:type gist:GeoCountry }}  
OPTIONAL { GRAPH ?g {?s rdf:type ?type }}  
OPTIONAL { GRAPH ?g { ?s gist:name ?label }}   
}
  
Now for the straggler sa:GeoCountry:  
DELETE { ?s rdf:type sa:GeoCountry. ?s gist:name ?label }  
INSERT { GRAPH ?g {?s rdf:type sa:CountryRegion }  
GRAPH ?g {?s rdf:type gist:GeoRegion }   
GRAPH ?g {?s rdfs:label ?label }  
}  
WHERE { ?s rdf:type sa:GeoCountry . ?s gist:name ?label  
OPTIONAL { GRAPH ?g {?s rdf:type sa:GeoCountry }}  
OPTIONAL { GRAPH ?g { ?s gist:name ?label }}   
}

### <Text>

- All instances on timecharges and assignments are currently of rdf:type gist:Content, change to rdf:type gist:Text
- Most instances currently use the gist:text predicate which no longer exists – needs to be replaced with gist:containedText

DELETE { ?s rdf:type gist:Content . ?s gist:text ?text }  
INSERT { GRAPH ?g { ?s rdf:type gist:Text }  
GRAPH ?g { ?s gist:containedText ?text } }  
WHERE { ?s rdf:type gist:Content . ?s gist:text ?text   
OPTIONAL { GRAPH ?g { ?s rdf:type gist:Content }}  
OPTIONAL { GRAPH ?g { ?s gist:text ?text }}  
}

- It looks like one use case already had been switched to gist:containedText, so for those use this query:

DELETE { ?s rdf:type gist:Content }  
INSERT { GRAPH ?g { ?s rdf:type gist:Text } }  
WHERE { ?s rdf:type gist:Content . ?s gist:containedText ?text   
OPTIONAL { GRAPH ?g { ?s rdf:type gist:Content }}  
}

- This leaves 55 instances of gist:Content that have nothing attached to them. This is dirty data and not sure what to do with those.

TBD

- Beware that there are other uses of gist:text floating around, like on tasks. Switching these to gist:containedText is potentially a misuse as I think containedText is intended when the subject is Text or Content? Do we want to make these descriptions of tasks visible again via a use case?

DELETE { ?s gist:text ?text }  
INSERT { ?s gist:containedText ?text }   
WHERE { ?s rdf:type sa:ProjectTask . ?s gist:text ?text }

- NOTE: the Backplane ontology uses gist:text and needs to be updated (bp:NodeValue, bp:RESTfulQuery and bp:Event). Scott has gist:text hardcoded in a couple things in Nailgun. He needs to update this at the same time.

To be dealt with during Backplane update

### <AssignedTask>

- All assignments must be changed from rdf:type sa:Assignment to rdf:type sa:AssignedTask
- Instead of assignments being sa:consumedToward tasks, the predicate should be changed to gist:directPartOf.
- Instead of assignments being sa:consumptionOf an employee, the predicate should be sa:responsibilityOf
- Instead of gist:actualEnd the predicate should be gist:plannedEnd

DELETE { ?s rdf:type sa:Assignment . ?s sa:consumedToward ?task . ?s sa:consumptionOf ?emp . ?s gist:actualEnd ?TI }  
INSERT { GRAPH ?g { ?s rdf:type sa:AssignedTask }  
GRAPH ?g {?s gist:directPartOf ?task }  
GRAPH ?g {?s sa:responsibilityOf ?emp }  
GRAPH ?g {?s gist:plannedEnd ?TI } }  
WHERE { ?s rdf:type sa:Assignment . ?s sa:consumedToward ?task . ?s sa:consumptionOf ?emp . ?s gist:actualEnd ?TI   
OPTIONAL { GRAPH ?g { ?s rdf:type sa:Assignment }}  
OPTIONAL { GRAPH ?g { ?s sa:consumedToward ?task }}  
OPTIONAL { GRAPH ?g { ?s sa:consumptionOf ?emp }}  
OPTIONAL { GRAPH ?g { ?s gist:actualEnd ?TI }}  
}

### <ProgressCategory>

- The instances in timecard for In Progress, Abandoned and Complete are currently rdf:type sa:StatusCategory – change them to rdf:type sa:ProgressCategory
- Replace the gist:name triple with the rdfs:label equiv

This was already completed above (see <StatusCategory>)

- Change the uris for each Progress Category to the human readable uris as modeled in the Tbox instead of their NAN-generated uris.

"Completed" Tbox  
DELETE { ?s rdf:type ?type . ?s rdfs:label ?label }  
INSERT { GRAPH ?g { sa:\_Completed rdf:type ?type }  
GRAPH ?g { sa:\_Completed rdfs:label ?label } }  
WHERE {?s rdf:type sa:ProgressCategory . ?s rdf:type ?type . ?s rdfs:label "Completed" . ?s rdfs:label ?label   
OPTIONAL { GRAPH ?g {?s rdf:type sa:ProgressCategory }}  
OPTIONAL { GRAPH ?g {?s rdfs:label "Completed"}}  
}  
"Completed" Abox  
DELETE { ?assign gist:categorizedBy sa:23915}   
INSERT { GRAPH ?g { ?assign gist:categorizedBy sa:\_Completed }}  
WHERE { ?assign gist:categorizedBy sa:23915 . ?assign rdf:type sa:AssignedTask   
OPTIONAL { GRAPH ?g {?assign gist:categorizedBy sa:23915}}  
}  
"Abandoned" Tbox  
DELETE { ?s rdf:type ?type . ?s rdfs:label ?label }  
INSERT { GRAPH ?g { sa:\_Abandoned rdf:type ?type }  
GRAPH ?g { sa:\_Abandoned rdfs:label ?label } }  
WHERE {?s rdf:type sa:ProgressCategory . ?s rdf:type ?type . ?s rdfs:label "Abandoned" . ?s rdfs:label ?label   
OPTIONAL { GRAPH ?g {?s rdf:type sa:ProgressCategory }}  
OPTIONAL { GRAPH ?g {?s rdfs:label "Abandoned"}}  
}  
"Abandoned" Abox  
DELETE { ?assign gist:categorizedBy sa:28515}   
INSERT { GRAPH ?g { ?assign gist:categorizedBy sa:\_Abandoned }}  
WHERE { ?assign gist:categorizedBy sa:28515 . ?assign rdf:type sa:AssignedTask   
OPTIONAL { GRAPH ?g {?assign gist:categorizedBy sa:28515}}  
}  
"In Progress" Tbox  
DELETE { ?s rdf:type ?type . ?s rdfs:label ?label }  
INSERT { GRAPH ?g { sa:\_InProgress rdf:type ?type }  
GRAPH ?g { sa:\_InProgress rdfs:label ?label } }  
WHERE {?s rdf:type sa:ProgressCategory . ?s rdf:type ?type . ?s rdfs:label "In Progress" . ?s rdfs:label ?label   
OPTIONAL { GRAPH ?g {?s rdf:type sa:ProgressCategory }}  
OPTIONAL { GRAPH ?g {?s rdfs:label "In Progress"}}  
}  
"In Progress" Abox  
DELETE { ?assign gist:categorizedBy sa:41804}   
INSERT { GRAPH ?g { ?assign gist:categorizedBy sa:\_InProgress }}  
WHERE { ?assign gist:categorizedBy sa:41804 . ?assign rdf:type sa:AssignedTask   
OPTIONAL { GRAPH ?g {?assign gist:categorizedBy sa:41804}}  
}

### <WorkWeek>

- Fixing sa:WorkWeek – the ww were not created with instances of gist:TimeInstant
  - Find a way to assign unique TI uris and insert triples to make them really TimeInstant?
  - Update cronjob query
  - Update the payroll queries

To be done at a later date.

- All instances of sa:WorkWeek should be gist:categorizedBy sa:\_fridayToThursday (currently none are)

INSERT { GRAPH ?g {?s gist:categorizedBy sa:\_fridayToThursday } }   
WHERE { GRAPH ?g {?s rdf:type sa:WorkWeek } }

### <PayPeriod>

- The instance of sa:PayPeriod called sa:\_fourWeeks should actually be rdf:type sa:PayrollCategory. (It will be uploaded as such via the new TBox, but the rdf:type sa:PayPeriod triple needs to be removed at the very least.)

DELETE { ?s rdf:type sa:PayPeriod }  
INSERT { GRAPH ?g { ?s rdf:type sa:PayrollCategory } }  
WHERE { ?s rdf:type sa:PayPeriod OPTIONAL { GRAPH ?g { ?s rdf:type sa:PayPeriod }}  
FILTER(?s IN (sa:\_fourWeeks))  
}

- All instances of sa:PayPeriod should be gist:categorizedBy sa:\_fourWeeks (currently none are)

INSERT { GRAPH ?g {?s gist:categorizedBy sa:\_fourWeeks } }   
WHERE { GRAPH ?g {?s rdf:type sa:PayPeriod } }

### <BillingRate>

- Replace the gist:name triple with the rdfs:label equiv.
- The gist:categorizedBy sa:\_standardBillingRate needs to be added to all billing rates

DELETE { ?s gist:name ?label }  
INSERT { GRAPH ?g {?s rdfs:label ?label }  
GRAPH ?g {?s gist:categorizedBy sa:\_standardBillingRate } }   
WHERE {?s rdf:type sa:BillingRate . ?s gist:name ?label  
OPTIONAL { GRAPH ?g { ?s rdf:type sa:BillingRate } }  
OPTIONAL { GRAPH ?g { ?s gist:name ?label } }  
}

## Instance clean-up

- On the two gist:DurationUnit instances, sa:\_Hour and sa:\_Week, replace the gist:name triple with rdfs:label equiv. Also get rid of the current rdfs:label with the underscore.

DELETE { sa:\_Hour gist:name ?label . sa:\_Hour rdfs:label ?badLabel }  
INSERT { sa:\_Hour rdfs:label ?label }  
WHERE {sa:\_Hour gist:name ?label . sa:\_Hour rdfs:label ?badLabel }
  
DELETE { sa:\_Week gist:name ?label . sa:\_Week rdfs:label ?badLabel }  
INSERT { sa:\_Week rdfs:label ?label }  
WHERE {sa:\_Week gist:name ?label . sa:\_Week rdfs:label ?badLabel }

- Remove the instance of sa:UnpaidSponsor

DELETE { ?s ?p ?o }  
WHERE { ?s rdf:type sa:UnpaidSponsor . ?s ?p ?o }

- Remove instances of sa:EmploymentCategory

DELETE { ?s ?p ?o }  
WHERE { ?s rdf:type sa:EmploymentCategory . ?s ?p ?o }

- Remove instances of sa:ProjectCategory

DELETE { ?s ?p ?o }  
WHERE { ?s rdf:type sa:ProjectCategory . ?s ?p ?o }

- Remove instances of sa:PayrollDeductionCategory

DELETE { ?s ?p ?o }  
WHERE { ?s rdf:type sa:PayrollDeductionCategory . ?s ?p ?o }

- Remove instances of sa:LocationCategory

DELETE { ?s ?p ?o }  
WHERE { ?s rdf:type sa:LocationCategory . ?s ?p ?o }

- Remove instances of sa:BankAccountCategory (they were misspelled as "sa:BankAcountCategory")

DELETE { ?s ?p ?o }  
WHERE { ?s rdf:type sa:BankAcountCategory . ?s ?p ?o }

- Remove instances of sa:ResourceConsumptionCategory

This was already completed above via <ChargeabilityType>. (Was a member of both classes.)

- The sa:\_fourWeeks instance of sa:PayPeriod (sa:\_fourWeeks) needs to be rdf:type sa:PayrollCategory.

This was already completed above. (see <PayPeriod>)

- Remove the instance sa:\_841555871

DELETE { sa:\_841555871 ?p ?o }  
WHERE { sa:\_841555871 ?p ?o }

- Remove the instance sa:\_SemanticArts

DELETE { sa:\_SemanticArts ?p ?o }  
WHERE { sa:\_SemanticArts ?p ?o }

- On the instance of sa:\_FEIN841555871 remove the triple stating it is rdf:type sa:Client.

DELETE { sa:\_FEIN841555871 rdf:type sa:Client }  
WHERE { sa:\_FEIN841555871 rdf:type sa:Client }

- On the instance of sa:\_FEIN841555871 remove the triple stating it is rdf:type sa:SemanticArts? It is modeled as rdf:type gist:Organization, and is also the only value of the ENUM class sa:SemanticArts. It would be inferred to be rdf:type sa:SemanticArts, but do we want to leave it as explicitly so?

TBD DELETE { sa:\_FEIN841555871 rdf:type sa:SemanticArts }  
WHERE { sa:\_FEIN841555871 rdf:type sa:SemanticArts }

- Delete the couple of instances of gist:Monetary that use the predicate gist:currencyValue and are not attached to anything.

DELETE { ?s ?p ?o }   
WHERE {?s rdf:type gist:Monetary . ?s gist:currencyValue ?x . ?s ?p ?o }

# Backplane clean-up for summer 2015

For now, only make updates related to the use of gist:text, gist:label and gist:name. Scott has made all necessary swaps for these three predicates in the IBeam/Nailgun code.

### <SecurityPrivilege>

- On the instances of gist:SecurityPrivilege, swap out gist:name with rdfs:label

DELETE { ?s gist:name ?label }  
INSERT { ?s rdfs:label ?label }  
WHERE { ?s rdf:type gist:SecurityPrivilege . ?s gist:name ?label }

- There is an instance with no type in timecard that looks like it was supposed to be a permission called sa:\_projMgr. Seems outdated, can't see it anywhere in Nailgun, and is only attached to orphaned bits of a use case. Probably can just delete it.

DELETE { ?s ?p ?o }  
WHERE { ?s ?p ?o . ?s bp:requiresPermission sa:\_projMgr }

### <Event>

- currently uses both gist:name and rdfs:label, I think one is for the display and one is for the URL? Figure out better way to do this.

- On the instances of bp:Event, swap out gist:text with gist:containedText

DELETE { ?s gist:text ?text }  
INSERT { ?s gist:containedText ?text }  
WHERE { ?s rdf:type bp:Event . ?s gist:text ?text }

### <Navigation>

- On the instances of bp:Navigation, remove the gist:label triples. (Already has rdfs:label triples)

DELETE { ?s gist:label ?label }  
WHERE {?s rdf:type bp:Navigation . ?s gist:label ?label }

### <NodeValue>

- On the instances of bp:NodeValue, swap out gist:text with gist:containedText

DELETE { ?s gist:text ?text }  
INSERT { ?s gist:containedText ?text }  
WHERE { ?s rdf:type bp:NodeValue . ?s gist:text ?text }

### <RESTfulQuery>

- On the instances of bp:RESTfulQuery, swap out gist:label with rdfs:label, and gist:text with gist:containedText. Some have both labels, some have only one, and one has neither.

For ones with both gist:label and rdfs:label:  
DELETE { ?s gist:label ?label . ?s gist:text ?text }  
INSERT { GRAPH ?g { ?s gist:containedText ?text }}  
WHERE { ?s rdf:type bp:RESTfulQuery . ?s gist:label ?label . ?s gist:text ?text FILTER EXISTS { ?s rdfs:label ?rdfslabel }  
OPTIONAL { GRAPH ?g { ?s rdf:type bp:RESTfulQuery } }  
OPTIONAL { GRAPH ?g { ?s gist:label ?label } }  
OPTIONAL { GRAPH ?g { ?s gist:text ?text } }  
}
  
For ones with only gist:label:  
DELETE { ?s gist:label ?label . ?s gist:text ?text }  
INSERT { GRAPH ?g { ?s rdfs:label ?label }  
GRAPH ?g { ?s gist:containedText ?text }}  
WHERE { ?s rdf:type bp:RESTfulQuery . ?s gist:label ?label . ?s gist:text ?text FILTER NOT EXISTS { ?s rdfs:label ?rdfslabel }  
OPTIONAL { GRAPH ?g { ?s rdf:type bp:RESTfulQuery } }  
OPTIONAL { GRAPH ?g { ?s gist:label ?label } }  
OPTIONAL { GRAPH ?g { ?s gist:text ?text } }  
}
  
For the one with only rdfs:label and the one with no label at all:  
DELETE { ?s gist:text ?text }  
INSERT { GRAPH ?g { ?s gist:containedText ?text }}  
WHERE { ?s rdf:type bp:RESTfulQuery . ?s gist:text ?text   
OPTIONAL { GRAPH ?g { ?s rdf:type bp:RESTfulQuery } }  
OPTIONAL { GRAPH ?g { ?s gist:text ?text } }  
}

- Figure out what the label should be for the missing one?

### <DataType subclasses>

- Since none of the bp:DataTypes are currently being used we are removing them from the ontology (at least for now). Remove instances of bp:TextType, bp:DateType, bp:NumericType, bp:URIType

DELETE { ?s ?p ?o }  
WHERE { ?s rdf:type bp:DataType. ?s ?p ?o }

# Add the TBoxes back in on named graphs

- Gist Modules (20 files)
- SA Ontology (2 files)
- backplane ontology (1 file)

Delete duplicates (subject, predicate,object only). For some reason AG does not recognize the duplicate labels on two instances of bp:Navigation (sa:\_Application and sa:\_Configuration). I deleted two of these by hand. I think this is because in e6 we have the labels as datatype properties, whereas rdfs:label is actually an annotation property.

# IBeam/Nailgun

- Delete all of the currently existing use cases in IBeam. You will need to go to the Nailgun edit screen for each individual use case and then select delete.
- Export new use cases from the staging repo to the live repo
