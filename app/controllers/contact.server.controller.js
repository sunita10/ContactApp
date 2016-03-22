'use strict';

var mongoose = require('mongoose'),
    Contact = mongoose.model('Contact');

module.exports.getAllContacts = function(req, res){

    Contact.find({}, function(err, contacts) {
        if (err) throw err;

        res.json(contacts);
    });


};
module.exports.create = function(req, res) {
    console.log(req.body);
    var contact = new Contact(req.body);
    contact.save(function(err) {
        if(err) {
            return res.status(404).send("Error Found");
        }
        else {
            console.log(contact);
        }
    });
};