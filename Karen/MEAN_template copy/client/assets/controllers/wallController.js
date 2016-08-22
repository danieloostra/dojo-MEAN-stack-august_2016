app.controller('wallController', ['$scope','$location', 'wallFactory', '$cookies', function($scope, $location, wallFactory, $cookies){
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
