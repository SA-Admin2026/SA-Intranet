---
title: "Python Cookbook"
confluence_id: 1474628
source: "Python-Cookbook_1474628.html"
---
### Querying Allegrograph

```
CATALOG = 'my_catalog'
REPO = 'my_repo'
AUTH = ('username','password')
 
def query(query_str):
    url = "http://agraph.semanticarts.com/catalogs/%s/repositories/%s" % (CATALOG,REPO)
    login = ("schneider", "kuva8rq")
    payload = {'query': query_str}
    headers = {"Accept": "application/json"}
    r = requests.get(url, auth=AUTH, headers=headers, params=payload)
    return json.loads(r.text)
```

## In this section

- [Python for rookies](/languages/python-cookbook/python-for-rookies/)
