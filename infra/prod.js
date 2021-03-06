var heroin = require('heroin-js');
var base = require('./base.js');
var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var prod = {
  name: 'booksrus',
  log_drains: ['syslog://data.logentries.com:13636']
};

var config = Object.assign({}, base, prod);
configurator(config);
configurator.export('booksrus').then((result) => {
  console.log(result);
});
