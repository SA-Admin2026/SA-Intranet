---
title: "Thoughts on Addresses"
confluence_id: 2225995791
source: Thoughts-on-Addresses_2225995791.html
---
## Background

In March 2022, we got a note from someone via our Contact Us web page. The note said:

I'm very interested in gist, and just watched the fantastic video by Dave McComb on "Addresses in gist", from April 2018.  
I'd really love to see an \*\*actual example\*\* (in Turtle) though of how you guys might model a simple Person instance with two addresses (let's say their 'Primary Residence' and a vacation home). Specifically I'm just wondering about how you guys might model something as basic as street name, city, and country, as it seems gist (or at least gist Core (

<https://github.com/semanticarts/gist/blob/develop/gistCore.ttl)>

) doesn't define properties for any of these super-common, basic concepts (so do you guys reuse [Schema.org](http://schema.org/) terms, like 'schema:PostalAddress' and 'schema:addressLocality' (but then do you use IRIs to represent countries, or just two-or-three letter standard codes (e.g., ISO-3166-1 <https://www.iban.com/country-codes)>)??

## Dave’s Response

Yeah we went intentionally light on gist and address until we get enough experience with a few patterns that we evolve and put back in to the core.

I’ve cc’ Rebecca and Michael who are doing most of the curating of the changes to gist now.

What is weird, we’ve done at least 50 projects based on gist, probably closer to 100 and I can’t remember modeling address yet.  I know that sounds kind of ridiculous, or maybe people just did whatever their client was already doing, but don’t have strong guidance.

Here was my thinking about ten years ago when I set this up, and it hasn't changed too much (I’ll give the partial update to my thinking below, and my current thinking after that) :

1. original conception: address is a small piece of content that is intended to get things delivered or located.

1. there are three main types: electronic addresses (email etc etc)  building addresses which can be found in the world and have lats and longs, and

1. postal addresses.  Most of which are all building addresses, but many (PO Boxes, APOs) are not. Postal addresses really belong in the realm of Country Government Post Office.  Each embellishes a proffered address and not only normalizes it, but often augments it with things like route codes (for efficient delivery) In US you can get cheaper postage if you obtain and retain the route codes, and put them on letters your self.

1. In the US many people are not in agreement with their post office as to where they live (their city for instance) and many people think certain cities are more prestigious.  One of our consultants used to live in Newcastle WA.  But the post office delivers mail out of Redmond.  Some more extreme cases were in MN but I forgot the particulars.  Basically people like to type in what they would like it to say, and the postoffice rewrites it.

1. So our best practice (never implemented) would be to

- Allow people to enter their address as they would like it to be (and retain this for some purposes)

  Hit a validation service to see if its a building address if it is store a version of that, and get the lat long.  This will give you the georegions such as county, state, country (city but not very reliably, I think I am in Fort Collins, but technically I’m outside the city limits so geo spatially I probably shouldn’t be put somewhere where I’m not)

  Hit the country postoffice for normalization and augmentation and store that

Along the way we invented something called CommunicationPreference, but it looks like it dropped out (we periodically trim things that aren’t being used) the idea of communication preference was:

- It is a temporal relation (that is it is a class with an effective from and an effective to date)

  That connects a person or organization to an Address
- And it could have multiple contexts.  These contexts are categories of why you might want to use a particular address for a particular purpose.  When we worked for a Workers Compensation Insurance company (pre semantics) we found that they got all wrapped around their axel on this.  When it comes down to it there were about 6 or 7 types of communication that the WC company might want to have with company or people.  They were a grouping of the several hundred communication templates (form letters and notifications) that they had.  Some of the main ones were things like:

  - Premium related (they call their bills to employers Premiums) typically went to the accounting department, which of course might have a different address

    Notifications (could be email)

    Subpoena (has to be a physical address within the state)

    Claims related (usually went to the address of their third part administrator)

    etc.
- So I think the contexts would be client specific, but the general mechanism should be about right

  What was amazing, was the agency (of the state of Washington) already had more than 100 different “addresses” (places to store address info) the state was looking at a way to allow people to “change their address” and had no idea that if you don’t understand all the contexts and uses it would be a disaster.

  We worked with a Credit Rating firm.  Turns out, of the 160,000 attributes they had for sale in their various APIs and Data sets, 90,000 were address related.  Its a topic for another conversation, but quite incredible.
