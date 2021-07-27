// FizzBuzz

function fizzBuzz(numero) {
    if (typeof(numero) !== 'number') {
        return 'Você não digitou um número'
    }
    else if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (numero % 3 === 0) {
        return 'Fizz';
    }
    else if (numero % 5 === 0) {
        return 'Buzz';
    }
    
    return numero;
}
console.log('a',fizzBuzz('a'));
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}