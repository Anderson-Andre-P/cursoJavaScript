const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somando todos os elementos do array
const total = numbers.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

// Retornando os pares
const pares = numbers.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(pares);

// Retornando a soma de todos os pares
const somaPar = numbers.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) {
        acumulador += valor;
    }

    return acumulador;
}, 0);
console.log(somaPar);

// Retornando o dobro de cada valor do array
const dobro = numbers.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 72 },
    { nome: 'Wallace', idade: 47 },
];

// Retornando a pessoa mais velha
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
