var mongeese = require('../controllers/mongeese.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    mongeese.index(req,res)
  })
  app.get('/mongoose/:id', function(req,res){
    mongeese.show(req, res)
  })
  app.get('/mongooses/new', function (req, res) {
    mongeese.new(req,res)
  })
  app.post('/mongooses', function(req, res){
  	mongeese.create(req,res)
  })
  app.get('/mongoose/:id/edit', function(req,res){
  	mongeese.edit(req,res)
  })
  app.post('/mongoose/:id', function(req,res){
  	mongeese.editnew(req,res)
  })
  app.get('/mongoose/:id/destroy', function(req,res){
  	mongeese.destroy(req,res)
  }) 
}