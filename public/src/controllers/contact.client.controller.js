angular
    .module('ContactsApp')
    .controller('ListController', function($scope, Contact, $location, TempIndex){
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

        };
        $scope.editContact = function(contactid) {
            //TempIndex._id = contactid;
            //TempIndex.firstName = firstname;
            //TempIndex.lastName = lastname;

            console.log(contactid);
            var id = contactid;
            $location.path('/edit/'+id);
        }

        $scope.deleteContact = function(contactid) {
            console.log(contactid);
            var id = contactid;
            $location.path('/delete/'+id);

        }


    });


