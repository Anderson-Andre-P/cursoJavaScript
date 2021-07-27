const h1 = document.querySelector('.container h1');
const data = new Date();

function getDia (diaDaSemana) {
    let diaSemanaTexto;

    switch (diaDaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function getMes (numMes) {
    let numMesTexto;

    switch (numMes) {
        case 0:
            numMesTexto = 'Janeiro';
            return numMesTexto;
        case 1:
            numMesTexto = 'Fevereiro';
            return numMesTexto;
        case 2:
            numMesTexto = 'Março';
            return numMesTexto;
        case 3:
            numMesTexto = 'Abril';
            return numMesTexto;
        case 4:
            numMesTexto = 'Maio';
            return numMesTexto;
        case 5:
            numMesTexto = 'Junho';
            return numMesTexto;
        case 6:
            numMesTexto = 'Julho';
            return numMesTexto;
        case 7:
            numMesTexto = 'Agosto';
            return numMesTexto;
        case 8:
            numMesTexto = 'Setembro';
            return numMesTexto;
        case 9:
            numMesTexto = 'Outubro';
            return numMesTexto;
        case 10:
            numMesTexto = 'Novembro';
            return numMesTexto;
        case 11:
            numMesTexto = 'Dezembro';
            return numMesTexto;
        default:
            numMesTexto = '';
            return numMesTexto;
    }
}

// function makeDate (data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDia(diaSemana);
//     const nomeMes = getDia(numeroMes);
// }

// h1.innerHTML = getDia(data.getDay());
// h1.innerHTML += getMes(data.getMonth());

function addZero (num) {
    return num >= 10 ? num : `0${num}`;
}

h1.innerHTML = `${getDia(data.getDay())}, ${data.getDate()} de ${getMes(data.getMonth())} de ${data.getFullYear()}.`;
h1.innerHTML += `<br>${addZero(data.getHours())}:${addZero(data.getMinutes())}`;


// De outra forma

const h2 = document.querySelectorAll('.container h2');
const dataTwo = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h2.innerHTML = dataTwo.toLocaleDateString('pt-BR', opcoes);
