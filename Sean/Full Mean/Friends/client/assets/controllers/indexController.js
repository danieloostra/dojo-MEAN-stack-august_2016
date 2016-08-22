app.controller('indexController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {
$scope.users = []
var index = function(){
  friendsFactory.index(function(returnedData){
    $scope.users = returnedData;
  });
};
index();
$scope.delete = function(id){
  friendsFactory.delete(id,function(returnedData){
  	$scope.users = returnedData
  })
}

}]);