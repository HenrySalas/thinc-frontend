var vegApp = angular.module('vegApp', [
  'ngRoute',
  'snackControllers'
]);

vegApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/snacks', {
        templateUrl: 'app/veggies/main.html',
        controller: 'SnackListCtrl'
    })
    .when('/snacks/:id', {
        templateUrl: 'app/veggies/detailView.html',
        controller: 'SnackDetailCtrl'
    })
    .otherwise({
      redirectTo: '/snacks'
    });
  }
]);