const pessoa = {
    nome: 'Anna',
    sobrenome: 'Flávia'
};
console.log(pessoa['nome']);

const pessoa1 = new Object();
pessoa1.nome = 'André';
pessoa1.sobrenome = 'Anderson';
console.log(pessoa1);
delete pessoa1.nome;
console.log(pessoa1);

pessoa1.falarNome = function() {
    console.log(`${this.sobrenome} está falando seu nome.`)
};
pessoa1.falarNome();

function criaPessoa(nome, sobrenome) {
    return  {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
    };
}

const p1 = criaPessoa('Maria', 'Madalena');
console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Gui', 'Oliveira');
p2.nome = 'Guilherme';
console.log(p2);
