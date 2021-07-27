// Dados primitivos (valores imutáveis) - string, number, boolean, undefined, null, bigint, symbol
// Dados por referência (valores mutáveis) - array, object, function

let a  = 'A';
let b = a;  // Cópia
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);


let c = [1, 2, 3];
let d = c;  // Passand por referência (posição na memória)
console.log(c, d);
d.push(5);
console.log(c, d);
c.pop();
console.log(c, d);


let e = [1, 2, 3];
let f = [...e];  // Copiando com spread
console.log(e, f);
f.push(5);
console.log(e, f);
