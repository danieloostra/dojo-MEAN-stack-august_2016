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

}
  return new customerFactory()

}])
