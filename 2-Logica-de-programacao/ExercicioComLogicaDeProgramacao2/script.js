function ePaisagem(altura, largura) {
    // if (altura > largura){
    //     return 'Retrato';
    // }
    // return 'Paisagem';
    return largura > altura;
}

const modo = (largura, altura) => altura > largura;

console.log(ePaisagem(5, 10));
console.log(modo(5, 10));