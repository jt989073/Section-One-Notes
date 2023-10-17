app.get('/example', (req, res, next) => {
    const data = 'This is not an error';
    next(data); // Pass data to the next middleware
  });
  
  app.get('/example', (req, res, next) => {
    // You can access the data passed in the previous middleware here
    console.log(req.data); // Output: 'This is not an error'
    res.send('Next route');
  });