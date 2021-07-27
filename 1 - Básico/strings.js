let texto = "Um texto";

console.log(texto);  // Mostra string toda.
console.log(texto[5]);  // Mostra a strings no índice especificado.
console.log(texto.charAt(5));  // Retorna a string no índice especificado.
console.log(texto.concat(' qualquer.'));  // Faz a concatenação de strings.
console.log(texto.indexOf('x'));  // Busca um valor na string e retorna sua posição.
console.log(texto.indexOf('y'));  // Retorna a posição -1 pq não achou no texto.
console.log(texto.lastIndexOf('x', 6));  // Busca da posição 6 para trás.
console.log(texto.match(/[a-z]/g));  // É uma experssão regular que retorna todas as palavras minúsculas.
console.log(texto.match(/[a-z]/));  // É uma experssão regular que retorna a primeira letra minúscula.
console.log(texto.search(/[a-z]/));  // Retorna a primeira letra minúscula.
console.log(texto.replace('x', 'y'));  // Substitui uma string por outra.
console.log(texto.length);  // Retorna o tamanho da string na variável.
console.log(texto.slice(2, 7));  // Retorna a string com suas delimitações.
console.log(texto.slice(-2));  // Retorna os dois últimos caracteres da string.
console.log(texto.slice(4));  // Retorna a string a partir do índice 4.
console.log(texto.split(''));  // Retorna a string fatiada pelo argumento passado dentro das aspas.
console.log(texto.split('', 5));  // Retorna a string fatiada pelo argumento passado dentro das aspas e limitado pelo parâmetro de limite.
console.log(texto.toUpperCase());  // Retorna a string em maiúscula.
console.log(texto.toLowerCase());  // Retorna a string em minúscula.


// EXERCÍCIOS COM STRINGS
const nome = prompt('Digite seu nome completo');
document.body.innerHTML += `O seu nome é ${nome}.</br>`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras.</br>`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}.</br>`;
document.body.innerHTML += `O índice da 1ª letra A no seu nome é ${nome.indexOf('A')}.</br>`;
document.body.innerHTML += `O índice da última letra A no seu nome é ${nome.lastIndexOf('A', nome.length)}.</br>`;
document.body.innerHTML += `As três últimas letras do seu nome são: ${nome.slice(-3)}.</br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}.</br>`;
document.body.innerHTML += `Seu nome em maiúsculo: ${nome.toUpperCase()}.</br>`;
document.body.innerHTML += `Seu nome em minúsculo: ${nome.toLowerCase()}.</br>`;
