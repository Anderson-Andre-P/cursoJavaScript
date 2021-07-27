const frutas = ['Banana', 'Maçã', 'Pêra', 'Uva', 'Mamão', 'Melancia'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const people = {
    nome: 'Anderson',
    sobrenome: 'André',
    idade: 22
};

console.log(people['nome']);  // Acessando os nomes

for (let i in people) {
    // console.log(i);  // Acessando as chaves
    console.log(i, people[i]);
}
