require('dotenv').config();

const { request } = require('express');
const express = require('express');
const app = express();

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectei na base de dados')
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')
const meuMiddlewareGlobal = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(meuMiddlewareGlobal)

app.use(routes)

app.on('pronto', () => {
    app.listen(3333, () => {
        console.log('Acessar http://localhost:3333')
        console.log('Servidor executando na porta 3333');
    });
})


