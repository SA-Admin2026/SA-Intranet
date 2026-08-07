---
title: "SPARQL FIBO Queries"
confluence_id: 520912909
source: "SPARQL-FIBO-Queries_520912909.html"
---
# How to query for the most specific true statement

<https://wiki.edmcouncil.org/display/FLT/How+to+query+for+the+most+specific+true+statement>

Here are some queries for finding the most specific information about some entities. The data we are starting with is very simple:

NewBanks:Corporation\_1  
        a fibo-be-le-cb:Corporation ;  
        rdfs:label "Corporation 1"^^xsd:string ;  
        fibo-be-oac-cctl:holdsSignificantControllingInterestIn NewBanks:Corporation\_2 ;  
        fibo-be-oac-opty:holdsAnInterestIn NewBanks:Corporation\_2 .  
  
NewBanks:Corporation\_2  
       a fibo-be-le-cb:Corporation ;  
       rdfs:label "Corporation 2"^^xsd:string .

If we ask (without inferencing) about the relationship between them,

SELECT ?p  
WHERE {  
       NewBanks:Corporation\_1 ?p NewBanks:Corporation\_2 .  
}

we get the two answers in the data

     fibo-be-oac-cctl:holdsSignificantControllingInterestIn  
     fibo-be-oac-opty:holdsAnInterestIn

If we ask for the relations between them with inferencing, we get more:

     fibo-be-oac-cctl:holdsControllingInterestIn  
     fibo-be-oac-cctl:holdsSignificantControllingInterestIn  
     fibo-be-oac-opty:holdsAnInterestIn  
     fibo-fnd-oac-own:owns

Similarly, if we ask for the (named) type of one of the corporations, we get just the asserted type:

SELECT ?type  
WHERE {  
     NewBanks:Corporation\_1 a ?type .  
     FILTER (ISIRI (?type))  
}

->

     fibo-be-le-cb:Corporation

With inferencing, we get a lot more:

     fibo-be-be-be:BusinessEntity  
     fibo-be-le-cb:Corporation  
     fibo-be-le-fbo:FormallyConstitutedOrganization  
     fibo-be-le-lp:JuridicalPerson  
     fibo-be-le-lp:LegalEntity  
     fibo-be-le-lp:LegalEntityOrNaturalPerson  
     fibo-fnd-aap-agt:AutonomousAgent  
     fibo-fnd-oac-own:Owner  
     fibo-fnd-org-fm:FormalOrganization  
     fibo-fnd-org-org:Organization  
     fibo-fnd-pty-pty:IndependentParty  
     fibo-fnd-pty-pty:PartyInRole  
     fibo-fnd-pty-rl:AgentInRole  
     fibo-fnd-pty-rl:ThingInRole       
     owl:Thing

(if we hadn't filtered by types with explicit IRIs, this list is very long indeed!)

But how do we find the most specific, i.e., the one that supercedes any other?

First, let's start with the properties:

SELECT ?p  
WHERE {  
     NewBanks:Corporation\_1 ?p NewBanks:Corporation\_2 .  
     FILTER NOT EXISTS { # No more specific true relationship  
          NewBanks:Corporation\_1 ?moreSpecific NewBanks:Corporation\_2 .  
          ?moreSpecific (rdfs:subPropertyOf)+ ?p .  
          } .  
     }  
->  
     fibo-be-oac-cctl:holdsSignificantControllingInterestIn

This is the case, because this relation holds, but no more specific one does.

For the classes, we have the same issue, and the same solution works:

SELECT ?type  
WHERE {  
     NewBanks:Corporation\_1 a ?type .  
     FILTER isIRI(?type) .  
     FILTER NOT EXISTS { # No more specific true class membership  
          NewBanks:Corporation\_1 a ?MoreSpecificType .  
          ?MoreSpecificType (rdfs:subClassOf)+ ?type .  
     } .  
}  
->  
     fibo-be-le-cb:Corporation  
     fibo-fnd-oac-own:Owner  
     fibo-fnd-pty-pty:IndependentParty

The fact that there is still more than one answer suggests there could be an issue with (this version of) the model. One might have suspected that Corporation was a subclass of IndependentParty, but it is not. One also would wonder how Corporation\_1 came to be an Owner (which is a Relative Thing)
