app.controller('loginController',
['$scope', 'usersFactory', '$location', '$cookies', function($scope, usersFactory, $location, $cookies) {
    $scope.users = []
    $scope.login = function(){
        usersFactory.login($scope.user, function(data){

            if(data.data.data){
                console.log('errors');
                $scope.errors = data.data;
            } else {
                console.log(data);
                $cookies.putObject('user',{first_name:data.first_name, last_name:data.last_name});
                // $scope.user = data.data;
                $location.url('/youin')
            }
        },
    function(err){
        console.log(err);
    });
    }
}]);
