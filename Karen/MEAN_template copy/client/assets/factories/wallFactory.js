app.factory('wallFactory', ['$http', function($http){
    function wallFactory(){
        var _this = this;
        this.register = function(newUser, callback){
            $http.post('/register', newUser).then(function(returned_data){
                console.log(returned_data);
                if (typeof(callback) == 'function'){
                    callback(returned_data.data);
                }
            });
        };
        this.login = function(data, callback){
            $http.post('/login', data).then(callback);
        };
        this.index = function(callback){
            $http.get('/users').then(function(returned_data){
            console.log(returned_data);
            console.log(returned_data.data);
            users = returned_data.data;
            callback(users);
            })
        };
}
    return new wallFactory;
}]);
