---
title: "Security Discussion from DCA 2018"
confluence_id: 679084081
source: Security-Discussion-from-DCA-2018_679084081.html
---
The security panel generated the most discussion and the most gnarly problems to unravel. Also note additional thoughts from Jamie after the panel. This page provides the contextual and background discussion that leads to Jamie's concrete findings [here](../dca-implementation-documentation/security-in-a-dca.md).

- Attendees strongly suggested pulling in some experts for 2019.

## Panel Discussion

---

|  |  |
| --- | --- |
| Chris Harding | Security Panel Facilitators: Chris Harding, Mark Wallace, Boris Pelakh |
| Chris Harding | Mark Wallace: Security involves authentication, authorisation, which involves users and roles. Also consider, API security considerations (e.g., idle time, failed log-ins). RDF Triples can only be added, deleted, or modified. What are the inherent security concerns pertaining to triples? RAD= Read, Add, Delete |
| Chris Harding | Chris Harding: Why do you want security and what is its purpose? Data has an owner, owner should have ability to control. Need to be able to provide control at the triple level, apply granular access to subject, predicate, and object, then to triple as a whole. Owner should have control over authorisation mechanism. Can also control access through communities and membership in those communities. |
| Alan Morrison (US - IFS) | Mark W: Overall thoughts on things to consider  Authentication: proving who you are  Authorization: What are you allowed to do  Access control: Users and roles (Role-based access control or RBAC), and what can roles do.  Actions: Read, add, delete (RAD).    Chris: What is the security going to achieve? Data typically has an owner; should have RAD control. Apply that degree of control at the level of the triple and even to the S-V-O within the triple. Owner has to have control over the authentication mechanism--who can do what to the data... Identity is in the context of the community. Behavioral norms within community, some communities tied to one another.Owner needs to pick community for your identification. In theory.  In practice: Google, LinkedIn identities, etc. |
| Chris Harding | Boris Pelakh:  There are cross-domain concerns. At the data level, permissions are not homogeneous. Also depends on graph database used. Add and update are often conflated. Fine-grained control is external to the interface. What is the minimum level of acceptable granularity? And how does it change the API layer? |
| Alan Morrison (US - IFS) | Boris: Need identity provider, moving credentials, etc. Permissions on a large dataset are not homogeneous. If you're trying to write in a database agnostic way, there aren't as many options. Fine-grained control tends to be external to the interface--DB rule, graph rule, triple, permissions attached. What implications for API layer?   API needs to restrict mutations from user and lay down provenance..... |
| Chris Harding | Boris: Be wary of compliance (e.g., HIPPA, security classification levels) that dictate who has access to data. Don't want to expose yourself to malicious action, liability, or legal compliance problems. |
| Chris Harding | Chris: Two dimensions of ownership---personal (those who can determine access) and commercial (those who can charge for providing data). |
| Alan Morrison (US - IFS) | Erik: is this a more democratic approach with the DCA? More access for more users? Why or why not?  Boris: Reasons for more control: Classified data, regulatory restrictions on PII..... |
| Chris Harding | Alan: Counter to the military access example, individuals who need info often don't have access to it. Another issue is handling the large quantity of info. |
| Chris Harding | Meika: Another problem is "over-classification" in terms of limiting information to those who should have access to it. It's easier to make it all classified, and limit access to it. And, at what level of granularity is the classification applied? |
| Michael F Uschold | AGREEMENT: cannot just allow access and rely on but audit to keep tabs on good/bad behavior. |
| Chris Harding | Dave: Separate authentication from authorisation.  Authentication systems typically reestablish identity. Some actually attempt to figure out who you are.  Use cases - at what point is security not scalable?   - Medical Industry - certain classes of info, you are not allowed to see, e.g. mental health. - System can know that you are taking certain drugs. - If Doctor A prescribes mental health meds, Doctor B will not know, but system will tell Dr. B if they prescribe drugs that counteract drug prescribed by Dr. A. - Dr. B will not know the reason that Dr. A prescribed meds. |
| Michael F Uschold | ISSUE: What levels of granularity are appropriate in a given circumstance. Is there a minimumum acceptable granularity?   Trading off granularity and scale. |
| Michael F Uschold | USE CASE: A server needs to have admin access to all information to spot dangerous conflicts that result in denial of permission w/o giving details to persons not allowed to see certain information of why permission was denied. |
| Chris Harding | Dan Carey: Talking about triple patterns, what do you mean?   Boris: ?x :hasSSN ?y is an example. |
| Chris Harding | Do you restrict verb (Boris) or subject, verb, object (Chris H)?    Boris: Anything that has a high cardinality, drop the granularity. |
| Alan Morrison (US - IFS) | Mark W: Do have to work with and through existing LDAP, etc.  Do have the difficulties associated with triple-level security--who has access to the SSN?  Dave: Need to focus on what's scalable.  Boris on scalability: hasSSN has a PII association that doesn't have a scalability issue.  But permissions based on subjects (or objects) will be overwhelming. |
| Chris Harding | Boris: "Context" = named graph |
| Alan Morrison (US - IFS) | Boris: Control based on context (quad store named graph) is feasible. Oracle admins control at the table level, not the row level, even though Oracle supports row level. |
| Chris Harding | Mark O: Birthdate in itself is not personally-identifiable information (PII), it is the join between a Person + Birthdate makes it PII. |
| Alan Morrison (US - IFS) | Matthias: But how do we do this is a standards-aware way and not create something proprietary? |
| Chris Harding | Chris H: Separating the how and the what may be problematic. The how has to be surfaced. And there might be multiple ways of 'how'. |
| Chris Harding | Matthias: Want the rules to be visible as well as expressed in RDF. |
| Michael F Uschold | USE CASE: Protecting PII (Personaly identifiable information) |
| Chris Harding | owner       group      world       :Dave    :SSN     :123-44-5678                     :Dave         :hr        :Dave    :owns    :SemanticArts        :Dave    :hasDiagnosis :DCA\_fever            :Dave |
| Chris Harding | Dan Carey: Does owner, group, world, have to be assigned when triple is created? Yes. |
| Chris Harding | Matthias: Challenge the necessity of having a group. |
| Chris Harding | Linda: Can do relational security at the column, row level. Also concept of the key. Who controls the key to the data? What happens if you lose the key? |
| Alan Morrison (US - IFS) | Dave: What are the requirements of authorization?  Mark O: What data is required to make that decision?  Dave: How do you express authorization for a set of triples?  Whiteboarding by Mark W. on simple use case.  Who owns that triple?  Mark W: OGW => RAD. Owner Group World (Linux construct)  Triple example:  Dave owns Semantic Arts. Group is Melissa/HR. World is blank.  If system says who's asking? you can throw out this PII triple out in result set.  On login, you can create a JSON web token....  Chris would do this in a way that OGW info is visible to the user.  Dave: Problem is the groups--often defined arbitrarily.  Mark W: We may have to be pragmatic to see how far down that stack we go.  Mark O: What do we need to have written down that will then go into a solution? Minimum level of information to know? We can't reinvent authorization here. Something has to be written down so that you can then assemble.  Linda: Relational could be controlled at column level, but worries about key management. Not often implemented. |
| Chris Harding | Tatiana: Application-driven perspective. LDAP, logging into SharePoint, etc. applications can be through a user interface. Need to access something, and multiple keys are problematic. We need a layer for pushing keys from one point to another, outputs, and privileges. Security is [administrative?]  metadata. |
| Michael F Uschold | USE CASE: Protecting PII (Personaly identifiable information) |
| Chris Harding | Boris: One option for modelling  db [      g [        account (Read: {x,y})                       (Delete: {y,z})   ]     session (pocm: { })    *<-- contains the groups and people*  Boris: What permissions do you use on inferred data? |
| Michael F Uschold | ISSUE: how to decide what the permissions are on inferred information. It ought to be dependent on the permissions of the facts that went into the inference, and the inference rule itself, which could be sensitive information. |
| Chris Harding | Alan: What are you able to do in building an analytics environment around this to ensure compliance? Machine learning, etc. should be harnessed. In networking terms, you're doing packet inspection and inspecting the triples analytically. |
| Chris Harding | Dave: look at standards, e.g., XACML  How to define levels? How do people get roles? How to describe permissions? How to assign people to roles? And how to evaluate at run time and after the fact. HIPPA is enforced after the fact. |
| Michael F Uschold | AGREEMENT: security is as hard or harder than any other problem we have to face to make this go. |
| Alan Morrison (US - IFS) | Matthias: Could use row or column level security, if the logic were in the database, rather than in the apps. So the question becomes, are there going to be more apps that trap this logic and make it unusable in a broader security fabric? |

---

## Follow-Up Discussion

I want to start a follow up discussion about security as it relates to the requirements for the DCA. There was talk about creating more artifacts from the conference and I think this is an area that could use one.

As we are in the process of implementing the DCA, we developers need to know what should be implemented. Defining an actual set of requirements may change design decisions.

I created a new wiki for the DCA as a place to capture information about a Data Centric Architecture (not specific to our implementation). I am starting a wiki page for security that I will update based on the discussion.

This got long and is probably boring for a bunch of you... so i am going to make two statements to get feedback on and start the discussion:

<tl;dr>

> Application level security that implements role based permissions is the current standard. It would probably be acceptable for the DCA as either code in a coded application or as defined by the application modeler in a no-code application.
>
> To move to a more data centric approach would require information within the data model about the sensitivity of individual items of data and what roles would be allowed to read, modify, or delete that data.

</tl;dr>

To get things started I am going to throw out a bunch of ideas/thoughts and see where it goes.

I think the problem of authentication is reasonably well covered by OAuth, OpenID, and JWT (JSON Web Tokens). So I am focusing mostly on access permissions.

What is a security permission MVP (minimum viable product)? What is really required above that? My preference is for requirements that are as simple as possible but meet the needs of the users.

Someone suggested looking for existing standards including xacml. According to Forrester [XACML is dead](https://go.forrester.com/blogs/13-05-07-xacml_is_dead/ "https://go.forrester.com/blogs/13-05-07-xacml_is_dead/"). I'll do some more searches for other standards but I am not optimistic in finding something particularly relevant. We are trying to define a new way of looking at data.

A couple of points that I did not hear during the Security session:

> Security is not only about what we let a user do. It is also about what happens if a hacker penetrates a system or is able to access data that they should not have been able to. Highly sensitive information should have a layer of protection below access control, at the representation layer.
>
> Data and access is more than just read/write/delete. Best practices now includes verify only data like passwords and verifiable hashes, encrypted data, tokenized data (credit cards), and separation of data onto separate systems.

Requirements should be developed by identifying the problem to be solved, not the technology to be used. Use Case driven requirements: we should come up with a reasonable set of use cases that provides a context for defining/evaluating security requirements. Then compare possible options to see how they handle the use case requirements.

What is "triple level security"? When Chris Harding started saying it was a requirement I thought I knew what he meant by triple level security. When discussing it more with Neil & Grant I realized that it could mean different things to different people. I identified at least two options:

1. For any individual triple within a triple store, without context, meaning, or understanding, there should be a method to specify whether an individual user can or cannot read, modify or delete the triple.
2. For any individual triple within a triple store, using knowledge of the triples contents, define an individual user's permissions.

The first one I haven't identified a use case for needing it and I haven't identified an reasonable way to implement it. The second one seems like a reasonable need that would be supported by use cases and at first glance seems doable.

Permission Mechanisms/Terms  

- All access, no restrictions - Maybe on a read only database available to the public. Not really an option as a minimum acceptable implementation. There is almost always a requirement for some form of authentication and authorization to edit/update data.
- All access if you have an account - Some simple systems, but not likely acceptable as a minimum acceptable implementation.
- Application level permission based on your login, often assigned by roles. Each application defines how and what access is allowed to the user.

- Very few people get direct access to the database. It is almost always through an application user interface.
- I discussed this with Mark W after the DCC. This is the current standard.
- Apps are trusted to the degree of governance enforced on the development of the application.

- Roles: a set of permissions that are defined and then delegated to individuals as their job requirements dictate. For example, a call center employee will need to be given access to a specific set of applications to do their job
- Access Lists: provide lists of individuals or roles that have permission, different lists for read, write, delete, etc. I don't really see a need for this but trying to list all options, maybe someone has a valid use case for it.
- Named Graph level permissions: this seem similar to needing access lists. Is there use cases where this is needed or useful?

Can roles be inferred? Maybe if you link users to job titles... is this useful?

Enforcement

- Application level programmatic enforcement. Each app defines in code what data is accessible or not. This is not data centric. It is brittle and hard to maintain.
- Application level model driven enforcement. Each app uses information from the data model to determine what is accessible or not. Applications can be no-code or all code.
- Architecture level enforcement. This requires the architecture to have a model of data "sensitivity" or "accessibility" and roles defining access levels to that data. It might then be possible to limit what data is readable, writable, etc., even below the application layer.

Q: Security model has to be compute-able and enforceable?

For a Data Centric Architecture it seems that the model needs to include information about the "sensitivity" or "accessibility" of the data, somewhere at the level of the Ontology (OWL, SHACL, or some new standard). Otherwise it has to be hard coded somewhere and it would probably be different for each system. Hard coding logic is what we are trying to avoid.

Can/should you define views of the data for specific applications/roles?

GraphQL is usually used to specify what information you want when calling an API. But it could also be used as a kind of filter for defining what set of information gets sent back (what you have permission to see). Does it make sense in the context of RDF/OWL/SHACL to use GraphQL or something like it to limit access to data?

Auditing? Is it a requirement of the DCA architecture? Is it something we want in our implementation?

Is the concept of immutable data something to consider in the DCA?

Delegation of permission: this has been a handy tool for me in the past. If you want an assistant to do something for you, being able to delegate some of your permissions to someone else. Or, login as me (without me giving you my password) after you have logged in. Probably not part of MVP unless it is a trivial addition to our chosen implementation.

USE CASES

1. call center access (financial services, medical/health, ?)
2. Data privacy ? specific requirements? GDPR (EU General Data Protection Regulation), CCPA (California Consumer Protection Act)
3. What is the real requirements about PII (personally identifiable information)?
4. HIPAA :

1. Need to know basis... what does a person setting up an appointment get to see?
2. Drug / drug interaction process needs more permission than the doctor using it.
3. Mental health information may have to change/deny results of certain options without access to the reason why

5. Contracts, insurance policies, etc

1. call centers
2. approval processes
3. internal reviews
4. claims
