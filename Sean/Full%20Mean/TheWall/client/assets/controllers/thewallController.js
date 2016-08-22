app.controller('thewallController',['$scope', 'userFactory', '$location', '$cookies', function($scope,userFactory, $location, $cookies){
	$scope.user;
	$scope.messages = []
	$scope.newcomm = {}
	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}
	
	$scope.getmess = function(){
		userFactory.getmess(function(data){
			$scope.messages = data;
		})
	}
	$scope.getmess()

	$scope.postmessage = function(){
		console.log($scope.newmess)
		$scope.newmess.username = $scope.user.username;
		userFactory.postmess($scope.newmess, function(){
			$scope.newmess = {}
			$scope.getmess()
		})
	}
	$scope.postcomment = function(messid){
		$scope.newcomm.comment = $scope.messages[messid].comment
		$scope.newcomm.username = $scope.user.username;
		$scope.newcomm.messid = messid;
		console.log($scope.newcomm)
		userFactory.postcomm($scope.newcomm, function(){
			$scope.newcomm = {}
			$scope.getmess()
		})
	}
	$scope.logout = function(){
		$cookies.remove('user')
		$location.url('/')

	}
}])