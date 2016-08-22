app.controller('showController', ['$scope','friendsFactory','$routeParams', function($scope, friendsFactory, $routeParams) {

  // $scope.friend = {};
var getUser = function(){
  friendsFactory.getFriend($routeParams.id, function(return_data){
  $scope.user = return_data;
  });
}

getUser()

}]);
