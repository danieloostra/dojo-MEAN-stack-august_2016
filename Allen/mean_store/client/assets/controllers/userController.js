// var app = angular.module("app", ["ngRoute", "ngCookies", "ngMessages"]);

app.controller('userController', ['$scope', 'customerFactory', '$cookies', '$location', function($scope, customerFactory, $cookies, $location){
  $scope.errors = false;
  $scope.errormessage = [];

  $scope.login = function(){
    console.log('now inside the userController login method');
    customerFactory.login($scope.user, function(data){
      $scope.errormessage = [];
console.log('back from the customer factory in the login');
      if(data.errors){
        $scope.errors=true;
        console.log(data.errors);
      } else if(data.data){
        $scope.errors = true;
        $scope.errormessage.push(data.data)
      } else{
        $cookies.putObject('user', {first_name: data.first_name, last_name: data.last_name, email: data.email})
        $location.url('/dashboard')
      }
    })
  }

}])
