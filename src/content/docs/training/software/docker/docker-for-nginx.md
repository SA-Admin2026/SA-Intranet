---
title: "Docker for nginx"
confluence_id: 52789267
source: "Docker-for-nginx_52789267.html"
---
To install docker on windows install the DockerToolbox

have to fun the docker quickstart terminal (foudn by typicing docker in the start/search) have to run as an administrator (right mouse the icon)

do some vood from email

Then go to the directory where the static files will be in my immediate case that would be

Y:\\_SemanticArts\TechnicalAndResearchResources\\_\_CodingExperiments\dca-static-artifacts

get in a terminal in the idrectory and (note period at end)

```
docker build -t  artifacts .
```

and then

```
docker run -p 8080:80 artifacts
```

```
Open browser 192.168,99,100:8080
```

We will have our own version of the server here

I build a requirements.txt file with

Flask==0.10.1

which is what tells docker what to install

```
docker build -t -d dca .
```

docker run -p 5000:5000 dca
