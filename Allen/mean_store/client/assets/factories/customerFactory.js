// var app = angular.module("app", ["ngRoute", "ngCookies", "ngMessages"]);


app.factory('customerFactory', ['$http', function($http){

function customerFactory(){
  this.login = function(user, callback){
    console.log('now inside the customerFactory login method');
    $http.post('/getuser', user).then(function(returned_data){
      console.log('returning after post');
      callback(returned_data.data)
    })
  }

  this.register = function(newuser, callback){
    console.log('now inside customer Factory register method');
    $http.post('/register', newuser).then(function(returned_data){
      console.log('returning after register method (customerfactory) post');
      callback(returned_data.data)
    })
  }
} //end of customerFactory function

  return new customerFactory()

}])
