exports.paginaInicial = (req, response, next) => {
    response.render('index')
    console.log(`'Página inicial' olha o que rem na req.session.nome ${req.session.nome}`)
    next()
}

exports.trataPost = (req, res) => {
    res.send(req.body)
}
