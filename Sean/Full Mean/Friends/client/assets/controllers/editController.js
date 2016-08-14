app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
$scope.user; 
var edit = function(){
  friendsFactory.edit($routeParams.id,function(returnedData){
    var date = new Date(returnedData.birthdate)
    date.toLocaleDateString('en-US')
    returnedData.birthdate = date
    $scope.editUser = returnedData


  });
};
edit()

$scope.editedUser = function(){
  console.log('here')
  friendsFactory.update($routeParams.id, $scope.editUser,function(user){
    $location.url('/friends')

  })
}

}]);