// Capturar evento de submit do form

const form  = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    else if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacaoImc = getClassificacao(imc);

    // console.log(imc, classificacaoImc);
    const message = `Seu IMC é ${imc} (${classificacaoImc}).`
    setResultado(message, true);

});

function getClassificacao (imc) {
    const classificacao = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III (mórbida)']

    if (imc > 39.9) {
        return classificacao[5];
    }

    else if (imc >= 35) {
        return classificacao[4];
    }

    else if (imc >= 30) {
        return classificacao[3];
    }

    else if (imc >= 25) {
        return classificacao[2];
    }

    else if (imc >= 18.5) {
        return classificacao[1];
    }

    else if (imc < 18.5) {
        return classificacao[0];
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (message, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    
    const p = criaP();
    
    if (isValid) {
        p.classList.add('good-result');
    }

    else {
        p.classList.add('bad-result');
    }

    p.innerHTML = message;
    resultado.appendChild(p);
}