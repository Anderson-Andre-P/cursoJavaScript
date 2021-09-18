// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Um titulo de testes 2',
//     descricao: 'Uma descrição de testes.  2'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

exports.paginaInicial = (req, response, next) => {
    response.render('index')
    console.log(`'Página inicial' olha o que rem na req.session.nome ${req.session.nome}`)
    next()
}

exports.trataPost = (req, res) => {
    res.send(req.body)
}
