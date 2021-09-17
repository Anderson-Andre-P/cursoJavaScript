exports.paginaInicial = (request, response) => {
    response.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome"></input>
        <button>Enviar Formulário</button>
    </form>
`);
}

exports.trataPost = (req, res) => {
    res.send('Sou sua nova rota de post')
}
