const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});



app.use((req, res, next) => {
  const err = new Error('Resource Not Found')
  err.statusCode = 404
  next(err)
  // throw err
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
