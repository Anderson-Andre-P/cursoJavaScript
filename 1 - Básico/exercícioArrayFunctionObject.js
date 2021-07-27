function escopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    //     console.log('Formulário enviado');
    // };

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        // console.log(nome.value, sobrenome.value, peso.value, altura.value);

        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} pesa ${peso.value}kg e tem ${altura.value}m.</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);

}

escopo();