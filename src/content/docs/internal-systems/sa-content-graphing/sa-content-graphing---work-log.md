---
title: "SA Content Graphing - Work Log"
confluence_id: 2420342798
source: SA-Content-Graphing---Work-Log_2420342798.html
---
# 2023-07-21 - Drive Scanning and File Preparation

[Office Manager](https://semarts.atlassian.net/wiki/people/61df1756e7637900686f43c4?ref=confluence) ran congr.py v0.6.4 for us against the "shared drive". The following screenshot shows the Turtle files created. [Steven Chalem](https://semarts.atlassian.net/wiki/people/62bef196de439ce00ee5800d?ref=confluence) broke two of the large files into three parts each. The following screenshot shows the resulting Turtle files:

![](/internal-systems/attachments/2420342798/2420506626.png)

Imported turtle files to AG for Clients And Partners and Marketing And Sales

PS C:\Users\StevenChalem\git\congr> python upload.py "C:\Users\StevenChalem\Semantic Arts\SA Staff - Documents\InternalSystems.congr\ClientsAndPartners7-20-23\_Split1of3.ttl" "<http://example.com/files/ClientsAndPartners>"  
653884  
PS C:\Users\StevenChalem\git\congr> python upload.py "C:\Users\StevenChalem\Semantic Arts\SA Staff - Documents\InternalSystems.congr\ClientsAndPartners7-20-23\_Split2of3.ttl" "<http://example.com/files/ClientsAndPartners>"  
654665  
PS C:\Users\StevenChalem\git\congr> python upload.py "C:\Users\StevenChalem\Semantic Arts\SA Staff - Documents\InternalSystems.congr\ClientsAndPartners7-20-23\_Split3of3.ttl" "<http://example.com/files/ClientsAndPartners>"  
518280  
PS C:\Users\StevenChalem\git\congr> python upload.py "C:\Users\StevenChalem\Semantic Arts\SA Staff - Documents\InternalSystems.congr\MarketingAndSales7-20-23.ttl" "<http://example.com/files/MarketingAndSales>"  
254546

# 2023-07-21 Subsequent SPARQL Inserts etc.

```
PREFIX skos: http://www.w3.org/2004/02/skos/core#
PREFIX gist: https://ontologies.semanticarts.com/gist/
PREFIX gistz: https://w3id.org/ontology/semanticarts/gist/
PREFIX congr: https://ontologies.semanticarts.com/congr/

INSERT {
  GRAPH http://example.com/graph/match-pref-label {
  ?directory congr:matchesPrefLabel ?organization .
  }
}
WHERE {
  ?directory a gistz:Location ;
  congr:pathString ?dirName .
  ?organization a gist:Organization ;
  skos:prefLabel ?orgLabel .
FILTER(CONTAINS(STR(?dirName), STR(?orgLabel)))
}
```
