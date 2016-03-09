var app = require('./index.js');

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log('App is running ' + app.get('port'));
});
