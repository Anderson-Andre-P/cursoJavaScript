const pessoa = {
    nome:'André',
    sobrenome: 'Eleutério',
    idade: 22,
    endereco: {
        rua: 'Miguel',
        numero: 40
    }
};

// console.log(pessoa.nome);

// let nome = pessoa.nome;
// console.log(nome);

// Atribuição via desestruturação
let {nome, sobrenome, idade, endereco: {rua, numero}, endereco} = pessoa;
console.log(nome, sobrenome, idade);

console.log(rua, numero);

console.log(endereco);
