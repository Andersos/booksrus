var books = [];

function getBooks () {
  return Promise.resolve(books);
}

function stockUp (isbn, count) {
  var item = _findItem(isbn);
  if (item) {
    item.count = count;
  } else {
    books.push({isbn: isbn, count: count});
  }
  return Promise.resolve();
}

function _findItem (isbn) {
  return books.find(function (book) {
    return book.isbn === isbn;
  });
}

function getCount (isbn) {
  var item = _findItem(isbn);
  if (item) {
    return Promise.resolve(item.count);
  } else {
    return Promise.resolve(null);
  }
}

module.exports = {
  getBooks: getBooks,
  stockUp: stockUp,
  getCount: getCount
};
