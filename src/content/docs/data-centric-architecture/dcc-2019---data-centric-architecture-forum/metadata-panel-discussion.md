---
title: "Metadata Panel Discussion"
confluence_id: 679182354
source: Metadata-Panel-Discussion_679182354.html
---
Cause metadata is where it's at.

---

|  |  |  |
| --- | --- | --- |
| Chris Harding | Shane - not just about structural metadata - value in business metadata |  |
| Dan Carey | Business metadata expands to include privacy concerns, regulatory associations, |  |
| Eric Hills | Shane -- business meaning as meta-data, compliance example but applies to all of the business rules. this is too hard in relational so excited to leverage rdf to address |  |
| Chris Harding | Relational world is 2-dimensional |  |
| Chris Harding | Who has experience with meradata repositories - less than half a dozen |  |
| Dan Carey | How well do DCA characteristics translate into MetaDM? |  |
| Chris Harding | Michael - stakeholders will be tightly tied in |  |
| Chris Harding | Andrea - metadata provides the meaning |  |
| Dan Carey | It is possible to have triples without semantic meaning.  Metadata is required to provide *real* meaning. |  |
| Linda Macklin | What's Administrative metadata? |  |
| Linda Macklin | What's Administrative metadata? |  |
| Boris Pelakh | Do you consider access controls/permission information to be Administrative metadata? Also, the mention of 'metadata repositories' brings up the thought that in DCA there is no divide between metadata and the data it's annotating - they are just different aspects of the central data model. |  |
| Chris Harding | Uche - in a DCA you get different ways of looking at the metadata describing the data in the middle |  |
| Linda Macklin | What's Administrative metadata? |  |
| Chris Harding | There is a technical science to metadata but key is finding way to view it. |  |
| Dan Carey | What are the metrics that might be captured around metadata? |  |
| Eric Hills | anyone heard of the company who quantifies the value of data? <http://cleardq.com/> |  |
| Chris Harding | Metadata can help determine whether you are compliant. Can also help assess quality of process. |  |
| Andrea Zachary | Administrative metadata is the metadata that tells you how to deal with it, e.g., is it a draft copy? final copy? when should it be destroyed? archived? All the stuff that librarians do to manage a collection. |  |
| Dan Carey | Ability to pinpoint stakeholders and impacts to reports from changes is a good way to engage developers and ensure/encourage their use of the metadata repository. |  |
| Chris Harding | Uche - abstraction requires lots of training and/or experience. |  |
| Dan Carey | Have compassion for others who may not understand how complicated the data are. |  |
| Chris Harding | Metadata essential for images - provides clues to what you are looking for. Metadata for tools is important too. |  |
| Dan Carey | Metadata for tools and services -- config file metadata; pipeline metadata, etc. |  |
| Chris Harding | There  is much more availability of metadata for products and services than for data. |  |
| Dan Carey | Metadata for tools and services -- config file metadata; pipeline metadata, etc. |  |
| Chris Harding | Can categorise metadata - administrative, structural, descriptive.  But many companies have a dearth of descriptive metadata (Andrea) |  |
| Chris Harding | Dave - company has billions of bits of data, make sense of it with millions of bits of metadata - but its not shared. Shared tagging of images scales up the metadata. Each photo has its own tag, but each cell of data only has a share of a column tag. |  |
| Dan Carey | Too often, managed metadata is hidden away. |  |
| Chris Harding | Andrea - used NLP to derive tags for a collection of photos. But it didn't generate useful metadata. |  |
| Chris Harding | Corporate collective knowledge is in e-mail and office documents etc. There is a facility to add metadata to office documents, but no-one uses it. |  |
| Chris Harding | Drone surveillance is producing a mass of video - needs metadata to process it - but how do you get that metadata? |  |
| Dan Carey | Need to make managed metadata accessible and easy to use (e.g., tagging). |  |
| Chris Harding | Metadata collection needs context and is hard. |  |
| Chris Harding | Machine learning could help - e.g. can analyse data sets and find common concepts even if they are named differently. |  |
| Dan Carey | Need to make managed metadata accessible and easy to use (e.g., tagging). |  |
| Chris Harding | We need to make abstraction easier for people to do. But how? |  |
| Chris Harding | Andrea - SHACL? |  |
| Alan Morrison (US - IFS) | Mark O's point on the value of Windows: Instant feedback to user. How do we translate to DCA? We need a dialogue with front-end developers to create a framework for a friendly, responsive UX. |  |
| Chris Harding | [Schema.org](http://Schema.org) is a big activity in the metadata area. It can use a crawler to analyse websites and detect changes. Don't have a lot of answers in general but are achieving practical consensus on vocabulary for descriptive metadata. |  |
| Chris Harding | [Schema.org](http://Schema.org) is designed for cross-enterprise - can get tighter definitions in single enterprise. |  |
| Chris Harding | Can add more metadata using RDFA |  |
| Alan Morrison (US - IFS) | Andrea's point about all the rules necessary to follow to make metadata useful. Can we teach RPA/intelligent process automation bots the rules and have them create the metadata, as well as be the enforcers. |  |
| Chris Harding | We agree that ontologies are a good way to express metadata. In an enterprise have structured and unstructured data. Should we vacuum up the existing unstructured data and create metadata, or should we insist on just dealing with properly tagged new stuff? |  |
| Alan Morrison (US - IFS) | Dave: Systematically collect the metadata and tags. Dan: Turn the data scientists loose to mine it, find useful things in it. |  |
| Chris Harding | But everything we have talked about fits in the DCA grapefruit model. |  |
| Chris Harding | Linda - we may have to deal with the legacy initially. |  |
| Chris Harding | Dave - vacuuming up everything may be the way we have to go. |  |
| Chris Harding | False positives can be a bigger problem than false negatives when you do this. There has to be a feedback loop so that you can tune the process but this is hard. |  |
| Alan Morrison (US - IFS) | Dave: For risk management, you're really forced to hoover up all of it and mine it for evidence of PII.  Shane: Have to create feedback fo metadata creators to reduce pct. of false positives. |  |
| Chris Harding | Dan - metadata for the tools you use could help the tuning process. |  |
| Chris Harding | Linda - but it could be hard to show the business value for tool metadata? |  |
| Chris Harding | Andrea - not the lowest-hanging fruit. How do we establish ROI for ontology development and NLP? |  |
| Chris Harding | Dave - gave example where NLP produced initial results but needed manual tuning - but overall this was faster than pure manual. |  |
| Chris Harding | Computer-generated ontologies still lower quality than human-generated ones. |  |
| Chris Harding | A controlled vocabulary can help NLP which can then identify synonyms - need to tag categories rather than classes or properties. |  |
| Chris Harding | Need training data attached to ontology to help NLP. |  |
| Chris Harding | The model may be to use human annotators initially then let machines autotag. |  |
| Chris Harding | Then can maybe crowdsource - let users give feedback on the tagging. |  |
| Alan Morrison (US - IFS) | Dave: Ted started using Jaguar to propose ontology candidate entities, then pawed through them to find the best candidates. {See Chris's note above.} Michael: Efforts to harness ML have been ongoing.... Suggests a multi-step refinement process, human in the loop. Tatiana: Training data is something we need to be attached to ontologies. Mark W: Mining structures for 10Ks of entities--here are the more specialized names, map back to any level/concept in ontology. After that point, you can let machines autotag.  Boris: Can crowdsource validity of machine-generated suggestions. |  |
| Chris Harding | Could be an issue because the crowdsource taggers aren't expert taggers. Toolmakers need to use good design to guide the non-expert taggers. |  |
| Chris Harding | Dave - can't just work top-down when building metadata. NLP or crowdsourcing can help reaching down to the bottom. |  |
| Chris Harding | Teaching people to tag better is hard. |  |
| Chris Harding | Starting with core upper ontolology/vocabulary - e.g. EBL - is good. NLP and machine learning can then help establish the middle layer. |  |
| Alan Morrison (US - IFS) | Uche: Top down from core ontology, bottom up with machine learning, then mapping one or the other. |  |
| Alan Morrison (US - IFS) | Dave--Bottommost layer: Raw metadata. Top layer: understanding or (descriptive) metadata. |  |
| Alan Morrison (US - IFS) | Dave--Bottommost layer: Raw metadata. Top layer: understanding or (descriptive) metadata. |  |
| Alan Morrison (US - IFS) | Andrea: Folksonomy is not controlled. |  |
| Chris Harding | Agreed:   - We are for metadata - Data is tightly-coupled with metadata at the center - The DCA model is good subject to validation in use - We should categorise raw metadata - Process metadata gives provenance - The middle layer of metadata below the upper ontology is often what gives the business value - Guidance on use of DCA is needed - including on process of adding metadata to data - This is needed for ecosystems - e.g. supply chains - not just individual enterprises |  |
| Alan Morrison (US - IFS) | Shane's description of the metamodel: Further down you go, the more disparate and detailed it becomes, because you want to know more about more things. |  |
| Chris Harding | "Metadata factory" term used by several people - whole complex process involved |  |
| Alan Morrison (US - IFS) | Erik: Need a DCA metadata factory.  Alan: Need the metaorganization (e.g., retail consortium led by Walmart doing supply chain-wide tracking and tracing) to own the metadata factory. As compute, networking and storage becomes more capable, organizations need to share their metadata building resources (labor, automated process, methodology). |  |
| Chris Harding | Dave - don't hear "knowledge management" much these days. Hear "knowledge graph" more. Web search analysis confirms KM peaked 2005 or so. KG growing but still much lower than KM. |

---
