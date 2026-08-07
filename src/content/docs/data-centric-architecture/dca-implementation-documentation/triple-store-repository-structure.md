---
title: "Triple Store / Repository Structure"
confluence_id: 738689117
source: 738689117.html
---
We are initially building the system with Allegrograph as the base TripleStore so some of their terminology may get used below. Such as the Allegrograph term “repository” which is a term for a separate Triple Store.

## Core Triple Store

We will use a TripleStore to keep core architecture information.

![](https://semarts.atlassian.net/wiki/images/icons/grey_arrow_down.png)Click here to expand...

- Users

  - ID
  - email
  - firstname, lastname?
  - organization
  - identity provider?
  - refresh token? part of session info?
- Roles
- Permissions
- Identity Providers

  - config: id, secret key,
- Log level (on the core, not the Realms)
- Realms (defined below)

  - Logging / Auditing configuration ?
  - Contact info, administrative access
  - Auto-join people with

    - verified email address in same domain
    - authenticated by specific identity provider
  - Invitations to join realm
- Architectural named queries
- Other things that might go here:

  - Server Configuration (for boot-strapping servers, triple-store usernames & passwords?) This might be even a different triple store with absolute minimal info…
  - Organizations? Is this required here?
  - User session information? (does the whole session go in this DB? maybe just, last UI state?)
  - Well known data access points like DBPedia?
  - notification configuration (queues? to communication channels)
  - Pluggable Application configuration information?
  - Last login state (session?)

## Multi-Tennant Realms

The system will support multiple Tennants and multiple “spaces” that we call Realms. A Realm is a completely separate architectural space. Often each organization using the DCA will have its own unique Realm. I don’t know if it should be restricted to one Realm per Organization. It seems reasonable to at least allow more than one, even if the feature is never used.

## Version Storage

We want to be able to support version control of ontologies and our model driven development environment. But a “running” realm should have only a single stable version of each. So we will probably want a separate place to store versioning information for Ontology & Apps.

## Logging / Auditing / Error Reporting

We want the system to have:

- Error Reporting: make sure errors are captured and reviewed, probably needs to send out notifications to make sure some one sees the errors
- Logging:

  - User login / access
  - Warnings, Informational, occasionally debugging (dynamically changeable log level for each Realm)
- Auditing ??

  - record every change and who made the change
  - this is not necessarily a requirement for most use cases but can be useful
