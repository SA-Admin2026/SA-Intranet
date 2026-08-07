---
title: "SA Content Graphing"
confluence_id: 2420342785
source: SA-Content-Graphing_2420342785.html
---
This page is for discussion of adding information about Semantic Arts content to Semantic Arts' knowledge graph using congr.py.

Discussion of congr.py itself is at <https://github.com/semanticarts/congr>

# Requirements

*Features in italics have been implemented.*

## Overview

**On 2023-06-21, Dave wrote:**

The task is to turn our content into triples and integrate it with our structured data.

At first that sounds overwhelming, but we will bit the elephant a few chunks at a time.

*First chunk, be able to read a directory and get all the file names, types, dates and sizes. The directory itself will be important later, as we discovered at Morgan, where a document is, is often a good clue as to what it is.*

*So first chunk, write a program (I’m going to suggest python, because chunks 6-10 involve some light weight NLP which will be far easier to do in python, also chunks n-m may involve LLMs or big data or voodoo witchcraft all of which are easier in python).*

*The program should read a directory, and create an instance of gist:Content for each item it finds, and then a triple for the file name, the directory its in, and all the bits of meta data. We should be able to load it to a Triple store and query it.*

The next several chunks can be done in almost any order, but to give you a hint as to where we are going:

- *Get a fingerprint of the file (so we can detect how many duplicate copies we have)*
- *Recursively do the directory tree, and attach directories to directories*
- Do some simplistic entity resolution for clients and prospects. This will require some negotiation with Jamie as to how we are going to entity resolve clients and prospects in new SA
- Get some meta data from the files, especially author, but see what else might be interesting. Usually the tags are worthless and the program used not interesting. Maybe the original creation date.
- Read some documents with NLP and start experimenting with extracting useful key words. These will typically be unusual words in English lanaguage and named entities and the like. This will take an entire career, but just get a start

The objective is to be able to be in new SA system and click on a project and get all the important documents related to that project, or click on a person and get all the documents that person authored, or all the documents that person was named in.

PS we have about 500K files on the shared folder. Most are worth indexing. Some need to be purged as being early drafts on old projects. Some are sensitive (employee evals and the like)

## Planning

**On 2023-06-27, Dave wrote:**

I want to start with the one drive clients subfolder, then move to the internal (not very) shared drive and get a lot of historical clients, and then start into the marketing, which will be proposals as well as client names from Pipedrive.

## Associating Files to Known Organizations

**On 2023-06-29 at 5:06pm MDT, Dave wrote:**

I have a list of the URIs of orgs in the new system, but I just realized Shawn is going to be changing the minting.  I also started collecting the aliases but that’s on my laptop

What we want to do that we can do in parallel a bit is create additional triples for documents.

The first set of triples we want to add are to put a gist:about triple on documents that are about known organizations.  We’re going to make this simplifying assumption (this worked better than it seems like it should at our first project at Morgan).  Any file in a directory with a recognizable client name will be deemed to be about that client.

What I want to do is add a bunch of altLabels to the orgs in the repo (which will be all the various spellings of client names we’ve used in our file system) and then bounce each directory agains the pref and alt labels. If we get a match use that as the object of the gist:about link.

The tricky bits:

- Get all the spelling variations from our file systems (I’ll have to get them for you from the shared folder) note a few are odd, such as Sagence should be an alt label for Goldman Sachs because the projects we did at Goldman we filed under Sagence because we were sub to Sagence for that
- Be able to attach to and query our repo (probably want to talk to Jamie on what ways he recommend you do this)

<!-- section-nav:start -->

## In this section

- [SA Content Graphing - Work Log](sa-content-graphing---work-log.md)

<!-- section-nav:end -->
