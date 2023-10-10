## What is Express.js?

Express, is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed to make building web applications and APIs in Node.js easier and more efficient, because who liked those ugly http servers we have been working with?
---

## Why Use Express.js?

Express.js offers several advantages:

- **Simplicity:** It simplifies the process of building web applications and APIs by providing a clean and minimalistic framework.

- **Flexibility:** It allows developers to use various middleware and libraries to extend its functionality.

- **Routing:** Express makes it easy to define routes for different HTTP methods and URLs.

- **Middleware:** It supports middleware functions, enabling tasks such as authentication, logging, and error handling.

- **Community:** It has a large and active community, resulting in a wealth of resources and third-party middleware.

---

## Setting up Express.js

To get started with Express.js, you need to install it and create a basic application structure.

1. Install Express.js using npm:
   ```bash
   npm install express


# Coding In The Fast Lane - Express!

## Creating a server

```js
const express = require('express');

const app = express();

/* All sorts of stuff */

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
```

Make sure you `npm install express` first!

## Creating routes

```js
app.get('/users/:userId', (req, res) => {
  /* All sorts of stuff */
});
```

## Parsing the request's body

```js
app.use(express.json());
```

## Parsing info from URLs

```js
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
});
```

Whatever you set to `:valueName` gets saved as a key-value pair on the `req.params` object

## Sending responses

```js
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.status(200).send(`User details for userId: ${userId}`);
});
```

With Express, `res.send()` and `res.json()` both send the response, as well as call `res.end()` so you don't have to!

---

## Express Request/Response Objects

Express has built in properties and methods to make dealing with requests and responses easier

### Request Object `req`

- req.body - automatically gives us the parsed body of the request if it's JSON
  - the app must use `express.json()`

```js
app.use(express.json());
```

- req.query - gives use query string parameters in an object

```js
fetch('http://localhost:5000/items?coffee=Starbucks&music=lofi', {
  method: 'GET',
});


// req.query
{
  coffee: 'Starbucks',
  music: 'lofi',
};

console.log(req.query.music) // lofi
```

- req.params - gives us route parameters in an object

```js
fetch('http://localhost:5000/locations/Washington/Seattle', {
    method: 'POST'
})

app.post('/locations/:state/:city', ...)


// req.params
{
  state: 'Washington',
  city: 'Seattle',
};

console.log(req.params.city) // Seattle
```

### Response Object `res`

- res.status() - set the HTTP status code for the response
- res.send() - send plaintext response
- res.json() - send JSON response

```js
res.status(200); // equivelent to res.statusCode = 200

res.json({ some: 'data' });
// or
res.send('some data');
```

Can be chained!

```js
res.status(404).send('Page Not Found');
```

---