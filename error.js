module.exports = {
  client:
  function client (request, response, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
  },
  server:
  function server (err, req, res, next) {
    res.status(err.status || 500);
    console.error(err.stack);
    res.json({message: err.message, error: (process.env.NODE_ENV === 'production') ? {} : err.stack});
  }
};
