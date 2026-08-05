---
title: "Dialog Mapping Prompts for ChatGPT"
confluence_id: 2412806156
source: "Dialog-Mapping-Prompts-for-ChatGPT_2412806156.html"
---

# Table of Contents

- [Table of Contents](#DialogMappingPromptsforChatGPT-TableofContents)
- [Prompts and Responses](#DialogMappingPromptsforChatGPT-PromptsandResponses)
  - [Prompt G](#DialogMappingPromptsforChatGPT-PromptG)
    - [ChatGPT-4 Response 1 to Prompt G](#DialogMappingPromptsforChatGPT-ChatGPT-4Response1toPromptG)
    - [ChatGPT-4 Response 2 to Prompt G](#DialogMappingPromptsforChatGPT-ChatGPT-4Response2toPromptG)
  - [Prompt F](#DialogMappingPromptsforChatGPT-PromptF)
    - [ChatGPT-4 Response to Prompt F](#DialogMappingPromptsforChatGPT-ChatGPT-4ResponsetoPromptF)
  - [Prompt E](#DialogMappingPromptsforChatGPT-PromptE)
    - [ChatGPT-4 Response 1 to Prompt E](#DialogMappingPromptsforChatGPT-ChatGPT-4Response1toPromptE)
  - [Prompt C](#DialogMappingPromptsforChatGPT-PromptC)
    - [ChatGPT-4 Response 1 to Prompt C](#DialogMappingPromptsforChatGPT-ChatGPT-4Response1toPromptC)
  - [Prompt B](#DialogMappingPromptsforChatGPT-PromptB)
    - [ChatGPT-4 Response 1 to Prompt B](#DialogMappingPromptsforChatGPT-ChatGPT-4Response1toPromptB)
    - [ChatGPT-4 Response 2 to Prompt B](#DialogMappingPromptsforChatGPT-ChatGPT-4Response2toPromptB)
  - [Prompt A](#DialogMappingPromptsforChatGPT-PromptA)
    - [ChatGPT-4 Response 3 / 3 to Prompt A](#DialogMappingPromptsforChatGPT-ChatGPT-4Response3/3toPromptA)

# Prompts and Responses

I’m refining a prompt that can be placed in front of a conversation transcript causing ChatGPT to output a Dialog Map of the conversation using a particular RDF syntax. The latest is at the top.

## Prompt G

*(Prompt given to ChatGPT-4)*

> A dialog map is a directed graph that represents a conversation. In a dialog map, every statement or question in the conversation has a node, and every node is either an Issue, a Position, or an Argument. The edges can be of these kinds: suggested by, responds to, supports, objects to. The only edges allowed are Issue suggested by Issue, Issue suggested by Position, Issue suggested by Argument, Position responds to Issue, Argument supports Position, and Argument objects to Position. A Position cannot respond to an Argument. An Argument cannot respond to a Position; it must either support or object to the Position.
>
> Each node has a "contributor" attribute for the name of the person and a skos:prefLabel attribute containing the question or statement.
>
> IRIs should be based on the content of the statement or question and must be unique, brief, and human-friendly. IRIs should not contain people’s names. Here is an example:

```
@prefix : <http://data.example.com/dmap/> .
@prefix dmap: <http://example.com/dmap/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

:_favoriteColor a dmap:Issue ;
    skos:prefLabel "What's your favorite color?" ;
    dmap:contributor "Anika" .
```

> Now, create a dialog map for the following conversation and provide it in Turtle format using the namespace <http://example.com/dmap/> and the prefix dmap:

> Sofia: What should we order for dinner?
>
> Ahmed: Pizza!
>
> Mei: Burgers!
>
> Javier: What should we have on it?
>
> Aisha: Aya is lactose-intolerant.
>
> Ahmed: Gino's has non-dairy pizza.

### ChatGPT-4 Response 1 to Prompt G

```
@prefix : <http://example.com/dmap/> .
@prefix dmap: <http://example.com/dmap/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

:_dinnerOption a dmap:Issue ;
    skos:prefLabel "What should we order for dinner?" ;
    dmap:contributor "Sofia" .

:_pizzaOption a dmap:Position ;
    skos:prefLabel "Pizza!" ;
    dmap:contributor "Ahmed" ;
    dmap:respondsTo :_dinnerOption .

:_burgerOption a dmap:Position ;
    skos:prefLabel "Burgers!" ;
    dmap:contributor "Mei" ;
    dmap:respondsTo :_dinnerOption .

:_toppingOption a dmap:Issue ;
    skos:prefLabel "What should we have on it?" ;
    dmap:contributor "Javier" ;
    dmap:suggestedBy :_pizzaOption .

:_lactoseIntolerance a dmap:Argument ;
    skos:prefLabel "Aya is lactose-intolerant." ;
    dmap:contributor "Aisha" ;
    dmap:objectsTo :_pizzaOption .

:_nonDairyPizza a dmap:Argument ;
    skos:prefLabel "Gino's has non-dairy pizza." ;
    dmap:contributor "Ahmed" ;
    dmap:supports :_pizzaOption .
```

### ChatGPT-4 Response 2 to Prompt G

```
@prefix : <http://example.com/dmap/> .
@prefix dmap: <http://example.com/dmap/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

:_dinnerOrder a dmap:Issue ;
    skos:prefLabel "What should we order for dinner?" ;
    dmap:contributor "Sofia" .

:_pizza a dmap:Position ;
    skos:prefLabel "Pizza!" ;
    dmap:contributor "Ahmed" ;
    dmap:respondsTo :_dinnerOrder .

:_burgers a dmap:Position ;
    skos:prefLabel "Burgers!" ;
    dmap:contributor "Mei" ;
    dmap:respondsTo :_dinnerOrder .

:_toppings a dmap:Issue ;
    skos:prefLabel "What should we have on it?" ;
    dmap:contributor "Javier" ;
    dmap:suggestedBy :_pizza .

:_lactoseIntolerance a dmap:Argument ;
    skos:prefLabel "Aya is lactose-intolerant." ;
    dmap:contributor "Aisha" ;
    dmap:objectsTo :_pizza .

:_nonDairyPizza a dmap:Argument ;
    skos:prefLabel "Gino's has non-dairy pizza." ;
    dmap:contributor "Ahmed" ;
    dmap:supports :_pizza .
```

## Prompt F

A dialog map is a directed graph that represents a conversation. In a dialog map, every statement or question in the conversation has a node, and every node is either an Issue, a Position, or an Argument. The edges can be of these kinds: suggested by, responds to, supports, objects to. The only edges allowed are Issue suggested by Issue, Issue suggested by Position, Issue suggested by Argument, Position responds to Issue, Argument supports Position, and Argument objects to Position. A Position cannot respond to an Argument. An Argument cannot respond to a Position; it must either support or object to the Position.

Create a dialog map for the following conversation and provide it in Turtle format using the namespace <http://example.com/dmap/> and the prefix dmap:. URIs should be based on the content of the statement or question and must be unique, brief, and human-friendly. IRIs for individuals should begin with an underscore and a lowercase letter. Each node has a "contributor" attribute for the name of the person and a skos:prefLabel attribute containing the question or statement.

Sofia: What should we order for dinner?

Ahmed: Pizza!

Mei: Burgers!

Javier: What should we have on it?

Aisha: Aya is lactose-intolerant.

Ahmed: Gino's has non-dairy pizza.

### ChatGPT-4 Response to Prompt F

```
@prefix dmap: <http://example.com/dmap/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix _: <http://example.com/dmap/_> .

_:sofia a dmap:Issue ;
    skos:prefLabel "What should we order for dinner?" ;
    dmap:contributor "Sofia" .

_:ahmed a dmap:Position ;
    skos:prefLabel "Pizza!" ;
    dmap:contributor "Ahmed" ;
    dmap:respondsTo _:sofia .

_:mei a dmap:Position ;
    skos:prefLabel "Burgers!" ;
    dmap:contributor "Mei" ;
    dmap:respondsTo _:sofia .

_:javier a dmap:Issue ;
    skos:prefLabel "What should we have on it?" ;
    dmap:contributor "Javier" ;
    dmap:suggestedBy _:ahmed .

_:aisha a dmap:Argument ;
    skos:prefLabel "Aya is lactose-intolerant." ;
    dmap:contributor "Aisha" ;
    dmap:objectsTo _:ahmed .

_:ahmed2 a dmap:Position ;
    skos:prefLabel "Gino's has non-dairy pizza." ;
    dmap:contributor "Ahmed" ;
    dmap:respondsTo _:javier ;
    dmap:supports _:ahmed .
```

## **Prompt E**

A dialog map is a directed graph that represents a conversation. In a dialog map, every statement or question in the conversation has a node, and every node is either an Issue, a Position, or an Argument. The edges can be of these kinds: suggested by, responds to, supports, objects to. The only edges allowed are Issue suggested by Issue, Issue suggested by Position, Issue suggested by Argument, Position responds to Issue, Argument supports Position, and Argument objects to Position. A Position cannot respond to an Argument. An Argument cannot respond to a Position; it must either support or object to the Position.

Create a dialog map for the following conversation and provide it in Turtle format using the namespace <http://example.com/dmap/> and the prefix dmap:. Node URIs should be based on the content of the statement or question and must be unique, brief, and human-friendly. Each node has a "contributor" attribute for the name of the person and a skos:prefLable attribute containing the question or statement.

Sofia: What should we order for dinner?

Ahmed: Pizza!

Mei: Burgers!

Javier: What should we have on it?

Aisha: Aya is lactose-intolerant.

Ahmed: Gino's has non-dairy pizza.

### **ChatGPT-4 Response 1 to Prompt E**

```
@prefix dmap: <http://example.com/dmap/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

dmap:WhatShouldWeOrderForDinner a dmap:Issue ;
    skos:prefLabel "What should we order for dinner?" ;
    dmap:contributor "Sofia" .

dmap:Pizza a dmap:Position ;
    skos:prefLabel "Pizza!" ;
    dmap:responds_to dmap:WhatShouldWeOrderForDinner ;
    dmap:contributor "Ahmed" .

dmap:Burgers a dmap:Position ;
    skos:prefLabel "Burgers!" ;
    dmap:responds_to dmap:WhatShouldWeOrderForDinner ;
    dmap:contributor "Mei" .

dmap:WhatShouldWeHaveOnIt a dmap:Issue ;
    skos:prefLabel "What should we have on it?" ;
    dmap:suggested_by dmap:Pizza ;
    dmap:contributor "Javier" .

dmap:AyaIsLactoseIntolerant a dmap:Argument ;
    skos:prefLabel "Aya is lactose-intolerant." ;
    dmap:objects_to dmap:Pizza ;
    dmap:contributor "Aisha" .

dmap:GinosHasNonDairyPizza a dmap:Argument ;
    skos:prefLabel "Gino's has non-dairy pizza." ;
    dmap:supports dmap:Pizza ;
    dmap:contributor "Ahmed" .
```

## **Prompt C**

A dialog map is a directed graph that represents a conversation. In a dialog map, every statement or question in the conversation has a node, and every node is either an Issue, a Position, or an Argument. The edges can be of these kinds: suggested by, responds to, supports, objects to. The only edges allowed are Issue suggested by Issue, Issue suggested by Position, Issue suggested by Argument, Position responds to Issue, Argument supports Position, and Argument objects to Position. A Position cannot respond to an Argument.

Create a dialog map for the following conversation and provide it in Turtle format. Node URIs should be :node1, :node2, etc. Each node has a text attribute for the name of the person.

Sofia: What should we order for dinner?

Ahmed: Pizza!

Mei: Burgers!

Javier: What should we have on it?

Aisha: Aya is lactose-intolerant.

Ahmed: Gino's has non-dairy pizza.

### **ChatGPT-4 Response 1 to Prompt C**

```
@prefix : <http://www.example.com/dialog#> .

:node1 a :Issue ;
    :text "Sofia: What should we order for dinner?" .

:node2 a :Position ;
    :text "Ahmed: Pizza!" ;
    :respondsTo :node1 .

:node3 a :Position ;
    :text "Mei: Burgers!" ;
    :respondsTo :node1 .

:node4 a :Issue ;
    :text "Javier: What should we have on it?" ;
    :suggestedBy :node2 .

:node5 a :Argument ;
    :text "Aisha: Aya is lactose-intolerant." ;
    :objectsTo :node2 .

:node6 a :Argument ;
    :text "Ahmed: Gino's has non-dairy pizza." ;
    :supports :node2 .
```

## **Prompt B**

A dialog map is a directed graph that represents a conversation. In a dialog map, every statement or question in the conversation has a node, and every node is either an Issue, a Position, or an Argument. The edges can be of these kinds: suggested by, responds to, supports, objects to. An Issue can by suggested by any kind of node. A Position can respond to an Issue, and an Argument can support or object to a Position. An Argument cannot respond to an Argument and an Argument cannot object to an Issue. Create a dialog map of the following conversation:

Sofia: What should we order for dinner?

Ahmed: Pizza!

Mei: Burgers!

Javier: What should we have on it?

Aisha: Aya is lactose-intolerant.

Ahmed: Gino's has non-dairy pizza.

### **ChatGPT-4 Response 1 to Prompt B**

Below is the dialog map represented in a written form:

Nodes:

1. Sofia's question "What should we order for dinner?" is an Issue.
2. Ahmed's response "Pizza!" is a Position that responds to Sofia's Issue.
3. Mei's response "Burgers!" is another Position that also responds to Sofia's Issue.
4. Javier's question "What should we have on it?" is another Issue that's suggested by Ahmed's Position.
5. Aisha's statement "Aya is lactose-intolerant." is an Argument that objects to Ahmed's Position.
6. Ahmed's statement "Gino's has non-dairy pizza." is another Argument that supports his own Position.

Edges:

1. Ahmed's Position ("Pizza!") responds to Sofia's Issue ("What should we order for dinner?").
2. Mei's Position ("Burgers!") responds to Sofia's Issue ("What should we order for dinner?").
3. Javier's Issue ("What should we have on it?") is suggested by Ahmed's Position ("Pizza!").
4. Aisha's Argument ("Aya is lactose-intolerant.") objects to Ahmed's Position ("Pizza!").
5. Ahmed's Argument ("Gino's has non-dairy pizza.") supports his Position ("Pizza!").

To visualize, think of the nodes as dots and the edges as arrows. There are arrows from Sofia's Issue to both Ahmed's and Mei's Positions, an arrow from Ahmed's Position to Javier's Issue, and arrows from Ahmed's Position to both Aisha's and Ahmed's Arguments.

### **ChatGPT-4 Response 2 to Prompt B**

The dialog map for this conversation would look like this:

1. Sofia: "What should we order for dinner?" (Issue)
2. Ahmed: "Pizza!" (Position), responds to 1.
3. Mei: "Burgers!" (Position), responds to 1.
4. Javier: "What should we have on it?" (Issue), suggested by 2.
5. Aisha: "Aya is lactose-intolerant." (Argument), objects to 2, and also informs 4.
6. Ahmed: "Gino's has non-dairy pizza." (Argument), supports 2 and responds to 5.

So the directed graph could be represented as follows:

```
pythonCopy code1 -Sofia's Issue-> 2 -Ahmed's Position-> 4 -Javier's Issue-> 5 -Aisha's Argument-> 6 -Ahmed's Argument
                \-> 3 -Mei's Position
```

Here's how you could interpret this graph:

- Sofia introduces an Issue about what should be ordered for dinner.
- Ahmed suggests a Position (Pizza), responding to Sofia's issue.
- Mei also suggests a Position (Burgers), responding to Sofia's issue.
- Javier adds an Issue (what should be on the Pizza) suggested by Ahmed's position.
- Aisha introduces an Argument objecting to Ahmed's Position about ordering pizza and informs Javier's issue about what should be on the Pizza, because Aya is lactose-intolerant.
- Ahmed introduces an Argument supporting his own Position and responding to Aisha's argument, stating that Gino's has non-dairy pizza.

This kind of dialog map helps visualize the structure of a conversation, the relationship between the points raised, and how arguments are supported or objected to.

## **Prompt A**

A dialog map is a directed graph that represents a conversation. In a dialog map, every statement or question in the conversation has a node, and every node is either an Issue, a Position, or an Argument. The edges can be of these kinds: suggested by, responds to, supports, objects to. An Issue can by suggested by any kind of node. A Position can respond to an Issue, and an Argument can support or object to a Position. Create a dialog map of the following conversation:

Sofia: What should we order for dinner?

Ahmed: Pizza!

Mei: Burgers!

Javier: What should we have on it?

Aisha: Aya is lactose-intolerant.

Ahmed: Gino's has non-dairy pizza

### **ChatGPT-4 Response 3 / 3 to Prompt A**

Here is a dialog map representation of the given conversation:

1. Sofia: What should we order for dinner? (Issue)
2. Ahmed: Pizza! (Position, responds to 1)
3. Mei: Burgers! (Position, responds to 1)
4. Javier: What should we have on it? (Issue, suggested by 2)
5. Aisha: Aya is lactose-intolerant. (Argument, objects to 2 and 4)
6. Ahmed: Gino's has non-dairy pizza. (Argument, supports 2, responds to 5)

Here's a visual way to represent the same map:

```
sqlCopy code1 Sofia: What should we order for dinner?
  |  
  |-- 2 Ahmed: Pizza!
  |    |
  |    |-- 4 Javier: What should we have on it?
  |    |   |
  |    |   |-- 5 Aisha: Aya is lactose-intolerant.
  |    |       |
  |    |       |-- 6 Ahmed: Gino's has non-dairy pizza.
  |    
  |-- 3 Mei: Burgers!
```

In the map, the numbers denote nodes in the conversation, and each node is either an Issue, a Position, or an Argument. The edges (lines) represent the relationships between the nodes, showing which statement suggested, responded to, supported, or objected to another statement.
