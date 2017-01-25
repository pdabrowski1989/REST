'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = express.Router();
let app = express();
let port = process.env.PORT || 3000;

let session = require('./routes/session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/', router);
app.use('/Session', session);

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port);
console.log('Listening on ' + port + '.');
