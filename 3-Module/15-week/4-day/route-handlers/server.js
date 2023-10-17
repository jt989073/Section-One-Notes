const http = require('http');
const { runInNewContext } = require('vm');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line

    // define route handlers here
    if(req.method === 'GET' && req.url === '/'){
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      return res.end('Dog club')
    }

    if(req.method === 'GET' && req.url === '/dogs'){
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      return res.end('Dogs Index')
    }


    if(req.method === 'GET' && req.url === '/dogs/new'){
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      return res.end('Dog create form page')
    }

    if(req.method === 'GET' && req.url.startsWith('/dogs/')){
      const allParts = req.url.split('/')
      if(allParts.length === 3){
        const dogId = allParts[2]
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.write('Dog details for dogId: ')
        res.write(dogId)
        return res.end()
      }
    }

    
    if(req.method === 'POST' && req.url === '/dogs'){
      res.statusCode = 302
      res.setHeader('Location', `/dogs/${getNewDogId()}`)
      return res.end()
    }
    
    if(req.method === 'POST' && req.url.startsWith('/dogs/')){
      const allParts = req.url.split('/')
      if(allParts.length === 3){
        const dogId = allParts[2]
        res.statusCode = 302
        res.setHeader('Location', `/dogs/${dogId}`)
        return res.end()
      }
    }

    if(req.method === 'GET' && req.url.slice(0,6) === '/dogs/'){
      const allParts = req.url.split('/')
      if(allParts.length === 4 && allParts[3] === 'edit'){
        const dogId = allParts[2]
        res.statusCode = 200
        res.setHeader('Content-Type', `text/plain`)
        return res.end(`Dog edit form page for dogId: ${dogId}`)
      }
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));