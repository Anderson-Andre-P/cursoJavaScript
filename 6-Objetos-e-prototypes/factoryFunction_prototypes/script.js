function criaPessoa(nome, sobrenome) {
    const pessoasPrototype = {
        nome,
        sobrenome,
        falar() {
            console.log(`${this.nome} esta falando.`);
        },
        comer() {
            console.log(`${this.nome} esta comendo.`);
        },
        beber() {
            console.log(`${this.nome} esta bebendo.`);
        },
    };

    return Object.create(pessoasPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Anderson', 'André');
const p2 = criaPessoa('Anna', 'Maria');
console.log(p1);
console.log(p2);
