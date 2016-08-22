app.controller('loginController',
['$scope', 'surveyFactory', '$location', '$cookies', function($scope, surveyFactory, $location, $cookies) {
    $scope.messages = []
    $scope.errors = false;
    $scope.login = function(){
            surveyFactory.login($scope.user, function(data){
                $scope.messages = []
                if(data.errors){
                    $scope.errors = true;
                    for(err in data.errors){
                        console.log(data.errors[err].message)
                    }
                } else {
                    console.log(data);
                    $cookies.putObject('user',{name: data.name});
                    $location.url('/home')
                }
            })

    }

}]);
