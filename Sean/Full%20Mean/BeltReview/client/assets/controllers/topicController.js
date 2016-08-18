app.controller('topicController',['$scope', 'userFactory', '$location', '$cookies', '$routeParams', function($scope,userFactory, $location, $cookies, $routeParams){
	$scope.user;
	$scope.topic;
	$scope.newcomm = {};

	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}

	$scope.getTopic = function(){
		userFactory.getTopic($routeParams.id, function(data){
			console.log(data)
			$scope.topic = data
		})
	}
	$scope.addPost = function(){
		$scope.newPost.userid = $scope.user._id;
		$scope.newPost.topicid = $routeParams.id
		userFactory.addPost($scope.newPost, function(){
			$scope.getTopic()
			$scope.newPost ={};
		})
	}
	$scope.upvote = function(postid, user){
		if($scope.user._id == user){
			console.log('You can not vote')
		}
		else{
			userFactory.upvote(postid, function(){
				$scope.getTopic()
			})
		}
	}
	$scope.downvote = function(postid, user){
		if($scope.user._id == user){
			console.log('You can not vote')
		}
		else{
			userFactory.downvote(postid, function(){
				$scope.getTopic()
			})
		}
	}
	$scope.postcomment = function(id){
		$scope.newcomm.content = $scope.topic.posts[id].content
		$scope.newcomm.postid = id
		$scope.newcomm.userid = $scope.user._id
		console.log($scope.newcomm)
		userFactory.addComment($scope.newcomm, function(){
			$scope.getTopic()
		})
	}

	$scope.logout = function(){
		$cookies.remove('user')
		$location.url('/')
	}
	$scope.getTopic()
}])