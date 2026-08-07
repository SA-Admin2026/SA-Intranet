---
title: "gistComputing / gistBFO Mapping"
confluence_id: 2841903108
source: "2841903108.html"
---
# Important Note:

There is a question regarding the ontology import relationships between gistBFO, gistComputing, and gistCyber. We have not decided the criteria for requiring a sub-gist to import gistBFO rather than gist. The thought has been considered that if it is a “domain specific ontology” it should import gistBFO.  
  
Perhaps, if it is a domain specific ontology that we expect to be adopted by the federal agencies it should import gistBFO. More discussion, and eventually a decision should be made.

**DA thoughts (2/19):** For clients using gistBFO, there could be different cases. The first case is outlined by Dave in the gistBFO whitepaper. The second case involves sub-gists but ultimately follows the same kind of strategy.

**Case 1:** They extend their client-specific ontologies solely from gistCore (i.e., they don’t use a sub-gist). In this case, the client-specific ontology can import gistBFO, which would import gist and BFO. (In some cases, they could also directly import gist into the client ontology, which would give them the ability to kick the gistBFO import in the future if BFO alignment isn’t truly needed.)

![image-20250219-145206.png](/attachments/2841903108/2877390858.png)

**Case 2:** They extend their client-specific ontologies from a sub-gist (and maybe some from gistCore too). Suppose, however, that some of the sub-gist classes are orphans--i.e., they don’t roll up to a gistCore class. In this case, it may be helpful to have mappings between those orphan classes and BFO. For example, if **Result** from gistComputing ultimately doesn’t have a home in gistCore, we could still map it to **independent continuant** in BFO. This axiom would arguably be best placed in a gistComputingBFO, which imports gistComputing and BFO. This client would then import gistBFO and gistComputingBFO to maintain BFO alignment. (Note that this client could still directly import gistComputing and drop gistComputingBFO if alignment with BFO becomes unnecessary.)

![image-20250219-145021.png](/attachments/2841903108/2877390851.png)

(Suggestion from Kate: gistComputingBFO should import gistBFO.)

# For Now

gistCyber is importing gistComputing which has yet to import gistBFO. A new branch (gist13-update-bfo) has been created which does import gistBFO.

Concepts that have not been subclassed under gistBFO yet include:

![image-20250128-184742.png](/attachments/2841903108/2842132487.png)

## January 29, 2025 (Status)

![image-20250129-195440.png](/attachments/2841903108/2843836426.png)

## February 18, 2025 (Status)

The import structure of gistComputing, and hence gistCyber, has not been officially decided yet.

In order to meet some upcoming deadlines, we are going to “guess and go”. Meaning, we are going to create a branch of gistComputing that imports gistBFO. This branch of gistComputing is called gist13-update-bfo. It is on the gistComputing GitHub repository.

![image-20250218-210009.png](/attachments/2841903108/2876342274.png)

For those who think bottom up:

![image-20250218-210252.png](/attachments/2841903108/2876178434.png)

# Artifact

ARGH: Artifact is asserted in gist, not gistComputing. I’ll have to back out the changes I’ve made below.

Further discussion about the concept of Artifact needs to be had. It seems to be a “catch all” concept. Many of the subclasses under Artifact have been mapped to gistBFO, but Artifact itself has not.

I’m proposing moving Artifact to be a subclass of BFO’s indenpendent continuant class. It may better be considered a material entity, but I am uncertain about some of the concepts protentially be immaterial.

# Agent

Agent seems to be an independent continuant. Because an Agent can be a process, it may be an immaterial entity.

# Defect

Can an immaterial entity have a defect. It does not seem so to me. I think that it best fits under generically dependent continuant. There may be a defect in software code, hardware, a software specification, etc.

A defect is dependent on there existing something to exhibit the defect. Moving Defect to generically dependent continuant.

# SoftwareUpdate

A software update is software itself. Someone (a developer) has edited the source code of an existing software.

# Compiler

Also a software application that converts source code to machine language

# Service

I’ve placed Software under SoftwareItemSpecification. We should discuss this. I place it here because of SoftwareProduct is a subclass of SoftwareItemSpecification and it seems a parallel.  
However, to me, there is a big difference between a specification and the thing itself.

# Resource

This reminds me of programming with INPUTS and OUTPUTS. Same is true of the following concept of Result. The “GoesIntas” and the “GoesOuttas”.  
It is obviously more generic than in the programming or software context. Many processes have “consumables”, things (resources) necessary for the process.

# Result

## In this section

- [STIX Cyber Observable objects](/ontology/semantic-arts-offerings-documentation/gistcyber-documentation/gistbfo-mapping-notes/gistcomputing-gistbfo-mapping/stix-cyber-observable-objects/)
