function saudacao(nome) {
    return `Olá ${nome}.`;
}

let variavel = saudacao('André');
console.log(variavel);

// FUnção comum
function soma(x, y) {
    let conta = x + y;
    return conta;
}

let sum = soma(2, 3);
console.log(sum);

// FUnção anônima
let root =  function (x) {
    return x ** 2;
};

console.log(root(2));
console.log(root(4));

// Arrow function
let root2 = (x) => {
    return x ** 2;
}

console.log(root2(2));
console.log(root2(4));
