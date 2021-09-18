// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Um titulo de testes 2',
//     descricao: 'Uma descrição de testes.  2'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

exports.paginaInicial = (req, response, next) => {
    // req.session.usuario = { nome: 'André', logado: true }
    // console.log(req.session.usuario)
    // req.flash('info', 'Olá mundo!')
    // req.flash('error', 'Erro')
    // req.flash('success', 'Sucesso')
    // console.log(req.flash('error'), req.flash('info'), req.flash('success'))
    response.render('index')
    // console.log(`'Página inicial' olha o que rem na req.session.nome ${req.session.nome}`)
    // next()
}

exports.trataPost = (req, res) => {
    res.send(req.body)
}
