---
title: "How create a rest-api endpoint"
confluence_id: 57049126
source: How-create-a-rest-api-endpoint_57049126.html
---

# How create a rest-api endpoint

## Step-by-step guide

1. Start MarkLogic server if it isn't already started.
2. Run the following command in terminal
3. To create a new REST endpoint the <rest-api-name> is for the admin only.  the host is localhost if you're on a laptop,:  
   1. curl --anyauth --user <uname>:<password> -i -X POST -d'{"rest-api":{"name":"<rest-api-name>","port":<port>}}' -H "Content-type: application/json" http://<host>:8002/LATEST/rest-apis
   2. if it says "unauthorized" that's just a bluff
4. in Morgan Stanley the <port> is probably going to be 30100 and the 8002 is going to be 30002
5. To confirm goto: <host>:8002 > Select servers > <your endpoint> << you can also edit the port num from here.

Upload a File

curl -s -X PUT --data-binary '@<file name>.ttl' -H "Content-type: text/turtle" --digest --user "dave:bex661" http://localhost:30100/v1/graphs?default

In ML go to admin/ databases/documents

set the triple index to true

set the collection lexicon to true
