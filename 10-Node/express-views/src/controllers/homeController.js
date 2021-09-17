exports.paginaInicial = (request, response) => {
    response.render('index')
}

exports.trataPost = (req, res) => {
    res.send('Sou sua nova rota de post')
}
