var userFactory = [ function() {

        var users = [
        { name: "mike"}
        ];
        var factory = {}

        factory.index = function(callback) {
          if (typeof(callback) === 'function') {
            callback(users);
          }
        };
        factory.create = function(newUser, callback) {
          if (typeof(newUser) === 'object') {
            users.push(newUser)
          }
          if (typeof(callback) === 'function') {
            callback(users);
          }
        };
        /* perhaps a comment here about what this does would help us understand it! */
        factory.update = function(updateUser, idx, callback) {
          if (users[idx]) {
            for (var key in updateUser) {
              users[idx][key] = updateUser[key];
            }
          }
          if (typeof(callback) === 'function') {
            callback(users[idx]);
          }
        }
        factory.show = function(idx, callback) {
          if (typeof(callback) === 'function') {
            callback(users[idx]);
          }
        }
        factory.delete = function(idx, callback) {
          if (users[idx]) {
            users.splice(idx, 1);
          }
          if (typeof(callback) === 'function') {
            callback(users);
          }
        }
      
      /*
        What is this factory returning?  Could we extend this code to be reused?
      */
      return factory;


    }]