var editController=['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, $routeParams) {
      /* Public Properties */
      $scope.controlValue = "Current Name:";
      /* Public Methods */
      this.getUser = function() {
        userFactory.show($routeParams.id, function(user) {
          $scope.user = user;
        })
      }
      this.updateUser = function(){
        userFactory.update($scope.users, $routeParams.id, function(user){
          $scope.user = user;
          $scope.controlValue = "Updated Name: "
        });
      }
      this.getUser();
  
    }]