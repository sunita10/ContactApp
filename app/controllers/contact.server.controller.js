'use strict';

var mongoose = require('mongoose'),
    Contact = mongoose.model('Contact');

module.exports.getAllContacts = function(req, res){

    Contact.find({}, function(err, contacts) {
        if (err) throw err;

        res.json(contacts);
    });


};
