var reviewApp = angular.module('reviewApp', [
  'ngRoute',
  'bookControllers'
]);

reviewApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/books', {
        templateUrl: 'app/veggies/main.html',
        controller: 'BookListCtrl'
    })
    .otherwise({
      redirectTo: '/books'
    });
  }
]);

var vegApp = angular.module('vegApp', [
  'ngRoute',
  'snackControllers'
]);

vegApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/books', {
        templateUrl: 'app/veggies/main.html',
        controller: 'SnackListCtrl'
    })
    .otherwise({
      redirectTo: '/books'
    });
  }
]);