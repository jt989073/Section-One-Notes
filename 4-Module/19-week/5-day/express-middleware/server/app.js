const express = require('express');
const dogRouter = require('./routes/dogs.js')
const app = express();
require('express-async-errors')

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} to ${req.url}`)
  res.on('finish', () => {
    console.group()
    console.log(`status code - ${res.statusCode}`)
    console.groupEnd()
  })
  next()
})

app.use('/dogs', dogRouter)

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});


app.use((req, res, next) => {
  const error = new Error('Resource Not Found')
  error.statusCode = 404
  next(error)
})

app.use((err, req, res, next) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const status = err.statusCode
  const response = {
    statusCode: status || 500,
    message: err.message || 'Something went wrong',
    // stack: isProduction ? "production environment" : err.stack
  }
  if(!isProduction) response.stack = err.stack
  console.error(err)
  res.status(status).json(response)
})

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
