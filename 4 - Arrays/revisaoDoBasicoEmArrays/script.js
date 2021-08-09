// const nomes = ['Eduardo', 'Maria', 'Joana', 'Anna', 'Flávia'];
// // const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'João';
// delete nomes[2];
// nomes.push('Carol');  // add no fim
// nomes.unshift('Ricardo');  // add no inicio
// console.log(nomes);
// console.log(nomes.length);

// const novo = nomes;  // novo tem valores por referencia de nomes
// novo.pop(); // remove do fim
// novo.shift();  // remove no incio
// console.log(nomes);
// console.log(novo);

// const news = [...nomes];
// console.log(news);

// const outro = nomes.slice(0, 2);  // vai do indice 0 até o indice 2 (também aceita valores negativos)
// console.log(outro);


const completeName = 'Anna Flávia';
const names = completeName.split(' ');  // Separa uma string de acordo com o que foi passado dentro das '', nesse exemplo separa a string nos espaços
console.log(names);

const fullName = names.join(' ');  // faz o contrário do split, ou seja, junta elementos de um array e transforma em uma única string
console.log(fullName);
