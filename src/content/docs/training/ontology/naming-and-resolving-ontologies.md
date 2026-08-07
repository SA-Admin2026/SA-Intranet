---
title: "Naming and Resolving Ontologies"
confluence_id: 7176194
source: "Naming-and-Resolving-Ontologies_7176194.html"
---
## UPDATE on 2018-01-26

We had a lively discussion on this today.

Goals:

1. ontology to be resolvable (in appropriate forms, content negotiation. eg GoodRelations)
2. resources to be resolvable
3. intuitive naming, less confusing
4. ontology URI different from the namespace URI
5. ontology URI different from the resource URI (e.g. Intention)
6. file name same as end of ontology URI

CURRENT:

The ONTOLOGY:  http://ontologies.semanticarts.com/o/gistIntention

The Namespace: http://ontologies.semanticarts.com/gist

The CLASS:     http://ontologies.semanticarts.com/gist/Intention

FILE NAME:     gistIntention.(owl/rdf/ttl)

PROPOSED by Dan1 to help meet goal 3a

The ONTOLOGY:  http://ontologies.semanticarts.com/~~o/~~gistIntentionOntology

The Namespace: http://ontologies.semanticarts.com/gist

The CLASS:     http://ontologies.semanticarts.com/gist/Intention

FILE NAME:     gistIntentionOntology.(owl/rdf/ttl)

PROPOSED by Dan2   to help meet goal 3a

The ONTOLOGY:  http://ontologies.semanticarts.com/~~o/~~gist/gistIntentionOntology

The Namespace: http://ontologies.semanticarts.com/gist

The CLASS:     http://ontologies.semanticarts.com/gist/Intention

FILE NAME:     gistIntentionOntology.(owl/rdf/ttl)

PROPOSED BY MU to help meet goal 3a.

The ONTOLOGY:  http://ontologies.semanticarts.com/onto/gistIntention

The Namespace: http://ontologies.semanticarts.com/gist

The CLASS:     http://ontologies.semanticarts.com/gist/Intention

FILE NAME:     gistIntention.(owl/rdf/ttl)

At the end of the discussion, we were scarily close to agreeing that:

1. The way we currently have things meets all of our main goals, but that the /o/ is pretty subtle so goal 3a could be helped
2. Simply using /onto/ instead of /o/ seems to be helpful in that regard (per last proposal). This is worth considering.
3. A good example of how this should work is GoodRelations.

# Pre-2018-01-26

Let’s discuss this at the next staff meeting.  We still don’t have the final story on naming and resolving ontologies (nor do I think this is right.  Do they even allow the name of the ontology to have a file suffix in it?)

# The mysterious /o/ and version IRIs

Dave asked:

"Does anyone know (I don’t) the relationship of the ontology name and what you type in to retrieve this from the web?  And the relationship of the name of the ontology to the name that you use in your import statement.  One of these days we are going to understand this well enough to explain it.

I just looked into what FIBO does, it uses version IRIs  The IRI and version IRI for the organization ontology are:

- <https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/>

- <https://spec.edmcouncil.org/fibo/ontology/pink/latest/FND/Organizations/Organizations/>

I cannot get Protégé to open the ontology using the main IRI, I get the following error:

![](/attachments/7176194/67043338.png)

But it works fine using the version IRI.  It only takes a moment, and it loads a dozen ontologies in all.

As a bonus, it also works if you have an .rdf at the end of the URI:  
 - <https://spec.edmcouncil.org/fibo/ontology/pink/latest/FND/Organizations/Organizations.rdf>

 So they add “/pink/lastest/” which might be accomplishing the same thing “/o/” does?

This file: [Organizations-pink-latest-FromWeb.rdf](/attachments/7176194/66748436.rdf), came from pasting the version IRI into Chrome and downloading the file. You get the same file if you use the one with .rdf at the end.

## DMc responds:

