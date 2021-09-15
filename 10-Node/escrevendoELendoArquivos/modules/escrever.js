const fs = require('fs').promises
// const path = require('path')
// const caminhoArquivo = path.resolve(__dirname, 'teste.json')

// const pessoas = [
//     {nome: 'Anderson'},
//     {nome: 'André'},
//     {nome: 'Janderson'},
//     {nome: 'Ana'},
//     {idade: 22},
// ]

// const json = JSON.stringify(pessoas, '', 2)
module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' }) // w cria novo arq, a att arq
}
