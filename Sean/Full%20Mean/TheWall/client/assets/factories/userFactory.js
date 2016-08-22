app.factory('userFactory', ['$http', function($http){
	function userFactory(){
		this.test = function(newuser, callback){
			$http.post('/login', newuser).then(function(returned_data){
				callback(returned_data.data)
			})
		}
		this.getmess = function(callback){
			$http.get('/getmess').then(function(returned_data){
				callback(returned_data.data)
			})
		}
		this.postmess = function(newmess,callback){
			$http.post('/postmess', newmess).then(function(returned_data){
				console.log(returned_data)
				callback()
			})
		}
		this.postcomm = function(newcomm, callback){
			$http.post('/postcomm', newcomm).then(function(returned_data){
				console.log(returned_data)
				callback()
			})
		}


	}
	return new userFactory()
}])