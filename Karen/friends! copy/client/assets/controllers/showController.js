console.log('SHOW CONTROLLER');
app.controller('showController', ['$scope','friendsFactory', '$location','$routeParams', function($scope, friendsFactory, $location, $routeParams) {
$scope.friend;
      /*
        GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial -
        so we didn't set a variable so we could reuse it -
        we just run the friendsFactory method directly.
      */
    friendsFactory.show($routeParams.id, function(returnedData){
      $scope.friend = returnedData;
      console.log($scope.friend);
    });




}]);
