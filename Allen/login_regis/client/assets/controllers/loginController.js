app.controller('loginController', ['$scope', '$location','loginFactory', function($scope, $location,loginFactory){

  $scope.user = {};
  $scope.users = {};
  $scope.log={};
  $scope.logs={};

  $scope.add = function(){
    console.log('inside the add function in controller and will be going to factory');
    loginFactory.add($scope.user, function(){
      console.log('was able to come back to login controller');
      $location.url('/page');
    });
  };
  $scope.check = function(){
    console.log('inside the check function in controller and going to the factory');
    // console.log($scope.log);
    loginFactory.check($scope.log, function(){
      console.log('was able to comback with correct login match');
      $location.url('/page')
    });
  };
  //

}]);
