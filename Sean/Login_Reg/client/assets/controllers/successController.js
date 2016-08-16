app.controller('successController', ['$scope','$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies){
	$scope.user;
	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/welcome')
	}
	$scope.logout = function(){
		$cookies.remove('user')
		$location.url('/welcome')
	}

}]);