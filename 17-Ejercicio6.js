"use strict"

// EJERCICIO 6

/*
    UN PROGRAMA QUE NOS DIGA SI UN NÚMERO ES PAR O IMPAR.
    1. VENTANA PROMPT
    2. SI NO ES VÁLIDO EL NÚMERO PEDIDO, PÍDALO DE NUEVO.
*/

do {
    var num = parseInt(prompt("Ingrese un número cualquiera mayor a 0: "));
} while (isNaN(num) || num <= 0);

if (num % 2 == 0) {
    console.log("El número " + num + " es par.");
} else {
    console.log("El número " + num + " es impar.");
}
