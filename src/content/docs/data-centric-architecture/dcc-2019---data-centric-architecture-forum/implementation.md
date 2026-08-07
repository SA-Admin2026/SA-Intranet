---
title: "Implementation"
confluence_id: 679116835
source: Implementation_679116835.html
---
Dave's graphic

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | **Data** | **Metadata** | **Federated** | **Core** | **Integration** | **Id** | **Security** | **Domain** | **Behavior (microservices)** | **UI** |
| **Semantic ETL** | X | X | Data is copied | X |  | Maybe | Read only | X |  | Network diagram (bespoke) |
| **Exemplar App** | X | X |  |  | X | X | X | X | X | X |
| **Data fabric** |  | X | Heavily federated | X | Later | Later | Later | X | X model-driven data conversion |  |
| **Data storage swap w/ same API** | X | X |  | X | in biz layer | In biz layer | In biz layer | X |  | Small changes/ shiny faucet |
| **Metadata** |  | X | Heavily federated | X | Optional | Optional | Optional | X |  |  |
| **Burning platform** | X | x |  | x | x | x | x | x | x | x |
| **True contingency** | X | x |  | x |  | x |  | x | x | X |
