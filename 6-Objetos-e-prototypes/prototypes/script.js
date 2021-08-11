// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL';
}

// Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Anna', 'F.');  // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('André', 'E.');  // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2);
