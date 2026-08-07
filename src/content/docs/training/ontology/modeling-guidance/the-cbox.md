---
title: "The CBox"
confluence_id: 118063105
source: "The-CBox_118063105.html"
---
A question arises about where to have the CBox categories.  There was a recent email discussion on this. Below I throw out a straw man policy for discussion.

## Proposed CBox Policy

1. **Namespaces**: the policy is the same as ever, use a new namespace for the CBox individuals when they will be under different governance.  This will be more likely when there are smallish sets what amount to enumerated lists of values that may be used in the TBox definitions.
2. **Modularity**:
   1. If there are just a few subclasses of Category, and each has just a few instances, it probably makes sense to keep them in the same TBox ontology.
   2. If there are lots of them, it may make sense to have a separate ontology module for them. I think then the TBox ontology will import the CBox ontologies.   
      1. In this case, put the subclasses of Category in the TBox and the instances in the CBox

## More recent Email Chain

**From:** Dan Carey   
 **Sent:** Monday, March 19, 2018 1:05 PM  
 **To:** Michael Uschold <uschold@[semanticarts.com](http://semanticarts.com)>  
 **Cc:** Dave McComb <mccomb@[semanticarts.com](http://semanticarts.com)>; Mark Wallace <mark.wallace@[semanticarts.com](http://semanticarts.com)>; Mark Ouska <mark.ouska@[semanticarts.com](http://semanticarts.com)>  
 **Subject:** RE: MS namespaces

The way I've handled CBoxes *so far* (because we might come up with something better)…

There's a separate CBox ontology & file that references mscore:Category and mscore:Taxonomy (but does not *import* anything), and then has subclasses specific to the ontology beneath those.  Example a category for **msinfo: msinfox:InformationAssetType**.

If there are a known, defined, stable, and not-too-large set of instances for a category, I'll include those in the CBox ontology file.  For example, there are 9 instances of InformationAssetType, one of which is **msinfox:\_InfoAssetType\_ApplicationDatastore**.  If there are a large set of instances to be culled from some source, I'll handle it differently (e.g., spreadsheet extraction).

This method that falls under both Michael's first and third bullets in the message below.  We do want to have a configuration item (the msxxxTaxo ontology file) that may be governed separately from the TBox file.  That is one of the governance principles we have advocated MS follow.  But I like the idea of creating a second file with the TBox instance data (which would also be governed by the same people who govern the CBox classes).

--DC

**From:** Michael Uschold   
 **Sent:** Friday, March 16, 2018 2:49 PM  
 **To:** Dan Carey <[dan.carey@semanticarts.com](mailto:dan.carey@semanticarts.com)>  
 **Cc:** Dave McComb <[mccomb@semanticarts.com](mailto:mccomb@semanticarts.com)>; Mark Wallace <[mark.wallace@semanticarts.com](mailto:mark.wallace@semanticarts.com)>; Mark Ouska <[mark.ouska@semanticarts.com](mailto:mark.ouska@semanticarts.com)>  
 **Subject:** RE: MS namespaces

On separate CBoxes, what did you decide about the CBox proliferation problem. You either  need to:

- have a separate CBox for every TBox that refers to a CBox class (annoying),
- or you have to put them all in one place and every ontology imports all of the classes and values (extra junk for every ontology).
- or maybe one CBox with just classes and separate CBoxes for values in cases where there are large numbers of them? (in between option).

This came up once in a discussion, not sure which way you went, but we should both be using the same approach, whichever way.

M.

## Original Email Chain

**From:** Ted Hills   
 **Sent:** Friday, November 3, 2017 10:14 AM  
 **To:** Dan Carey <dan.carey@[semanticarts.com](http://semanticarts.com)>  
 **Cc:** Ontologists <ontologists@[semanticarts.com](http://semanticarts.com)>; Michael Uschold <uschold@[semanticarts.com](http://semanticarts.com)>  
 **Subject:** RE: Proliferation of CBoxes

Thanks, Dan, for the thoughtful response.

I was thinking about CBoxes in a way similar to some cases of reference data management, where  the governance decision to establish a category (OWL class) of reference data occurs once, but then creates a need for intense, ongoing governance of instances of that reference data. In our world, ticker symbols fit that description, where that one decision to create the CBox creates the need to populate and maintain tens of thousands of individuals in the CBox.

**From:** Dan Carey   
 **Sent:** Friday, November 3, 2017 10:45 AM  
 **To:** Ted Hills <[ted.hills@semanticarts.com](mailto:ted.hills@semanticarts.com)>; Michael Uschold <[uschold@semanticarts.com](mailto:uschold@semanticarts.com)>  
 **Cc:** Ontologists <[ontologists@semanticarts.com](mailto:ontologists@semanticarts.com)>  
 **Subject:** RE: Proliferation of CBoxes

Admittedly, my decision to declare the CBox classes in a separate file was taken without any extended thought.  It seemed at the time like the most straightforward way to implement the "separation of concerns".  I hadn't given it much thought subsequently.  But the points raised in this thread have caused me to step back and think about it.

Is there, in fact, a reason to have the CBox classes and/or instances in a separate ontology?   To reflexively do so is to confuse *governance* with *configuration management*, which I did when I unthinkingly split out the CBox entities.

The *governance* of both the CBox and TBox contents guides the *implementation/coding* of the ontology by the ontologist.  The ontologist then works on the *CM* of the ontology file(s) with the configuration managers.

In the case of Morgan Stanley, I know that Nic really doesn't want the members of the governance WG to have to look at Protégé screens or such.  The modularization of an ontology isn't something the governors should worry about, in his opinion; that's the concern of the ontologist.  So the governance WGs will mostly be working from reports and slide decks produced by the ontologist.  Given that dynamic, splitting the CBox out makes little sense.

--DC

**From:** Ted Hills   
 **Sent:** Friday, November 3, 2017 8:59 AM  
 **To:** Dan Carey <[dan.carey@semanticarts.com](mailto:dan.carey@semanticarts.com)>; Michael Uschold <[uschold@semanticarts.com](mailto:uschold@semanticarts.com)>  
 **Cc:** Ontologists <[ontologists@semanticarts.com](mailto:ontologists@semanticarts.com)>  
 **Subject:** RE: Proliferation of CBoxes

I discussed this with Dave. His thought is that the category class might be needed as part of the definitions of other classes; therefore, it might be advisable to define it in the TBox. He didn’t think the decision was a major issue, though. I tend to like the TBox approach as well. I wonder whether the governance process of creating a new category class (in the TBox) and that of governing category individuals (CBox) shouldn’t be different?

Ted

**From:** Dan Carey   
 **Sent:** Thursday, November 2, 2017 8:53 AM  
 **To:** Michael Uschold <[uschold@semanticarts.com](mailto:uschold@semanticarts.com)>  
 **Cc:** Ontologists <[ontologists@semanticarts.com](mailto:ontologists@semanticarts.com)>  
 **Subject:** RE: Proliferation of CBoxes

I'm creating a CBox for each MS namespace, because that seems to make sense in terms of the way we are recommending the governance.   I put both the CBox class and instances in the CBox ontology file because they both fall under that governance purview.

So far, this arrangement has not been a problem for me because (a) there isn't any actual governance set up at MS yet, and (b) it's just another import into the namespace ontology (regardless of how large or small the CBox contents are).

--DC

**From:** Michael Uschold   
 **Sent:** Wednesday, November 1, 2017 11:02 PM  
 **To:** Dan Carey <[dan.carey@semanticarts.com](mailto:dan.carey@semanticarts.com)>  
 **Cc:** Ontologists <[ontologists@semanticarts.com](mailto:ontologists@semanticarts.com)>  
 **Subject:** Proliferation of CBoxes

Dan,

I’m wondering how you are doing the CBox at MS.

For each TBox ontology, there can be a set of new taxonomic categories. The classes (subclasses of gist:Category) belong in the TBox, but the instances of those category classes belong in a separate CBox ontology. But this means that there could be a CBox for every ontology, often they would be quite small. This seems annoying and complicated.

Have you and Dave come up with any other ideas?

M.

|  |
| --- |
|  |

|  |
| --- |
|  |
| You're receiving this message because you're a member of the [Ontologists](https://outlook.office365.com/owa/ontologists@semanticarts.com/groupsubscription.ashx?realm=semanticarts.com&source=EscalatedMessage&action=conversations) group. If you don't want to receive any messages or events from this group, [stop following it in your inbox](https://outlook.office365.com/owa/ontologists@semanticarts.com/groupsubscription.ashx?realm=semanticarts.com&source=EscalatedMessage&action=unsubscribe). |
|  |
| [View group conversations](https://outlook.office365.com/owa/ontologists@semanticarts.com/groupsubscription.ashx?realm=semanticarts.com&source=EscalatedMessage&action=conversations)   |   [View group files](https://outlook.office365.com/owa/ontologists@semanticarts.com/groupsubscription.ashx?realm=semanticarts.com&source=EscalatedMessage&action=files) |
