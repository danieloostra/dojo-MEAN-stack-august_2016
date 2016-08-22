app.controller('profileController',['$scope', 'userFactory', '$location', '$cookies', '$routeParams', function($scope,userFactory, $location, $cookies, $routeParams){
	$scope.user;
	$scope.displayuser;

	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}

	$scope.getUser = function(){
		userFactory.getUser($routeParams.id, function(data){
			console.log(data)
			$scope.displayuser = data
		})
	}

	$scope.logout = function(){
		$cookies.remove('user')
		$location.url('/')
	}
	$scope.getUser()
}])