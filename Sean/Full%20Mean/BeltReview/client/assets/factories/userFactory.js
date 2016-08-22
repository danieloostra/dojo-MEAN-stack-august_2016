app.factory('userFactory', ['$http', function($http){
	function userFactory(){
		this.test = function(newuser, callback){
			$http.post('/login', newuser).then(function(returned_data){
				callback(returned_data.data)
			})
		}
		this.dashboard = function(callback){
			$http.get('/dashboard').then(function(data){
				callback(data.data)
			})
		}
		this.getcategories = function(callback){
			$http.get('/getcat').then(function(data){
				callback(data.data)
			})
		}
		this.addCat = function(newcat, callback){
			$http.post('/addcat', newcat).then(function(data){
				callback()
			})
		}
		this.addTopic = function(newtopic,callback){
			$http.post('/addtopic', newtopic).then(function(data){
				callback()
			})
		}
		this.getUser = function(id, callback){
			$http.get('/user/' + id).then(function(data){
				callback(data.data)
			})
		}
		this.getTopic = function(id, callback){
			$http.get('/topic/' + id).then(function(data){
				callback(data.data)
			})
		}
		this.addPost = function(newpost, callback){
			$http.post('/addpost', newpost).then(function(data){
				callback()
			})
		}
		this.addComment = function(newcomm, callback){
			$http.post('/addcomment', newcomm).then(function(data){
				callback()
			})
		}
		this.upvote = function(postid, callback){
			$http.get('/upvote/' + postid).then(function(data){
				callback()
			})
		}
		this.downvote = function(postid, callback){
			$http.get('/downvote/' + postid).then(function(data){
				callback()
			})
		}

	}
	return new userFactory();
}])