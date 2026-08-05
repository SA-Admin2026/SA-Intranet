---
title: "URIs: Hashes v Slashes"
confluence_id: 146374657
source: "146374657.html"
---

I’m doing an experiment to try to render uris.

I’ve seen all sorts of hacky ways to do it, but I’d really like to do it the most elegant way possible.

I think I’m on to something, but it will require that we change the way we name our namespaces, so it’s a bit disruptive.

I would like to be able to put a pure uri either in a URL address bar or as an xref (TBox or ABox)

However, given the way the web resolves these things, as I’m lead to believe, everything after the # will not make it to the server.  To me this is a much more profound (or at least understandable) argument than the ones I’ve seen waged on the web.

I’d like to propose All the namespaces we control, and going forward those that we inspire, such as our clients, use / as the final delimiter

1. That we adopt the conventions we been suggesting lately and have the subdomains be:

1. Onto
2. Taxo
3. Data

(I'm going to leave gist as ontologies.semanticarts.com for now)

This will be disruptive for gist, but I’m thinking let’s just do it, call it version 8 and move on.

But before I do this I’d like to hear any reasons not to

## URL Processing

The fragment part of a URL–the part after the number sign (#)–is not sent to the server. According to [RFC3986](https://tools.ietf.org/html/rfc3986).

```
   Fragment identifiers have a special role in information retrieval
   systems as the primary form of client-side indirect referencing,
   allowing an author to specifically identify aspects of an existing
   resource that are only indirectly provided by the resource owner.  As
   such, the fragment identifier is not used in the scheme-specific
   processing of a URI; instead, the fragment identifier is separated
   from the rest of the URI prior to a dereference, and thus the
   identifying information within the fragment itself is dereferenced
   solely by the user agent, regardless of the URI scheme.
```

# Email exchange late Feb 2018

**Ted**:  I understand the mechanics of the change to a trailing slash in URLs in gist 8, but I have never quite gotten the rationale. I know the difference between the part of a URL preceding a # and the part following, but why do we want the ontology URL to be, in effect, a unique page name all the way down to the class, individual, or property? I’m really wondering because it seems to me that this is at variance with what everyone else in the world does.

**Dave**: We are working on architectures to make all of our URIs resolvable.   The server doesn’t see anything after the #.  There are many work arounds, most of which are inelegant.  The elegant solution is to have all uris be visible to the server and be natively resolvable.

**Ted**: Yes, but . . . a URL that contains a # followed by a string is also resolvable. It typically points to an anchor within the page identified by the string preceding the #. I don’t think, therefore, that it’s accurate to say that a URI with a # is not resolvable. It’s also not accurate to say that the server doesn’t see anything after the #. Rather, the server locates the resource identified by the URL preceding the #, and then passes the string following the # to that resource. If that resource represents a static page, a Web server typically advances within that page to the referenced anchor. For example, clicking on the following link will take you to a point within the page referenced by the URL preceding the #.

<https://www.w3.org/2001/sw/wiki/SWValidators#What_can_be_added>

What you really are doing is making all your URIs resolvable *to their own pages*. Since you’ve never described it like that, I’m not sure whether you’re aware of that distinction? Or maybe this is a wrinkle with the Web server software you’re using? I’m wondering if**Kurt** or **Randy** have more to add hear.

Still mystified,

**MarkW**: Yes, it is resolvable, but here's a detail you may not realize.

When you put something like <http://semanticarts.com/gist#Person> in a browser, the webserver only gets a request for the[http://semanticarts.com/gist](http://semanticarts.com/gist#Person) part because that's all the browser typically sends.  The browser, when it gets the full document back, jumps forward to the anchor point (that it never sent).

So if you want the server to be able to "know" and do anything with the "last part" of the URL (in our case, the class or property name), you need to use a slash.

**Ted**: I’m trying to close the loop on this. I’ve added a quote from RFC3986 regarding processing of the fragment identifier (the part after the #). I see that Mark W. has added a comment indicating that he proved by experiment that the fragment part is not sent to the server.

So now I understand that the server doesn’t see the fragment identifier. But both the slash form and the hash form of a URL resolve. So I still don’t see any rationale on this page or the email thread as to why slash is better than hash? What are we trying to accomplish?

**Ted**: Aha! I did not realize that. So the part following the # is never sent to the server but is only processed by the browser. Then Dave’s statement that “the server doesn’t see it” is literally correct. Thank you for correcting my misimpression.

This must be entirely different from a parameter string following a ? following a URL, correct?

**DanC**: I believe one key difference is that when using the hash, you have to prepare an HTML document for the URL to resolve to and in which the item after the hash appears.  This has the advantage of giving you the option of a nicely formatted presentation when someone clicks/or pastes a URI.

However, that also leads to the additional work of building and maintaining the HTML file.

Unless I am mistaken, using the slash paradigm simply brings up the OWL code defining the clicked/pasted URI.  This means no extra work and ensures one sees the latest version of the entity's code.

**Ted**: That makes sense. I am used to the paradigm where the URL resolves to HTML documentation about the resource, but what you’re saying is that it should resolve to the OWL that defines the entity. Now I recall a conversation with Mark W. where he suggested that the server could be programmed to return HTML to a browser and OWL to a non-browser client. I think that approach would give us the best of both worlds. And yes, then, the slash would be required to make that latter scheme work.

**Kurt**: (responding to Dan)

As I was the one who originally brought this up to Dave, I wanted to interject why I made that recommendation.

Dan's comments are correct - the hash in a browser generally resolves to either 1) A specific anchor tag (<a name="foo">), a specific id tag (<div id="foo">) or the top of the page if nothing is given. If the page itself was designed with this is mind, you can get away with having a hash tag controlling a UI component (if you have a single pane web application). The hash generally doesn't play well with the query string operator (?) and it doesn't always get picked up by server packages such as express.

 I also think that even on the semantic side there are issues. RDF used it early on because RDF was intended to be used inline within HTML, even though that use case almost never occurs today. In this case, having the # makes sense, because HTML was considered static and <a name="#foo"> clearly has a contextual implication of being a topic category. RDFS and OWL used it because RDF used it, and so forth, but it doesn't really align with the way that most modern HTML content is constructed (dynamically in real time, potentially with widgets hither and yon). 

If namespaces were actually used the way that they should have been, the case for slashes also becomes more obvious. If you have a (more or less) hierarchical inheritance structure, then your topical specialization corresponds more or less to a directory structure:

@prefix entity: <http://foo.com/entity/> .

@prefix org: <http://foo.com/entity/org/> .

@prefix bank: <http://foo.com/entity/org/bank/> .

 This then makes a big distinction between entity:org as a term and org: as a namespace. It also creates an intuitive notion of org: as a class.

 org:\_SemanticArts a org: .

 Now  a lot of semantics people find that kind of notation shudderworthy, but that's because we've developed a fear of namespaces in ontology. It's not the way that we're SUPPOSED to do it. Realistically, I find that attitude strange, because I think a big part of the reason that semantics is perceived of as hard is because we've chopped off one of the most useful features of URLs.  However, that's my own personal opinion, and I'm in a distinct minority.

 So, anyway, yes, there are some reasons, both mechanical and conceptual, for why the hashmark has outlived it's usefulness. 

**MarkW** (versining):  We should follow this:  <https://semver.org/>

**Dave**: right on

**Ted**: I like that, too. Just wasn’t sure it was our policy. OK. Thanks.
