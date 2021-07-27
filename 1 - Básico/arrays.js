let nomes = ['Luiz', 'Maria', 'João', 'Anderson', 'Giovanna'];

console.log(nomes);  // Retorna o array completo
console.log(nomes[4]);  // Retorna o elemento do array apontado pelo índice

nomes[5] = 'Paulina';  // Altera um elemento no índice do array

console.log(nomes);
console.log(nomes.length);  // Retorna a quantidade de elementos no array

nomes[nomes.length] = 'Gislane';  // Adiciona um elemento ao final

nomes.push('Chaves');  // Adiciona um elemento ao final

console.log(nomes);

nomes.unshift('André');  // Adicona um elemento no começo

console.log(nomes);

nomes.pop();  // Remove elemento do final
nomes.shift();  // Remove elemento do início

console.log(nomes);

console.log(nomes.slice(0, 5));  // Retorna uma parte do array
console.log(nomes.slice(0, -4));  // Retorna uma parte do array

// Array: type Object
// nomes instance Array = True
