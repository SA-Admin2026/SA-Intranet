---
title: "RDF Shapes for SemArts Enterprise Ontology"
confluence_id: 950393
source: RDF-Shapes-for-SemArts-Enterprise-Ontology_950393.html
---

# RDF Shapes for SemArts Enterprise Ontology

## RDF Shapes for SemArts Enterprise Ontology

<TimeCharge> { rdf:type (sa:TimeCharge), sa:consumptionOf ( @<SAEmployee> | @ <SASubContractor> ), sa:consumedToward @<ProjectTask>, gist:actualStart @<TimeInstant>, gist:actualEnd @<TimeInstant>, gist:hasMagnitude @<HourDuration>, gist:occurredAt @<StateRegion>, gist:describedIn @<Text>, gist:recordedOn @<TimeInstant>, gist:directPartOf @<WorkWeek> # this triple added via cron job }
  
  
<SAEmployee> { rdf:type (sa:SAEmployee, gist:Person) , gist:name xsd:string, gist:categorizedBy (sa:\_active sa:\_inactive), gist:hasA @<BillingRate>, gist:hasA @<BasePayRate> ? # not currently populated; for future use.}
  
  
<SASubContractor> { rdf:type (sa:SASubcontractor), gist:name xsd:string, gist:categorizedBy (sa:\_active sa:\_inactive), gist:hasA @<BillingRate>, gist:hasA @<BasePayRate> ? # not currently populated; for future use.}
  
  
<ProjectTask> { rdf:type (sa:ProjectTask), rdfs:label xsd:string, gist:directPartOf @<Project>, gist:categorizedBy (sa:\_active sa:\_inactive)}
  
  
<Project> { rdf:type (sa:Project), rdfs:label xsd:string, sa:hasSponsor ( @<Client> | @<SemanticArts> ) , gist:hasMagnitude @<WriteOff>, gist:governedBy ( @<SAEmployee> | @<SASubContractor> ), gist:categorizedBy ( sa:\_Chargeable sa:\_Internal sa:\_Unpaid )}
  
  
<Client> { rdf:type (sa:Client) , gist:name xsd:string }
  
  
<WriteOff> { rdf:type (sa:WriteOff), gist:decimalValue xsd:float, gist:hasUoM (sa:\_writeOffDecimal)}
  
  
<StateRegion> { rdf:type (sa:StateRegion), rdfs:label xsd:string  
, sa:acronym xsd:string ?, gist:geoContainedIn @<CountryRegion> ?, gist:presidedOverBy @<GovernmentOrganization> \*}
  
  
<CountryRegion> { rdf:type (sa:CountryRegion), rdfs:label xsd:string  
, sa:acronym xsd:string ?, gist:identifiedBy @<ISOCountryCode> \*, gist:presidedOverBy @<CountryGovernment> ?}
  
  
<Text> { rdf:type (gist:Text), gist:containedText xsd:string}
  
  
<AssignedTask> { rdf:type (sa:AssignedTask), sa:responsibilityOf ( @<SAEmployee> | @ <SASubContractor> ) , gist:directPartOf @<ProjectTask>, gist:plannedStart @<TimeInstant> ?, gist:plannedEnd@<TimeInstant>, gist:describedIn @<Text>, gist:categorizedBy ( sa:\_InProgress sa:\_Completed sa:\_Abandoned ) }
  
  
<WorkWeek> { rdf:type (sa:WorkWeek), rdfs:label xsd:string  
, gist:directPartOf @<PayPeriod>, gist:plannedStart @<TimeInstant>, gist:plannedEnd @<TimeInstant>, gist:sequence xsd:integer, gist:categorizedBy (sa:\_fridayToThursday)}
  
  
<PayPeriod> { rdf:type (sa:PayPeriod), rdfs:label xsd:string #pattern is "yyyy – sequence no.", gist:categorizedBy (sa:\_fourWeeks)  
, gist:plannedStart @<TimeInstant> ? #not actually needed, derived from workweek, gist:plannedEnd @<TimeInstant> ? # not actually needed, derived from workweek}
  
  
<BillingRate> { rdf:type (sa:BillingRate), rdfs:label xsd:string, gist:decimalValue xsd:float, gist:hasUoM (sa:\_dollarsPerHour), gist:categorizedBy (sa:\_standardBillingRate)}
  
#BasePayRate not currently populated; for future use.  
<BasePayRate> rdf:type (sa:BasePayRate), rdfs:label xsd:string, gist:decimalValue xsd:float, gist:hasUoM (sa:\_dollarsPerHour), gist:categorizedBy (sa:\_basePayRate)}

## gist Namespace Shapes

<TimeInstant> { rdf:type (gist:TimeInstant), gist:universalDateTime xsd:dateTime  
, gist:localDateTime xsd:dateTime}
  
  
<HourDuration> { rdf:type (gist:Duration), gist:decimalValue xsd:float, gist:hasUoM (sa:\_Hour)}
  
  
<Organization> { rdf:type (gist:Organization), gist:name xsd:string}
  
#not currently populated  
<GovernmentOrganization>
  
#not currently populated  
<ISOCountryCode>
  
#not currently populated  
<CountryGovernment>

## Enum Classes – no more data to be added

<StatusCategory> { rdf:type (sa:StatusCategory), rdfs:label xsd:string}
  
<ChargeabilityType> { rdf:type (sa:ChargeabilityType), rdfs:label xsd:string}
  
<ProgressCategory> { rdf:type (sa:ProgressCategory), rdfs:label xsd:string}
