var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dash');

var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    message: {type: String, required: true},
    _comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]},{timestamps: true});

var commentSchema = new mongoose.Schema({
    _message:{type: Schema.Types.ObjectId, ref: "Message"},
    comment: {type: String, required: true },
    name:{type: String, required: true}
}, {timestamps: true});

mongoose.model('Message', messageSchema);
var Message = mongoose.model('Message');
mongoose.model('Comment', commentSchema);
var Comment = mongoose.model('Comment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    Message.find({}, function(err, message){
        console.log(message);
        if(err){
            console.log("wrong");
}
        })
    .populate('_comments')
    .exec(function(err, message){
        response.render('index', {info: message});
    });
});



app.post('/messages/add', function(request, response){
    var messages = new Message({name: request.body.name, message: request.body.message});
    messages.save(function(err){
        if(err){
            request.render('index', {title: "ERROR", errors: user.errors})
            console.log("something went wrong");
        } else {
            console.log('successfully added a new message!')
            console.log(messages)
            response.redirect('/')
        }
    });
});

app.post('/messages/addcomment/:id', function(request, response){
    Message.findOne({_id: request.params.id}, function(err, message){
        var comment = new Comment({name:request.body.name, comment: request.body.comment});
        comment._message = message._id;
        message._comments.push(comment);
        comment.save(function(err){
            console.log("what");
            console.log(comment);
            message.save(function(err){
                if(err) {
                    request.render('index', {title: "ERROR", errors: user.errors})
                    console.log('Error');
                } else{
                    console.log('yes!')
                    response.redirect('/')
                }
            });
        });
    });
})


app.listen('8000', function(){
    console.log("listening on port 8000")
})
