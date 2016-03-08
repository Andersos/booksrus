var db = require('../inMemoryDatabase.js');
var assert = require('assert');

var book = {
  isbn: '911911911',
  count: 5
};

describe('In memory database', () => {
  it('should be empty at start', () => {
    db.getBooks().then((books) => {
      assert.deepEqual(books, []);
    });
  });

  it('should be able to add a book', () => {
    db.stockUp(book).then(() => {
      db.getBooks().then((books) => {
        db.reset();
        assert.deepEqual(books, book);
      });
    });
  });

  describe('getCount', () => {
    it('with no added isbn should return null', () => {
      db.getCount(book.isbn).then((count) => {
        assert.equal(count, null);
      });
    });
  });
});
