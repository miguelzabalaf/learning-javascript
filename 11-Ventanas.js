"use strict"

// ALERTA

alert("Esta es mi alerta");

// CONFIRMACIÓN

var result = confirm("¿Estás seguro de querer continuar?");
console.log(result)

// INGRESO DE DATOS

var age = prompt("¿Qué edad tienes?", "ingresa sólo número.");
if (parseInt(age) / parseInt(age) == 1) {
    console.log("Haz escrito el número: " + age);
} else {
    console.log("Haz escrito algo que no es un número")
}