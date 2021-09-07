const nome = 'Anderson';
const sobrenome = 'Eleutério';
export const idade = 22;

export default function soma(x, y) {
    return x + y;
}

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

export { nome as nome2, sobrenome, soma };
