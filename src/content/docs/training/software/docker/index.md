---
title: "Docker"
confluence_id: 41811970
source: "Docker_41811970.html"
---

### (one time)Install

Got to docker.com

"Get Docker"/ Install the Platform

#### (one time) Get the AG docker container

github.com/franzinc/docker-agraph

in a terminal

$ docker pull franzinc/docker-agraph

### (one time)

run from the directory that you want to contain your triple store

docker run -d -p 10035:10035 --name agraph -v $(pwd)[:/var/lib/agraph](http://data/var/lib/agraph) databliss/docker-allegrograph

default user id: test

pwd: xyzzy

Set up your user accounts

\*\*\* somewhere in here I set up the VM on my machine and assigned ti to t192.168.99.100 so all future traffic will be here

#### (each time)

to stop Agraph from terminal

```
docker stop agraph
```

and to start

```
docker start agraph
```

Broswer – localhost:10035

Previous version below

### To get the AllegroGraph Docker image

Run this from any terminal and in any directory:

docker pull databliss/docker-allegrograph

This will pull down the latest version by default. If you want a specific version in all cases substitue "databliss/docker-allegrograph:{version-number}" such as ... allegrograph:6.1.3

Be patient, this will pull down several Docker image layers. If you are going to be on a plane, make sure you do this before you take off!

### To run AllegroGraph in a Docker container

Open your terminal and go to a directory that you want to host your AllegoGraph data (~/agraphdata). Run the following command from this location:

docker run -d -p 10035:10035 --name agraph -v $(pwd):/var/lib/agraph databliss/docker-allegrograph

This command uses the Docker "volume" capability to make your "present working directory" (pwd) to the directory /var/lib/agraph inside the container. This will make AllegroGraph actually store your data on your computer's disk instead of inside the container.

Optionally, in a directory where you run this container, create a subdirectory "data" and then run the command this way:

docker run -d -p 10035:10035 --name agraph -v $(pwd)/data:/var/lib/agraph databliss/docker-allegrograph

To use AllegroGraph use your browser and enter the URL http://localhost:10035

user: super

pwd: super

## In this section

- [Docker compose](/software/docker/docker-compose/)
- [Docker for nginx](/software/docker/docker-for-nginx/)
- [Docker for Windows 10 Pro](/software/docker/docker-for-windows-10-pro/)
- [Running Docker](/software/docker/running-docker/)
