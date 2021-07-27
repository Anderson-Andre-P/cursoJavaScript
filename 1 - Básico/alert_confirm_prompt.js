/*
alert é uma função que está dentro do objeto window (window é a janela do navegador).
*/

// alert('Olá, mundo!');

// const confirma1 = confirm('Deseja apagar?'); // retorna true ou false
// let confirma2 = confirm('Deseja apagar?'); // retorna true ou false

// let num1 = prompt('Digite um número'); // caixa de texto


// let num2 = prompt('Digite um número');
// let num3 = prompt('Digite outro número');

// num2 = Number(num2);
// num3 = Number(num3);

// const resultado = num2 + num3;

// alert(`O resultado da operação foi ${resultado}`);


let varA = 'A';
let varB = 'B';
let varC = 'C';


let varAux;

varAux = varA; // a
varA = varB; // c
varB = varC; // c
varC = varAux; // a

console.log(varA, varB, varC);

[varA, varB, varC] = [varC, varA, varB];

console.log(varA, varB, varC);

