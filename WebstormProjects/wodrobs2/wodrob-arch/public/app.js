var app = angular.module('rss', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })

        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .when('/create', {
            templateUrl: 'views/feed.html',
            controller: 'feedCtrl'
        })

}]);