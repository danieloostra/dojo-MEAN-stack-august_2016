var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {

    show: function(request, response){
        People.find({}, function(err, person){
            console.log(person);
            if(err){
                console.log("wrong");
            } else{
                response.render('index', {info: person})
            }
        })
    },

    add_person: function(request, response){
        var person = new People({name: request.params.name});
        person.save(function(err){
            if(err){
                console.log("something went wrong");
            } else {
                console.log('successfully added a new person!');
                response.redirect('/');
            }
        })
    },

    get_id: function(request, response){
        People.findOne({name: request.params.name }, function(err, person){
            console.log("!!!!!!!!!!!!!");
            console.log(person);
            response.render("person", {info:person})
        })
    },


    delete: function(request, response){
        People.remove({name: request.params.name}, function(err){
            console.log('removed!');
            response.redirect('/')
        })
    }
}
