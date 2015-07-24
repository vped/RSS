var app = angular.module('rss', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('login', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .state('feed', {
            url: '/feed',
            templateUrl: 'views/feed.html',
            controller: 'feedCtrl'
        })


});
app.controller('homeCtrl',function ($scope,$state) {
  $scope.getFeed = function() {
      $state.go('feed');
  }
});
app.controller('loginCtrl',function ($scope,$state) {
    $scope.fbLogin = function () {
        $state.go('home')
    }
});
app.controller('feedCtrl',function ($scope,$state) {
    $scope.newspanel = [{},{},{}];

    $scope.addPanel = function () {
        $scope.newspanel.push({})
    };

    $scope.deletePanel = function () {
        $scope.newspanel.pop()
    }
});