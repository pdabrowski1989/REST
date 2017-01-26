'use strict';

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//////

let User = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean
}));

//////

router.post('/Login', (req, res, next) => {
    User.find({}, function(err, users) {
        res.json(users);
    });
});

router.post('/Logout', (req, res, next) => {
    res.send('LOGOUT');
});

router.get('/setup', function(req, res) {
    var nick = new User({
        name: 'Nick Cerminara',
        password: 'password',
        admin: true
    });

    nick.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
    });
});

module.exports = router;
