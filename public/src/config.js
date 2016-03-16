angular.module('ContactsApp')
       .config(function($routeProvider){
           $routeProvider
               .when('/contacts', {
                   controller: 'ListController',
                   templateUrl: "src/views/list.client.tpl.html"
               })
               .when('/', {
                   template:"<h1>Welcome to MEAN Stack Full Application</h1>"
               })
               .otherwise({
                   redirectTo: '/'
               })
       });