---
title: "Jamie's Random Thoughts"
confluence_id: 679837717
source: Jamie%27s-Random-Thoughts_679837717.html
---
As I think about, and work on implementing, the DCA I am having a lot of things pop into my head. I figured I would just create a page here for my own personal use.

Comments are welcome but for now I would say please do not modify my content.

## DCA

Separate out what is a central/core part of a DCA. Versus what we have decided to implement.

- An ontology editor is not core to a DCA. We are implementing one in our version of a DCA.
- An application editor is not core to a DCA. We are implementing one in our version of a DCA.

## API's in a dynamic, ontology based, DCA

APIs are probably a core component of a DCA. Data without access is useless.

- RESTful
  - API manipulates objects within data store
  - Based on ontologies within the system. Ex: API endpoint for every owl:Class
  - protocol://subdomain.domain/api/tenant/prefix/className/id
    - http://dca.semanticarts.com/api/core/dcao/User/238291
    - https://dca.semanticarts.com/api/semarts/dcao/Namespace/<https://dca.semanticarts.com/uri/semarts/dcao/Namespace/ks028AcSD>
- GraphQL
- DeltaTriples
  - Easy to know exactly what triples are added and to add provenance
- SPARQL
- Named Queries
- Related Resources:
  - Semantic Markup for Web Services: <http://www.ai.sri.com/daml/services/owl-s/1.2/overview/>
  - <http://www.ai.sri.com/daml/services/owl-s/security.html>

## Delta Triples

- Is this a central component to a DCA or just an implementation detail
- what is calling it (application)
- what provenance info to save
- how to filter based on permissions & roles

## Named Queries

- Is this a central component to a DCA, good practice, or just an implementation detail
- Executing named queries is an action
  - it should inherit from something that is an action
  - it should be read, write, and execute permissions
- what repository is it in
- what repository to execute it in
- Who defined it?
- Version history?
- What applications use it?
- How often is it used? when was the last time it was used?
- Capture performance statistics?
- parameter parsing for security
- arrays of triples as parameters
- Do they belong to an "application" or do they exist outside of that?
- Natural language query editing/creation. There is probably existing work done on this such as: S. Ferré, ‘‘Sparklis: An expressive query builder for SPARQL end-points with guidance in natural language,’’ Semantic Web, vol. 8, no. 3, pp. 405–418, 2017.
- Would a SPARQL editor based on Blockly be useful?

## SPARQL

- security implications of allowing external apps to execute random queries (even adding named queries and executing them)
- filter results based on permissions/roles
- Understanding what the query does? Just read? Does it modify and data?

## Applications

Some concept of an Application may be a core component of a DCA. It probably plays into things like security, permission-able actions, provenance.

Dave's concept of Plug-able apps leads to many thoughts:

- Plug-able probably isn't a requirement for a DCA.
  - But thinking this way probably helps create a more modular and compose-able system which is a good in its own right.
  - Many resultant ideas might be/become core concepts of a DCA.
- Where do/can they run? Server or Browser or other Client? Separate Application Server?
- The apps may need to provide config info on installation:
  - They might come with their own ontology
  - Verification/Governance/Credentials of the app
  - Permissions, Roles : how? Do they register them with the system? Do they use predefined permissions or roles?
  - Is it simple Enforcement of data access based on the user.
  - Declaration of connections to data model ?
  - Registering of Named Queries?
  - Keyboard shortcuts ??
  - Job Scheduling (cron)
  - Random NOTE: From the [Introduction to XBL](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Tutorial/Introduction_to_XBL), a binding has five types of things that it declares: Content, properties, methods, events, and style
  - Random NOTE: Web Components are a set of specifications that provide modern and standards-based technology to implement reusable widgets with HTML. For the purposes of this document, “Web Components” refers to the [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/) and [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) specs.
- The architecture may need to provide config info to the app:
  - where & how to access the API
