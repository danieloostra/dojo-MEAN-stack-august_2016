var express = require('express');
var mongoose = require('mongoose')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/messageboard');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {type: String, required:true, minlength: 4},
    post: {type:String, required:true},
    _comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }, {timestamps:true});

mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post')

var CommentSchema = new mongoose.Schema({
    name: {type: String, required:true, minlength: 4},
    comment: {type: String, required: true},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'}
    },{timestamps:true});
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment')


app.get('/', function(req, res) {
    Post.find({}).populate('_comments').exec(function(err,posts){
        if(err){
            console.log('OH SHIT')
        }
        else{
            for(var x in posts){
                for(var i = 0; i< posts[x]._comments.length; i++){
                    console.log(posts[x]._comments[i].name)
                    console.log(posts[x]._comments[i].comment)
                }
            }
            console.log(posts[0]._comments)
            res.render('index', {posts: posts})
        }
    })
})

app.post('/postmessage', function(req,res){
    var post = new Post({name:req.body.name, post: req.body.post})
    post.save(function(err){
        if(err){
            console.log('HELPPPPPP')
        }
        else{
            res.redirect('/')
        }
    })
})

app.post('/postcomment/:id', function(req,res){
    Post.findOne({_id: req.params.id}, function(err,post){
        var comment = new Comment({name: req.body.name, comment: req.body.comment})
        comment._post = post._id;
        post._comments.push(comment);
        comment.save(function(err){
            post.save(function(err){
                if(err){console.log("NOOO ERRROR")}
                else {res.redirect('/')}
            })
        })

    })
})


 
app.listen(8000, function() {
    console.log("listening on port 8000");
})