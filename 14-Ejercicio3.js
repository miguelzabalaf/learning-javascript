" use strict"

// EJERCICIO 3
/* 
    HACER UN PROGRAMA QUE MUESTRE TODOS LOS NÚMEROS ENTRE DOS NÚMEROS INTRODUCIDOS POR EL USUARIO.
*/

var play = confirm("En este programa vas a ingresar dos números y el programa te dirá todos los números que hay entre dichos números introducidos, ¿Deseas jugar?")

if (play == true){
    do {
        var number1 = parseInt(prompt("Introduce el primer número: "));
    } while(isNaN(number1));
    do {
        var number2 = parseInt(prompt("Introduce el segundo número: "));
    } while(isNaN(number2));

    var min;
    var max;

    if (number1 < number2) {
        min = number1;
        max = number2
        for (var i = (min + 1); i <= (max - 1); i++) {
            console.log("El " + i + " está entre el " + min + " y " + max);
        }
    } else if (number2 < number1) {
        min = number2
        max = number1
        for (var i = (min + 1); i <= (max - 1); i++) {
            console.log("El " + i + " está entre el " + min + " y " + max);
        }
    } else {
        console.log("Ambos números son iguales.")
    }

} else {
    alert("Gracias por si quiera considerarlo.")
}

