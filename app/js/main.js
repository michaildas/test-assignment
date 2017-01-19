"use strict";

var app = angular.module('productsApp', []);

app.controller("usersController", ["$scope", "usersService", '$timeout', function ($scope, usersService, $timeout) {

    var users = this;
    users.link = '../../clients.json';
    users.previewShort = false;

    users.choose = function (user) {
        users.chosenUser = user;
    };

    users.checkPreviewLength = function () {

        $timeout(function () {
            if ($scope.filteredUsers.length < 2 && users.chosenUser) {
                users.previewShort = true;
            } else {
                users.previewShort = false;
            }
        }, 10);
    };

    usersService.get(users.link).then(function (res) {
        users.mainData = res;
        console.log(users.mainData);
    });
}]);

app.filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});

app.factory("usersService", ["$http", "$q", function ($http, $q) {

    var service = this;

    service.get = function (url) {

        var q = $q.defer();

        $http.get(url).success(function (data) {
            q.resolve(data);
        });

        return q.promise;
    };

    return service;
}]);