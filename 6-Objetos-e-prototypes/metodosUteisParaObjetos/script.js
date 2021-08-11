// Object.keys (Retorna as chaves)
// Object.freeze (Congela o objeto)
// Object.defineProperties (Define várias propriedades)
// Object.defineProperty (Define uma propriedade)

const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = { ...produto, material: 'porcelana' };
const maisUm = { nome: produto.nome };

produto.nome = 'Prato';
produto.preco = 2.5;
console.log(produto);
console.log(outraCoisa);
console.log(maisUm);
console.log(Object.entries(produto));

for ( let [ chave, valor ] of Object.entries(produto) ) {
    console.log(chave, valor);
}
