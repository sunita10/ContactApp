'use strict';
var express = require('express'),
 bodyParser = require('body-parser'),

    router = express.Router();
module.exports = function(app) {

    var contact = require('../../app/controllers/contact.server.controller');
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
    app.use(bodyParser.json());

    router
        .route('/contact')
        .get(contact.getAllContacts)
        .post(contact.create)
        .put(contact.update);


    router
        .route('/contact/:id')
        .get(contact.edit)
        .delete(contact.delete);



    app.use('/api', router);
};
