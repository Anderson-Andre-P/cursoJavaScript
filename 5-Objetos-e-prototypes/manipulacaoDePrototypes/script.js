// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
// };

// const objB = {
//     chaveB: 'B'
// };

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
// p1.aumento(100);
// p1.desconto(100);

const p2 = {
    nome: 'Calça',
    preco: 75
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
// p2.aumento(100);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 46
    },
});

p3.aumento(100);

console.log(p1)
console.log(p2);
console.log(p3);
