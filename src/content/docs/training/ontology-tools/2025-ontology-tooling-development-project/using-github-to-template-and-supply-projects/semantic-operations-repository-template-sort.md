---
title: "Semantic Operations Repository Template (SORT)"
confluence_id: 2873294870
source: "2873294870.html"
---

What ontology tools would be convenient to have for developing a semantic project? My answer to this question comes in the form of a repository template, rather than a listing of tools.

The is a sequence of actions that must be done to do the Extraction, Translation, and Load of a Knowledge Graph for any domain. At Amgen we had a GitLab/GitHub Repository Template that enabled the actions necessary to repeatedly do the actions of ETL. This template was domain agnostic, it was not specific to the pharma domain.

The advantage of having a domain agnostic repository template is that developers of a specific domain of discourse can clone the template repository and automatically have the basis for a domain specific repository. That new domain specific repository can start out with the generic tools and structure to efficiently develop and process everything needed.

[Neil Graham](https://semarts.atlassian.net/wiki/people/5a904d0a6ac8fb5278d298ac?ref=confluence) created such a repository template at Amgen that I thoroughly enjoyed using. The repository provided me with generic tooling and infrastructure, not a pharma specific infrastructure. This is a capability that should be developed at Semantic Arts.

New projects would be able to clone the template and quickly have the basic tools and environment to extend for the domain specific content.

The template repository was a Command Line Interface at Amgen. I’m a bit ‘old school’, and the CLI worked extremely well for developing the CI/CD for the domain specific content (data, ontologies, extraction, translation, and extraction) to build the necessary triples for knowledge graphs.

# Not a Tool, but an Environment

The template provides all the essential generic tooling needed to develop a domain specific repository. In this environment it is possible to use your favorite specific tools. For example, if you want edit with Notepad++, Protege, or EMACS you can. Specific tools can be provided in the template, but are not required.

# Laughing Out Loud about Acronyms

Obviously, I am jesting with this suggestion; **S**emantic **O**peration **R**epository **T**emplate - **O**ntology **F**ramework (SORT OF). However, I do seriously like SORT. Since I’m advocating for a repository template that Neil is the implementor, I let him come up with a name candidate.

# Adoption of SORT

I would be happy to adopt using the SORT for implementing the CTIO demonstration application. I say this because I miss the template used at Amgen and I’d like to quickly have a development environment to quickly build an application for demonstrating the value of gist, gistBFO, gistComputing, gistCyber, and CTIO.
