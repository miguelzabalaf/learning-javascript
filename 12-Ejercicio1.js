"use strict"

// EJERCICIO 1
/* 
    PROGRAMA QUE PIDA DOS NÚMEROS Y DIGA CUÁL ES EL MAYOR, EL MENOR Y SI SON IGUALES.
*/

var inicio = confirm("Bienvenido. \n Este es un juego en el que vas a digitar dos número y nuestro programa te dará como resultado por consola cuál es el número mayor, cuál es el menor o si son iguales, empecemos.")

if (inicio == true) {
    var name = prompt("Ingrese su nombre", "Ejemplo: Juan.")

    var attemps = 1;

        do {
            var number1 = parseInt(prompt(name + ", ingresa el primer número: \n Intento#" + (attemps)));
            attemps++;
    
        } while (isNaN(number1) || number1 < 0);
        do {
            var number2 = parseInt(prompt(name + ", ingresa el segundo número: \n Intento#" + (attemps)));
            attemps++;
        } while (isNaN(number2) || number2 < 0);

        if (number1 == number2) {
            console.log(name + ", los números ingresados son iguales.");
        } else if (number1 > number2) {
            console.log(name + ", el número " + number1 + " es mayor que " + number2 + ".");
        } else if (number2 > number1) {
            console.log(name + ", el número " + number2 + " es mayor que " + number1 + ".");
        } 
    
} else {
    alert("Gracias por su respuesta, espero y juegue otro día.");
}