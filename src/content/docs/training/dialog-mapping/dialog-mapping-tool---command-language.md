---
title: "Dialog Mapping Tool - Command Language"
confluence_id: 2404122625
source: "Dialog-Mapping-Tool---Command-Language_2404122625.html"
---
# Contents

- [Contents](#DialogMappingTool-CommandLanguage-Contents)
- [Introduction](#DialogMappingTool-CommandLanguage-Introduction)
- [To Do](#DialogMappingTool-CommandLanguage-ToDo)
- [Language Design Objectives](#DialogMappingTool-CommandLanguage-LanguageDesignObjectives)
- [Example](#DialogMappingTool-CommandLanguage-Example)
  - [Example Command Session](#DialogMappingTool-CommandLanguage-ExampleCommandSession)
  - [Example Graphic Output](#DialogMappingTool-CommandLanguage-ExampleGraphicOutput)
- [General Definitions](#DialogMappingTool-CommandLanguage-GeneralDefinitions)
- [IBIS Diagram](#DialogMappingTool-CommandLanguage-IBISDiagram)
- [Valid Links](#DialogMappingTool-CommandLanguage-ValidLinks)
- [Coloring Conventions](#DialogMappingTool-CommandLanguage-ColoringConventions)
  - [Node Coloring](#DialogMappingTool-CommandLanguage-NodeColoring)
  - [Link Coloring](#DialogMappingTool-CommandLanguage-LinkColoring)
- [Command Line Parsing](#DialogMappingTool-CommandLanguage-CommandLineParsing)
  - [Command Line Parsing Definitions](#DialogMappingTool-CommandLanguage-CommandLineParsingDefinitions)
  - [Command Line Parsing Algorithm](#DialogMappingTool-CommandLanguage-CommandLineParsingAlgorithm)
- [Command Patterns](#DialogMappingTool-CommandLanguage-CommandPatterns)
  - [Command Patterns that expect text](#DialogMappingTool-CommandLanguage-CommandPatternsthatexpecttext)
  - [Command Patterns that do not expect text](#DialogMappingTool-CommandLanguage-CommandPatternsthatdonotexpecttext)
  - [Mapped Command Patterns](#DialogMappingTool-CommandLanguage-MappedCommandPatterns)
- [List Command](#DialogMappingTool-CommandLanguage-ListCommand)
  - [Listing Format](#DialogMappingTool-CommandLanguage-ListingFormat)
    - [Node Listing Format](#DialogMappingTool-CommandLanguage-NodeListingFormat)
    - [Link Listing Format](#DialogMappingTool-CommandLanguage-LinkListingFormat)
- [Ontology](#DialogMappingTool-CommandLanguage-Ontology)
  - [Ontology Visualization](#DialogMappingTool-CommandLanguage-OntologyVisualization)
  - [Property Hierarchy](#DialogMappingTool-CommandLanguage-PropertyHierarchy)

# Introduction

This document proposes a command-line language for adding to and maintaining a graph representation of a discussion or dialog. The graph representation would be kept in a triple store, and a separate process would render it visually.

# To Do

Add `isAgreedUpon` and `isDeprecated` properties

Add commands to support `isAgreed`

Add `--restore` command to clear `isDeprecated`

Add commands to support `Comment`.

# Language Design Objectives

1. To support live notetaking:

   1. Minimize error conditions by interpreting commands generously and flexibly
   2. Minimize re-entry by capturing as much as possible of each command line
   3. Minimize backspacing (e.g., by allowing later tokens to override earlier tokens)
2. Easy to learn
3. Supports future use as back-end for chatbot
4. Congruent with IBIS

# Example

## Example Command Session

> --issue What should we order for dinner?

--i1 "What should we order for dinner?"

> pizza --pos –i1

--p2 "pizza" --respondsTo --i1 "What should we order for dinner?"

> what should we have on it? --iss --res --p1

--i3 "what should we have on it" --respondsTo --p2 ”pizza”

> burgers --pos --i1

--p4 "burgers" --respondsTo --i1 ”What should we order for dinner?”

> --list

--i1 ”What should we order for dinner?”

--p2 ”pizza” --respondsTo --i1 ”What should we order for dinner?”

--i3 ”what should we have on it?” --respondsTo --p2 ”pizza”

--p4 ”burgers” --respondsTo --i1 ”What should we order for dinner?”

> Lucy is lactose-intolerant --obj --2

--a5 ”Lucy is lactose-intolerant” --objectsTo --p2 ”pizza”

> --obj --p4 We had burgers last week

--a6 ”We had burgers last week” --objectsTo --p4 ”burgers”

> Gio’s has non-dairy pizza --q --5

--i7 ”Gio’s has non-dairy pizza” --questions --a5 ”Lucy is lactose-intolerant”

## Example Graphic Output

![](/attachments/2404122625/2404155393.png)

# General Definitions

1. Classes

   1. **Issue, Position, and Argument** are defined in IBIS
   2. A **Comment** is either an Issue, Position, or Argument; but it is not yet specified which one
   3. A **Node**is an Issue, Position, Argument, or Comment
2. Predicates

   1. **generalizes, specializes, replaces, respondsTo, supports, objectsTo, questions,** and[is]**suggestedBy** are defined in IBIS.
   2. **commentsOn** relates a Comment to a Node
   3. The **nodeId** is a system-assigned integer that uniquely identifies a Node.
   4. The **nodeCode** is the first letter of the node’s class (issue, position, argument, or comment) followed by the digits of the nodeID. In commands, a nodeCode may be used in place of a nodeID.

# IBIS Diagram

![](/attachments/2404122625/2404188161.png)

# Valid Links

| **Link from** | **Link type** | **Link to** |
| --- | --- | --- |
| Issue | suggestedBy, questions | (any) |
| Issue | generalizes, specializes, replaces | Issue |
| Position | respondsTo | Issue |
| Argument | supports, objectsTo | Position |

# Coloring Conventions

In graphical renderings or in colored text, the following colors should be used:

## Node Coloring

1. An Issue is colored Blue. If the issue isn’t the subject of any relationship, it is has a thick black border.
2. A Position is colored Orange. If the Position is “agreed” then it has a thick green border.
3. An Argument that is the subject of a “supports” link is colored Green
4. An Argument that is the subject of a “objectsTo” link is colored Red
5. Any other Node is colored Grey

## Link Coloring

A Link is the color of its subject

# Command Line Parsing

The order of the valid tokens in a command line doesn’t matter, except that nodeIDs are interpreted in the order given.

## Command Line Parsing Definitions

In the definition of the Command Line Parsing Algorithm:

1. A **Word** is any sequence of non-white space characters delimited by white space and/or the beginning or end of a line and not inside of single- or double-quotes.
2. A **Token** is a word beginning with a double hyphen
3. A **Valid Token** is a word consisting of a double hyphen follow by either

   1. An instantiated nodeId or nodeCode, or
   2. Enough leftmost letters of a command word to unambiguously match that command word.
4. A **Command** is an ordered collection of valid tokens
5. A **Valid Command** is a command that matches some “Command Pattern”. The parts of a command can be in any order.
6. **Command Text** is everything in a Command Line except the valid tokens. [ToDo: Consider quoted strings. And, what about ignored tokens?]

## Command Line Parsing Algorithm

In a working copy of the command line:

1. Remove any leading or trailing whitespace, and replace consecutive whitespace characters with single spaces
2. Mark all Valid Tokens as “edible” and all other Words as “nonedible”.
3. While there are edible tokens,

   1. While the set of edible tokens is non-empty and does not match a Command Pattern

      1. Mark the leftmost edible token as non-edible
4. If the set of edible tokens is non-empty,

   1. Execute the matching Command Pattern; otherwise
   2. Execute the command pattern “[text] --comment” where [text] is the working copy of the command line. [ToDo: add `--comment` to Command Patterns]
5. Write the result. Equivalent to: `--list [n] [m]`, where n is the nodeId of any Node created and m is the nodeId of the object Node in any Link created.

# Command Patterns

The valid tokens that make up a command pattern may appear in any order, except that the order of node IDs matters. [Items in square brackets] are optional.

*To support the design objectives, matching of command patterns is **not** case-sensitive.*

## Command Patterns that expect text

If no text is supplied, create a node with no prefLabel

|  |  |
| --- | --- |
| **Command Pattern** | **Action** |
| `--issue text` | Create an Issue using *text* |
| `--position text` | Create a Position using *text* |
| `--argument text` | Create an Argument using *text* |
| `--nodeIdA text` | Change the prefLabel of NodeA to *text* |
| `[--issue] text --suggestedBy --nodeIdA` | Create an Issue using *text*, with a “suggestedBy” link to NodeA |
| `[--issue] text --questions --nodeIdA` | Create an issue using *text*, with a “questions” link to NodeA |
| `[--issue] text --generalizes --issueIdA` | Create an Issue using *text*, with a “generalizes” link to IssueA |
| `[--issue] text --specializes --issueIdA` | Create an issue using *text*, with a “specializes” link to IssueA |
| `[--issue] text --replaces --issueIdA` | Create an Issue using *text*, with a “replaces” link to IssueA |
| `[--position] text --respondsTo --issueIdA` | Create a Position using *text*, with a “respondsTo” link to IssueA |
| `[--argument] text --supports --positionIdA` | Create an Argument using *text*, with a “supports” link to PositionA |
| `[--argument] text --objectsTo --positionIdA` | Create an Argument using *text*, with a “objectsTo” link to PositionA |

## Command Patterns that do not expect text

If text is supplied, then in addition to the listed action create an Issue node using the supplied text. (ToDo: should this be a Comment node?)

|  |  |
| --- | --- |
| **Command Pattern** | **Action** |
| `[--issue] --issueIdA --generalizes --issueIdB` | Create a “generalizes” link from IssueA to IssueB,  replacing any existing link where IssueA is the subject and IssueB is the object. |
| `[--issue] --issueIdA --specializes --issueIdB` | Create a “specializes” link from IssueA to IssueB,  replacing any existing link where IssueA is the subject and IssueB is the object. |
| `[--issue] --issueIdB --replaces --issueIdA` | Create a “replaces” link from IssueA to IssueB, replacing any existing link where IssueA is the subject and IssueB is the object. |
| `[--issue] --issueIdA --suggestedBy --nodeIdB` | Create a “suggestedBy” link from IssueA to NodeB*,* replacing any existing link where IssueA is the subject and IssueB is the object. |
| `[--issue] --issueIdA --questions --nodeIdB` | Create a “questions” link from IssueA to NodeB, replacing any existing link where IssueA is the subject and IssueB is the object. |
| `[--argument] --argumentIdA --supports --positionIdB` | Create a “supports” link from ArgumentA to PostionB, replacing any existing link where IssueA is the subject and IssueB is the object. |
| `[--argument] --argumentIdA --objectsTo --positionIdB` | Create a “objectsTo” link from ArgumentA to PositionB, replacing any existing link where IssueA is the subject and IssueB is the object. |
| `--delete --nodeIdA` | Set NodeA.deprecated |
| `--restore --nodeIdA` | Clear NodeA.deprecated |
| `--delete --nodeIdA --nodeIdB` | Delete any link connecting NodeA and NodeB |
| `--list [--nodeIdA] --[nodeIdB]` | *See “List Command” below* |

## Mapped Command Patterns

Functionally replace these patterns with the mapped patterns

|  |  |
| --- | --- |
| **Command Pattern** | **Mapped Command Pattern** |
| `--issue --issueIdA text` | `text --suggestedBy --issueIdA` |
| `--issue --positionIdA text` | `text --suggestedBy --positionIdA` |
| `--issue --argumentIdA text` | `text --suggestedBy --argumentIdA` |
| `--issue --nodeIdA text` | `text --suggestedBy --nodeIdA` |
| `[--issue] --generalizes` | `--issue text` |
| `[--issue] --specializes` | `--issue text` |
| `[--issue] --suggestedBy` | `--issue text` |
| `[--issue] --questions` | `--issue text` |
| `--position --issueIdA` | `--respondsTo --issueIdA` |
| `[--issue] --respondsTo --positionIdA` | `--suggestedBy positionIdA` |
| `[--issue] --respondsTo --argumentIdA` | `--suggestedBy argumentIdA` |
| `--respondsTo` | `--position` |
| `--supports` | `--argument` |
| `--objectsTo` | `--argument` |

# List Command

The `--list` command writes Node and Link information to the console.

1. If one nodeId is specified and the node is

   1. not the subject of any link, use Node Listing Format for this nodeId
   2. the subject of some link, use Link Listing Format for all Links where this node is subject and return in object nodeId order.
2. If two nodeIds are specified and

   1. a link exists between the two nodes, use Link Listing format for that Link.
   2. no link exists between the two nodes, treat the same as  
      `--list --nodeIdA`  
      `--list --nodeIdB`
3. If no nodeId is specified, list all Links; and all Nodes that are not subject of any Link. Sort all together by subjectNodeId, objectNodeId. (Within a subjectNodeId, Nodes should sort before Links.)

## Listing Format

### Node Listing Format

*nodeCode*:”*nodeText*”

Example: `--p2 "pizza"`

### Link Listing Format

*subjectNodeCode:*”*subjectNodeText” --predicateName objectNodeCode:”*

Example: `--p2 "pizza" --respondsTo --12 "What should we order for dinner?"`

# Ontology

## Ontology Visualization

![](/attachments/2404122625/2404286490.png)

## Property Hierarchy

- isSuggestedBy

  - questions
  - generalizes
  - specializes
  - respondsTo

    - supports
    - objectsTo
- replaces
