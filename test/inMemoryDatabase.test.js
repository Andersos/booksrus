var db = require('../inMemoryDatabase.js');
var assert = require('assert');

var book = {
  isbn: '911911911',
  count: 5
};

describe('In memory database', () => {
  it('should be empty at start', (done) => {
    db._reset();
    db.getBooks().then((books) => {
      assert.deepEqual(books, []);
      done();
    });
  });

  it('should be able to add a book', (done) => {
    db.stockUp(book).then(() => {
      db.getBooks().then((books) => {
        assert.deepEqual(books, [book]);
        db._reset();
        done();
      });
    });
  });

  describe('getCount', () => {
    it('with no added book should return null', (done) => {
      db._reset();
      db.getCount(book.isbn).then((count) => {
        assert.equal(count, null);
        done();
      });
    });

    it('with isbn should return count', (done) => {
      db.stockUp(book).then(() => {
        db.getCount(book.isbn).then((count) => {
          assert.equal(count, book.count);
          done();
        });
      });
    });
  });
});
