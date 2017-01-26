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

router.post('/Login', (req, res) => {
    User.findOne({
        name: req.body.name
    }, (err, user) => {

        if(err) throw err;

        if(!user) {
            res.json({resultCode: 601, message: 'User not found'})
        }  else if(user) {
            if(req.body.password != user.password) {
                res.json({resultCode: 602, message: 'Wrong password'})
            } else {

            }
        }
    })
});

router.post('/Logout', (req, res) => {
    res.send('LOGOUT');
});

router.get('/Register', (req, res) => {
    let nick = new User({
        name: req.body.name,
        password: req.body.password,
        admin: req.body.admin
    });

    nick.save((err) => {
        if (err) {
            res.json({resultCode: 200, message: 'User saved successfully'});
            throw err;
        }
        res.json({resultCode: 200, message: 'User saved successfully'});
    });
});

module.exports = router;
