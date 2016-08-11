var monster = require('../controllers/monsters.js');


module.exports = function(app){
    app.get('/', function(request, response){
        monster.show(request, response)
    })

    app.get('/monsters/new', function(request, response){
        response.render('add')
    })

    app.post('/monsters/new', function(request, response){
        monster.add_monster(request, response)
    })

    app.get('/monsters/:id', function(request, response){
        monster.get_id(request, response)
    })

    app.get('/monsters/:id/edit', function(request, response){
        monster.get_edit(request, response)
    })

    app.post('/monsters/:id/edit', function(request, response){
        monster.edit(request, response)
    })

    app.post('/monsters/:id/delete', function(request, response){
        monster.delete(request, response)
    })
}
