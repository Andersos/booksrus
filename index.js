var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var error = require('./error.js');
var routes = require('./routes.js');

app.use(bodyParser.json());

// Routes
app.get('/', routes.index);
app.get('/stock', routes.getBooks);
app.get('/stock/:isbn', routes.getCount);

app.post('/stock', routes.stockUp);

app.use(error.client, error.server);

module.exports = app;
