---
title: "Computing Taxonomy Levels"
confluence_id: 2360082433
source: "Computing-Taxonomy-Levels_2360082433.html"
---
IMPORTANT assumes clean hierarchy

Use Case: you need to compute levels of things in a taxonomy.

### Sample data

```
insert data {
  :A a :Boundary.
  :B a :Boundary.
  :C a :Boundary.
  :D a :Boundary.
  :1 a :Boundary.
  :2 a :Boundary.
  :3 a :Boundary.

  :D :broader :C.
  :C :broader :B.
  :B :broader :A.
  :3 :broader :2.
  :2 :broader :1.
}
```

### Select version

```
select ?x (Count(?y) as ?level) {?x a :Boundary; :broader* ?y} group by ?x order by asc(?level)
```

(result)

| x | level |
| --- | --- |
| [:1](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%3Chttps://semanticarts.com/mwDemo/1%3E) | ["1"](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%221%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23integer%3E) |
| [:A](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%3Chttps://semanticarts.com/mwDemo/A%3E) | ["1"](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%221%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23integer%3E) |
| [:B](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%3Chttps://semanticarts.com/mwDemo/B%3E) | ["2"](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%222%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23integer%3E) |
| [:2](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%3Chttps://semanticarts.com/mwDemo/2%3E) | ["2"](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%222%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23integer%3E) |
| [:3](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%3Chttps://semanticarts.com/mwDemo/3%3E) | ["3"](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%223%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23integer%3E) |
| [:C](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%3Chttps://semanticarts.com/mwDemo/C%3E) | ["3"](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%223%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23integer%3E) |
| [:D](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%3Chttps://semanticarts.com/mwDemo/D%3E) | ["4"](https://agraph.semanticarts.com/#/repositories/mwDemo/node/%224%22%5E%5E%3Chttp://www.w3.org/2001/XMLSchema%23integer%3E) |

### Construct version

```
Construct {
  ?x :level ?level
}
WHERE {
  select ?x (Count(?y) as ?level) {?x a :Boundary; :broader* ?y} group by ?x 
}
```

### SPARQL Update version

```
Insert {
  ?x :level ?level
}
WHERE {
  select ?x (Count(?y) as ?level) {?x a :Boundary; :broader* ?y} group by ?x 
}
```
