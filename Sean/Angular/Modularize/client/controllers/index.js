var indexController=['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {

      $scope.users =[]
      /* Private Methods */
      var usersIndex = function() {
          userFactory.index(function(users) {
            $scope.users = users;
          } /* end args passed to userFactor index */ ); //end userFactory method invokation
        } //end usersIndex

      /* Scope Methods */
      $scope.show = function(user_id) {
          $location.url('/edit/' + user_id);
        }
        /* on load time */
      usersIndex();
    }]