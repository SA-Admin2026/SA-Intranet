---
title: "Ideas for a URI Generation Pre- or Post-Processor"
confluence_id: 2765750273
source: "Ideas-for-a-URI-Generation-Pre--or-Post-Processor_2765750273.html"
---
[Neil Graham](https://semarts.atlassian.net/wiki/people/5a904d0a6ac8fb5278d298ac?ref=confluence) and [Doug Beeson](https://semarts.atlassian.net/wiki/people/60fb10539f975e0069e7bcd1?ref=confluence) have been brainstorming how to reuse blocks of BIND statements in tarql/Sparql.Anything/SPARQL CONSTRUCTs in general.

The need arises when trying to mint consistent IRIs in different scripts that align to different input data. For example, two different data sources may provide complementary information about a gist:Event. The Event instance IRI must be minted the same in both scripts (in order to “snap together” in the graph) but the names of the input data fields - and hence the BIND statements - may differ across scripts.

Doug’s idea is for a pre-processor. It might work as follows:

“““I am thinking of helper functions, I guess. Or maybe I'm over-thinking it. Anyway, I feel like there are blocks of BIND statements that are used in multiple different tarqls. I feel like it could expressed as a function that would take a vector of input variables and produce a vector of output IRIs.”””

```
(?iri, ?iri_label, ?cond_iri) gist:bindset (:_MyTemplate_, ?thing_id, ?otherthing, ?noway, ?yesway)
```

The template containing the SPARQL (:\_MyTemplate\_) must be looked up by the processor. This file contains the BIND statements and assorted logic that may operate on the provided input variables in the same scope as the rest of the outer SPARQL that contains it.

The pre-processor outputs a standard tarql/Sparql.Anything script that is then run by their respective application.

Neil’s idea is for a post-processor:

“““The last time I thought about this I thought it would be best to have this be a post-processing of TARQL output, where a ':uri-template' property on a owl:Class would define what predicate URIs are used throughout the URI minting. For example:”””

```
:Characteristic-Value a owl:Class ;
    :uri-template "{base_class_uri}_{:characterized-by}-{:value}-{qudt:unit}" ;
    .
```

In the TARQL you would generate blank node output:

```
[
    a :Characteristic-Value ;
    :characterized-by :Temperature ;
    :value "30" ;
    qudt:unit :Celsius ;
    .
]
```

Then it would be processed into the following subject:

```
<{base_uri}/Characteristic-Value_Temperature-30-Celsius>
```

The question was asked in a Knowledge Exchange session on 19 Nov. 2024. Feedback from the session can be summarized as:

Don't make an abstraction layer (i.e. pre- or post-processor). Instead use:

- A template that documents IRI minting patterns
- Global Search and Replace to maintain patterns
