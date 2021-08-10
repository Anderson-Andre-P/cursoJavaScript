// filter -> sempre vai retornar um array com a mesma quantidade de elementos ou menos.

// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//     return valor > 10;
// }

// const numbersFilter = numbers.filter((valor, indice, array) => {
    //     // console.log(`Valor: ${valor}, índice: ${indice}, array completo: ${array}`);
    //     return valor > 10;
    // });
    
// const numbersFilter = numbers.filter(valor => valor > 10);
// console.log(numbersFilter)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Retornando nomes que contém 5 letras ou mais
const bigName = pessoas.filter(obj => obj.nome.length >= 5);
console.log(bigName);

// Retornando pessoas com mais de 50 anos
const bigAge = pessoas.filter(obj => obj.idade >= 50);
console.log(bigAge);

// Retornando nomes que terminam com A
const lastLetterA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(lastLetterA);