The pink/latest is providing the same kludge as /o/ but only because (I think) there needs to be the equivalent of a directory in the path (just having [http://ontologies.semanticarts.com/gist#](http://ontologies.semanticarts.com/gist) doesn’t work because there is just a domain name and gist# but no document or directory.

 I frankly find this stuff weird.

 But the real question I have which I’m not articulating very well:

I think ontologies have at least:

- A name (internal name, this is the iri of the ontology, inside the ontology)
- A external name (the file name)
- A location which could be the URL or the directory path
- Another location for a version specific URL or directory path
- An internal name with a version

 In my mind (vaguely) the protégé catalog file is a crude sort of configuration management config file.  It points at where certain named (named versions?) might be found (in a file system, on the web)

 I have never really studied the catalog, I know Michael has.  I don’t get how its created or what its really doing.

 Seems to me in the absence of a catalog file (and we should consider this the base case, as most defaults will be without it) how does an ontology go about resolving which (version v. non versioned ) and where it is going to find an ontology to import.

 Once we can really articulate this, we can put forward ideas about naming conventions.

Also, given that the resolver often rewrites the url anyway, why do we need the /o/

## MU responds:

I’m going to rearrange your bullets a tad to reflect how I see it and use actual examples. I don’t get to the nub of the problem, but I hope to clearly present what we have to work with.

- **Ontology IRI**: A name (internal name, this is the IRI of the ontology, inside the ontology)  
   MU: yes, this is the main name of the ontology that you type into Protégé.

- **Ontology Version IRI**:  Same as above for a specific version of the ontology
- **File path and name**: where you store the file.

These things are depicted below in Protégé for a made up example:

![](/attachments/7176194/67010618.png)

- **Ontology URL:**  an address on the web that enables two things:
  - You can download the file that has the ontology in it. The files is located on some web server; it is not where the ontology was saved out during development.
  - an ontology tool like Protégé or TobBraid Composer can use to load the file from the web (presumably same place where you would download it manually)
- **Ontology Version URL**: same as above, for a particular version of the ontology.

The URLs above might be exactly the same as the corresponding IRIs, or the IRIs could redirect to them. For example,  the following two URLs load the same FIBO organizations ontology.

" <https://spec.edmcouncil.org/fibo/ontology/pink/latest/FND/Organizations/Organizations.rdf> "

**" <https://spec.edmcouncil.org/fibo/ontology/pink/latest/FND/Organizations/Organizations/>  "**

Here is what Protégé shows for the first.  It will look identical for the second, other than what is in pink. Note that when the file is loaded from the web, a file path does not show up, but rather a URL.

![](/attachments/7176194/66814006.png)

This is all background to the main question:

**How does an ontology go about resolving which (version v. non versioned )  
 and where it is going to find an ontology to import?**

The version IRI was invented so that when someone used the main ontology IRI it would redirect to the most recent version  of the ontology.  I have no idea how this is implemented. It might have just been in the spec, and it was someone else’s job to figure out how to do that.  It might be child’s play for webmasters, I really have no idea.  I know that FIBO Ontology IRIs are not intended to point to the latest version. I’m not entirely sure why.

Dave mentioned directory path, which I say little about, I may have missed something. I suppose that is important when it comes to finding the file on the web server to find.

Protégé will look in the catalog file to see if there is a file name associated with an ontology IRI. It can also load directly from the web. I think it will load from the file if there is a catalog file entry. TopBraid Composer is 1000x smarter about loading ontologies from folders and from the web w/o fussing over a catalog file.

The catalog file has two kinds of entries:

1. Created by Protégé by watching what you do.
2. Created manually in the file.

For more about the catalog file, see: <https://semarts.atlassian.net/wiki/spaces/TRR/pages/50987028/Catalog+File>

Hope this takes us a small step further…

It turns out FIBO intentionaly does not re-direct the main URL of an ontology.  I don't know the mechanism for how a server is supposed to know how to find the version IRI.

## Andi responds:

A few final comments on the url path, versions, and resolving ontologies...

### /o/ directory

Starting out with why we have another "level" in our resolvable ontology URLs. I think this has nothing to do with Protege or ontologies specifically, and simply relates to HTTP and how URLs are mapped to file systems in general. This is probably why this is so painfully obvious to someone like Nate.

See the first part of this page: <https://httpd.apache.org/docs/2.4/urlmapping.html>

And also this specific section of the URL standard: <https://tools.ietf.org/html/rfc1738#section-3.10>

```
The file URL scheme is used to designate files accessible on a  
 particular host computer. This scheme, unlike most other URL schemes,  
 does not designate a resource that is universally accessible over the  
 Internet.  
  
A file URL takes the form:  
  
file://<host>/<path>  
  
where <host> is the fully qualified domain name of the system on  
 which the <path> is accessible, and <path> is a hierarchical  
 directory path of the form <directory>/<directory>/.../<name>.
```

If you just made your ontology url http://ontologies.semanticarts.com/gistCore, your <host> would be  http://ontologies.semanticarts.com/ and your <path> would just be a file name. So your url would be resolving to a file, not a directory. This would sort of be like throwing all of your files in the root folder, right? My guess is that it's bad practice to serve files out of your Document Root. In fact, I just googled "Is it bad practice to serve files out of your document root?" and found this [nginx common pitfalls page](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/).

> ## Not Using Standard Document Root Locations
>
> Some directories in any file system should never be used for hosting data from. These include `/` and `root`. You should never use these as your document root.
>
> Doing this leaves you open to a request outside of your expected area returning private data.
>
> NEVER DO THIS!!! (yes, we have seen this)
>
> ## Using the Default Document Root
>
> NGINX packages that exist in Ubuntu, Debian, or other operating systems, as an easy-to-install package will often provide a ‘default’ configuration file as an example of configuration methods, and will often include a document root to hold a basic HTML file.
>
> Most of these packaging systems do not check to see if files are modified or exist within the default document root, which can result in code loss when the packages are upgraded. Experienced system administrators know that there is no expectation of the data inside the default document root to remain untouched during upgrades.
>
> You should not use the default document root for any site-critical files. There is no expectation that the default document root will be left untouched by the system and there is an extremely high possibility that your site-critical data may be lost upon updates and upgrades to the NGINX packages for your operating system.

This is why I believe our <path> includes at least one directory before the file name. We happen to call our directory /o/ for ontology.

### resolving IRIs and versioned IRIs

Historically we have always only made the versioned IRI a resolvable url. Meaning when you are in Protege you can open http://ontologies.semanticarts.com/o/gistCore7.5.2 but not http://ontologies.semanticarts.com/o/gistCore via the Open via URL... option. There is no reason we couldn't have the unversioned URL resolve, we just never actually hosted a file called "gistCore" on HAL.

To summarize, right now we have every single version of all of the gist ontologies hosted in the http://ontologies.semanticarts.com/o/ directory. We can make http://ontologies.semanticarts.com/o/gistCore resolve to only the latest version of gist, **but only if we do our damndest to make sure we are only hosting the latest version of gist under that file name**. Example: the current version of gist is 7.5.2. We could save out all of the files from gist7.5.2 as gistCore.owl, gistTop.owl, gistPlace.owl etc. without a version number and host them at /o/. Now the non-versioned IRI will also resolve. However, when it is time to releast gist7.6, we need to go delete those generic files from the server and replace them with new ones created from 7.6. To date we never remove hosted files because they are all versioned. In this case, each gist release would require this extra step of making sure the files names with no version number correspond to the latest gist.

### why the /o/ directory has two versions of every file, one with a file extension and one without

It is common practice to host files with no extension, as discussed [here](https://stackoverflow.com/questions/3631153/how-come-some-site-urls-do-not-include-a-file-extension) and [here](https://www.w3.org/Provider/Style/URI.html). Both Protege (open from URL) and the import statements are just looking to see if the URL provided resolves, which it does just fine when we host the files with no extension. However, I think the reason we have also been hosting them with the .owl extension is for the download from the web option. If you type <http://ontologies.semanticarts.com/o/gistCore7.5.2> into your browser it downloads a file of an unknown type, which is really annoying. It doesn't know what program to use and thinks it is a "2 File" or whatever number happens to be at the end:

![](/attachments/7176194/79167564.png)

However, if you also host a file with an extension, then you can link to it and have it download properly. Which is what we do on our website, although we don't have them hyperlinked anymore: 

![](/attachments/7176194/79233108.png)

Any of those urls auto-download a nice useable file:

![](/attachments/7176194/79134769.png)

We have recently been discussing that TopBraid products no longer support the .owl extension. **We should probably start hosting our files with a .rdf extension and also put the .rdf extension files in our downloadable zip file.**

# Email to Protégé List

**From:** Tania Tudorache <[tudorache@stanford.edu](mailto:tudorache@stanford.edu)>

**Subject: Re: [protege-user] newbie questions**

**Date:** February 19, 2016 at 4:09:41 PM MST

**To:** <[protege-user@lists.stanford.edu](mailto:protege-user@lists.stanford.edu)>

**Reply-To:** User support for WebProtege and Protege Desktop <[protege-user@lists.stanford.edu](mailto:protege-user@lists.stanford.edu)>

Ideally, the ontology should be available at the URL denoted by the ontology name. For example, if the ontology name is:<http://mydomain.org/myontology.owl>, then the ontology file should also be available at this location. This works, if you are in control of the domain name, and can have a file server (e.g., apache) that will serve the ontology file.  
   
 You may also upload the ontology to one of the ontology repositories (e.g., <https://www.w3.org/wiki/Ontology_repositories>). For example, if the ontology is from the biomedical domain, then the choice is pretty easy, BioPortal ([http://bioportal.bioontology.org](http://bioportal.bioontology.org/)). Several ontology repositories have features that might be helpful (e.g., versioning, mappings to other ontologies, search across ontologies, commenting, etc.)  
   
 If you would like to make the ontology available to your collaborators, for inspection or collaborative editing, you could also upload it to WebProtege ([http://webprotege.stanford.edu](http://webprotege.stanford.edu/)), and set the sharing and access permissions accordingly (<http://protegewiki.stanford.edu/wiki/WebProtegeUsersGuide>).   
   
 Good luck!  
 Tania

On 02/19/2016 01:26 PM, Sheila Bair wrote:

I have created an ontology in Protege. How do I "publish" the ontology or add it to an ontology library/repository?  
 Thank you so much for your help!

Sheila Bair  
 Associate Professor  
 Metadata & Cataloging Librarian  
 University Libraries  
 Western Michigan University  
 (269)387-5160
