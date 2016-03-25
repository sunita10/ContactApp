/**
 * Created by jaypr on 3/22/2016.
 */
angular
       .module('ContactsApp')
       .controller('EditListCtrl', ['$scope', '$location', 'Contact', 'TempIndex','$routeParams',
           function($scope,$location,Contact,TempIndex,$routeParams) {
               console.log( $routeParams.id);
               $scope.contact = Contact.get({
                   id : $routeParams.id}, function(data) {
                  console.log(data);
                  console.log(data.firstName);
                  $scope.FirstName = data.firstName;
                  $scope.LastName = data.lastName;
              });




               $scope.editContact = function() {
                   console.log("editctrl-"+$routeParams.id);
                   $scope.contact =  Contact.get({id : $routeParams.id},
                    function(data) {
                        $scope.contact.firstName = $scope.FirstName;
                        $scope.contact.lastName = $scope.LastName;

                       $scope.contact.$update(function(){
                           console.log("contact updated");
                       });
                        $location.url('/contacts');

                    });
               }


               $scope.deleteContact = function() {
                   Contact.delete({id: $routeParams.id}, function() {
                       console.log("Contact Deleted");
                   });
                   $location.path('/contacts');
               }


           }]);
