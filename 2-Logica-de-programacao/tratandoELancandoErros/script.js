// try, catch, throw

// try {
//     console.log(naoExisto);
// } 

// catch (err) {
//     console.log('naoExisto não existe.');
//     // console.log(err);
// }

// function soma(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error('X e Y precisam ser números');
//     }
//     return x + y;
// }

// try {
//     console.log(soma(1, '1'));

// } catch (err) {
//     // console.log(err);
//     console.log('Alguma coisa mais amigável.');
// }


try {
    // Parte executada quando não há erros
    console.log('Abri um arquivo.');
    console.log('Manipulei o arquivo e deu erro.');
    console.log(a);
    // Nem sempre tem como o usuário fechar o arquivo aqui...
} catch (e) {
    // Parte executada quando há erros
    console.log('Tratando o erro.')
} finally {
    // Parte sempre executada
    console.log('FINALLY: Eu sempre sou executado.')
    console.log('Fechei o arquivo.');
}

console.log('');
console.log('');
console.log('');

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperadno instância de Date.');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
    // console.log(e);
} finally {
    console.log('Tenha um bom dia!');
}

const data = new Date('01-01-1970 15:52:12');
