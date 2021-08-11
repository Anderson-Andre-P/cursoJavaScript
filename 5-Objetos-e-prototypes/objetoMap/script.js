const pessoas = [
    { id: 3, nome: 'André'},
    { id: 2, nome: 'Luiz'},
    { id: 1, nome: 'Ana'},
];

// const novaPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novaPessoas[id] = {...pessoa};
// }

const novaPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novaPessoas.set(id, {...pessoa});
}

for (const [identifier, {id, nome}] of novaPessoas) {
    console.log(identifier, id, nome);
}

// console.log(novaPessoas.get(1));
// console.log(novaPessoas);
