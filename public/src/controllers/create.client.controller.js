/**
 * Created by jaypr on 3/22/2016.
 */

angular
    .module('ContactsApp')
    .controller('CreateNewCtrl', ['$scope', '$location', 'Contact', function($scope, $location, Contact) {

        $scope.addContact = function(isValid) {

            if(isValid) {
                console.log($scope.contact.firstName + " " + $scope.contact.lastName);
                $scope.contact = new Contact(
                    $scope.contact
                );
                $scope.contact.$save(function (res) {
                    console.log(res);
                    $location.path('/contacts');
                });
            }
            else {
                console.log("Fields are Invalid");
            }
        };

    }]);
