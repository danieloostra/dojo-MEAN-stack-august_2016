app.controller('showController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
$scope.user; 
var show = function(){
  friendsFactory.show($routeParams.id,function(returnedData){
    $scope.user = returnedData;
  });
};
show();
}]);