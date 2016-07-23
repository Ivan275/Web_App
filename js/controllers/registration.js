myApp.controller('RegistrationController', ['$scope', 'Authentication',
  function ($scope, Authentication) {

        $scope.login = function () {
            Authentication.login($scope.user);
        }; //login
        $scope.logout = function () {
            Authentication.logout();
        }; //login

        $scope.register = function () {
            Authentication.register($scope.user);
        }; // register

}]); // Controller
