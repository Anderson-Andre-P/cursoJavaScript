/*
Avaliação de curto circuito

Valores avaliados como false (FALSY):
    false
    0
    ''
    ""
    ``
    null 
    undefined
    NaN
*/

console.log('Luiz' && NaN && 'Maria');  // Retorna o primeiro elemento falsy ou o último elemento encontrado

console.log(0 || '' || "" || `` || null || undefined || NaN || 'João');  // Retorna o primeiro elemento não falsy ou o último elemento encontrado
