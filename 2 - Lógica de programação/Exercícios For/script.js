const elementos = [
    {tag: 'div', texto: 'Texto 1'},
    {tag: 'div', texto: 'Texto 2'},
    {tag: 'section', texto: 'Texto 3'},
    {tag: 'footer', texto: 'Texto 4'}
];

const container = document.querySelector('.container');

const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    // console.log(elementos[i].tag);
    // console.log(elementos[i].texto);
    let { tag, texto } = elementos[i];  // Desestruturando os 'elementos'
    // console.log(tag);
    let tagCriada = document.createElement(tag);
    
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);

    // tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
