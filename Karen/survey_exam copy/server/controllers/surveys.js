console.log("Backend SURVEY Controller");
var mongoose = require('mongoose');
var Surveys = mongoose.model('Surveys');
 mongoose.Promise = global.Promise;

function surveysController(){
    this.show_all = function(req, res){
        Surveys.find({}, function(err, all){
            if(err){
                console.log(err);
            } else {
                res.json(all)
            }
        })
    };
    this.index = function(req, res){
        Surveys.findOne({_id:req.params.id},
        function(err, poll){
            console.log(poll)
            res.json(poll);
        })
    };
    this.delete = function(req, res){
        Surveys.remove({_id: req.params.id}, function(err){
            res.json(err);
        })
    };
    this.add = function(req, res){
        var new_poll = new Surveys({
            name: req.body.name,
            question: req.body.question,
            a: req.body.a,
            b: req.body.b,
            c: req.body.c,
            d: req.body.d
        });
        new_poll.save(function(err){
            if(err){
                console.log('didnt save ?');
                res.json(err);
            } else {
                console.log("added a survey!")
                res.json(new_poll);
            }
        })
    };
    this.show_one = function(req, res){
        Surveys.findOne({_id:req.params.id}, function(err, poll){
            console.log(poll);
            res.json(poll)
        })
    };
    this.updateA = function(req, res){
        Surveys.findOne({_id:req.params.id}, function(err, poll){
            poll.voteA = req.body.voteA
            poll.save(function(err){
                console.log('updated');
                res.json(poll);
            })
            console.log('yoyoyoyoyo');
        })
    };
    this.updateB = function(req, res){
        Surveys.findOne({_id:req.params.id}, function(err, poll){
            poll.voteb = req.body.voteB
            poll.save(function(err){
                console.log('updated');
                res.json(poll);
            })
            console.log('yoyoyoyoyo');
        })
    };
    this.updateC = function(req, res){
        Surveys.findOne({_id:req.params.id}, function(err, poll){
            poll.voteC = req.body.voteC
            poll.save(function(err){
                console.log('updated');
                res.json(poll);
            })
            console.log('yoyoyoyoyo');
        })
    };
    this.updateD = function(req, res){
        Surveys.findOne({_id:req.params.id}, function(err, poll){
            poll.voteD = req.body.voteD
            poll.save(function(err){
                console.log('updated');
                res.json(poll);
            })
            console.log('yoyoyoyoyo');
        })
    };
    this.index = function(req, res){
        Surveys.find({}, function(err, polls){
            if(err){
                console.log(err);
            } else{
                res.json(polls);
            }
        })
    }

}

module.exports = new surveysController();
