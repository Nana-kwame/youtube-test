var express = require('express');
var bodyParser = require('body-parser');
// var xml2Parser = require('xml2json');



var app = express();

app.use(bodyParser.urlencoded({ extended: false})); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.listen(process.env.PORT || 30000);
console.log("App listening on port 30000");

app.get('/post-notification', (req, res) => {
  // let res = {};

  console.log('What pubhubsubbub is sending: ', req);
  console.log('What the fck am I getting back:', res);


})
