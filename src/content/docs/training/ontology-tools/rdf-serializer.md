---
title: "RDF Serializer"
confluence_id: 669548608
source: "RDF-Serializer_669548608.html"
---

There is a serializer that will convert any owl/rdf file into a standard serialized format in a variety of output syntaxes (e.g. turtle, nt, rdf/xml). This makes comparing differences between files dramatically easier.

NOTE:  **RDF Serializer tool** for use with **git-bash** is here:  [https://github.com/semanticarts/serializer](https://github.com/semanticarts/serializer "https://github.com/semanticarts/serializer").  1 simple script with **no options**, so we all do it the same way. ![](https://statics.teams.microsoft.com/evergreen-assets/skype/v2/smile/20.png?v=4)

## Get the serializer

There is a file is called: rdf-toolkit.jar in the folder: S:\Offerings\gist\git4gist

Documentation (and code) available on on git from here: <https://github.com/edmcouncil/rdf-toolkit.git>

In particular:

- **README.md** at the top level of the git folders
- **SesameRdfFormatter.md** in the docs folder with full documentation of options and lots of examples
- **output-formats.md** in the docs folder

NOTE: the .jar file may not be the most up to date one with the latest documentation.

## Run from a command window

Here is the general format for a call to the serializer:  
java -jar rdf-toolkit.jar -sdt explicit -dtd -ibn -**tfmt** *<syntax>* **-s** *<source file>* **-t** *<target file>*

*For example:**java -jar rdf-toolkit.jar -sdt explicit -dtd -ibn -**tfmt** *turtle* **-s** *gistCore.owl* **-t** *gistCoreSerialized.ttl**

## Getting Java

**JAVA:**

You will need a JRE or JDK 1.8 (also known as Java 8) or higher.

Download from the following link and install:

<http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html>

## See also

According to `Y:\_SemanticArts\Offerings\gist\git4gist\RDFSerializer_Notes.docx`,
