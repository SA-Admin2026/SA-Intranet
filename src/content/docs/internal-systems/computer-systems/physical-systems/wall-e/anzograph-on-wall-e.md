---
title: "Anzograph on WALL-E"
confluence_id: 777617438
source: Anzograph-on-WALL-E_777617438.html
---
In order to get a web console I ended up installing it as a docker image. Here are some information links:

<https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-centos-7>

<https://docs.cambridgesemantics.com/anzograph/userdoc/deploy-docker.htm#DeployLinux>

I did not set it up to run at boot time. It is kinda a memory hog so we may not want it running all of the time…

### Documentation

<https://docs.cambridgesemantics.com/home.htm>

### Useful commands

#### Control docker using systemctl

sudo systemctl start docker  
sudo systemctl status docker  
sudo systemctl enable docker # To start docker on boot  
sudo docker [option] [command] [arguments]

#### Run Anzograph under docker

```
sudo firewall-cmd --add-port=8000/tcp
docker pull docker.io/cambridgesemantics/anzograph:latest
docker run -ti -d -p 8000:8080 -p 8443:8443 -p 5700:5700 --name=anzograph cambridgesemantics/anzograph:latest
docker logs anzograph
sudo docker rm anzograph
```

Access console: <http://192.168.2.39:8000/> - **admin** as the user name and **Passw0rd1**

I have HAL configured to pass requests to [anzograph.semanticarts.com](http://anzograph.semanticarts.com) to http://192.168.2.39:8000

In Docker, run the following command to access the AnzoGraph file system, the **/opt/anzograph** directory:

docker exec -it anzograph\_container\_name /bin/bash

#### Run Zeppelin Notebook under docker

```
sudo firewall-cmd --add-port=8001/tcp
sudo firewall-cmd --add-port=5700/tcp ## needed?

sudo docker exec -it anzograph /bin/bash
[root@0d6ccf78210d anzograph]# [ -d $PWD/logs ] ||  mkdir -p  $PWD/logs
[root@0d6ccf78210d anzograph]# ./bin/azgpasswd ./config/passwd -u zeppelin -p mozepp
exit

cd /home/ssd/anzograph
sudo mkdir notebook
sudo mkdir logs
sudo chown shrek:shrek notebook logs
sudo docker run -p 8001:8080 --name=zeppelin \
  -v $PWD/logs:/logs -v $PWD/notebook:/notebook \
  -e ZEPPELIN_NOTEBOOK_DIR='/notebook' \
  -e ZEPPELIN_LOG_DIR='/logs' \
  -e ZEPPELIN_WEBSOCKET_MAX_TEXT_MESSAGE_SIZE=10240000 \
  -d \
  cambridgesemantics/contrib-zeppelin:latest \
  /zeppelin/bin/zeppelin.sh
```

Then follow directions to configure Zeppelin here: [https://docs.cambridgesemantics.com/anzograph/userdoc/deploy-zeppelin.htm](https://docs.cambridgesemantics.com/anzograph/userdoc/deploy-zeppelin.htm?). Make sure you use the docker IP address to configure the SPARQL interpreter.

Because Zeppelin uses websockets I had to change the nginx config to pass the connection Upgrade headers.

#### Firewall config

We need to open access to the port for the web console. This opens up the port until the firewall is reloaded

$> sudo firewall-cmd --add-port=8000/tcp

This makes it permanent… but do we really want that?

$> sudo firewall-cmd --permanent --add-port=8000/tcp
