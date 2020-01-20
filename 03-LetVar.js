'use strict'
// PRUEBAS CON LET Y CON VAR

// #########################################################################

// PRUEBA CON VAR
var number = 40;
console.log(number); // RESULTADO 40

if (true) {
    var number = 50;
    console.log(number); // RESULTADO 50
    // ALTERO EL VALOR DE LA VARIABLE A NIVEL GLOBAL
}

console.log(number); // RESULTADO 50

// #########################################################################

// PRUEBA CON LET
var text = 'Miguel está estudiando Javascript'
console.log(text); // Miguel está estudiando Javascript

if (true) {
    let text = 'He cambiado el valor de text en este ambiente de código( en esta condicional), fuera de él su valor seguirá siendo el mismo.'
    console.log(text)
}

console.log(text) //Miguel está estudiando Javascript
// #########################################################################