- Provenance on changes made, what to say about it?
- All access should say what app is doing the access. How to authorize a request is from an app and not a hacker?
- What changes with a natural language (audio or typed) interface?
- Direct manipulation/visualization interface? (Minority Report)
- Touch interface differences?
- Mobile interface differences?

Plugable & Composable Components

- All Event driven (similar to DOM?)  
  - events are how things happen
  - events bubble up and can be caught, handled, ignored, canceled, etc.
  - Components subscribe to what events they are interested in
  - Handle all: to catch any event
  - Addressable? Is it useful to be able to send a message to a specific other component? Or is it just a different message that the other component would subscribe to
  - Update events caught but the in-memory-store to get state changes
    - memory store tracks state: as loaded, modified, updated on server (temporary state?)
  - Update events caught by server-connector that updates the server
- Forms
  - Standard forms, like HTML. Based on Ontology/SHACL (or otherwise?).
- Help box
  - On every page. Provides help information about that page.
  - Instance of a document viewer.
  - Editable.
  - Linkable? How would you refer (link) the document to the page?
  - What type of document:
    - Wiki?
    - Allow for embedded visuals: standard media types
- Comment box
  - Allow users to report issues/bugs.
  - Allow users to provide help comments for other users
  - Allow users to keep notes for themselves... ?
  - Attach content?
- Presentation viewer/editor
  - Slow reveal presentation can be embedded
  - Other types? Slide shows?
  - RDF/Triple viewer
- Tabs for multiple independent workflows/tasks
- Layout models
  - Tab component (delayed loading of tabs)
  - grid
  - rows & columns
  - absolute
  - CSS positioning model(s) ??
  - Flow based designs
- Drag & Drop (wrapper component?)
  - absolute position (window manager)
  - drop on other components
  - drops trigger actions/events
  - graphically drawing of lines/connections between components can be modeled as drag (start click) and drop (make connection)
- Search box?
- Technology: refer to my other document on specific technologies that might be useful

Is the concept of a transformation (data or other?) a useful concept within the system? As a way to update information? Is it a useful end user construct? An obvious one I can think of is to fix errors, find all triples defined by X and replace with modified triples of X'.

- <http://ns.inria.fr/sparql-template/>
- <https://github.com/w3c/sparql-12/issues/54>

External API access transformation/conversion ==> currency conversion, equivalency

Introduction to Model-Based User Interfaces - <https://www.w3.org/TR/mbui-intro/>

## Modeling Process/Triggers/Events/State/Workflow/Rules/Dataflow/Templates/Decisions/

I need to understand what is in DCAO and gist...

Is gist required for any/some parts of things to work?

Are these concepts core to a DCA? Or an add on that is a result of our thinking that everything should be model driven?

Triggers

- Are sometime called events. But I was told the concept of Event in gist is not compatible with that meaning.
- Have no duration.
- Do have a time of determination/recording and could have a different effective time. Bitemporal?
- May or may not be persisted to a data store
- How do triggers know what needs to know about it? Pub/Sub? Probably different requirements for different triggers
- Types of triggers?
  - State changed (somewhere)
  - New data added or deleted
  - Time based (due in 30 days, 30/60/90 days past due, 8am M-F, Feb 29th)
  - ?

State

- finite state machine - define state allowable transitions
- state transitions based on (external?) stimulus
- calculable state? is it a useful concept
- state changes can be triggers
- triggers can cause state changes

Process/Workflow/Dataflow/Templates

- all the same?

Rules/Decisions/Logic/Reasoning

Policy / Policies / PolicySet -

## DCAO - Data Centric Architecture Ontology

What is core to the DCA? What is added for our implementation?

Core DCA concepts

