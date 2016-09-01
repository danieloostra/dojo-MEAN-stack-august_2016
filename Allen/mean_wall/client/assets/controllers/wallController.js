app.controller('wallController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies){
  $scope.username;
  $scope.newmessage = {}
  $scope.allmessages = [];
  $scope.newcomment = {}

  if($cookies.getObject('user')){
    $scope.username = $cookies.getObject('user')
  } else {
    $location.url('/')
  }

  $scope.signout = function(){
    $cookies.remove('user')
    $location.url('/')
  }

  $scope.getmessage = function(){
    console.log('inside the getmessage controller method');
    userFactory.getmessage(function(data){
      $scope.allmessages = data
    })
  }
  $scope.getmessage()

console.log('inside the wallController');
  $scope.message = function(){
    console.log($scope.newmessage.username = $scope.username);
    $scope.newmessage.username = $scope.username
    console.log('inside the message method');
    userFactory.message($scope.newmessage, function(){
        $scope.newmessage = {}
        $scope.getmessage()
    })
  }

  $scope.usercomment = function(message_id){
    console.log($scope.newcomment);
    $scope.newcomment.username = $scope.username
    $scope.newcomment.message_id = message_id
    console.log($scope.newcomment);

    userFactory.usercomment($scope.newcomment, function(){
      $scope.getmessage()
    })
  }

}])
