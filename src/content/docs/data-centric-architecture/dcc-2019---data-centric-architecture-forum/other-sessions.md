---
title: "Other Sessions"
confluence_id: 679116841
source: Other-Sessions_679116841.html
---

# Other Sessions

Some sessions did not have as many notes, so combined here on same page. Also note Mark Ouska's notes are embedded, and he took notes on the sessions where we didn't have the Lacibus meeting room up yet.

## Notes

[![](https://semarts.atlassian.net/wiki/download/thumbnails/679116841/2019-02-04%20DCA%20Conf-Ouska%20raw%20notes.pdf?version=1&modificationDate=1550030128126&cacheVersion=1&api=v2&viewType=fileMacro)](/data-centric-architecture/attachments/679116841/679116865.pdf)

---

## Model-Driven Architecture

|  |  |
| --- | --- |
| Chris Harding | Data-centric puts declarative code before imperative code. Almost everything can be declarative, but there will always be a place for imperative code:   1. To provide interpreters for declarative code 2. To implement very complex logic.   We need to get to declarative because imperative code doesn't scale. |
| Chris Harding | Need demos and case studies to show where the approach has been successful. |
| Chris Harding | Also, we could track how use of declarative code is growing. |

---

## Knowledge Graphs

|  |  |
| --- | --- |
| Chris Harding | A knowledge graph relates instances. It doesn't have to be bounded in scope but maintenance considerations mean it should be kept small if possible. |
| Chris Harding | Has an underlying schema that looks like a simple ontology (RDFS-like) |
| Chris Harding | Many search engine knowledge panels and voice UIs use knowledge graphs. They can indicate context. |
| Chris Harding | Static KGs are built slowly. Dynamic KGs are more nimble Makes a big implementation difference. |
| Chris Harding | Automatic classification systems tend to be good at single topics but bad at topic combinations. Human-like cognition can handle combinations. KGs can help this. But using automatic classification to build KGs is hard. |
| Chris Harding | The idea has been around in many forms before. We now have better computability. |
| Chris Harding | Combining separately-developed knowledge graphs can be very powerful. |
| Michael F Uschold | Graph DBs are the fastest growing sector in data storage. Of course, relational still has the bulk at this time, but slowing down a bit. |
| Michael F Uschold | Hybrid DBs kind of ran their course. Users were disappointed. Not sure what happened or why. |
| Michael F Uschold | RDF not very good at representing n-ary relationships.  Labeled property graphs can be easier. |
| Chris Harding | Labelled property graph - can have weightings assigned to relationships |
| Michael F Uschold | Property graphs do not support inference. |
| Chris Harding | Property graphs may not easily be able to support inferences |
| Chris Harding | RDF is better for inference, graph DB for pathfinding |
| Michael F Uschold | PROPOSED: Neo4j and probably property graphs in general are not likely in the short term to be a viable contender for being at the center of the DCA universe. Too many things are not there that would have to be reinvented. Eg. inference, constraints, federation. But things may change, we need to remain open. Neptune might advance a lot in next few years. |
| Chris Harding | Should we have an analytics layer in the DCA grapefruit? Keep RDF in the center and have graph DBs (e.g. Neo4j in the analytics layer? |

---

## Case Studies

---

|  |  |
| --- | --- |
| Andrea Zachary | Alan Morrison presents some case studies. |
| Chris Harding | We should accommodate but not require the Self-Sovereign Identity (SSI) stack. |
| Chris Harding | Different countries have different approaches to personal id - e.g. person number, birth certificate |
| Chris Harding | Boris - biometrics can provide secondary authentication - but fingerprints now can be forged by 3D printing. |
| Chris Harding | Alan - SSI hub would store biometrics and other authenticators |
| Chris Harding | Does the DCA need to accommodate an ontological representation of conversation? |
| Chris Harding | Voice will be increasingly pervasive so we should take it into account, but it's more behavioral than structural. |
| Michael F Uschold | AGREEMENT:  Voice input and conversation is growing in importance, and will likely be in the enterprise at some point.  Be careful to build out the DCA so that it can accommodate voice technology. |
| Chris Harding | A knowledge graph base can enable agility |

[![](https://semarts.atlassian.net/wiki/download/thumbnails/679116841/DCC%20Case%20Studies%20and%20Strategy.pdf?version=1&modificationDate=1550033360935&cacheVersion=1&api=v2&viewType=fileMacro)](/data-centric-architecture/attachments/679116841/679116881.pdf)
