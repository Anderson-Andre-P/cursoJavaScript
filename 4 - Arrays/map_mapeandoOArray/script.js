// // map -> sempre vai retornar um array com a mesma quantidade de elementos.

// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// // Dobrando o valor de cada elemento do array
// const dobro = numbers.map(function(valor) {
//     return valor * 2;
// });
// console.log(dobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa (para cada elemento)
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Removendo apenas a chave 'nome' do objeto (de cada elemento)
// const idades = pessoas.map(obj => {
//     // delete obj.nome;
//     return { idade: obj.idade };
// });
const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

// Adicionando uma chave id (em cada objeto)
const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
    // obj.id = indice + 1;
    // return obj;
});
console.log(comIds);
console.log(pessoas);
