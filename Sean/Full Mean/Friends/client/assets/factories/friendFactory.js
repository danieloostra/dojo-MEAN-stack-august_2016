app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = [];
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data);
        }
      });
    };
    this.update = function(routeid,newfriend,callback){
      var url = '/friends/' + routeid 
      $http.post(url, newfriend).then(function(user){
        callback(user)
      })
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        users = returned_data.data;
        callback(users);
      })
    };
    this.delete = function(id,callback){
      var url ='/friends/delete/' + id
      $http.get(url).then(function(returned_data){
        users= returned_data.data
        callback(users)
      })
    };
    this.show = function(routeid,callback){
      var url = '/friends/'+routeid 
      $http.get(url).then(function(returned_data){
        user = returned_data.data;
        callback(user);
      });
    }
    this.edit = function(routeid,callback){
      var url = '/friends/'+routeid+'/edit'
      $http.get(url).then(function(returned_data){
        user = returned_data.data;
        callback(user)
      })
    }

  }
  return new FriendsFactory();
}]);