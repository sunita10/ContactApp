'use strict';

var mongoose = require('mongoose'),
    _ = require('lodash'),
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
            res.json(contact);
        }
    });
};

module.exports.edit = function(req, res) {
    console.log(req.params.id);
    var id = req.params.id;
    Contact.findById({_id:id}, function(err, contact) {
        if(err)  throw err ;
        console.log(contact);
        res.send(contact);
        //var resultContact = _.extend({}, contact);
        //console.log(resultContact);
        //
        //   res.json(resultContact);

        //res.json(contact);


    });
};

module.exports.update = function(req, res) {

    console.log(req.body);
    console.log(req.body._id);
    Contact.findById({_id:req.body._id}, function(err, contact) {
        console.log(contact);
        contact.firstName = req.body.firstName;
        contact.lastName = req.body.lastName;
        contact.save(function(err) {
            if(err) {
                console.log('error');
            }
            else {
                console.log('success');
            }
        });

    });

};


module.exports.delete = function(req, res) {
    console.log("Hi"+req.params.id);
    Contact.remove({_id: req.params.id}, function(err) {
        if(err) {
            console.log("error");
        }
        else {
            res.status('200').send('OK');
        }
    }

    );
};