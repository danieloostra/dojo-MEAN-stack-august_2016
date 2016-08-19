app.factory('usersFactory', ['$http', function($http){
    function usersFactory(){
        var _this = this;

        this.register = function(newUser, callback){
            $http.post('/register', newUser).then(function(returned_data){
                console.log(returned_data);
                if (typeof(callback) == 'function'){
                    callback(returned_data.data);
                }
            });
        };
        this.index = function(callback){
            $http.get('/users').then(function(returned_data){
            console.log(returned_data);
            console.log(returned_data.data);
            users = returned_data.data;
            callback(users);
            })
        };
        this.login = function(data, callback){
            $http.post('/login', data).then(callback);
        }
}
    return new usersFactory;
}]);
