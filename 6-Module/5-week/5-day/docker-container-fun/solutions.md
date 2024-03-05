## Phase 0: Run Containers

The Commands to create the three containers are as follows:

1. docker container run --name nginx -d -p 80:80 nginx

1. docker container run --name httpd -d -p 8080:80 httpd

1. docker container run --name mysql -d -p 3306:3306 --environment
   MYSQL_ROOT_PASSWORD=my-secret-pw mysql

## Phase 1: Within the Shell: Phase B

Start up your Ubuntu Shell:

docker container run -it --name ubuntu ubuntu bash

Install Curl and Test:

apt-get update apt-get install -y curl curl parrot.live

Exit Out and Remove:

exit docker container rm ubuntu

## Phase 2: Quote Generator

Run our named, detached container off alpine with our script!

docker container run -d --name characters alpine:3.16.0 /bin/sh -c "while :; do
wget -qO- https://swapi.dev/api/people/?search=r2; printf '\n'; sleep 5s; done"

## Phase 3: Networking:

Create the network:

docker network create funtime

Run our two Containers:

docker container run -d --net funtime --net-alias party elasticsearch:2 docker
container run -d --net funtime --net-alias party elasticsearch:2

Make sure everything if configured:

docker container run --net funtime alpine nslookup party

Now let's query them:

docker container run --name curler --net funtime centos curl -s party:9200

docker container restart curler

docker container logs curler

## Phase 4:

## Part A Mind Mounts:

After you've created your folder:

docker run -d --name nginx\
 --mount type=bind, source=/Users/rosekoron/rad,target=/rad \
 nginx

## Part B Volumes:

We create our first image:

docker container run -d --name postgres1 -v psql-data:/var/lib/postgresql/data
postgres:9.6.1

Check Our Logs and Stop the First Container: docker container logs postgres1

Then Enter the container to make our table: docker container exec -it postgres1
psql -U postgres

Then Stop Our Container: docker stop postgres1

Run the second container withe the same volume:

docker container run -d --name postgres2 -v psql-data:/var/lib/postgresql/data
postgres:9.6.2

Then Enter Our Second Container: docker container exec -it postgres2 psql -U
postgres
