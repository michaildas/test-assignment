app.controller("usersController", ["$scope", "usersService", '$timeout', function ($scope, usersService, $timeout) {

    var users = this;
    users.link = '../../clients.json';
    users.previewShort = false;

    users.choose = function(user){
        users.chosenUser = user;
    };


    users.checkPreviewLength = function(){

        $timeout(function(){
            if ($scope.filteredUsers.length < 2 && users.chosenUser ) {
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
