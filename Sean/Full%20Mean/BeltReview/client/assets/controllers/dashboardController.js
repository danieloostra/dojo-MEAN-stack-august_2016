app.controller('dashboardController',['$scope', 'userFactory', '$location', '$cookies', function($scope,userFactory, $location, $cookies){
	$scope.user;
	$scope.topics = [];
	$scope.categories = [];


	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}
	$scope.getTopics = function(){
		userFactory.dashboard(function(data){
			$scope.topics = data;
		})
	}
	$scope.getCategory = function(){
		userFactory.getcategories(function(data){
			$scope.categories = data
		})
	}
	$scope.addTopic = function(){
		$scope.newTopic.userid = $scope.user._id
		userFactory.addTopic($scope.newTopic, function(){
			$scope.getTopics()
			$scope.newTopic = {}
		})
	}
	$scope.addCategory = function(){
		userFactory.addCat($scope.newCategory, function(){
			$scope.getCategory()
			$scope.newCategory = {}
		})
	}
	$scope.logout = function(){
		$cookies.remove('user')
		$location.url('/')

	}
	$scope.getTopics()
	$scope.getCategory()
}])