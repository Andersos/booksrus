var supertest = require('supertest');
var app = require('../index.js');
var assert = require('assert');

describe('POST /stock', function () {
  it('respond with json', function (done) {
    supertest(app)
    .post('/stock')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('respond with same isbn and count as post', function (done) {
    var data = {
      isbn: 1234567890,
      count: 20
    };

    supertest(app)
    .post('/stock')
    .set('Content-Type', 'application/json')
    .send(data)
    .expect('Content-Type', /json/)
    .expect(function (response) {
      assert.deepEqual(response.body, data);
    })
    .expect(200, done);
  });
});
