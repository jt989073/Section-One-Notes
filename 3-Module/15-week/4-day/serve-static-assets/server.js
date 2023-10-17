const http = require('http');
const fs = require("fs");

const getContentType = (file) => {
  const type = file.split('.')[1]
  switch(type){
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg'
    case 'css':
      return 'text/css'
    default:
      return 'text/plain'
  }
}

const server = http.createServer((req, res) => {
  // Your code here
  if(req.method === 'GET' && req.url.startsWith('/static')){
    const assetPath = req.url.split('/static')[1]
    const resBody = fs.readFileSync(`./assets${assetPath}`)
    res.setHeader('Content-Type', getContentType(assetPath))
    return res.end(resBody)
  }


  const resBody = fs.readFileSync('./index.html')
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(resBody)
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));