var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');
module.exports = {
  index: function(req, res){  
    Mongoose.find({},function(err,mongooses){
      if(err){

        console.log('indexSomething went wrong')
      }
      else{
        res.render('index', {mongooses:mongooses}); 
      }
    })
  },
  new: function(req,res){
    res.render('newmong')
  },
  show: function(req,res){
    Mongoose.findOne({_id:req.params.id}, function(err,mongoose){
        if(err){
            console.log('showSomething went wrong')
        }
        else{
            console.log(mongoose)
            res.render('singmong', {mongoose: mongoose})
        }
    })
  },
  create: function(req, res){
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
  },
  edit: function(req,res){
    Mongoose.findOne({_id:req.params.id}, function(err,mongoose){
      if(err){
        console.log('editSomething went wrong')
      }
      else{
        res.render('editmong', {mongoose: mongoose})
      }
    })
  },
  editnew: function(req,res){
    Mongoose.findOne({_id:req.params.id}, function(err,mongoose){
      if(err){
        console.log('editnewSomething went wrong')
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
  },
  destroy: function(req,res){
    Mongoose.remove({_id:req.params.id}, function(err){
      if(err){
          console.log('record was not deleted')
      }
      else{
          console.log('record was deleted')
          res.redirect('/')
      }
    })
  }
}
