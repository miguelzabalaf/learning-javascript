"use strict"

/*
    MUESTRE TODOS LOS NÚMEROS DIVISORES DE UN NÚMEROQUE ES INTRODUCIDO EN PROMPT
*/

var num = parseInt(prompt("Ingresa un número: "));

for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log("divisor: " + i);
    }
}