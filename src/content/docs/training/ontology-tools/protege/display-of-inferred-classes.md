---
title: "Display of Inferred Classes"
confluence_id: 23101452
source: "Display-of-Inferred-Classes_23101452.html"
---

DMc E-mailed to the Protégé user group.

**From:** Dave McComb   
 **Sent:** Wednesday, July 6, 2016 4:21 PM  
 **To:** User support for WebProtege and Protege Desktop <protege-user@[lists.stanford.edu](http://lists.stanford.edu)>  
 **Cc:** Michael Uschold <uschold@[semanticarts.com](http://semanticarts.com)>; Dan Carey <dan.carey@[semanticarts.com](http://semanticarts.com)>; Andrea Engelstad <andrea@[semanticarts.com](http://semanticarts.com)>  
 **Subject:** RE: [protege-user] Protege display of inferred classes

That was it, thanks much.

**From:** protege-user [<mailto:protege-user-bounces@lists.stanford.edu>] **On Behalf Of** Tania Tudorache  
 **Sent:** Wednesday, July 06, 2016 2:52 PM  
 **To:** User support for WebProtege and Protege Desktop  
 **Cc:** Michael Uschold; Dan Carey; Andrea Engelstad  
 **Subject:** Re: [protege-user] Protege display of inferred classes

Hi Dave,  
   
 Do you still have this issue?  
   
 I reproduced it once, and then I couldn't anymore :)  
   
 Protege 5.0 does show the inferred types for individuals, just like previous versions.   
   
 Can you try this very unscientific potential workaround, and let me know of the results?  
   
 Reasoner menu -> Configure -> Uncheck "Types"; Stop reasoner, Start reasoner; Reasoner menu -> Configure -> Check "Types"; start reasoner, and see if the inferred types are displayed. (The stop-start in the middle might be unnecessary).  
   
 Tania

On 07/01/2016 03:04 PM, Dave McComb wrote:

Up to version 5.0.0 when you ran Protégé and it inferred an instance into a class, it would show that inference in yellow in the description pane if you selected the individual.  It no longer does this.

Weirdly, the other way around, if you select the class it shows the inferred individuals, but this would rapidly become unwieldy.  Typically most individuals belong to a small number of classes, but many classes can have huge numbers of individuals (inferred or asserted).  What was nice about the way it used to work was that you could click on the ? and see the explanation of why the individual was inferred to be in the class (this still works, but you have to know to go to the class, scroll down and find the individual)

Here is how it used to look

![](/attachments/23101452/23101449.png)

Here is same data, same axioms, in 5.0.0 after inference run

![](/attachments/23101452/23101450.png)

But PU 27 was inferred into the LicensedThing class

![](/attachments/23101452/23101451.png)

Is there some setting that I’m unaware of?  Was this an intentional design decision? (I liked the way it used to work)
