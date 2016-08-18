

app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/

$scope.friends = {};
$scope.friend = {};

console.log($scope.friend);

var index = function(){
  console.log("inside controller before entering factory")
      friendsFactory.index(function(returnedData){
        $scope.friends = returnedData;
    });
  };
index();

$scope.create = function(){
  friendsFactory.create($scope.friend, function(data){
    console.log(data);
    $location.url('/')
  });
}

  $scope.delete = function(id){
    console.log("xxxxxxxx");
    friendsFactory.delete(id, function(){
      index();
    })
  }
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
}]);
