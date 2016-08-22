app.controller('newController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {

    /*
      OUR $scope.create function goes here <-- $scope because we need to access this method
      with ng-submit or ng-click (from the form in the previous assignment).
      Want to all of the friends when we get back?  We can re-run index.
    */

    $scope.addFriend = function(){
        friendsFactory.create($scope.newFriend, function(data){
            $location.url('/friends')
            console.log(data);
        })
    } 
}]);
