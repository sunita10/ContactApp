'use strict';
module.exports = {
    port: 3000,
    templateEngine: 'swig',
    assets:{
        lib:{
            css:['public/lib/bootstrap/dist/css/bootstrap.css'],
            js:[
                'public/lib/jquery/dist/jquery.js',
                'public/lib/bootstrap/dist/js/bootstrap.js',
                'public/lib/angular/angular.js',
                'public/lib/angular-route/angular-route.js',
                'public/lib/angular-resource/angular-resource.js']
        },
        app: {
            css:[],
            js:[
                'public/app.js',
                'public/src/config.js',
                'public/src/services/contact.client.service.js',
                'public/src/controllers/contact.client.controller.js'

            ]
        },
        tests:[]
    }
};


