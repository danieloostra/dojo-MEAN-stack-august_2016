app.controller('loginController',
['$scope', 'wallFactory', '$location', '$cookies', function($scope, wallFactory, $location, $cookies) {
    $scope.users = []
    $scope.register = function(){
        wallFactory.register($scope.newUser,
        function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
            } else if(data.code == 11000){
                $scope.errors = true;
                $scope.messages.push('The email address you have provided is already in use please login in or use a different email')
            } else {
                $scope.user = data.data;
                $cookies.putObject('user',{first_name:data.first_name, last_name:data.last_name});
                $location.url('/home');

            }
        }, function(err){
            console.log(data);

        })
    },
    $scope.login = function(){
            wallFactory.login($scope.user, function(data){
                if(data.data.data){
                    console.log('errors');
                    $scope.errors = data.data;
                } else {
                    console.log(data);
                    $cookies.putObject('user',{first_name:data.first_name, last_name:data.last_name});
                    $location.url('/home')
                }
            },
        function(err){
            console.log(err);
        });
    }

}]);
