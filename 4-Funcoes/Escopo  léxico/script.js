const nome = 'Anderson';

function falaNome() {
    // A função consegue buscar os valores de seus 'vizinhos'
    // Por isso conseguimos utilizar a variável 'nome', mesmo ela estadno fora da função
    // Mas sempre é respeitado a prioridade, utilizando a variável que estiver mais próxima
    console.log(nome);
}

function usaFalaNome(){ 
    const nome = 'André';
    falaNome();
}

usaFalaNome();
