---
title: "Dialog Mapping Tool Ideas"
confluence_id: 2400845825
source: "Dialog-Mapping-Tool-Ideas_2400845825.html"
---
Ideas for a tool that could be used to implement dialog mapping. Issues, etc. could be added and changed through a text interface (GUI? chat window? command line). A graphical representation like <https://semarts.atlassian.net/wiki/spaces/TRR/pages/2400354310/Dialog+Mapping#Attempt-at-an-IBIS-Example-(Ethics-of-Midjourney)> would be generated and re-generated in a web browser.

# TOC

- [TOC](#DialogMappingToolIdeas-TOC)
- [CLI](#DialogMappingToolIdeas-CLI)
  - [CLI Architecture](#DialogMappingToolIdeas-CLIArchitecture)
  - [CLI Example](#DialogMappingToolIdeas-CLIExample)
  - [CLI Syntax (In progress)](#DialogMappingToolIdeas-CLISyntax(Inprogress))
- [Chat](#DialogMappingToolIdeas-Chat)
  - [Chat Architecture](#DialogMappingToolIdeas-ChatArchitecture)
  - [Chat Interface](#DialogMappingToolIdeas-ChatInterface)

# CLI

A suggested command-line interface. This could be used directly as a minimum viable product, and also serve as a component of other implementations.

## CLI Architecture

![](/attachments/2400845825/2400911383)

## CLI Example

|  |  |
| --- | --- |
| `> issue Should we use Midjourney?`  `i1:"Should we use Midjourney?"`  `> position No --respondsTo i1`  `p1:"No" respondsTo i1:"Should we use Midjourney?"`  `> argument People hate it`  `a1:"People hate it"`  `> a1 supports p1`  `a1:"People hate it" supports p1`  `>` |  |

## CLI Syntax (In progress)

Position

--respondsTo  issue

*inverses*

*--supportedBy argument*

*--objectedToBy argument*

*Argument*

--supports position

--objectsTo position

*--hasIssue issue*

Issue

--generalizes issue

--specializes issue

--replaces issue

--questions [issue|argument|postion]

--isSuggestedBy

Generalize

Specialize

Respond arg1 [arg2]

Replace

Raise

Edit id "text"

# Chat

## Chat Architecture

ToDo: Modify this to incorporate CLI behind IBIS Bot

![](/attachments/2400845825/2400878597)

## Chat Interface

![](/attachments/2400845825/2401042435)
