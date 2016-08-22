app.factory('surveyFactory', ['$http', function($http){
    function surveyFactory(){
        var _this = this;
        this.login = function(new_user, callback){
            $http.post('/login', new_user).then(function(returned_data){
                callback(returned_data.data)
            });
        };
        this.index = function(callback){
            $http.get('/poll').then(function(returned_data){
            poll = returned_data.data;
            callback(poll);
            })
        };
        this.all_polls = function(callback){
            $http.get('/dashboard').then(function(returned_data){
                callback(returned_data.data)
            })
        };
        this.create = function(newpoll, callback){
            $http.post('/create', newpoll).then(function(returned_data){
                console.log(returned_data);
                console.log('create in the factory');
                console.log(returned_data.data);
                if(typeof(callback) == 'function'){
                    callback(returned_data.data)
                }
            })
        };
        this.delete = function(id, callback){
            $http.delete('/delete/' + id).then(function(returned_data){
                console.log(returned_data);
                if(typeof(callback) == 'function'){
                    callback(returned_data.data)
                }
            })
        },
        this.show_one = function(id, callback){
            $http.get('/poll/'+ id).then(function(returned_data){
                console.log('showing one');
                console.log(returned_data);
                callback(returned_data.data)
            })
        };
        this.updateA = function(id, newnum, callback){
            $http.put('/voteA/'+ id , newnum).then(function(returned_data){
                if(typeof (callback) == 'function'){
                    callback(returned_data.data);
                }
            })
        };
        this.updateB = function(id, newnum, callback){
            $http.put('/voteA/'+ id , newnum).then(function(returned_data){
                if(typeof (callback) == 'function'){
                    callback(returned_data.data);
                }
            })
        };
        this.updateC = function(id, newnum, callback){
            $http.put('/voteA/'+ id , newnum).then(function(returned_data){
                if(typeof (callback) == 'function'){
                    callback(returned_data.data);
                }
            })
        };
        this.updateD = function(id, newnum, callback){
            $http.put('/voteA/'+ id , newnum).then(function(returned_data){
                if(typeof (callback) == 'function'){
                    callback(returned_data.data);
                }
            })
        };
    this.index = function(callback){
        $http.get('/polls').then(function(returned_data){
            polls = returned_data.data;
            callback(polls)
        })
    };

}
    return new surveyFactory;
}]);
