---
title: "Protégé vs. Tobpraid Composer (TBC)"
confluence_id: 4194333
source: "4194333.html"
---
**Email trail** between [Michael Uschold](https://semarts.atlassian.net/wiki/people/557058:b8f72a51-4d00-4afe-b646-b27876ce3a19?ref=confluence) and Dean Allemang on 2016-01-13  (somewhat uglily formatted)

**From:** [deanallemang@gmail.com](mailto:deanallemang@gmail.com) [mailto:deanallemang@[gmail.com](http://gmail.com)] **On Behalf Of** Dean Allemang  
 **Sent:** Wednesday, January 13, 2016 1:08 PM  
 **To:** Michael Uschold <uschold@[semanticarts.com](http://semanticarts.com)>  
 **Cc:** Dave McComb <mccomb@[semanticarts.com](http://semanticarts.com)>; Dan Carey <dan.carey@[semanticarts.com](http://semanticarts.com)>; Andrea Engelstad <andrea@[semanticarts.com](http://semanticarts.com)>; Scott Ogle <scott.ogle@[semanticarts.com](http://semanticarts.com)>  
 **Subject:** Re: Protégé & TBC

Indeed, the OWL contract, about the input entailing the output, is clearly honored here, and this is like correcting spelling errors; instead of saying "input invalid" it fixes it, then makes sure that the contract holds.

A sensible thing to do from an OWL perspective.

On Wed, Jan 13, 2016 at 3:52 PM, Michael Uschold <[uschold@semanticarts.com](mailto:uschold@semanticarts.com)> wrote:

Very interesting, thanks for all that detail.  I may have stumbled across such added axioms before, but because they are obviously true, I never gave it any thought. Furthermore, it never caused a problem for me. I see how it does in the FIBO context.

Dave, Dan, Scott, Andi: have you ever come across this?

Michael

**From:** [deanallemang@gmail.com](mailto:deanallemang@gmail.com) [mailto:deanallemang@[gmail.com](http://gmail.com)] **On Behalf Of** Dean Allemang  
 **Sent:** Wednesday, January 13, 2016 12:09 PM  
 **To:** Michael Uschold <uschold@[semanticarts.com](http://semanticarts.com)>  
 **Cc:** Dave McComb <mccomb@[semanticarts.com](http://semanticarts.com)>  
 **Subject:** Re: Protégé & TBC

 Not really - I prefer to have these checks available in Jenkins anyway, so I have to be able to do them on the command line anyway. David runs these things in Protege, and often has problems in Protege that don't appear on the command line, or we have problems (as in reported errors) on the command line that didn't show up in Protege.  The gap between what Protege sends to Pellet (etc.) and what is really in the files means that his inference runs are informative only.  They are very useful while he's developing (except in the cases, like his current SS POC, where Pellet takes 1000 seconds to process his model, whereas the same model on the command line runs almost instantly.  Why the difference?  Nobody knows), but they have to be done again for normative testing.

As for added triples, I am not sure of the exact situation when it adds triples, but I think it is in a circumstance like this:

File A (namespace prefix A:)

A:Animal a owl:Class .

File B (namespace prefix B:)

B: imports A: .

B:hasFur a owl:ObjectProperty ; rdfs:domain A:Animal .

Load, save, no change in triples.

Now, you make a mistake - you remove the imports, because you (mistakenly) thought that it was not necessary.

Now you load B and save it.  That is not in itself an error - you don't have to import something to refer to things defined in it.  But it is unusual, and has some "warning" status.  
   
  It's contents are now:

B:hasFur a owl:ObjectProperty ; rdfs:domain A:Animal .

A:Animal a owl:Class .

This causes all sorts of problems in FIBO - a superficial question about "Where do we define things about A:Animal?" (vs. "Where do we reference A;Animal") gives a very misleading answer.  Comparison/merge show spurious dependencies.  When Elisa loads this in to VOM, she actually gets an error, since UML uses the namespaces to define module membership, and this shows a definition of a foreign entity (I don't know if that is a hard error or a soft one).

When we wrote the serializer in OWLAPI, we got this error literally all the time.  We read the files one by one, and the referenced entities had no types, so the OWLAPI put them in.  Every file serialized incorrectly.  Jacobus' solution was to read the imports closure of the file, then interpret the current file in that context, then write it out.  As you might imagine, this process was slow and error prone (we never really got it right).

In our diffs, David and I have come across a handful of these in BE.  Elisa has run in to it as well, in other contexts.

Dean

On Wed, Jan 13, 2016 at 2:04 PM, Michael Uschold <[uschold@semanticarts.com](mailto:uschold@semanticarts.com)> wrote:

Thanks, very helpful.  I was not aware that Protégé would change actual triples. What is a simple example of a triple it would add?  Does this occur only in  a situation where there are errors and/or warnings?

Since (I think)  FIBO requires running of OWL2 reasoner to check consistency, I presume it would make your life a lot easier if TBC did have F++, Hermit & TrOWL accessible. Is that not so?  Different question about how/whether it might ever happen…

**From:** [deanallemang@gmail.com](mailto:deanallemang@gmail.com) [mailto:[deanallemang@gmail.com](mailto:deanallemang@gmail.com)] **On Behalf Of** Dean Allemang  
 **Sent:** Wednesday, January 13, 2016 10:33 AM  
 **To:** Michael Uschold <[uschold@semanticarts.com](mailto:uschold@semanticarts.com)>  
 **Cc:** Dave McComb <[mccomb@semanticarts.com](mailto:mccomb@semanticarts.com)>  
 **Subject:** Re: Protégé & TBC

The answer to your questions - the only OWL reaonser TBC runs is OWLIM.  It does not load .owl files.

The only change I would make to your paragraph is that TBC moved away from (not is moving away from) supporting OWL and focusing on LinkedData (that move happened about seven years ago, maybe longer).    In fact, one really probably shouldn't call it an OWL tool at all.  It has some support for editing OWL, but it is really a linked data tool

The load process in TBC is much easier than it is in Protege (that is the thing that has made me swear at protege.  I am sure that the EDMC has paid for about 200 hours of my work to simply go through Protege load menus.  Usually for the two-dozenth time.)  TBC scans the directory in Eclipse for files with base URIs and makes an index of which file goes with which base URI.  If there is some conflict, it tells you (and when you deploy, it will refuse, because the conflict in declarations is actually undeployable in the real web)

Protege uses a standard for doing this (I forget what it is called - I think it is from OASIS), but either the standard doesn't work well, or Protege doesn't use it well, I don't know which.  On our FPT wish list is generating catalog files that are portable, that you can download with FIBO to make it load in any tool that understands that standard.  I don't know if this is possible - I have never seen it done.

Another nuisance is that there are common error modes (actually, more like warning modes) in Protege whereby new triples, referring to imported things, show up in the files.  As a linked data tool, TopBraid respects the contract that the triples you load + triples you create through the UI = triples exported.   In protege, you can load a file and save it (no UI) and have the export triples change.  This is the behavior that Elisa complains most about (she will go so far as to say that this behavior makes Protege unreliable in a development context.  I tend to agree with her). In general, the OWL API does not respect this contract (it respects a different contract, which is more OWL-oriented.  Something like, the output model will entail the input model plus the UI changes, and vice versa.  The added triples don't change the entailment, but relax the error modes. From an OWL point of view, this behavior is correct), which is what has made it problematic for some of the command line utilities we have written (Tony moved from OWLAPI to SAIL, and life got a lot better.  SAIL (like JENA) respects this contract).

Another issue with Protege is that the SPARQL engine isn't really SPARQL (the details of what this means go beyond my clear understanding, but in the discussions between Holger and Matthew, this is not controversial; Matthew is in agreement that the SPARQL isn't fully functional.  It has to do with the fact that the OWL API doesn't work over triples).  This prevents one from running SPIN (and now, SHACL) in Protege without a very elaborate plug-in that basically transfers the model to another database.

Dean

PS.

On a related point, about a year and a half ago we had the discussion about Rules in FIBO, and the possibility of using RIF.  The following reply (in a rather elaborate context) from Matthew confused Dennis (pushing the competition?):  
   
   
 On Wed, Jul 9, 2014 at 6:07 PM, Matthew Horridge <[matthew.horridge@stanford.edu](mailto:matthew.horridge@stanford.edu)> wrote:  
 Hi David,

We currently don’t have any plans to provide support for RIF in Protege - either in the desktop version or in the web version.  At the moment our resources are somewhat limited and we have other priorities.  I’m sorry if this isn’t the answer that you were hoping for.

Out of curiosity, have you taken a look at TopBraid Composer?  I believe it would fit your needs with regards to SPIN etc.

Best wishes,

Matthew

On Wed, Jan 13, 2016 at 12:28 PM, Michael Uschold <[uschold@semanticarts.com](mailto:uschold@semanticarts.com)> wrote:

Is there a way to get TBC to run Fact++, Hermit or TrOWL inference engines? I have not been able to do so.

Also, is there a way to get TBC to load a .owl file?  It tells  me to rename to .rdf  (startling for a professional OWL tool :-).

Below  is a comment reflecting my experience that I sent to Mark Musen supporting Protégé. If you think it is inaccurate or misleading  in any way, let me know.

While there are a number of OWL ontology editing tools commercially available, only one is even roughly comparable in terms of functionality: Topbraid Composer.  While this tool has a variety of features lacking in Protégé, the reverse is also true.  Topbraid Composer is moving away from supporting OWL and focusing more on linked data and rdf.   Remarkably, it explicitly prohibits loading a .owl file, forcing the use of an .rdf extension.  More importantly, there is no support for the mainstream OWL 2.0 inference engines, Hermit and Fact++. This is a significant problem, especially  during the ontology development process.

One huge nuisance with Protégé is the load process, very tedious to manually find every file. Dave N. found a nice trick that often works, but not always.   I should bring this up with the FLT, there should be a well-documented process for loading FIBO ontologies that only takes a few minutes, not tens of minutes.

Does TBC make this much easier? That would be great, but still of limited use if there is no OWL2 reasoner attached. The main reasons I load an ontology into an ontology tool like Protégé or TBC is to run inference to check for inconsistencies and browse the ontology (after running inference).  This is why I hardly ever have a need to use TBC.  There is one other reason: exporting triples from a SPARQL query. Super handy.

--

Michael Uschold, PhD  
    Senior Ontology Consultant, Semantic Arts  
    [http://www.semanticarts.com](http://www.semanticarts.com/)  
    LinkedIn: [www.linkedin.com/in/michaeluschold](http://www.linkedin.com/in/michaeluschold)  
    Skype, Twitter: UscholdM
