
app.factory('loginFactory',['$http', function($http){
//not 100% sure why we have empty arrays for users and user
  var users = []
  var user = []
  console.log('inside loginfactory');
function LoginFactory(){

  var _this = this;
  console.log('right inside the loginfactory line 10');

  this.add = function(newUser, callback){
    console.log('inside the add factory function');
    $http.post('/newUser', newUser).then(function(){
      callback()
      });
    };

  this.check = function(getUser, callback){
    console.log('inside the check frontend factory function');
    console.log(getUser);
    $http.post('/getUser', getUser).then(function(){
      callback()
    });
  }
  }//end of function LoginFactory
//////////// not sure why we need to do this? on line 20 --v

return new LoginFactory();

}]); //end off app.facotry function
