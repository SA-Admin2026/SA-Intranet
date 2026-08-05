---
title: "File Structure Decisions"
confluence_id: 2870214659
source: "File-Structure-Decisions_2870214659.html"
---

These are existing file structures at the folder level that we currently use, and the question is, “On the assumption that we have a small set of templated folder structures, what should that structure patterns be, and what tools should each be pre-loaded with?”. Please make comments and suggestions.

**gist**/  
├── docs/  
│ ├── models/  
│ └── release\_notes/  
├── migration/  
│ ├── v10.0/  
│ ├── v11.0/  
│ │ └── input/  
│ ├── v12.0/  
│ │ ├── input/  
│ │ └── queries/  
│ │ ├── action/  
│ │ │ ├── default/  
│ │ │ └── ngraphs/  
│ │ └── report/  
│ │ ├── default/  
│ │ │ ├── new\_namespace/  
│ │ │ └── old\_namespace/  
│ │ └── ngraphs/  
│ │ ├── new\_namespace/  
│ │ └── old\_namespace/  
│ └── v13.0/  
│ └── queries/  
│ ├── action/  
│ │ ├── default/  
│ │ └── ngraphs/  
│ ├── report/  
│ │ ├── default/  
│ │ └── ngraphs/  
│ └── uom\_queries/  
├── ontologies/  
├── tools/  
│ ├── serializer/  
│ └── subclass\_inferences/  
└── validation/  
 ├── queries/  
 └── shapes/  
**gist-doc**/  
├── Examples/  
│ └── OrderedCollections/  
├── gist-11.0/  
│ ├── eBook/  
│ ├── visualizations/  
│ └── widoco-documentation/  
│ ├── resources/  
│ └── webvowl/  
│ ├── css/  
│ ├── data/  
│ └── js/  
├── gist-12.1/  
└── gist-13.0/  
 ├── eBook/  
 └── widoco-documentation/  
 ├── OOPSevaluation/  
 │ └── evaluation/  
 │ ├── css/  
 │ ├── fonts/  
 │ ├── js/  
 │ └── themes/  
 │ └── blue/  
 ├── provenance/  
 ├── resources/  
 ├── sections/  
 └── webvowl/  
 ├── css/  
 ├── data/  
 └── js/  
**gistAcct**/  
├── docs/  
└── tools/  
 └── serializer/  
**gistBFO**/  
└── tools/  
 └── serializer/  
**gistCCO**/  
└── tools/  
 └── serializer/  
**gistComputing**/  
└── tools/  
**gistCyber**/  
├── docs/  
├── ontologies/  
├── tools/  
│ ├── serializer/  
│ └── subclass\_inferences/  
└── validation/  
 ├── queries/  
 └── shapes/  
**gistPharma**/  
└── tools/  
 ├── serializer/  
 └── subclass\_inferences/  
**gistProfSrv**/  
├── docs/  
├── tools/  
│ └── serializer/  
└── validation/  
**gistReferenceData**/  
├── Data/  
├── Queries/  
│ └── Internal/  
└── tools/  
 └── serializer/
