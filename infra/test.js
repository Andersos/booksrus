var heroin = require('heroin-js');
var base = require('./base.js');
var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var prod = {
  name: 'booksrus-test'
};

var config = Object.assign(prod, base);
configurator(config);
configurator.export('booksrus-test').then((result) => {
  console.log(result);
});
