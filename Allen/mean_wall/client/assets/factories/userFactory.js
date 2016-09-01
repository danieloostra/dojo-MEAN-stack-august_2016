app.factory('userFactory', ['$http', function($http){
  function userFactory(){

console.log('inside userFactory');

		this.login = function(user, callback){
			$http.post('/login', user).then(function(returned_data){
        console.log(returned_data.data);

        callback(returned_data.data)
			})
		}
    this.message = function(message, callback){
      console.log('inside the userfactory, message method');
      console.log(message);
      $http.post('/message', message).then(function(returned_data){
        callback(returned_data.data)
      })
    }
    this.getmessage = function(callback){
      console.log('inside the getmessage function');
      $http.get('/getmessage').then(function(returned_data){
        console.log(returned_data)
        callback(returned_data.data)
      })
    }
    this.usercomment = function(newcomment, callback){
      console.log('inside the usercomment function');
      $http.post('/comment', newcomment).then(callback())
    }
	}
	return new userFactory()
}])
