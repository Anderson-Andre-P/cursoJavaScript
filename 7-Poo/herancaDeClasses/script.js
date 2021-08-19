class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' Já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' Já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '12');
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, temWifi) {
        super(nome);
        this.cor = cor;
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Você alterou o método ligar.');
    }
}

const t1 = new Tablet('Galaxy S10', 'Preto', true);
console.log(t1);
t1.ligar();
console.log(t1.ligado);
