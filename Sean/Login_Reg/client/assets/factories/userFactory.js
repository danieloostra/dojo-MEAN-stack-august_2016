app.factory('userFactory', ['$http', function($http){
	function userFactory(){
		this.create = function(newuser, callback){
			$http.post('/register', newuser).then(function(returned_data){
				callback(returned_data.data)

			})	
		}
		this.login = function(olduser, callback){
			$http.post('/login', olduser).then(function(returned_data){
				callback(returned_data.data)
			})
		}
	}
	return new userFactory()
}])