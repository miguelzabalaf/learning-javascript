"use strict"

/* 
    GENERA TÁBLA DE MULTIPLICAR DEL NÚMERO QUE SE INTRODUZCA.
*/

var repeat = true;

while(repeat == true) {
    do {
        var num = parseInt(prompt("Introduce el número del cuál quieres saber su tabla de multiplicar."))
    } while(isNaN(num) || num <= 0);
    
    do {
        var min = parseInt(prompt("Ha escogido el número " + num + "\nQuiere ver su tabla desde qué número?:"))
    } while(isNaN(min) || min <= 0);
    
    do {
        var max = parseInt(prompt("Ha escogido el número " + num + "\nQuiere ver su tabla hasta qué número?:"))
    } while(isNaN(max) || max <= 0 || max <= min);

    for (var i = min; i <= max; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
    repeat = confirm("¿Quieres intentar otro número?")
}

alert("Gracias por probar, código creado por Miguel Zabala.");

