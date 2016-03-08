var app = require('./index.js');

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('App is running ' + app.get('port'));
});
