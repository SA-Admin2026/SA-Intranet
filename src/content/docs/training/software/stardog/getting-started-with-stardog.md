---
title: "Getting Started with Stardog"
confluence_id: 199229441
source: "Getting-Started-with-Stardog_199229441.html"
---

Here's a quick start to using [Stardog](https://www.stardog.com/), a commercial triple store (and more) with a community edition (free).

It comes with a web interface and a command line interface (CLI).  I will describe just using the CLI for now.

# Installation

You have to register for the community edition, even though it is free,  When you do, you'll be provided a download link and a license key.

Their installation guide is very good.  See <https://www.stardog.com/docs/#_quick_start_guide>

Following the guide, here is what I did.  I am on Windows 10.

1. Unzipped to `C:\Programs\stardog-5.2.0`
2. Set up environment variables:

```
set STARDOG_HOME=C:/Programs/stardogdata
set PATH=%PATH%;C:\Programs\stardog-5.2.0\bin
```

# Using Stardog

## Start the Server and Create a Database

You use the **stardog-admin** command to start the server and *create* databases.

On a cmd window, do:

```
> stardog-admin server start
```

On another cmd window:

```
> stardog-admin db create -n testCust2
Successfully created database 'testCust2'.
```

## Add Data

You use the **stardog** command to do most everything else, like adding data, and querying.

The stardog data add command takes a DB name first, and then one or more data files.  Note that in the example below, I am adding files with different formats (.owl are RDF/XML, and .ttl are Turtle).

```
> stardog data add testCust2 testCust2.ttl c1Core.owl c1CoreCategories.owl c1custTest.ttl
```

## Query It with SPARQL

You can query with reasoning turned on or off.  The default is off.  Use the **-r** flag to turn on reasoning.  In the data below, `c1core:Actor` is a super class with nothing directly asserted into it.

```
> stardog query testCust2 "select * {?x a c1core:Actor} limit 11"
+-------+
|   x   |
+-------+
+-------+

Query returned 0 results in 00:00:00.047

> stardog query -r testCust2 "select * {?x a c1core:Actor} limit 11"
+---------------------------------------------+
|                      x                      |
+---------------------------------------------+
| data:Mark                                   |
| data:Judi                                   |
| data:Dave                                   |
| data:SemanticArts                           |
| data:_1                                     |
| data:_4                                     |
| data:_5                                     |
| http://triples.capitalone.com/c1core#_COBNA |
| http://triples.capitalone.com/c1core#_CONA  |
+---------------------------------------------+

Query returned 9 results in 00:00:00.344
```

# Making DL Reasoning Work

I noticed that results of `owl:someValuesFrom` reasoning did not work correctly out of the box.  This is because DL reasoning is not the default.  To turn on DL reasoning, you must put the database offline and change the `reasoning.type`.

Here's how to check and change the reasoning type from default SL to DL to get someValuesFrom reasoning to work as expected.

```
> stardog-admin metadata get -o reasoning.type testCust2
+----------------+-------+
|     Option     | Value |
+----------------+-------+
| reasoning.type | SL    |
+----------------+-------+

> stardog-admin db offline testCust2
The database testCust2 is now offline.

> stardog-admin metadata set -o reasoning.type=DL testCust2
The option(s) for the database 'testCust2' were successfully set.

> stardog-admin db online testCust2
The database testCust2 is now online.
```

With the DB now back online, your queries should behave as expected given owl DL axioms.

Note that the documentation states that [DL reasoning can reduce scaling](https://www.stardog.com/docs/#_owl_rule_reasoning), since it requires Tbox and Abox in memory.

# Querying the SPARQL Endpoint

Stardog provides a standard [SPARQL Endpoint](http://www.w3.org/TR/2013/REC-sparql11-protocol-20130321/#protocol) at a URL of the form:

`http://{host}:{port}/{dbname}/query`

It uses the standard `query` parameter containing a [URL encoded](https://meyerweb.com/eric/tools/dencoder/) SPARQL query string.

E.g., for DB *testCust2* and the query string `"select * {?s ?p ?o} limit 11":`

```
curl -u admin:admin http://localhost:5820/testCust2/query?query=select+*+%7B%3Fs+%3Fp+%3Fo%7D+limit+11
```
