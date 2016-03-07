var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var error = require('./error.js');

app.use(bodyParser.json());

// Routes
app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/stock', (request, response) => {
  response.send('Hello World!');
});

app.post('/stock', (request, response) => {
  response.send({isbn: request.body.isbn, count: request.body.count});
});

app.use(error.client, error.server);

app.listen(3000, () => {
  console.log('App is running');
});
