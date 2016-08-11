var person = require('../controllers/peoples.js');


module.exports = function(app){
    app.get('/', function(request, response){
        person.show(request, response)
    })

    app.get('/new/:name/', function(request, response){
        person.add_person(request, response)
    })

    app.get('/remove/:name', function(request, response){
        person.delete(request, response)
    })

    app.get('/:name', function(request, response){
        person.get_id(request, response)
    })
}
