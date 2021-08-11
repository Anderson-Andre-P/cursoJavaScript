let firstPeople = {
    nome: 'Giovanna',
    sobrenome: 'Chaves',
    idade: 19
};

let secondPeople = {
    nome: 'Anderson',
    sobrenome: 'André',
    idade: 22
};

console.log(firstPeople.nome, firstPeople.sobrenome);
console.log(secondPeople.nome, secondPeople.sobrenome);

function makePeople (name, lastName, age) {
    return {
        nome: name,
        sobrenome: lastName,
        idade: age,

        say() {
            console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos.`);
        }

    }
}

let thirdPeople = makePeople('Anderson', 'Eleutério', 22);
console.log(thirdPeople.nome);
thirdPeople.say();
