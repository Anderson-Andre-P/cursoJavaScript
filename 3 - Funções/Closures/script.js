function retornaFuncao() {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Anderson');
const funcao2 = retornaFuncao('André');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
