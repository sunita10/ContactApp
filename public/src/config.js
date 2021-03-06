angular.module('ContactsApp')
       .config(function($routeProvider){
           $routeProvider
               .when('/contacts', {
                   controller: 'ListController',
                   templateUrl: "src/views/list.client.tpl.html"
               })
               .when('/create', {
                   controller: 'CreateNewCtrl',
                   templateUrl: 'src/views/create.client.tpl.html'
               })
               .when('/edit/:id', {
                   controller: 'EditListCtrl',
                   templateUrl: 'src/views/edit.client.tpl.html'
               })
               .when('/delete/:id', {
                   controller: 'EditListCtrl',
                   templateUrl: 'src/views/edit.client.tpl.html'
               })

               .when('/', {
                   template: "<h1>Welcome to MEAN Stack Full Application</h1>"
               })
               .otherwise({
                   redirectTo: '/'
               })
       });