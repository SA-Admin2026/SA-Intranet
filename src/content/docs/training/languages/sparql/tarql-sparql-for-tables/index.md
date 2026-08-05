---
title: "TARQL: SPARQL for Tables"
confluence_id: 518717457
source: "518717457.html"
---

Tarql is a command-line tool for converting CSV files to RDF using SPARQL.

GitHub Site: <https://tarql.github.io/>

See also: [Installing Tarql](https://semarts.atlassian.net/wiki/spaces/TRR/pages/2104295425/Installing+Tarql)

## Setup Basics

First you need to prep the spreadsheet.  You can start with Excel, but keep in mind that you will need to convert it to CSV in order for TARQL to work.  Also, it is helpful to make sure your column names are labeled in a way that translates well to rdf.  In some cases, you may want to use the same class and property names in your column headings to make it clear what maps to what.

[glossaryTest.csv](/attachments/518717457/711819272.csv)

Then you need to construct a basic ontology that accommodates your spreadsheet's data.  Ideally, you will start with SKOS or GIST, but you can start with whatever makes sense as long as it's correct and can be later massaged into GIST.  In our example, we used SKOS.

Then you need to set up your TARQL query (really just a specific type of SPARQL query).  Here's the basics of how that will look:

[SAWikiGlossary.rq](/attachments/518717457/711884808.rq)

Then you need to open up your command line application to launch the TARQL. You will need to get to the correct directory where you have TARQL installed, and then CD to the directory.  It depends on where you put the folder, for me, the path is as follows: C:\Programs\tarql-1.1 From here, you should be able to follow the directions in the GitHub site to do the TARQL transform.

It will load into the .ttl file that you designate when you start.

Note for Mac/Linux users: Create a symlink to the tarql executable in your bin directory so you can run tarql from anywhere. For example (/Users/ryounes/bin is in my path):

```
$ cd /Users/<username>/bin
$ ln -s /path/to/tarql/directory/bin/tarql tarql
```

Symlinks are also supported in Windows.

[SAWikiGlossary.ttl](/attachments/518717457/711753743.ttl)

Usage:

```
tarql sparqlfile csvfile
```

E.g.,

```
tarql query.rq data.csv
```

Note that you can also designate the csv file in the tarql itself using a FROM clause:

```
CONSTRUCT {
...
}

FROM <my_csv_file.csv>

WHERE {
...
}
```

This is convenient when the tarql is designed for the format of a specific input file, so you don't need it to be portable to other inputs.

# WARNING: Known Bug

Always be sure there is a blank first column in the .csv file. TARQL does not reliably recognize the header in the first column as a variable.  
  
Another way around this is to open the CSV in VS Code, look at bottom right of the window for the encoding, and if it says ‘UTF-8 with BOM’, click that and then save with encoding ‘UTF-8’ (without the BOM). Then try running tarql again. This should eliminate the need for the blank column.

## In this section

- [Installing Tarql](/languages/sparql/tarql-sparql-for-tables/installing-tarql/)
- [Tarql String Splitting Coolness](/languages/sparql/tarql-sparql-for-tables/tarql-string-splitting-coolness/)
