var db = require('../inMemoryDatabase.js');
var assert = require('assert');

var book = {
  isbn: '911911911',
  count: 5
};

describe('In memory database', () => {
  it('should be empty at start', (done) => {
    db.reset();
    db.getBooks().then((books) => {
      assert.deepEqual(books, []);
      done();
    });
  });

  it('should be able to add a book', (done) => {
    db.stockUp(book).then(() => {
      console.log('pro');
      db.getBooks().then((books) => {
        assert.deepEqual(books, book);
        done();
      });
    });
  });

  describe('getCount', () => {
    it('with no added isbn should return null', (done) => {
      db.reset();
      db.getCount(book.isbn).then((count) => {
        assert.equal(count, null);
        done();
      });
    });
  });
});
