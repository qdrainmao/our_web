/**
 * Created by jinyu on 2016/11/26.
 */
var app = angular.module("myApp", []);

app.controller("siteCtrl", function ($scope, $http) {
    $http.get("http://localhost:8080/greeting").success(function (response) {
        $scope.id = response.id;
        $scope.content = response.content;
    })
})