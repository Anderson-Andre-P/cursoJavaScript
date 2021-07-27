// Objeto date
// Função construtura começa com uma letra maiúscula

const tresHoras = 60 * 60 * 3 * 1000;  // 3 horas em ms
const umDia = 60 * 60 * 24 * 1000;  // 1 dia em ms

const data = new Date();  // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());  

/*
Meses vão de 0 a 11.
*/

//                       a - m - d - h - m - s - ms
const data2 = new Date(2021, 3, 11, 15, 14, 27);  // 11/abril/2021 15:14:27
console.log(data2.toString());

const data3 = new Date('2021-04-20 20:20:56');
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth()); // 0 - Janeiro, 11 - Dezembro
console.log('Ano', data3.getFullYear());
console.log('Horas', data3.getHours());
console.log('Minutos', data3.getMinutes());
console.log('Segundos', data3.getSeconds());
console.log('Milisegundos', data3.getMilliseconds());
console.log('Dia da semana', data3.getDay());  // 0 - Domingo, 6 - Sábado
console.log(data3.toString());

console.log('');

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

console.log(formataData(data));

