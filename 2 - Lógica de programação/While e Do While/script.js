let controle = 0;
const fruta = 'Banana';

while (controle <= 10) {
    console.log(controle);
    controle++;
}

console.log('');

controle = 0;

while (controle < fruta.length){
    console.log(fruta[controle]);
    controle++;
}

controle = 0;
console.log('');

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);
console.log(rand);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

// rand = 10;

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);