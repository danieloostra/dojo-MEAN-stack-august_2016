var express = require('express');
var mongoose = require('mongoose')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/real_mongoose');
var mongooseSchema = new mongoose.Schema({
	name: String,
	age: Number,
    nickname: String,
    zipcode: Number,
})
mongoose.model('Mongoose', mongooseSchema);
var Mongoose = mongoose.model('Mongoose')

app.get('/', function(req, res) {

	
	Mongoose.find({},function(err,mongooses){
		if(err){
			console.log('Something went wrong')
		}
		else{
    		res.render('index', {mongooses:mongooses});	
		}
	})
})

app.get('/mongooses/new', function(req,res){
    res.render('newmong')
})
 
app.get('/mongooses/:id', function(req, res){

    Mongoose.findOne({_id:req.params.id}, function(err,mongoose){
        if(err){
            console.log('Something went wrong')
        }
        else{
            console.log(mongoose)
            res.render('singmong', {mongoose: mongoose})
        }
    })
})

app.post('/mongooses', function(req,res){
    var mongoose = new Mongoose({name: req.body.name, age: req.body.age, nickname: req.body.nickname, zipcode: req.body.zipcode})
    mongoose.save(function(err){
        if(err){
            console.log('something went wrong')
        }
        else{
            console.log('successfully added a mongoose')
        }
    })
    res.redirect('/');
})

app.get('/mongooses/:id/edit', function(req,res){

    Mongoose.findOne({_id:req.params.id}, function(err,mongoose){
        if(err){
            console.log('Something went wrong')
        }
        else{
            res.render('editmong', {mongoose: mongoose})
        }
    })
})

app.post('/mongooses/:id', function(req,res){

    Mongoose.findOne({_id:req.params.id}, function(err,mongoose){
        if(err){
            console.log('Something went wrong')
        }
        else{
            mongoose.name = req.body.name;
            mongoose.age = req.body.age;
            mongoose.nickname = req.body.nickname;
            mongoose.zipcode = req.body.zipcode;
            mongoose.save(function(err){
                if(err){
                    console.log('Something went wrong')
                }
                else{
                    console.log('Updated record')
                }
            res.redirect('/')
            })
        }
    })
})

app.get('/mongooses/:id/destroy', function(req,res){
    Mongoose.remove({_id:req.params.id}, function(err){
        if(err){
            console.log('record was not deleted')
        }
        else{
            console.log('record was deleted')
        }
    })
    res.redirect('/')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})