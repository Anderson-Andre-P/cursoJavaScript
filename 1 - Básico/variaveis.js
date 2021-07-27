let nome = 'Anderson';

console.log(nome, 'nasceu em 1999');
console.log('Em 2000', nome, 'estava com 1 ano');
console.log(nome, 'está solteiro');

nome = 'André'

console.log(`${nome} é inteligente!`);


const nascimento = 1999;

console.log(`Anderson nasceu em ${nascimento}`);
console.log(`${nascimento} foi o último ano do 2º milenio`)


console.log(typeof nascimento);
console.log(typeof nome);

/* Exercícios */
console.log('');
console.log('');

const primeiroNome = 'André';
const sobrenome = 'Pereira';
const altura = 1.85;

let peso = 95;
let idade = 22;
let imc;

imc = peso / (altura * altura);

let anoNascimento;

anoNascimento = 2021 - idade;

console.log(`${primeiroNome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg.`)
console.log(`Ele mede ${altura}m e seu IMC é igual a ${Math.round(imc)}.`)
console.log(`${primeiroNome} nsceu em ${nascimento}.`)
