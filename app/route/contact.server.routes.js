'use strict';
var express = require('express'),
    router = express.Router();
module.exports = function(app) {
    var contact = require('../../app/controllers/contact.server.controller');
    router
        .route('/contact')
        .get(contact.getAllContacts);
    app.use('/api', router);
};
