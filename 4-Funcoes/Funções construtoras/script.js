function Pessoa(nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = function() {

    };

    this.nome = nome;
    this .sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método')
    };
}

const p1 = new Pessoa('Anderson', 'André');
const p2 = new Pessoa('Maria', 'João');

p1.metodo();
