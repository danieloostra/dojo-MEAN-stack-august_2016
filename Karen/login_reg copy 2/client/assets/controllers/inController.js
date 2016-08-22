app.controller('inController', ['$scope','$location', 'usersFactory', '$cookies', function($scope, $location, usersFactory, $cookies){
	$scope.user;
	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}
	$scope.logout = function(){
		$cookies.remove('user')
		$location.url('/')
	}

}]);
