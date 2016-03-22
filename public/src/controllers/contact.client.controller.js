angular
    .module('ContactsApp')
    .controller('ListController', function($scope, Contact, $location){
        //$scope.contacts = [
        //    {firstName: 'John',
        //    lastName: 'Doe'},
        //    {firstName: 'James',
        //    lastName: 'Smith'}
        //];
        $scope.fields = ['FirstName','LastName', 'ID',""];

        $scope.contacts = Contact.query();

        $scope.createContact = function() {

            $location.path('/create');

        }


    });


