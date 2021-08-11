/*

For clássico - utilizar com iteraveis (arrays e strings)
For in - retorna o índice ou chave (arrays, strings e objetos)
For of - retorna o valor em si (iteráveis, arryas e strings)

*/




const nome = 'Anderson André';
const frutas = ['Pêra', 'Uva', 'Maça', 'Banana']

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('');
console.log('');

for (let i in nome) {
    console.log(nome[i]);
}

console.log('');
console.log('');

for (let i of nome) {
    console.log(i);
}

console.log('');
console.log('');

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log('');
console.log('');

for (let i in frutas) {
    console.log(frutas[i]);
}

console.log('');
console.log('');

for (let i of frutas) {
    console.log(i);
}

console.log('');
console.log('');

frutas.forEach(function(element) {
    console.log(element);
});