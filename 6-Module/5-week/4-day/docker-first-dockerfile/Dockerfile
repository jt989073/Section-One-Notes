
#  Here I'm using the Alpine version of my current node version
# Again, the Alpine implementation of node will be more lightweight but take up less space

FROM node:11.0.0-alpine

#  if this directory doesn't exist Docker will make it for us within the container
WORKDIR /app

#  The Copy instruction will take everything from our current location(first arg) and then put it in the `/app` folder (right arg)
COPY server.js /app

CMD ["node", "server.js"]

# The command to start the conatiner without the CMD argument would be:
# `docker container run --name node -d -p 80:8000 rkoron/node:latest-fun node server.js`

# With the command argument
# `docker container run --name node -d -p 80:8000 rkoron/node:latest-fun`