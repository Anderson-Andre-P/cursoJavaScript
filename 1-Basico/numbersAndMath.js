// Numbers

let num1 = 1;  // Number
let num2 = 2.539;  // Number
let num3 = 10;  // Number

console.log(num1 + num2);  // Faz a soma
console.log(num1.toString() + num2);  // Transforma num1 em string de forma  temporária
console.log(typeof num1);  // Retorna o type de num1
num1 = num1.toString();  // Transforma num1 em string permanentemente
console.log(num3.toString(2));  // Retorna o num3 em formato de binário
console.log(num2.toFixed(2));  // Arredonda para duas casas decimais
console.log(Number.isInteger(num3));  // Retorna se é inteiro ou não
num2 = Number(num2.toFixed(0));  // Converte para o tipo number e resolve o problema da imprecisão
console.log(Number.isInteger(num2));  // Retorna true

// Math

let num11 = 9.57;
let num12;
num12 = Math.floor(num11);  // Math.floor arredonda para baixo
console.log(num12)
num12 = Math.ceil(num11);  // Math.ceil arredonda para cima
console.log(num12)
num12 = Math.round(num11);  // Math.round arredonda para o número inteiro mais próximo
console.log(num12)
console.log(Math.max(1, 2, 3, 4, 50, 100, -5, 3, -101));  // Math.max retorna o maior elemento de um vetor
console.log(Math.min(1, 2, 3, 4, 50, 100, -5, 3, -101));  // Math.max retorna o menor elemento de um vetor
console.log(Math.random());  // Math.random retorna um número aleatório maior do que 0 e menor do que 1
let num13 = Math.random() * (10 - 5) + 5;  // Gera um número aleatório entre 5 e 10
console.log(Math.round(num13));
console.log(1/0);  // Retorna infinity ou true

// Exercícios

num = prompt('Digite um número');
num = Number(num);
document.body.innerHTML += `Você digitou o número <strong>${num}</strong>.</br>`;
document.body.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(num)}</strong>.</br>`;
document.body.innerHTML += `É inteiro? <strong>${Number.isInteger(num)}</strong>.</br>`;
document.body.innerHTML += `Não é um número? <strong>${Number.isNaN(num)}</strong>.</br>`;
document.body.innerHTML += `Arredondando para baixo: <strong>${Math.floor(num)}</strong>.</br>`;
document.body.innerHTML += `Arredondando para cima: <strong>${Math.ceil(num)}</strong>.</br>`;
document.body.innerHTML += `Arredondando para duas casa decimais: <strong>${num.toFixed(2)}</strong>.</br>`;