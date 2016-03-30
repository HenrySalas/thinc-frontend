var snackControllers = angular.module('snackControllers', []);


snackControllers.controller('SnackListCtrl', ['$scope', '$http', function ($scope, $http){
	
	$http.get('data/items.json')
	.success(function (data) {
		$scope.snacks = data;
	});
}]);

snackControllers.controller('SnackDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
   var snackId = $routeParams.id;
 
   $http.get('data/items.json')
   .success(function (data) {
     $scope.snack = {};
     var snackIndex = _.findIndex(data, { id: bookId });
 
     if (snackIndex >= 0){
       $scope.snack = data[snackIndex];
     }
   });
 
   $scope.showRating = function () {
     console.log($scope.snack.rating); 
   };
  
    $scope.updateRating = function (newRating) {
      $scope.snack.rating = newRating;
      
      $http.put('data/items/' + $scope.snack.id, $scope.snack)
      .success(function (data) {
        console.log(data);
      });
  
    };
  }]);