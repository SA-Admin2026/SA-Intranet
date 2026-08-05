---
title: "Extract-Load-Transform"
confluence_id: 2357952513
source: "Extract-Load-Transform_2357952513.html"
---

A common scenario is that multiple data sets need to be combined just to correctly form URIs. The extract-load-transform concept is to bring multiple data sets into a knowledge graph in a “naive” form and then use SPARQL to transform them.

The general concept is described in a powerpoint presentation at the link below, along with some tools.

- standard format for the “naive” or uncurated data
- python tool to automatically generate a tarql script that converts csv to the standard format
- python tool to preview the json and help assess it for conversion to rdf
- prototype python tool to convert json-formatted data to the standard format

The prototype for converting json uses recursion, suggesting that there are cases where pre-processing the json file may be necessary to convert it using SPARQL-Anything (assuming SPARQL-Anything, like SPARQL, does not support recursion). If this is the case, the prototype could be modified to do the pre-processing and then SPARQL Anything could do the transformation.

[Extract-Load-Transform](https://datacentric.sharepoint.com/:f:/s/staff/Ek9Czp-53UZMqU_UHhP9DrsBzOkiSuDJdeLLa0zdL-V9Pg?e=9NDLbh)
