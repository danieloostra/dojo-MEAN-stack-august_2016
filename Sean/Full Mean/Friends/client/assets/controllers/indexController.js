app.controller('indexController', ['$scope','friendsFactory', function($scope, friendsFactory) {
$scope.users = []
var index = function(){
  friendsFactory.index(function(returnedData){
    $scope.users = returnedData;
  });
};
index();
}]);