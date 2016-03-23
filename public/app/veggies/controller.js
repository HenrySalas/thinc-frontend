var bookControllers = angular.module('bookControllers', []);
var snackControllers = angular.module('snackControllers' []);

bookControllers.controller('BookListCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('api/items')
  .success(function (data) {
    $scope.books = data;
  });

  var bestBook = "The martian";
  $scope.weeklyRecommendation = "Mastering Refactoring";
}]);

snackControllers.controller('SnackListCtrl', ['$scope', '$http', function ($scope, $http){
	
	$http.get('api/items')
	.success(function (data) {
		$scope.snacks = data;
	});
}]);