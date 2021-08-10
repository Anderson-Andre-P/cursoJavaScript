function funcao(a, b, c, d, e, f = 3) {
    console.log('Oie.');
    console.log(arguments); // Retorna um objeto com todos os argumentos passados
    console.log(a, b, c, d, e, f);
    console.log(a + e);  // A função não recebeu o parâmetro 'e' então vai retornar NaN
    e = e || 0;  // 'e' obteve o valor padrão 0, mas também pode inserir o valor padrão nos argumentos da função (que nem o 'f')
    console.log(a + e);
    console.log(b + f);
}
funcao(0, 1, 2, 3, undefined, undefined);  // Dentro dos () são colocados os argumentos

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}

conta('*', 1, 10, 20, 30, 40, 50);
