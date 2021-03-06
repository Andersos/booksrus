var database;
if (process.env.NODE_ENV === 'test') {
  database = require('./inMemoryDatabase.js');
} else {
  database = require('./database.js');
}

function index (request, response) {
  response.send('Hello production!');
}

function getBooks (request, response, next) {
  database.getBooks().then((books) => {
    response.json(books);
  }).catch(next);
};

function getCount (request, response, next) {
  database.getCount(request.params.isbn).then((count) => {
    if (count !== null) {
      response.format({
        'application/json': () => {
          response.status(200).json({count: count, type: 'json'});
        },
        'text/html': () => {
          response.send('<div>Stock: ' + count + '</div>');
        },
        'default': () => {
          response.status(200).json({count: count, type: 'default'});
        }
      });
    } else {
      response.status(404).json({error: 'No book with ISBN: ' + request.params.isbn});
    }
  }).catch(next);
};

function stockUp (request, response, next) {
  database.stockUp(request.body).then(() => {
    response.send(request.body);
  }).catch(next);
};

module.exports = {
  index: index,
  getBooks: getBooks,
  getCount: getCount,
  stockUp: stockUp
};
