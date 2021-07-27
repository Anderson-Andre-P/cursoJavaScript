/*
If, else, if e else
*/

const hora = 0;

if (hora >= 6 && hora < 12) {
    console.log('Bom dia.');
}

else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde.');
}

else if (hora >= 18 && hora < 23 || hora >= 0 && hora < 6) {
    console.log('Boa noite.');
}

else {
    console.log('Olá');
}

const number = 10;

if (number >= 0 && number <= 5) {
    console.log(`O número ${number} é maior do que zero e menor do que 5.`);

}

else if (number < 0 || number > 5) {
    console.log(`${number} não está entre 0 e 5.`);

}

else {
    console.log(`${number} não é um número.`);

}