- What system am I?
  - domain(s) / subdomain(s)
  - Need base URI for minting new URIs
    - Need to declare minted URI format
  - Base/Core triplestore & credentials (bootstrap)
    - Should not use implementation specific terms (such as: http://ontologies.semanticarts.com/dcao/Catalog)
- Triplestores & Credentials
  - maybe other types of databases like SQL? or SQL to RDF mappings?
- Users / Permissions [Actions / Data] / Roles / Access
  - Named queries are actionable and therefore should be permissioned
- API access points? With data views? Dynamic REST API?
- Sessions? Timeouts?
- Identity providers, Authentication mechanisms, multi-factor authentication
  - OpenID Connect seems to be the main identity authentication protocol (it is based on OAuth2)
  - mapping of identity provider by domain? By individual email address.
- Provenance
  - DateTime, User, Source (Application?, File?, external source/feed), rdfs:isDefinedBy
- Partitioning - Partitions / Tenants / Realms
  - Workspaces?
  - Applications? Application provisioning (pluggable apps)?
- Ontologies?
  - Ontology prefixes? (check out [SHACL prefix declarations](https://www.w3.org/TR/shacl/#sparql-prefixes))
- SHACL
  - [SHACL shapes graph to validate SHACL shapes graphs](http://www.w3.org/ns/shacl-shacl)
- Concept of application, use case, UI function - to be able to permission access to it
- System Metrics?
- Import/Export
  - RDF serialization formats: RDF/XML, TTL, TRIG, N3, OWL, JSON-LD, ??
- Logging / Audit log
- Error handling
  - So many systems have no way of getting error messages to someone, they may log them but if no one looks at the logs it doesn't do much good until much later when trying to debug something
- Federated querying?
- Non-core but maybe highly usable?
  - Job scheduling (cron)? Is this core DCA?
  - Queues - data queues, job queues
  - Parameterized / Named Queries
  - SPARQL endpoint?

## Federated Data

Access data from relational databases. Convert to triples?

Automated structural (tables/columns/types) conversion?

Data feeds (input)

Asynchronous external data requests (get me a credit report for Person x)

## Provenance

- hostname & port?
- URL called?
- API?
- user
- application?
  - validated transaction? Can I prove it came from a specific application? Postulated: I don't think you can with a web application UI where the calls are coming from the browser.
- date & time

## Version & Revision Control (of triples)

- how to manage & track changes to things such as ontologies, SHACL shapes, application definitions/models, named queries
- Review r43ples

## Application Editor (an add-on to the DCA)

User modifiable UI - bend to user's needs, workflow, etc

Is the concept of a transformation a useful concept within an application editor?

Version Control

Ontology / Model for no-code applications

Job scheduling

Conditional components based on data or inputs

Composable UIs

- tag/label edit/display component(s)
- drag & drop ordering component

Composable Processes / Data Flow

Can be exposed on a public URL with or without a login (guestimator)

Numeric precision: standard binary representation has precision limitations. Does a application designer need to know this? What do XSD types require. Decimal must support 18 digits.

USE CASES

- Timecard (obviously)
- Pipedrive / Monday.com - can we get to this level of UI design with a model driven system?

## Ontology Editor (an add-on to the DCA)

Is there a need for a model / ontology? Or are all the concepts part of other ontologies?

- Needs to also be good at creating instance graphs & visualizations to convey usage. Attach to "concepts used" in ontology.
- Provide multiple levels of conceptualization/presentation/visualization
  - Dave's t-shirt sizes (small, medium, large, extra large)
  - expandable, shrinkable
  - Could potentially have a parti visual style that looks hand drawn
- Slow reveal, on ontology or instances (its really all just RDF triples ...)
- SHACL editor
  - what is different?
- Instance editor
- Automatic version numbering and incrementing?
  - identify when a change is more than a minor addition to increment the middle number instead?
  - identify when a change is a major breaking change (deleting something?) and needs a new major version number?
  - At least warn of breaking changes?
- Include mechanism to deprecate something
- The above (deprecation) might be modeled as a transformation...
  - is the concept of a transformation a useful concept within an ontology editor?
  - Maybe an ontology change may require a data transformation to update data to the new ontology
- Version Control
  - <https://github.com/plt-tud/r43ples> & <http://plt-tud.github.io/r43ples>
  - Upgrade/downgrade a repository/Realm to an ontology version
    - any required data transformation to go with it
    - re-validation of constraints
    - inference ? undo past materialized inference? materialize new inference?
- T-shirt sizes (see Dave's PPT file)
  - Arbitrary length list of views of a URI based on some criteria
  - Dave came up with some views that he labeled: VS, S, M, L, XL
  - Should include SHACL in output for larger views, maybe indicators in smaller views
  - Can (should?) include low level view such as Turtle or Triples/Quads
  - From SHACL - Non-Validating Property Shape Characteristics  
    - Property shapes may have one or more values for `sh:name` to provide human-readable labels for the property in the target where it appears. If present, tools *SHOULD* prefer those locally specified labels over globally specified labels at the `rdf:Property` itself.
    - Also: order, group, default value

Provide the Ontology editor (or maybe just the visualization & slow reveal features) free to the public? Provide visualization free, charge a small fee to use editor?

Allow for a **hand drawn** look?

## Code vs Model

How much of our implementation of a DCA can be implemented with its own technology? Eating your own Dog Food...

What has to be coded vs what can be modeled?

- What minimum set of concepts/primitives does the system need?
- Does security enforce some things to be hard coded vs modeled?
  - Such as user configuration? User accounts in Ibeam is hard coded... why isn't it modeled?
- Can the application editor be modeled?
- Can the ontology editor be modeled?

Keyboard Short-cuts: some will be built into the operating system and browser. Others might be useful within the system. Allow users to override (remap) keys to actions.

## Security

- See: [Security In a DCA](security-in-a-dca.md)
- This page has some good pointers about security: <https://slack.com/security>

## Miscellaneous

How does a client mint new URIs? And in what name space. NOTE: NOT in the DCAO (or any other ontology) namespace.

- Segment based on a tenent/realm - so they are unique across all realms  
  - subdomain based: https://semarts.example.com/298hKLJs83
  - path based: https://www.example.com/semarts/298hKLJs83
  - subdomain & path: https://semarts.example.com/semarts/298hKLJs83
- To include "type" & ontology in the URI or not? 
  - https://www.example.com/semarts/dcao/NamedQuery/298hKLJs83
  - https://www.example.com/semarts/dcao/NamedQuery\_298hKLJs83
  - https://www.example.com/semarts/dcao\_NamedQuery/298hKLJs83
  - https://www.example.com/semarts/dcao\_NamedQuery\_298hKLJs83
  - Would we need a default untyped URI?
    - https://www.example.com/semarts/298hKLJs83
    - https://www.example.com/semarts/N/A/298hKLJs83
    - https://www.example.com/semarts/\_298hKLJs83
- To separate the URI namespace? Call out that it is a minted URI?

- https://www.example.com/uri/semarts/dcao/Namespace/298hKLJs83
- https://www.example.com/semarts/uri/dcao/Namespace/298hKLJs83
- https://semarts.example.com/uri/dcao/Namespace/298hKLJs83
- OR
  - https://www.example.com/mint/semarts/dcao/Namespace/298hKLJs83
  - https://www.example.com/semarts/mint/dcao/Namespace/298hKLJs83
  - https://semarts.example.com/mint/dcao/Namespace/298hKLJs83

- Argument for this style:
  - https://www.example.com/semarts/dcao/NamedQuery/298hKLJs83
  - It follows REST conventions
  - Problem: prefixes ("dcao") are not guaranteed unique or to be the same outside of our system
- Define for:
  - Graph URI
    - subclass or subproperty for different types? ==> Ontology vs Shaql vs ABox vs ??

A blank node identifier is transient. Blank node identifiers are only valid within a single serialization (a specific output result set).

Queues in the architecture?

Constructors for Class/Shapes

External API interaction. Zapier?

Anonymize by using blank nodes instead of identifiers (URIs) as needed

# As Implemented – (help system)

## APIs

### Named Queries

### Delta Triples

### Import file

### Export file

### Execute SPARQL
