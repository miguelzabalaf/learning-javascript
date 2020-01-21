"use strict"

// EJERCICIO 5

/*
    MOSTRAR TODOS LOS NÚMEROS IMPARES QUE HAY ENTRE 2 NÚMEROS INTRODUCIDOS POR EL USUARIO
*/

do {
    var number1 = parseInt(prompt("Introduce un número: "));
} while (isNaN(number1) || number1 < 0);
do {
    var number2 = parseInt(prompt("Introduce otro número: "));
} while (isNaN(number2) || number2 < 0);

var min;
var max;

if (number1 < number2) {
    min = number1;
    max = number2;
    for(var i = (min + 1); i <= (max - 1); i++) {
        if (i % 2 != 0) {
            console.log(i + " Es impar");
        } else {
            console.log(i + " Es par");
        }
    }
} else if (number2 < number1) {
    min = number2;
    max = number1;
    for(var i = (min + 1); i <= (max - 1); i++) {
        if (i % 2 != 0) {
            console.log(i + " Es impar");
        } else {
            console.log(i + " Es par");
        }
    }    
} 
