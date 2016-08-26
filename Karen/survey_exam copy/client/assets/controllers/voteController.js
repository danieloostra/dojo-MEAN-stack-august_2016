app.controller('voteController', ['$scope','$location', 'surveyFactory', '$cookies','$routeParams', function($scope, $location, surveyFactory, $cookies, $routeParams){
	$scope.user;
	$scope.poll;
	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
	}
	else{
		$location.url('/')
	}

    surveyFactory.show_one($routeParams.id, function(returned_data){
        $scope.poll = returned_data;
        console.log($scope.poll);
    });
    $scope.voteA = function(){
        console.log($scope.poll.voteA + 1);
        $scope.poll.voteA = $scope.poll.voteA + 1;
        surveyFactory.updateA($routeParams.id, $scope.poll, function(data){
            $location.url('/vote/'+ $routeParams.id)
        })
    };
    $scope.voteB = function(){
        console.log($scope.poll.voteB + 1);
        $scope.poll.voteB = $scope.poll.voteB + 1;
        surveyFactory.updateB($routeParams.id, $scope.poll, function(data){
            $location.url('/vote/'+ $routeParams.id)
        })
    };
    $scope.voteC = function(){
        console.log($scope.poll.voteC + 1);
        $scope.poll.voteC = $scope.poll.voteC + 1;
        surveyFactory.updateC($routeParams.id, $scope.poll, function(data){
            $location.url('/vote/'+ $routeParams.id)
        })
    };
    $scope.voteD = function(){
        console.log($scope.poll.voteD + 1);
        $scope.poll.voteD = $scope.poll.voteD + 1;
        surveyFactory.updateD($routeParams.id, $scope.poll, function(data){
            $location.url('/vote/'+ $routeParams.id)
        })
    };


}]);
