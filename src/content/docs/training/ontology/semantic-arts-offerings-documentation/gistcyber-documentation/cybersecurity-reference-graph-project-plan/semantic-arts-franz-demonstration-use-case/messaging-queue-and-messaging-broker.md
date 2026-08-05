---
title: "Messaging Queue and Messaging Broker"
confluence_id: 2908454914
source: "Messaging-Queue-and-Messaging-Broker_2908454914.html"
---

We are a service provider, that’s known and understood. However, I am of the opinion that in order to establish a service contract in the cybersecurity domian that we are going to have to show potential clients the value that using a semantic graph delivers. Actions (demos) speak loader than words.

## A Proof of Concept Cybersecurity Product for Demonstration

the potential client should see a use-case they can related to. A use-case that shows a graph solution to a pain point they have today.

### Data democratization

The average Security Operations Center has multiple (typically many) security appliances. These applicances continuously “spit out” streams of alerts to the SOC. You can imagine that there is a high velocity of alerts coming in many different forms. Fortunately, in today’s world the appliances do produce these alerts in the form of JSON. So at least the syntax is stable. They still each have their own data models.

To deal with the variety and velocity of alerts coming in, a messaging queue is a reasonable solution. There are many messaging queue providers. Apache Kafka is an open-source solution that is probably a good choice for us to use in building a PoC.

### ABox Versioning

There was a great discussion led by Dave McComb about ABox (data) Versioning at OKE on March 11, 2025. This is very relevant to data democratization in the cybersecurity domain. There are multiple security appliances with have their own data models. When we start to map these different versions of the data to a common model we would like to know that they are each compatible with the gistCyber definition on the concept.

This is a very interesting topic but for this Proof of Concept model we will postpone dealing with it. Hence, for now, we will ingest data from multiple appliances and map their data to a common gistCyber class. For example: a cis:Control and a nist:Control will both be asserted as a gcyber:Control.
