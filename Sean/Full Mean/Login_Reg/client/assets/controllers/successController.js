app.controller('successController', ['$scope','$location', 'userFactory', function($scope, $location, userFactory){
	$scope.user;
	var display = function(){
		userFactory.getuser(function(data){
			$scope.user = data
		})
	}
	display()
	$scope.logout = function(){
		userFactory.clearuser(function(data){
			$scope.user = data;
		})
		$location.url('/welcome')
	}

}]);