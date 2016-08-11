var mongoose = require('mongoose');
var Monster = mongoose.model('Monster');

module.exports = {

    show: function(request, response){
        Monster.find({}, function(err, monsters){
            console.log(monsters);
            if(err){
                console.log("wrong");
            } else{
                response.render('index', {info: monsters})
            }
        })
    },

    add_monster: function(request, response){
        var monster = new Monster({name: request.body.name, type: request.body.type, size: request.body.size, mood: request.body.mood});
        monster.save(function(err){
            if(err){
                console.log("something went wrong");
            } else {
                console.log('successfully added a new monster!');
                response.redirect('/');
            }
        })
    },

    get_id: function(request, response){
        Monster.findOne({_id: request.params.id }, function(err, monsters){
            console.log(monsters);
            response.render("monster", {info:monsters})
        })
    },

    get_edit: function(request, response){
        Monster.findOne({_id: request.params.id}, function(err, monster){
            console.log(monster)
            response.render('edit', {info:monster})
        })
    },

    edit: function(request, response){
        Monster.findOne({_id:request.params.id}, function(err, monsters){
            monsters.name = request.body.name,
            monsters.type = request.body.type,
            monsters.size = request.body.size,
            monsters.mood = request.body.mood
            monsters.save(function(err){
            })
            response.redirect('/')
        })
    },

    delete: function(request, response){
        Monster.remove({_id: request.params.id}, function(err){
            response.redirect('/')
        })
    }
}
