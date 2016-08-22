app.controller('addpollController', ['$scope','$location', 'surveyFactory', '$cookies', function($scope, $location, surveyFactory, $cookies){
	$scope.user;
	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}
    $scope.addpoll = function(){
        console.log($scope.user.name);
        console.log($scope.newpoll);
        $scope.newpoll.name = $scope.user.name;
        surveyFactory.create($scope.newpoll, function(){
            $scope.newpoll = {};
            $location.url('/home')
            console.log('frontaddcontrller');
        })
    }

}]);
