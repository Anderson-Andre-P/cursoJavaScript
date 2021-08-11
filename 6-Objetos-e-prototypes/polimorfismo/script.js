function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.saldo = saldo;
    this.conta = conta;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente. Disponível: ${this.saldo}`)
        // this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/Ac: ${this.agencia}/${this.conta} | ` + 
    `Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 1000);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente. Disponível: R$${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};


const cc = new ContaCorrente(10, 20, 0, 100);
cc.depositar(10);
cc.sacar(25);
cc.sacar(75);
cc.sacar(11);

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp = new ContaPoupanca(25, 13, 0);

cp.depositar(250);
cp.sacar(251);
