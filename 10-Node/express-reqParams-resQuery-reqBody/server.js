const { request } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

// /profiles/123 ? campanha=googleads & nome_campanha=seila

app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome"></input>
            <button>Enviar Formulário</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    // res.send(req.params)
    res.send(req.query.nome)
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.send(`O que você me enviou foi: ${request.body.nome}`)
})

app.listen(3333, () => {
    console.log('Acessar http://localhost:3333')
    console.log('Servidor executando na porta 3333');
});
