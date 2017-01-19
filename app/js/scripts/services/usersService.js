app.factory("usersService", ["$http", "$q", function ($http, $q) {

    var service = this;

    service.get = function(url) {

        var q = $q.defer();

        $http.get(url)
            .success(function (data) {
                q.resolve(data);
            });

        return q.promise;
    };

    return service
}]);
