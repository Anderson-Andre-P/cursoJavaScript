const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Anderson', sobrenome:'Pereira' }
    console.log()
    console.log('Passei no seu middleware.')
    console.log()
    next()
}

route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res) {
    // console.log('Ainda estou aqui.')
    // console.log(`'Último middleware' olha o que rem na req.session.nome ${req.session.nome}`)
});

route.post('/', homeController.trataPost)

route.get('/contato', contatoController.paginaInicial)

module.exports = route;
