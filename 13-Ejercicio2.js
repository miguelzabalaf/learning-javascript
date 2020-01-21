"use strict"

// EJERCICIO 2

/*
    UTILIZANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NÚMEROS INTRODUCIDOS HASTA INTRODUCIR UN NÚMERO NEGATIVO Y AHÍ MOSTRAR EL RESULTADO.
*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce números hasta que metas un número negativo."));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        // suma = suma + numero;
        suma += numero;
        contador++
    }
    console.log("Sumatoria de los números introducidos: " + suma);
} while (numero >= 0);

console.log("Valor de la media: " + (suma / contador))