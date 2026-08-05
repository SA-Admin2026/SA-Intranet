---
title: "Allegrograph Federation"
confluence_id: 49381540
source: Allegrograph-Federation_49381540.html
---

# Allegrograph Federation

- [AllegroGraph Federation:](#AllegrographFederation-AllegroGraphFederation:)
  - [Defining an AllegroGraph Federation:](#AllegrographFederation-DefininganAllegroGraphFederation:)
  - [How AllegroGraph Federation processes queries:](#AllegrographFederation-HowAllegroGraphFederationprocessesqueries:)
  - [Defining SPARQL Federations:](#AllegrographFederation-DefiningSPARQLFederations:)
  - [How AllegroGraph processes SPARQL Federation Queries:](#AllegrographFederation-HowAllegroGraphprocessesSPARQLFederationQueries:)

This may be better formatted for you and include some screen shots:

=======================================================

AllegroGraph supports two main types of federation: AllegroGraph Federation and SPARQL Federation.

Both types of federation support queries of multiple databases within the same AllegroGraph instance, multiple AllegroGraph instances on the same physical server hardware, across multiple physical servers or any combination.  They are both intended for query only and cannot be used for insert/update/delete operations.

## AllegroGraph Federation:

One of the key advantages of AllegroGraph Federation is that the user is completely insulated from the physical layout of the data among the constituent databases of the federation.  Regardless of AllegroGraph server instance and physical location, AllegroGraph Federations consist of databases hosted by the same version of AllegroGraph.  AllegroGraph Federation does not support the federation of databases from other database vendors.

AllegroGraph Federation is very performant when the federation is made up of a group of databases within the same AllegroGraph instance.  It’s slightly less performant, but still very good, when the constituent databases are on the same physical server.  AllegroGraph Federation is least performant when the queries are very complex and the databases are distributed across multiple physical servers with intermediate query result sets being transported over a network.

### Defining an AllegroGraph Federation:

An Allegro Federation is session process and is itself ephemeral, even though the constituent databases are individually ACID.  The user can define as many federation session processes within the capabilities of the hardware being used.  When you define the federation, you specify a login/password for each database.  That login/password is used for the duration of the session process.

The user creating a federation can define:

- the databases involved, regardless of location (including the login/password)

- enable rdfs++ reasoning on one or more of the databases

- filter on a specific graph within one or more of the databases

- Federation process lifetime

- Whether an InitFile or script is loaded at startup.

The minilanguage to define AllegroGraph Federations sessions:

`<store1>`

Indicates the triple store named "store1" in the root catalog.

`<catalog1:store2>`

The triple store "store2" in the "catalog1" catalog.

`<http://somehost:10035/repositories/store3>`

A remote store, by URL. If the URL points to the server itself, the store will be opened locally.

`<a> + <b>`

The federation of stores "a" and "b".

`<a>[rdfs++]`

The store "a", with `rdfs++` reasoning applied (`restriction` is also supported as a reasoner type). You can specify the context that inferred triples get using this syntax: `<a>[rdfs++#<http://test.org/mycontext>]`

`<a>{null <http://example.com/graph1>}`

Store "a", filtered to only contain the triples in the default graph (`null`) and the graph named `http://example.com/graph1`. Any number of graphs can be given between the braces.

This syntax can be composed to created federations of filtered and reasoning stores, for example `<http://somehost:10035/repositories/<a>{null} +
<b>[rdfs++]`.

The service returns the URL of the new session. Any sub-URLs that were valid under a repository's URL will also work under this session URL. For example, if `http://localhost:55555/sessions/7e8df8cd-26b8-26e4-4e83-0015588336ea` is returned,

The following is an example of a federation session definition entered into WebView:

<<http://super:xyzzy@crow:26000/repositores/kennedy-favs>>+<<http://super:xyzzy@crow:26752/repositories/kennedy>>

In these examples, the queries are fun from an instance of AllegroGraph at port 26752 running on the server kraken.  The databases being accessed are:

kennedy at port 26752 on the server crow and

kennedy-favs at port 26000 also on server crow

![](/internal-systems/attachments/49381540/49446964.png)

After creation:

![](/internal-systems/attachments/49381540/49709117.png)

List of predicates in the federation:

![](/internal-systems/attachments/49381540/49578100.png)

Simple query of the federation:

![](/internal-systems/attachments/49381540/49578105.png)

The same can be accomplished with more control via the REST interface:

POST /session?store=<<http://super:xyzzy@crow:26000/repositories/kennedy-favs>>+<<http://super:xyzzy@crow:26752/repositories/kennedy>>&autoCommit=true&loadInitFile=false&lifetime=3600

Properly encoded for curl, it looks like this:

curl -X POST "<http://super:xyzzy@localhost:26752/session?store=%3Chttp%3A%2F%2Fsuper%3Axyzzy%40crow%3A26000%2Frepositories%2Fkennedy-favs%3E%2B%3Chttp%3A%2F%2Fsuper%3Axyzzy%40crow%3A26752%2Frepositories%2Fkennedy%3E&autoCommit=true&loadInitFile=false&lifetime=3600>”

If everything goes well, URL that represents a newly created REST interface that accepts queries for your federation session:

<http://localhost:56786/sessions/384c500f-91f2-6364-69be-001d88ec4dc5>

This example lists all the children of parents with the last name “Kennedy”:

select ?person ?firstName ?middleInitial ?lastName ?childfname

                                    {

                                      ?person <<http://www.franz.com/simple#has-child>> ?child .

              ?person <<http://www.franz.com/simple#last-name>> "Kennedy" .

              ?person <<http://www.franz.com/simple#first-name>> ?firstName .

              ?person <<http://www.franz.com/simple#last-name>> ?lastName .

              ?person <<http://www.franz.com/simple#middle-initial>> ?middleInitial .

              ?child  <<http://www.franz.com/simple#first-name>> ?childfname .

            }

            limit 1

Result:

person  firstName        middleInitial   lastName         childfname

<<http://www.franz.com/simple#person1>>      “Joseph"          "Patrick"          "Kennedy"      "Joseph"

Result without the limit clause:

person  firstName        middleInitial   lastName         childfname

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Joseph"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "John"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Rose"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Kathleen"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Eunice"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Patricia"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Robert"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Jean"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Edward"

<<http://www.franz.com/simple#person4>>      "John"  "Fitzgerald"     "Kennedy"      "Caroline"

<<http://www.franz.com/simple#person4>>      "John"  "Fitzgerald"     "Kennedy"      "John"

<<http://www.franz.com/simple#person4>>      "John"  "Fitzgerald"     "Kennedy"      "Patrick"

<<http://www.franz.com/simple#person9>>      "Eunice"          "Mary" "Kennedy"      "Robert"

<<http://www.franz.com/simple#person9>>      "Eunice"          "Mary" "Kennedy"      "Maria"

<<http://www.franz.com/simple#person9>>      "Eunice"          "Mary" "Kennedy"      "Timothy"

<<http://www.franz.com/simple#person9>>      "Eunice"          "Mary" "Kennedy"      "Mark"

<<http://www.franz.com/simple#person9>>      "Eunice"          "Mary" "Kennedy"      "Anthony"

<<http://www.franz.com/simple#person11>>    "Patricia"         "nil"     "Kennedy"      "Christopher"

<<http://www.franz.com/simple#person11>>    "Patricia"         "nil"     "Kennedy"      "Sydney"

<<http://www.franz.com/simple#person11>>    "Patricia"         "nil"     "Kennedy"      "Victoria"

<<http://www.franz.com/simple#person11>>    "Patricia"         "nil"     "Kennedy"      "Robin"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Kathleen"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Joseph"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Robert"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "David"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Mary"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Michael"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Mary"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Christopher"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Matthew"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Douglas"

<<http://www.franz.com/simple#person13>>    "Robert"          "Francis"          "Kennedy"      "Rory"

<<http://www.franz.com/simple#person15>>    "Jean"  "Ann"  "Kennedy"      "Stephen"

<<http://www.franz.com/simple#person15>>    "Jean"  "Ann"  "Kennedy"      "William"

<<http://www.franz.com/simple#person15>>    "Jean"  "Ann"  "Kennedy"      "Amanda"

<<http://www.franz.com/simple#person15>>    "Jean"  "Ann"  "Kennedy"      "Kym"

<<http://www.franz.com/simple#person17>>    "Edward"        "Moore"           "Kennedy"      "Kara"

<<http://www.franz.com/simple#person17>>    "Edward"        "Moore"           "Kennedy"      "Edward"

<<http://www.franz.com/simple#person17>>    "Edward"        "Moore"           "Kennedy"      "Patrick"

Properly encoded query issued through the REST interface:

curl -X POST "<http://super:xyzzy@localhost:34419/sessions/f732b8db-1c4d-47e4-d120-b38cdedfd70a?query=select%20%3Fperson%20%3FfirstName%20%3FmiddleInitial%20%3FlastName%20%3Fchildfname%20%0A%09%09%09%7B%0A%09%09%09>%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23has-child%3E%20%3Fchild%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23last-name%3E%20%22Kennedy%22%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23first-name%3E%20%3FfirstName%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23last-name%3E%20%3FlastName%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23middle-initial%3E%20%3FmiddleInitial%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fchild%20%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23first-name%3E%20%3Fchildfname%20.%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20limit%201&queryLn=SPARQL&infer=false&returnQueryMetadata=true”

The returned result with limit 1 clause:

<?xml version="1.0"?>

<!-- Generated by AllegroGraph 6.1 -->

<sparql xmlns="[http://www.w3.org/2005/sparql-results#](http://www.w3.org/2005/sparql-results)">

  <head>

    <variable name="person"/>

    <variable name="firstName"/>

    <variable name="middleInitial"/>

    <variable name="lastName"/>

    <variable name="childfname"/>

  </head>

  <results>

  <result>

    <binding name="person"><uri>http://www.franz.com/simple#person1</uri></binding>

    <binding name="firstName"><literal>Joseph</literal></binding>

    <binding name="middleInitial"><literal>Patrick</literal></binding>

    <binding name="lastName"><literal>Kennedy</literal></binding>

    <binding name="childfname"><literal>Joseph</literal></binding>

  </result>

  </results>

A more complex example that constrains the previous result to Kennedy parents and children that share the same favorite color and car make:

select ?person ?firstName ?middleInitial ?lastName ?childfname ?car ?color {

                  ?person <<http://www.franz.com/simple#has-child>> ?child .

              ?person <<http://www.franz.com/simple#last-name>> "Kennedy" .

              ?person <<http://www.franz.com/simple#first-name>> ?firstName .

              ?person <<http://www.franz.com/simple#last-name>> ?lastName .

              ?person <<http://www.franz.com/simple#middle-initial>> ?middleInitial .

              ?child  <<http://www.franz.com/simple#first-name>> ?childfname .

              ?child  <<http://franz.com/federation#fav-car>> ?car .

              ?person <<http://franz.com/federation#fav-car>> ?car .

              ?person <<http://franz.com/federation#fav-color>> ?color .

              ?child <<http://franz.com/federation#fav-color>> ?color .

            }

RESULTS:

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Patricia"            "dodge"           "green"

<<http://www.franz.com/simple#person1>>      "Joseph"          "Patrick"          "Kennedy"      "Robert"            "dodge"           "green"

### How AllegroGraph Federation processes queries:

Despite how the data may be distributed, AllegroGraph federation is able to provide query transparency to the user.

Starting with the first clause in the query, the federation session sends the first clause to each constituent database regardless of contents.  Each constituent responds, with its own result set of the very simple one clause query.  In our example, that happens to be all the triples that have the predicate <<http://www.franz.com/simple#has-child>>. When each of the constituents is finished, the combined results form the intermediate result set of the first clause. The subjects of the result are bound to the “?person” variable and the objects are bound to the "?child" variable.

Since this one line query is so simple, using SPARQL is far too powerful and has far too much overhead for the job. The federation session sends a REST call to each of the constituents that looks something like:

/repositories/kennedy-favs/statements?pred=%23B0V5mqQemBUn6mYA

This simple query style includes the components of the triple we care about.  In this case we want all triples that have the predicate, “pred=“, with the hash representation “%23B0V5mqQemBUn6mYA” or unhashed as “<<http://www.franz.com/simple#has-child>>”.

We process the second clause in the same way, sending a similar query to each of the constituents. The combined results from all the constituents are filtered or joined against the first intermediate result set to create the second intermediate result set.

The process continues until all the clauses have been processed.  Then the federation process does whatever aggregation is necessary to satisfy the query (sum, order by, group by, etc…).

### Defining SPARQL Federations:

SPARQL Federation is a standard defined by the W3C that allows “federated queries” to be issued across SPARQL databases of any vendor that happen to support SPARQL v1.1.  At least, that is the idea.  Also linked data being such a big thing in the RDF graph community, the W3C assumed we would all share our data with everyone else.  They thought we would all be doing SPARQL federation with our own local data and “open linking like crazy” across the internet with our friends and neighbors.  As such, the standard didn’t include the notion of login names and passwords.  Oops.  Not to worry, AllegroGraph has that problem solved.  If you want to “share freely”, we support the W3C standard and we also allow you to specify login/password information when the data provider needs to limit access.

SPARQL federation becomes useful when I have several databases, some that I own and some that I don’t, but I know how the data is distributed.  For instance, let’s say my database has all my customers and everything they have ever purchased from me; when, where, how heavy, how much, etc.  Someone else has a SPARQL database has the distance between every zipcode and every other zipcode.  And, the US Postal Service has a SPARQL database that will tell you the price to ship anything if you specify the weight and distance.

I don’t know how many times I’ve hard about those “bad data silos”, but this is one of those times when it’s not so bad.  I can be expert curator of some data that I tune for both my internal and external customers. If I want to, I can apply security down to the triple level.

Well there is no “setup” of SPARQL federatons.  All SPARQL Federation is done on the fly, per SPARQL query.  Within each session you can link to any data as long as you have access, on a per query basis. One query can just use local data, the next one can include data from multiple sources.  And, for one query I can use one set of credentials and for the next query a different set of credentials.

You start by opening any database in AllegroGraph.  For the examples, I used an empty database.  But to take advantage of linked data magic, I would probably open  my own “customer database” and “SPARQL Federate” to combine my customer data with another data.

SPARQL Federation queries have the form:

select ?s ?p ?o

{

?s ?p ?o

service <http remote place> {?s ?p ?o}

service <http another remorte place> {?s ?p ?o}

}

Here is an example using SPARQL Federation that we did as a demo some time ago.  It starts in the “dbpedia” dataset, remotely connects to a “geonames” database, a “census” database and uses AllegroGraph’s geospatial technology.  The query asks for a list of all the “census places” and “median incomes” within 10miles of where Barack Obama was born:

PREFIX geo: <<http://franz.com/ns/allegrograph/3.0/geospatial/>>

PREFIX geonames: <<http://sws.geonames.org/>>

PREFIX dbpedia\_rsrc: <<http://dbpedia.org/resource/>>

PREFIX dbpedia\_onto: <<http://dbpedia.org/ontology/>>

PREFIX dbpedia\_prop: <<http://dbpedia.org/property/>>

PREFIX census: <tag:[govshare.info](http://govshare.info),2005:rdf/census/>

PREFIX census\_samp: <tag:[govshare.info](http://govshare.info),2005:rdf/census/details/samp/>

SELECT ?censusplace ?income {

 dbpedia\_rsrc:Barack\_Obama dbpedia\_onto:birthPlace ?birthplace .

 ?birthplace dbpedia\_prop:hasGeonamesID ?geonamesresource .

 SERVICE <<http://blade8:10001/repositories/geonames>>

           { ?geonamesresource geonames:isAt5 ?location .

             ?otherplace geo:inCircleMiles (geonames:isAt5 ?location 10) .

             ?otherplace geonames:feature\_code "PPL" .

             ?geonamesresource geonames:feature\_code "PPL" .

         SERVICE <<http://blade8:10001/repositories/census>>

           { ?censusplace dbpedia\_prop:hasGeonamesID ?otherplace .

             ?censusplace census:details ?detail .

             ?detail census\_samp:population15YearsAndOverWithIncomeIn1999 ?d .

             ?d census\_samp:medianIncomeIn1999 ?income .

            }

           }

         }

The following is the re-written query that asks for each Kennedy parent and children that have the same favorite color and car make.  Note how the query is essentially broken into two pieces, but that each set of clauses uses the same binding variables:

select ?person ?firstName ?middleInitial ?lastName ?childfname ?car ?color {

              SERVICE <<http://super:xyzzy@crow:26752/repositories/kennedy>> {

              ?person <<http://www.franz.com/simple#has-child>> ?child .

              ?person <<http://www.franz.com/simple#last-name>> "Kennedy" .

              ?person <<http://www.franz.com/simple#first-name>> ?firstName .

              ?person <<http://www.franz.com/simple#last-name>> ?lastName .

              ?person <<http://www.franz.com/simple#middle-initial>> ?middleInitial .

              ?child  <<http://www.franz.com/simple#first-name>> ?childfname .

              }

              SERVICE <<http://super:xyzzy@crow:26000/repositories/kennedy-favs>> {

              ?person <<http://franz.com/federation#fav-color>> ?color .

              ?child <<http://franz.com/federation#fav-color>> ?color .

                              ?person <<http://franz.com/federation#fav-car>> ?car .

              ?child <<http://franz.com/federation#fav-car>> ?car .

              }

          }

Results:

<<http://www.franz.com/simple#person1>> "Joseph" "Patrick" "Kennedy" "Patricia" "dodge" "green" <<http://www.franz.com/simple#person1>> “Joseph” "Patrick" "Kennedy" "Robert" "dodge" "green"

Our query properly encoded into a curl command:

curl -X POST "<http://super:xyzzy@localhost:26752/repositories/sparql_federation?query=select%20%3Fperson%20%3FfirstName%20%3FmiddleInitial%20%3FlastName%20%3Fchildfname%20%3Fcar%20%3Fcolor%0A%09%09%09%0A%09%09%09>%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20SERVICE%20%3Chttp%3A%2F%2Fsuper%3Axyzzy%40crow%3A26752%2Frepositories%2Fkennedy%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23has-child%3E%20%3Fchild%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23last-name%3E%20%22Kennedy%22%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23first-name%3E%20%3FfirstName%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23last-name%3E%20%3FlastName%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23middle-initial%3E%20%3FmiddleInitial%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fchild%20%20%3Chttp%3A%2F%[2Fwww.franz.com](http://2fwww.franz.com)%2Fsimple%23first-name%3E%20%3Fchildfname%20.%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20SERVICE%20%3Chttp%3A%2F%2Fsuper%3Axyzzy%40crow%3A26000%2Frepositories%2Fkennedy-favs%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Ffranz.com](http://2ffranz.com)%2Ffederation%23fav-color%3E%20%3Fcolor%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fchild%20%3Chttp%3A%2F%[2Ffranz.com](http://2ffranz.com)%2Ffederation%23fav-color%3E%20%3Fcolor%20.%0A%09%09%20%20%20%20%20%20%3Fperson%20%3Chttp%3A%2F%[2Ffranz.com](http://2ffranz.com)%2Ffederation%23fav-car%3E%20%3Fcar%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fchild%20%3Chttp%3A%2F%[2Ffranz.com](http://2ffranz.com)%2Ffederation%23fav-car%3E%20%3Fcar%20.%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D”

Results from the curl command:

<?xml version="1.0"?>

<!-- Generated by AllegroGraph 6.1 -->

<sparql xmlns="[http://www.w3.org/2005/sparql-results#](http://www.w3.org/2005/sparql-results)">

  <head>

    <variable name="person"/>

    <variable name="firstName"/>

    <variable name="middleInitial"/>

    <variable name="lastName"/>

    <variable name="childfname"/>

    <variable name="car"/>

    <variable name="color"/>

  </head>

  <results>

  <result>

    <binding name="person"><uri>http://www.franz.com/simple#person1</uri></binding>

    <binding name="firstName"><literal>Joseph</literal></binding>

    <binding name="middleInitial"><literal>Patrick</literal></binding>

    <binding name="lastName"><literal>Kennedy</literal></binding>

    <binding name="childfname"><literal>Patricia</literal></binding>

    <binding name="car"><literal>dodge</literal></binding>

    <binding name="color"><literal>green</literal></binding>

  </result>

  <result>

    <binding name="person"><uri>http://www.franz.com/simple#person1</uri></binding>

    <binding name="firstName"><literal>Joseph</literal></binding>

    <binding name="middleInitial"><literal>Patrick</literal></binding>

    <binding name="lastName"><literal>Kennedy</literal></binding>

    <binding name="childfname"><literal>Robert</literal></binding>

    <binding name="car"><literal>dodge</literal></binding>

    <binding name="color"><literal>green</literal></binding>

  </result>

  </results>

Query sent to “kennedy” database:

select ?child ?childfname ?firstName ?lastName ?middleInitial ?person  {

            ?person <<http://www.franz.com/simple#has-child>> ?child .

            ?person <<http://www.franz.com/simple#last-name>> "Kennedy" .

            ?person <<http://www.franz.com/simple#first-name>> ?firstName .

            ?person <<http://www.franz.com/simple#last-name>> ?lastName .

            ?person <<http://www.franz.com/simple#middle-initial>> ?middleInitial .

            ?child <<http://www.franz.com/simple#first-name>> ?childfname .

            }

Query sent to “kennedy-favs” database:

select ?car ?child ?color ?person  {

            ?person <<http://franz.com/federation#fav-color>> ?color .

            ?child <<http://franz.com/federation#fav-color>> ?color .

            ?person <<http://franz.com/federation#fav-car>> ?car .

            ?child <<http://franz.com/federation#fav-car>> ?car .

            }

            VALUES ( ?child ?person ) {

                        (<<http://www.franz.com/simple#person17>> <<http://www.franz.com/simple#person1>> )

                        (<<http://www.franz.com/simple#person15>> <<http://www.franz.com/simple#person1>> )

                        (<<http://www.franz.com/simple#person13>> <<http://www.franz.com/simple#person1>> )

                        (<<http://www.franz.com/simple#person11>> <<http://www.franz.com/simple#person1>> )

                        (<<http://www.franz.com/simple#person9>> <<http://www.franz.com/simple#person1>> )

                        ....

                        }

### How AllegroGraph processes SPARQL Federation Queries:

By definition we know what information is where, in SPARQL federation.  As a result, we can send more complex queries to each of the constituents and take advantage of SPARQL.  Using SPARQL, we can utilize the processing power of each of the remote database servers, limiting the number of intermediate results we need to process.

In our example, the first query is sent to the “kennedy” database.  The result of that query becomes, by itself, the first intermediate result and sets binding to all the associated variables.

Using the intermediate results of the first query, the “kennedy-favs” query is rewritten to minimize processing.  The results of the that query is returned and combined (filter or joined) with the first intermediate result set and any required aggregation is computed to produce a final result set.

In our simple and completely non-scientific example that put utilized the network instead of local databases, AllegroGraph Federation query took 150ms and the SPARQL Federation query took 33ms.
