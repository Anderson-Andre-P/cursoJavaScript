function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        fala(assunto = 'falando sobre NADA') {
            return `${nome} está ${assunto}.`;
        },

        peso: peso,
        altura: altura,

        // Se remover o get, o imc vira uma função.
        // Com o get ele vira um atributo
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();  // Shift remove o elemento do indice 0 do array
            this.sobrenome = valor.join(' ');
            console.log(valor);
        }
    };
}


const p1 = criaPessoa('Anderson', 'André', 1.85, 95);
const p2 = criaPessoa('Giih', 'Chaves', 1.67, 60);
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc);
console.log(p1.imc);
p1.nomeCompleto = 'José André Pereira';
console.log(p1.nomeCompleto);
