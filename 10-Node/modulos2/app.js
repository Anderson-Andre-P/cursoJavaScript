// const Cachorro = require('./B/A/mod')
// // const mutiplicacao = require('./mod')

// // console.log(mutiplicacao(2, 2))

// const dog = new Cachorro('Mel');
// dog.latir();

const path = require('path')
console.log(path.resolve(
    __dirname, '..', '..', 'arquivos'
));

console.log(__dirname);
console.log(__filename);
