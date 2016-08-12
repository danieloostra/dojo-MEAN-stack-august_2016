var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_quotes');

var Schema = mongoose.Schema;
/////////////   post
var postSchema = new mongoose.Schema({
 name: {type: String, required: true },
 message: {type: String, required: true },
 _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });

////////////   comment
var commentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 name: {type: String, required: true },
 comment: {type: String, required: true }
}, {timestamp: true });


mongoose.model('Post', postSchema);
var Post = mongoose.model('Post');

mongoose.model('Comment', commentSchema);
var Comment = mongoose.model('Comment');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true}));

 app.use(express.static(path.join(__dirname, './static')));
 app.set('views', path.join(__dirname, './views'));
 app.set('view engine', 'ejs');

app.get('/', function(req, res){
  Post.find({}, false, true ).populate('_comments').exec(function(err, messages){
        console.log(messages);
	      res.render('index', {messages: messages});
	});

  ///// need to add comment.find to get the comments associated with the POST messages
});

 app.post('/post_message', function(request, response){
  var text = new Post({name: request.body.name, message: request.body.message});
  text.save(function(err){
    if(err){
      console.log('something went wrong');
    } else {
      console.log('succesfully added a text!');
      response.redirect('/')
    }
  });
});

  app.post('/post_submessage/:id', function(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
      var comment = new Comment({name: req.body.name, comment: req.body.comment});

      comment._post = post._id;
      comment.save(function(err){
        post._comments.push(comment);

        post.save(function(err){
             if(err) {
                  console.log('Error');
             } else {
                  res.redirect('/');
             }
         });
       });
    });
  });


 app.listen('8000', function(){
   console.log('listening to 8000');
 });
