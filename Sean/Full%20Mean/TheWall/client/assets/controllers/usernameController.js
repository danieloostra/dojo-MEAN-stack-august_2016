app.controller('usernameController',['$scope', 'userFactory', '$location', '$cookies', function($scope,userFactory, $location, $cookies){
	$scope.errors = false;
	$scope.messages = [];
	$scope.login = function(){
		userFactory.test($scope.user, function(data){
			$scope.messages =[]
			if(data.errors){
				$scope.errors = true;
				for (err in data.errors){
					console.log(data.errors[err].message)
					$scope.messages.push(data.errors[err].message)
				}
			}
			else{
				$cookies.putObject('user',{username: data.username})
				$location.url('/thewall')
			}

		})
	}
}])