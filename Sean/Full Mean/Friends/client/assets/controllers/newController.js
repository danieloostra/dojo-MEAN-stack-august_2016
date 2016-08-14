app.controller('newController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {

$scope.createUser = function(){
  friendsFactory.create($scope.newUser,function(data){
    $scope.newUser = {}
    $location.url('/friends')
  })

}
}]);