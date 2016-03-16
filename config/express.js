'use strict';
/** Module Dependencies **/
var express =  require('express'),
     config = require('./config'),
     consolidate = require('consolidate'),
     path = require('path');

module.exports = function(db) {
    var app = express();

    //Init all Models
    config.getGlobbedFiles('./app/models/**/*.model.js'). forEach(function(modelPath){
        require(path.resolve(modelPath));
    });

   /// Bootstrapping the view engine
// Use consolidate library if you are working with template engine
    app.engine('server.view.html', consolidate[config.templateEngine]);
    app.set('view engine','server.view.html');
    app.set('views', './app/views');

// Setting the app router and static folders within Public directory
    app.use(express.static(path.resolve('./public')));

 // Binding application local variables -Js and Css
    app.locals.jsFiles = config.getJavaScriptAssets();
    app.locals.cssFiles = config.getCSSAssets();


    //Init all routers
    config.getGlobbedFiles('./app/route/**/*.routes.js'). forEach(function(routePath){
        require(path.resolve(routePath))(app);
    });

    return app;
};
