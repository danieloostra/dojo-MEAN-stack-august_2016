app.controller('userController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies){

console.log('inside userController');
  $scope.username = {}

  $scope.login = function(){
    userFactory.login($scope.username, function(data){
      $scope.username = data
      console.log($scope.username.username);
      $cookies.putObject('user', $scope.username)
      $location.url('/wall')
    })
  }


}])
