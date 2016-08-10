var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var AnimalSchema = new mongoose.Schema({
  animal: String,
  size: String
});

mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join( __dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get ('/', function(request, response){
  Animal.find({}, function(err, animals){
    if(err){
      console.log('something went wrong');
    } else{
      response.render('index', {info: animals})
    }
  });
  // response.render('index')
});

app.post('/animal', function(request, response){
  var animal = new Animal({animal: request.body.animal, size: request.body.size});
  animal.save(function(err){
    if(err){
      console.log('something went wrong');
    }
    else {
      console.log('succesfully added a animal!');
      response.redirect('/');
    }
  });
});

app.get('/show/:id', function(request, response){
  Animal.findOne({_id: request.params.id}, function(err, animals){
    response.render('show', {info: animals})
  })
});
/// going to edit the specific animal
app.get('/edit/:id', function(request, response){
  Animal.findOne({_id: request.params.id}, function(err, animal){
    response.render('edit', {animal})
  })
});

/// editing animal
app.post('/edit_submit/:id', function(request, response){
  // var new_animal = new Animal({animal: request.body.animal, size: request.body.size});

  Animal.update({_id: request.params.id}, {animal: request.body.animal, size: request.body.size}, function(err) {
    response.redirect('/');

  });
});

app.get('/delete/:id', function(request, response){
  Animal.remove({_id: request.params.id}, function(err){
    response.redirect('/')
  })
});

app.listen('8000',function(){
  console.log("listening on port 8000");
})
