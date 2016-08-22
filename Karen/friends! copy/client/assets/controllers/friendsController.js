app.controller('friendsController', ['$scope','friendsFactory','$location', function($scope, friendsFactory, $location) {
$scope.friends = []
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          console.log($scope.friends);
                        });
            };
index();

$scope.removeFriend = function(id){
    friendsFactory.delete(id, function(data){
        index();
    })
}

}]);
