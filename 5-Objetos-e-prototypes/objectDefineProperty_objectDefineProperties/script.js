function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.esestoque =estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // Mostra a chave
        value: estoque,  // Valor
        writable: false,  // Alteravel
        configurable: true  // Configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,  // Mostra a chave
            value: nome,  // Valor
            writable: true,  // Alteravel
            configurable: true  // Configurável
        },
        preco: {
            enumerable: true,  // Mostra a chave
            value: preco,  // Valor
            writable: true,  // Alteravel
            configurable: true  // Configurável
        },
    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5;
console.log(p1);
console.log(Object.keys(p1));
