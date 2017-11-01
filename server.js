const express = require('express');
const data = require('./data');
const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// index.page
app.get('/', function(req, res) {
  const usedata = data;

  

  res.render('pages/index', {
    drinks: usedata
  });
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080, function() {
  console.log('Serving ejs magic on 8080!');
});
