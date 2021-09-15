const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'Anderson'},
//     {nome: 'André'},
//     {nome: 'Janderson'},
//     {nome: 'Ana'},
//     {idade: 22},
// ]

// const json = JSON.stringify(pessoas, '', 2)

// escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    // return dados
    renderizaDados(dados)
}

// const dadosArquivos = lerArquivo(caminhoArquivo)
//     .then(dados => console.log(dados))
//     .catch((e) => console.log(e))

lerArquivo(caminhoArquivo)
function renderizaDados(dados) {
    dados = JSON.parse(dados)

    dados.forEach(val => {
        console.log(val)
    });
}
