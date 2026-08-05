---
title: "New Ontologist Orientation"
confluence_id: 109838343
source: "New-Ontologist-Orientation_109838343.html"
---

If you are joining the team as an ontologist, there are a few specific resources you should know about.

- [Download and Install](#NewOntologistOrientation-DownloadandInstall)
- [Bookmark in Your Browser](#NewOntologistOrientation-BookmarkinYourBrowser)
- [Semantic Arts Materials to Review](#NewOntologistOrientation-SemanticArtsMaterialstoReview)
- [Core Tools and Technologies](#NewOntologistOrientation-CoreToolsandTechnologies)
- [Additional Resources](#NewOntologistOrientation-AdditionalResources)

## Download and Install

- A **visualization tool** of your choosing, such as:

  - [diagrams.net/draw.io](http://diagrams.net/draw.io) is free, open source, cross-platform, graph drawing software.

    - It can be used to create diagrams such as flowcharts, wireframes, UML diagrams, organizational charts, and network diagrams.
    - It can be used as a webpage (at [https://app.diagrams.net](https://app.diagrams.net/)), as a desktop app (download <https://github.com/jgraph/drawio-desktop/releases/>), and integrated directly into several IDE environments (like [Atom.io](http://Atom.io), Webstorm, VSCode, etc., and the diagram files can be part of your source code repo).
    - It could be integrated with Atlassian/Confluence (this wiki page) as [draw.io](https://semarts.atlassian.net/wiki/marketplace/discover/app/com.mxgraph.confluence.plugins.diagramly) for $0.75 per user/month.
    - When using the web version it can save files to common cloud storage drives (Microsoft, Google, Dropbox, etc).
  - Lucidchart
  - Google Draw
  - Omnigraffle (Mac only)
- **Protégé** ontology editor (<https://protege.stanford.edu/> )
- **gist** (Semantic Arts upper enterprise ontology)

  - [Download latest release package](https://semanticarts.com/gist/).
  - Clone [gist GitHub repository](https://github.com/semanticarts/gist). While you are at it, navigate to [Semantic Arts gist Team · semanticarts/gist Wiki (github.com)](https://github.com/semanticarts/gist/wiki/Semantic-Arts-gist-Team) and add your name and github username to the list!

    - Includes [gist style guide](https://github.com/semanticarts/gist/blob/develop/docs/gistStyleGuide.md) and [guidelines for contributing to gist.](https://github.com/semanticarts/gist/blob/develop/docs/Contributing.md)
    - Run <project-root>/tools/setup.cmd to to copy the accompanying pre-commit hook into .git/hooks/.
    - Reviewing [open issues](https://github.com/semanticarts/gist/issues) and [project boards](https://github.com/semanticarts/gist/projects?type=classic) will give you a glimpse of current development directions.
  - Watch gist videos at <https://semanticarts.com/gist/>. It's best to view these after taking the DBBO course referenced below.

## Bookmark in Your Browser

- Allegrograph ([agraph.semanticarts.com](http://agraph.semanticarts.com))
- Spark for time card entry (<https://spark.semanticarts.com/> )
- Confluence (<https://semarts.atlassian.net>)
- [Turtle Editor Viewer](https://www.semantechs.co.uk/turtle-editor-viewer/): real time Turtle visualization tool
- [Semantic Arts SharePoint library](https://datacentric-my.sharepoint.com/personal/rebecca_younes_semanticarts_com/_layouts/15/onedrive.aspx?id=%2Fsites%2Fstaff%2FShared%20Documents&listurl=https%3A%2F%2Fdatacentric%2Esharepoint%2Ecom%2Fsites%2Fstaff%2FShared%20Documents)

## Semantic Arts Materials to Review

The following are recommended for getting up to speed when you first start. You’ll receive more information in the coming weeks, but this is good to get you started.

- Work through a DBBO Course. Course Materials can be found here: [semanticarts/DBBO: Designing and Building Business Ontologies courseware (github.com)](https://github.com/semanticarts/DBBO)

  - This is an intensive 4-day course that teaches the principles of semantics and ontologies, with hands-on Protégé training.
- Review [case studies of past SA work](https://www.semanticarts.com/work/).
- Study the Standard & Poors ontology. This is also in the [Training folder ion SharePoint](https://datacentric-my.sharepoint.com/personal/rebecca_younes_semanticarts_com/_layouts/15/onedrive.aspx?id=%2Fsites%2Fstaff%2FShared%20Documents%2FTraining&listurl=https%3A%2F%2Fdatacentric%2Esharepoint%2Ecom%2Fsites%2Fstaff%2FShared%20Documents&viewid=62787f91%2De085%2D4085%2D8c7e%2D197372f443a8). You will need to open via a browser to use Vizio online as we don’t have a licensed desktop version.
- Review other training materials found within the [Training folder in the SharePoint Library](https://datacentric-my.sharepoint.com/personal/rebecca_younes_semanticarts_com/_layouts/15/onedrive.aspx?id=%2Fsites%2Fstaff%2FShared%20Documents%2FTraining&listurl=https%3A%2F%2Fdatacentric%2Esharepoint%2Ecom%2Fsites%2Fstaff%2FShared%20Documents&viewid=62787f91%2De085%2D4085%2D8c7e%2D197372f443a8) - particularly the Amgen Training and the Semantic Arts Materials folder.
- Read through these articles to get a sense of our position on LPGs, SHACL and OWL:

  - <https://www.semanticarts.com/property-graphs-training-wheels-on-the-way-to-knowledge-graphs/>
  - <https://www.semanticarts.com/shacl-and-owl/>

## Core Tools and Technologies

You can get a jump start on learning our core technologies (all open source standards), but these skills will be developed and refined over a period of weeks, months, and years.

- RDF, RDFS, OWL

  - [Demystifying OWL for the Enterprise](https://link.springer.com/book/10.1007/978-3-031-79482-7) (book)
  - [Semantic Web for the Working Ontologist](https://www.morganclaypoolpublishers.com/catalog_Orig/product_info.php?products_id=1564) (book)
  - [OWL 2 spec](https://www.w3.org/TR/owl2-syntax/)
  - [RDFS spec](https://www.w3.org/TR/rdf-schema/)
  - [RDF spec](https://www.w3.org/TR/2014/REC-rdf-syntax-grammar-20140225/)
- SPARQL

  - [Learning SPARQL](https://www.oreilly.com/library/view/learning-sparql-2nd/9781449371449/) (book)
  - [SPARQL 1.1 spec](https://www.w3.org/TR/sparql11-query/)
- SHACL

  - [Validating RDF Data](https://book.validatingrdf.com/) (book)
  - [SHACL spec](https://www.w3.org/TR/shacl/)
  - [SHACL playground](https://shacl.org/playground/) (sandbox for experimentation)
- ETL tools

  - [TARQL](https://tarql.github.io/)
  - [SPARQL Anything](https://github.com/SPARQL-Anything/sparql.anything)
- [git](https://git-scm.com/docs) and [GitHub](https://docs.github.com/en)

## Additional Resources

- Review the other pages in <https://semarts.atlassian.net/wiki/spaces/TRR> to see additional information about tools and technologies that the team has compiled.
- You can also take advantage of **office hours hosted by Dan Carey**. Currently, he is available Mondays from 3-5pm Eastern. You can drop in or send a meeting request to discuss anything - technical skills, development, handling clients or coworkers, etc. Email him at [dan.carey@semanticarts.com](mailto:dan.carey@semanticarts.com) for more info.

## In this section

- [Knowledge Graph - Training Materials](/new-ontologist-orientation/knowledge-graph---training-materials/)
- [Learning OWL Reasoning](/new-ontologist-orientation/learning-owl-reasoning/)
- [Ontologist Onboarding Documentation](/new-ontologist-orientation/ontologist-onboarding-documentation/)
- [Proposed Improvements to Ontologist Onboarding](/new-ontologist-orientation/proposed-improvements-to-ontologist-onboarding/)


<topic-progress data-topic="New Ontologist Orientation" data-lessons="[{&quot;route&quot;:&quot;/training/new-ontologist-orientation/knowledge-graph---training-materials/&quot;,&quot;title&quot;:&quot;Knowledge Graph - Training Materials&quot;},{&quot;route&quot;:&quot;/training/new-ontologist-orientation/learning-owl-reasoning/&quot;,&quot;title&quot;:&quot;Learning OWL Reasoning&quot;},{&quot;route&quot;:&quot;/training/new-ontologist-orientation/ontologist-onboarding-documentation/&quot;,&quot;title&quot;:&quot;Ontologist Onboarding Documentation&quot;},{&quot;route&quot;:&quot;/training/new-ontologist-orientation/proposed-improvements-to-ontologist-onboarding/&quot;,&quot;title&quot;:&quot;Proposed Improvements to Ontologist Onboarding&quot;}]">
</topic-progress>
