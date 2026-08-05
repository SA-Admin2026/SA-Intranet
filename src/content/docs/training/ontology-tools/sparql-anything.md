---
title: "SPARQL Anything"
confluence_id: 2300215297
source: "SPARQL-Anything_2300215297.html"
---

# Useful Links

**The SPARQL Anything GitHub repo with a helpful README**

<https://github.com/SPARQL-Anything/sparql.anything>

**Gentle introduction and video by Luigi (one of the primary authors of SPARQL Anything) for his students:**

<https://sparql-anything.readthedocs.io/en/v0.8.0/A_GENTLE_INTRODUCTION_TO_SPARQL_ANYTHING/>

<https://www.dropbox.com/s/bc31v0klg68op0z/SPARQLAnythingTutorial-highres.mp4?dl=0>

**Examples of using SPARQL Anything to "re-model" RDF as it is being produced**

<https://github.com/kg-construct/rml-questions/discussions/15#discussioncomment-2974961>   <https://github.com/kg-construct/rml-questions/discussions/3#discussioncomment-1525167>

**Instructions for running in a Docker container**

<https://github.com/SPARQL-Anything/sparql.anything/blob/v0.9-DEV/BROWSER.md>

**Justin’s blog posts about HTML scraping with SPARQL and other SPARQL Anything-related topics**

<https://github.com/justin2004/weblog#readme>

**Example of running a Python script to alter some source data (a CSV file) and then triplifying the result using SPARQL Anything**

<https://gist.github.com/justin2004/bfbef51179e3157d13a9967f71ef3fa4>

# **TARQL/SPARQL Anything comparison**

For those familiar with TARQL but new to SPARQL Anything, below is a comparison of a TARQL CONSTRUCT query and a SPARQL Anything CONSTRUCT query that achieves the very same thing. (CSV included for testing.)

[![](https://semarts.atlassian.net/wiki/download/thumbnails/2300215297/mlb_elo_latest.csv?version=2&modificationDate=1665016871343&cacheVersion=1&api=v2&viewType=fileMacro)](/attachments/2300215297/2302935056.csv)

![](https://semarts.atlassian.net/wiki/images/icons/grey_arrow_down.png)TARQL version

```
# TARQL version

PREFIX rounders: <http://example.com/ns/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

CONSTRUCT {

    ?gameID 
        a rounders:BaseballGame ;
        rounders:homeTeam ?homeTeam ;
        rounders:awayTeam ?awayTeam ;
        rounders:wonBy ?gameWinner ;
        rounders:lostBy ?gameLoser ;
        rdfs:label ?gameLabel ;
        rounders:gameDay ?date ;
        rounders:homeScore ?score2_int ;
        rounders:awayScore ?score1_int ;
        .

    ?homeTeam a rounders:BaseballTeam .
    ?awayTeam a rounders:BaseballTeam .
    
}

WHERE {

    BIND(xsd:int(?score1) as ?score1_int)
    BIND(xsd:int(?score2) as ?score2_int)
    BIND(tarql:expandPrefixedName(CONCAT('rounders:',?team1)) AS ?awayTeam)
    BIND(tarql:expandPrefixedName(CONCAT('rounders:',?team2)) AS ?homeTeam)
    BIND(IF(?score1 > ?score2, ?team1, ?team2) AS ?winner)
    BIND(IF(?score1 < ?score2, ?team1, ?team2) AS ?loser)
    BIND(tarql:expandPrefixedName(CONCAT('rounders:',?winner)) AS ?gameWinner)
    BIND(tarql:expandPrefixedName(CONCAT('rounders:',?loser)) AS ?gameLoser)
    BIND(tarql:expandPrefixedName(CONCAT('rounders:',?game)) AS ?gameID)
    BIND(CONCAT("Game ", xsd:string(?game)) AS ?gameLabel)
    FILTER(xsd:integer(?game) > 22)

}
```

![](https://semarts.atlassian.net/wiki/images/icons/grey_arrow_down.png)SPARQL Anything version

```
# SPARQL Anything version

PREFIX rounders: <http://example.com/ns/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xyz: <http://sparql.xyz/facade-x/data/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX fx: <http://sparql.xyz/facade-x/ns/>

CONSTRUCT {

    ?gameID 
        a rounders:BaseballGame ;
        rounders:homeTeam ?homeTeam ;
        rounders:awayTeam ?awayTeam ;
        rounders:wonBy ?gameWinner ;
        rounders:lostBy ?gameLoser ;
        rdfs:label ?gameLabel ;
        rounders:gameDay ?date ;
        rounders:homeScore ?score2_int ;
        rounders:awayScore ?score1_int ;
        .

    ?homeTeam a rounders:BaseballTeam .
    ?awayTeam a rounders:BaseballTeam .
    
}

WHERE {
SERVICE <x-sparql-anything:location=/local/file/path/mlb_elo_latest.csv,csv.headers=true>
    {
                
        ?s xyz:team1 ?team1 .
        ?s xyz:team2 ?team2 .
        ?s xyz:score1 ?score1 .
        ?s xyz:score2 ?score2 .
        ?s xyz:game ?game .

        BIND(xsd:int(?score1) as ?score1_int)
        BIND(xsd:int(?score2) as ?score2_int)
        BIND(URI(CONCAT(str(rounders:),?team1)) AS ?awayTeam)
        BIND(URI(CONCAT(str(rounders:),?team2)) AS ?homeTeam)
        BIND(IF(xsd:int(?score1) > xsd:int(?score2), ?team1, ?team2) AS ?winner)
        BIND(IF(xsd:int(?score1) < xsd:int(?score2), ?team1, ?team2) AS ?loser)
        BIND(URI(CONCAT(str(rounders:),?winner)) AS ?gameWinner)
        BIND(URI(CONCAT(str(rounders:),?loser)) AS ?gameLoser)
        BIND(URI(CONCAT(str(rounders:),?game)) AS ?gameID)
        BIND(CONCAT("Game ", xsd:string(?game)) AS ?gameLabel)
        FILTER(xsd:integer(?game) > 22)

    }
}
```
