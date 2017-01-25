'use strict';

let express = require('express');
let router = express.Router();

router.get('/Login', (req, res, next) => {
    res.send('LOGIN');
});

router.get('/Logout', (req, res, next) => {
    res.send('LOGOUT');
});

module.exports = router;
