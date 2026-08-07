---
title: "Running Docker"
confluence_id: 53608506
source: "Running-Docker_53608506.html"
---
### Start the Docker Machine

Either:

Open command prompt as administrator

```
docker-machine start default
```

or

![](/attachments/53608506/54853675.png)

fire up this icon on the start bar

### For each command window (which sort of represents a session)

(have one open for DCA and one for Artifacts)

Set the environment variables to include the docker path

@FOR /f "tokens=\*" %i IN ('docker-machine env default') DO @%i

for container status

```
docker ps
```

to kill a container

```
docker stop <ContainerID.
```

I need to not be in administrator in order to get to the Y: drive

#### For DCA

```
docker build -t  dca .
```

and then remove the previous one

```
docker rm dca
```

```
docker run -p 5000:5000 --name dca dca
```

Says its running on http:...

#### For data centric artifacts

```
docker build -t  artifacts .
```

and then remove the previous one

```
docker rm artifacts
```

```
docker run -p 8080:80 --name artifacts artifacts
```

thre is no feedback that it is running

the first "artifacts" will be the name of the running container, the second one is the image name

it will not respond until it gets a get or post

to kill it

```
control C
```

sometimes I need to do

```

```

Start up the server container in another command window
