var authControllers = angular.module('authControllers', []);

authControllers.controller('LoginCtrl', ['$scope', 'AuthService', function ($scope, $http) {

	$scope.username = "";
	$scope.password = "";

	$scope.error = false;

	$scope.login = function () {
		//call login on the backend
		AuthService.login ( {
			username: $scope.username,
			password: $scope.password
		}).then(function () {
			if(AuthService.userIsLogged()) {
				// redirect to /snacks
				$location.path('/snacks');
			} else {
				$scope.error = true;
			};
		});
	};
}]);