angular
    .module('ContactsApp')
    .controller('ListController', function($scope, Contact){
        //$scope.contacts = [
        //    {firstName: 'John',
        //    lastName: 'Doe'},
        //    {firstName: 'James',
        //    lastName: 'Smith'}
        //];
        $scope.fields = ['FirstName','LastName'];

        $scope.contacts = Contact.query();

    });


//angular
//    .module('ContactsApp')
//    .controller('ListController', function($scope, Contact){
//        console.log('Within List Controller');
//        $scope.fields = ['firstName', 'lastName'];
//        $scope.contacts = Contact.query();
//
//    });