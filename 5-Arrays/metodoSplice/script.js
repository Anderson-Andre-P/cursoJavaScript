const names = ['Maria', 'Jão', 'Eduardo', 'Gabriela', 'Anna', 'Flávia'];
// names.splice(indice, delete, elem1, elem2, elem3);
console.log(names);
const removidos = names.splice(3, 1);  // Removeu o elemento do indice 3
const adicionados = names.splice(3, 0, 'José');  // add elemento no indice 3
const simuladorPop = names.splice(-1, 1);  // simulando o pop
const simuladorShift = names.splice(0, 1);  // simulando o shift
const simuladorPush = names.splice(names.length, 0, 'André');  // simulando o push
const simuladorUnshift = names.splice(0, 0, 'Anderson');  // simulando o unshift

console.log(names, removidos, adicionados);
