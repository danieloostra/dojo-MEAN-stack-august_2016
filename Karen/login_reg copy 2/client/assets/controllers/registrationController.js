app.controller('registrationController',
['$scope', 'usersFactory', '$location', function($scope, usersFactory, $location) {
    $scope.users = []

    $scope.register = function(){
        usersFactory.register($scope.newUser,
        function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
            }else if(data.code == 11000){
				$scope.errors = true;
				$scope.messages.push('The email address you have provided is already in use please login in or use a different email')
			}
            else {
                $scope.user = data.data;
                $location.url('/login');

            }
        }, function(err){
            console.log(data);

        })
    }
}]);
