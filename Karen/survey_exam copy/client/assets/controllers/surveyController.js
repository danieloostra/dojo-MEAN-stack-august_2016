app.controller('surveyController', ['$scope','$location', 'surveyFactory', '$cookies', function($scope, $location, surveyFactory, $cookies){
	$scope.user;
	$scope.polls=[];
	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}
	$scope.show_all_polls = function(){
		surveyFactory.all_polls(function(data){
			$scope.polls = data;
			$location.url('/home')
		})
	},
	$scope.show_all_polls();
	var index = function(){
		surveyFactory.index(function(returned_data){
			$scope.polls = returned_data;
			console.log($scope.polls);
		})
	}
	index();
	$scope.delete = function(id){
		console.log(id);
		surveyFactory.delete(id, function(data){
			index();
			$location.url('/home')
		})
	}


	$scope.logout = function(){
		$cookies.remove('user')
		$location.url('/')
	}

}]);
