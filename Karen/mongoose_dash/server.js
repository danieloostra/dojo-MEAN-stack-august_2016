var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dash');

var MonsterDashSchema = new mongoose.Schema({
    name: String,
    type: String,
    size: String,
    mood: String


});

mongoose.model('Monster', MonsterDashSchema);
var Monster = mongoose.model('Monster');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    Monster.find({}, function(err, monsters){
        console.log(monsters);
        if(err){
            console.log("wrong");
        } else{
            response.render('index', {info: monsters})
        }
    });

});

app.get('/monsters/new', function(request, response){
    response.render('add')
})

app.post('/monsters/new', function(request, response){
    var monster = new Monster({name: request.body.name, type: request.body.type, size: request.body.size, mood: request.body.mood});
    Monster.save(function(err){
        if(err){
            console.log("something went wrong");
        } else {
            console.log('successfully added a new monster!');
            response.redirect('/');
        }
    });
});

app.get('/monsters/:id', function(request, response){
    Monster.findOne({_id: request.params.id }, function(err, monsters){
        console.log(monsters);
        response.render("monster", {info:monsters})
    })
})

app.get('/monsters/:id/edit', function(request, response){
    Monster.findOne({_id: request.params.id}, function(err, monster){
        console.log(monster)
        response.render('edit', {info:monster})

    })

})

app.post('/monsters/:id/edit', function(request, response){
    Monster.findOne({_id:request.params.id}, function(err, monsters){
        monsters.name = request.body.name,
        monsters.type = request.body.type,
        monsters.size = request.body.size,
        monsters.mood = request.body.mood
        monsters.save(function(err){

        })
        response.redirect('/')
    })
})


app.post('/monsters/:id/delete', function(request, response){
    Monster.remove({_id: request.params.id}, function(err){
        response.redirect('/')

    })
})

app.listen('8000', function(){
    console.log("listening on port 8000")
})
