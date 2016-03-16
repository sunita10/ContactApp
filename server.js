
'use strict';
/** Module Dependencies  **/

var express = require('express'),
    mongoose = require('mongoose'),
    chalk = require('chalk'),
    config = require('./config/config.js');



// Bootstrap mongoose

var db = mongoose.connect(config.db, function(err) {
    if(err) {
        console.error(chalk.red('Could not connect to db'));
        console.error(chalk.red(err));
    }
    console.log('db connected successfully');
});

// Init the express application

var app = require('./config/express')(db);


app.listen(config.port, function(err){
    if(err) {
        console.error('Could not start the server on port '+ config.port);
        console.error(chald.red(err));

    }
    console.log(chalk.green('listening on the port '+ config.port));
    console.log('log on to http://localhost:3000');
});