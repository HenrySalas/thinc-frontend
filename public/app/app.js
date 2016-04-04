var vegApp = angular.module('vegApp', [
  'ngRoute',
  'snackControllers',
  'authControllers'
]);

vegApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/snacks', {
        templateUrl: 'app/veggies/main.html',
        controller: 'SnackListCtrl'
    })
    .when('/snacks/:id', {
        templateUrl: 'app/veggies/detail.html',
        controller: 'SnackDetailCtrl'
    })
    .when('/user', {
        templateUrl: 'app/veggies/user.html',
        controller: 'SnackUser'
    })
    .when('/login', {
        templateUrl: 'app/login/loginView.html',
        controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/snacks'
    });
  }
]);