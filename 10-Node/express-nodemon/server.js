const { request } = require('express');
const express = require('express');
const app = express();

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome"></input>
            <button>Enviar Formulário</button>
        </form>
    `);
});

app.post('/', (request, response) => {
    response.send('Recebi o fomrulário')
})

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente!')
})

app.listen(3333, () => {
    console.log('Acessar http://localhost:3333')
    console.log('Servidor executando na porta 3333');
});
