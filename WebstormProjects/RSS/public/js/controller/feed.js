/**
 * Created by ved on 24/7/15.
 */
var app = angular.module('feed',[]);
app.controller('feedCtrl',function($scope){
    $scope.newspanel = [{},{},{}];

    $scope.addPanel = function () {
        $scope.newspanel.push({})
    };

    $scope.deletePanel = function () {
        $scope.newspanel.pop()
    }

});