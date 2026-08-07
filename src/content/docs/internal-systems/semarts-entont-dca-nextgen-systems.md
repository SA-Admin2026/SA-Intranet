---
title: "SemArts EntOnt DCA NextGen Systems"
confluence_id: 1660420101
source: SemArts-EntOnt-DCA-NextGen-Systems_1660420101.html
---
This is to keep track of the requirements and design for our next gen internal system

# Ontologies

As of February 8, 2021 the ontologies in use are:

- SemArtsEntOnt2.0.0.owl – a very small ontology that fills in about a dozen taxonomies, defines us (and the four companies) and defines a couple of new event types : Appointments, Travel and Business Trip. It imports gistProfSrv0.0.1.owl
- gistProfSrv0.0.1.owl – the beginning of the professional services ontology. It defines about a dozen classes including a professional services view of customers, clients, vendors and suppliers, as well as things like billing rates. It imports gistAcct and gistHR
- gistHR0.0.0.owl – the beginning of an HR system. Defines several dozen classes primarily in HR, it’s a bit light on Payroll. It imports gistCore9.5.0
- gistAcct2.0.0.owl – this is our second version. It is pretty close to being able to drive accounting transactions from business events, based on a set of accounting policies.
- gistCore 9.5.0.owl – current version of gist

Right now these ontologies are in the AG demo-catalog / [SemArtsEntOnt2](https://agraph.semanticarts.com/#/catalogs/demo-catalog/repositories/SemArtsEntOnt2/) There are about 4900 statements in the combined TBox and CBox.

# Shapes / Triggers

# Use Cases

# Data Conversion
