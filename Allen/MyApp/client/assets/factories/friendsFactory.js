
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = [];
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    // this.show = function(){// what parameters do we need?
    //   $http.get('/friends').then(function(return_data){
    //     console.log(returned_data.data);
    //     if (trypeof(callback) == 'function'){
    //       callback(returned_data.data)
    //     }
    //   })
    // };
    this.edit = function(user ,id ,callback){
      $http.post('/friends/' + id, user).then(function(returned_data){
        callback()
      });
    };

    this.getFriend = function(id, callback){
      $http.get('/friends/' + id).then(function(returned_data){
        console.log(returned_data);
        callback(returned_data.data);
    })
  };
    this.index = function(callback){
      console.log("inside factory, before entering server");
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log("inside factory.index's callback");
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){
      console.log(id);
      $http.delete('/friends/'+ id).then(function(){
        callback()
      })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.


  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
