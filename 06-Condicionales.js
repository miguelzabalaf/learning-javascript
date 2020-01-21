"use strict"

// CONDICIONAL IF
// SI A ES IGUAL/MAYOR QUE/MENOR QUE/ DIFERENTE A/ ETC A B ENTONCES HAZ ESTO, SI NO HAZ ESTO OTRO

var age1 = 20;
var age2 = 10;


if (age1 > age2) { // SI PASA ESTO

    console.log("Edad 1 es mayor que edad 2"); // EJECUTA ESTO
    console.log("******FIN EJEMPLO 1******")
} else if(age1 == age2) { // SI NO PASÓ LO ANTERIOR PERO PASA ESTO
    console.log("Edad 1 es igual a edad 2"); // EJECUTA ESTO
    console.log("******FIN EJEMPLO 1******")
} else { // SI NO
    console.log("Edad 1 es menor a edad 2") // EJECUTA ESTO
    console.log("******FIN EJEMPLO 1******")
}

/* OPERADORES RELACIONALES:
    MAYOR: >
    MENOR: >
    MAYOR O IGUAL: >=
    MENOR O IGUAL: <=
    IGUAL: ==
    DISTINTO: !=
*/

/* OPERADORES LÓGICOS:
    AND(Y):  &&  => AMBAS CONDICIONES DEBEN CUMPLIRSE
    OR(O): ||  => DEBE CUMPLIRSE ALGUNA DE LAS DOS CONDICIONES
    NEGACIÓN: !  => NO SE DEBE CUMPLIR LA CONDICIÓN
*/

var name = 'Miguel';
var age = 21;
const topage = 18;

if (age >= topage) {
    console.log(name + " es mayor de edad con " + age + " años")
    if (age == 20 || age == 21) {
        console.log("Naciste en 1999-2000")
        console.log("******FIN EJEMPLO 2******")
    } else {
        console.log("******FIN EJEMPLO 2******")
    }
    
} else {
    console.log(name + " es menor de edad con " + age + " años")
    console.log("******FIN EJEMPLO 2******")
}


var year = parseInt(prompt("Escribe un año cualquiera entre 2016 y 2020: "));
const MAXYEAR = 2020;
const MINYEAR = 2016;
if (year >= MINYEAR && year <= MAXYEAR) {
    console.log("¡Bien hecho!");
    console.log("******FIN EJEMPLO 3******")
} else {
    console.log("El año que escogiste no es está en nuestro rango estipulado")
    console.log("******FIN EJEMPLO 3******")
}