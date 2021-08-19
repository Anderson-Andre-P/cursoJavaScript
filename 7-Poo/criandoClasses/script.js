class Pessoa {
    //construtor
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Método
    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
};

const p4 = new Pessoa2('Yuri', 'Martins');

const p1 = new Pessoa('Anderson', 'Eleutério');
const p2 = new Pessoa('José', 'Silva');
const p3 = new Pessoa('Edmilson', 'Martins');
console.log(p1);
console.log(p2);
console.log(p3);
