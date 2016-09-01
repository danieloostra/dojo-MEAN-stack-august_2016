var mongoose = require('mongoose')
var Comment = mongoose.model('comment')
var Message = mongoose.model('message')

console.log('inside comments.js');

function commentController(){

  this.usercomment = function(req, res){
    console.log('inside usercomment method');
    Message.findOne({_id:req.body.message_id}, function(err, message){
      var newcomment = new Comment({ comment: req.body.comment, username: req.body.username.username})

      Comment._message = req.body.message_id;
      console.log(message);
      console.log('we are about to push some data into message._comment');
      // console.log(newcomment);
      message._comment.push(newcomment);

      newcomment.save(function(err){
        if(err){
          res.json(err)

        } else{
            message.save(function(err, message){
                if(err){
                  res.json(err)
                } else{
                  res.json(newcomment)
                }
            })
        }
      })
    })

  }
}
module.exports = new commentController()
