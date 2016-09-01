
var mongoose = require('mongoose');
var Message = mongoose.model('message')

console.log('inside messages.js');

function messagesController(){
  this.message = function(req, res){
    var newmessage = new Message({ message: req.body.message, username: req.body.username.username })
    newmessage.save(function(err){
      if(err){
        res.json(err)
      } else{
        console.log(newmessage);
        res.json(newmessage)
      }
    })
  }

  this.getmessage = function(req, res){
    console.log('inside getmessage method');

    Message.find({}).populate('_comment').exec(function(err, messages){

      console.log(messages);
      if(err){
        res.json(err)
      } else {
        res.json(messages)
      }
    })
  }

}

module.exports = new messagesController()
