// var app = angular.module("app", ["ngRoute", "ngCookies", "ngMessages"]);

app.controller('userController', ['$scope', 'customerFactory', '$cookies', '$location', function($scope, customerFactory, $cookies, $location){

  $scope.errors = false;
  $scope.errormessage = [];

  $scope.register = function(){
    console.log('inside usercontroller, register method');
    customerFactory.register($scope.newuser, function(data){
      $scope.errormessage = []
      // console.log(data);
      // console.log(data.errors);
      if(data.errors){
        $scope.errors = true;
        for(error in data.errors){
          console.log(data.errors[error].message);
          $scope.errormessage.push(data.errors[error].message)
          console.log($scope.errormessage);
        }
      }
      else if(data.code == 11000){
        $scope.errors = true;
        $scope.errormessage.push('login in or use a different email')
      }
      else{
        // $cookies.putObject('user', {first_name : data.first_name})
        //have user log in after registering
        $location.url('/')
      }
    })
  }

  $scope.login = function(){
console.log('now inside the userController login method');
    customerFactory.login($scope.user, function(data){
      $scope.errormessage = [];
console.log('back from the customer factory in the login');

      if(data.errors){
        $scope.errors=true;
        // console.log(data.errors);
      } else if(data.data){
        $scope.errors = true;
        $scope.errormessage.push(data.data)
      } else{
        $cookies.putObject('user', {first_name: data.first_name, last_name: data.last_name, email: data.email})

        console.log($cookies.getObject('user'));
        $location.url('/dashboard')
      }
    })
  }

}])
