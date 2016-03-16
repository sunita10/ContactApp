'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var _contact = new schema({
    firstName: {
        type: String,
        default: '',
        trim: true
    },
    lastName: {
        type: String,
        default: '',
        trim: true
    }
});

mongoose.model('Contact', _contact);