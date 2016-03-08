var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/myproject';

var collection = MongoClient.connect(url).then(function (db) {
  return db.collection('books');
});

function getBooks () {
  return collection.then((collection) => {
    return collection.find({}).toArray();
  });
}

function stockUp (book) {
  return collection.then((collection) => {
    return collection.updateOne({isbn: book.isbn}, {
      isbn: book.isbn,
      count: book.count
    }, {upsert: true});
  });
}

function getCount (isbn) {
  return collection.then((collection) => {
    return collection.find({'isbn': isbn}).limit(1).next()
    .then((result) => {
      if (result) {
        return result.count;
      }
      return null;
    });
  });
}

module.exports = {
  stockUp: stockUp,
  getBooks: getBooks,
  getCount: getCount
};
