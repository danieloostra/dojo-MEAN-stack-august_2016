app.controller('editController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
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

$scope.editUser = function(){
  friendsFactory.edit($routeParams.id)
}

}]);