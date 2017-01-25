'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let users = require('./routes/users');
let mongoose = require('mongoose');
let router = express.Router();
let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/', router);
app.use('/users', users);

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port);

console.log('Listening on ' + port + '.');
