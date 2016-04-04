var snackControllers = angular.module('snackControllers', []);


snackControllers.controller('SnackListCtrl', ['$scope', '$http', function ($scope, $http){
	
	$http.get('api/items')
	.success(function (data) {
		$scope.snacks = data;
	});
}]);

snackControllers.controller('SnackDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
   var snackId = $routeParams.id;
 
   $http.get('api/items')
   .success(function (data) {
     $scope.snack = {};
     var snackIndex = _.findIndex(data, { id: snackId });
 
     if (snackIndex >= 0){
       $scope.snack = data[snackIndex];
     }
   });
 
   $scope.showRating = function () {
     console.log($scope.snack.rating); 
   };
  
    $scope.updateRating = function (newRating) {
      $scope.snack.rating = newRating;
      
      $http.put('api/items' + $scope.snack.id, $scope.snack)
      .success(function (data) {
        console.log(data);
      });
  
    };
  }]);

snackControllers.controller('SnackUser', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
   var userId = $routeParams.id;
 
   $http.get('api/user')
   .success(function (data) {
     $scope.user = {};
     var userIndex = _.findIndex(data, { id: userId });
 
     if (userIndex >= 0){
       $scope.user = data[userIndex];
     }
   });
}]);