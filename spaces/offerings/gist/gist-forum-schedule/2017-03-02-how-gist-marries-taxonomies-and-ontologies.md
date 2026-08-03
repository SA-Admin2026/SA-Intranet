---
title: "2017-03-02 How gist marries taxonomies and ontologies"
confluence_id: 51707913
source: 2017-03-02-How-gist-marries-taxonomies-and-ontologies_51707913.html
---

# 2017-03-02 How gist marries taxonomies and ontologies

# People:

1. Bill McCrea: Broadridge, looking to move an internal ontology, make available to clients, will use gist as upper ontology.
2. Eric Callman: Platts, division of S&P Global, is part of our EO at this time
3. Mark Apsey, Global IDs. Working with gist and other ontologies, want to leverage information we have from different  environments, map to different ontologies.
4. Matt Johnson – LexisNexis. Not using gist directly now, hav interest in where it si going
5. Nic, Morgan Stanley, head of Information Management, leveraging to tackle information management ontology.
6. Phil Lanzafame – Sentara, we have gist in our upper level ontology, want to know how to extend and continue to leverage.
7. Dr. Sam Singapogu, Schneider Electric. Using gist for our big complex product ontology to derive interesting relationships between products for our product catalog and associated services
8. Tim Smith, P&G: using gist for a layer for foundation layer of R&D ontology for products and global regaions.
9. SA folk: DMc, AE, Nick

# Slide deck:

**Path**: ...\Offerings\gist\\_\_gistCouncil\2017-03-02-Taxo\gist Onto Taxo.pptx

# Discussion

MU:

1. Information Architecture: much interest in ontology, talk at World IA Day. On slideshare.net: [Ontology and IA](https://www.slideshare.net/UscholdM/ontology-and)  
2. Facet math – vast duplication, language, topic, genre. We are working with a company now to remove such duplication, make facets explicit, using gist:Category as Dave described   
3. Blog on categories: [gist: Buckets, Buckets Everywhere, Who Knows What to Think?](https://semanticarts.com/blog/buckets-everywhere/)

1. Nic Seyot: semantic relationships in skos can be converted to OWL later. There is vaelu, do not look down on them.   
    DMc: there are plenty of skos vocabularies out in the wild. How often when people us braoder/narrower do they in fact mean is  a kind of.  
    Nic: the difference between organization and representation. Loosey goosy pseudo-taxonomies. Can insert into existing ontology.  Quick kick-starting, can do querying. Not even need user intervention.  Inject into model then add properties later.  
    DMc: well put. We have been promoting: CBox along with TBox and ABox. Governed by different set of people.
2. Phil at Sentara: hit on soemthign we struggle with. Marrying high level terms with ontology terms. Very complex, how to manage the terminology, and taxonomy and ontology.  
    DMc: agree, very complex, more so than any industries
3. Matt Johnson: if can avoid, do not do one massive taxonomies, better to have multiple finely tuned taxonomies. Avoid facet math/ duplication. E.g. Lightroom taxonomies for categorize. I manage multiple taxonomies about who, what, when, wehre and why. Can have smart collections based on logical combinations. Auto-categorize.  
    On Boolean… using names vs. 0/1, T/F, you are future-proofing your system. Avoid hard-coding into the application. Focus on what the question is.
4. Sam (Schneider) thanks for clear well-thought out presentation.  Go to slide with person/male/female, restroom. Say want to add restriction on restroom for men… oh I see.  
    DMc: I’d have another instance of restroom, can create a unisex restroom.  
    Sam: so restriction on male and men’s room, restriction on classes.   
    Sam: have you found sit when categorize using instances, then have to move the instance as a class.  
    DMc: yes, this is what this example shows (slide “You done have to get it right up front”)
5. Matt, Lexis: have you considered using github?  
    AE: one issue is that we use e6, a 1-way street. We are considering outputting to git. Moving to ontology editor that does round-tripping. Dr. Sam recently moved ontologies   
    Matt: might you open this up to other collaborating?  
    MU: we are moving this FIBO approach using serializer and github to gist.
6. Nic: spreadsheet to rdf. There a number of tools to do this.
