var books = [];

function getBooks () {
  return Promise.resolve(books);
}

function stockUp (book) {
  var item = _findItem(book.isbn);
  if (item) {
    item.count = book.count;
  } else {
    books.push({isbn: book.isbn, count: book.count});
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

function reset () {
  books = [];
}

module.exports = {
  getBooks: getBooks,
  stockUp: stockUp,
  getCount: getCount,
  reset: reset
};
