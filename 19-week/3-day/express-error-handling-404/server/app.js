const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});


// other route handlers happen here




app.use((req, res, next) => {
  const err = new Error('Resource not found')
  err.statusCode = 404
  next(err)
})

app.use((err, req, res, next) => {
  console.log(err)
  const status = err.statusCode || 500
  res.status(status).json({
    message: err.message || 'Something went wrong',
    status
  })
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
