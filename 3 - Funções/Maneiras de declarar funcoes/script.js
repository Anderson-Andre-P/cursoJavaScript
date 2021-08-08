// As funções fazem hoisting, então podemos chamar ela em qualquer lugar do código
falaOi();
function falaOi() {
    console.log('Oie.');
}

// First-class objects (Objetos de primeira classe) -> poodemos usar uma função como se eça fosse um dado
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};

function executa(funcao) {
    console.log('Recebi uma função como parâmetro.');
}
executa(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Falando...')
    }
};

obj.falar();
