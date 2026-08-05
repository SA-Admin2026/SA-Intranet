---
title: "R2RML"
confluence_id: 31260676
source: "R2RML_31260676.html"
---

There is a trick that can be used with UltraWrap, a language tag hack Juan built. It’s not a documented feature, but if you need to add a language tag to something (eg “disjoncteur”@fr-fr) you have to use a special ultrawrap tag (which in this case grabs a language tag from a column called ‘CL’):

```
@prefix rrx: <http://purl.org/r2rml-ext/>.   
...  
rr:predicateObjectMap [  
 rr:predicate gist:containedText;  
 rr:objectMap [ rr:column "translateLabel"; rrx:languageColumn "CL"; ]  
].
```
