"use strict"

// FUNCIONES
// UNA FUNCION ES UNA AGRUPACIÓN REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES QUE PODEMOS REUTILIZAR TODAS LAS VECES QUE QUERAMOS.

function suma (num1, num2) {
    return console.log("El resultado de la suma entre " + num1 + " y " + num2 + " es: " + (num1 + num2));
}

function resta(num1, num2) {
    if (num1 > num2) {
        return console.log("El resultado de la resta entre " + num1 + " y " + num2 + " es: " + (num1 - num2));
    } else if (num2 > num1) {
        return console.log("El resultado de la resta entre " + num1 + " y " + num2 + " es: " + (num1 - num2) + "\nEl resultado es negativo ya que el número que ingresaste de primero, es menor que el segundo.");
    }
}

function multiplicacion(num1, num2) {
    return console.log("El resultado de la multiplicación entre " + num1 + " y " + num2 + " es: " + (num1 * num2));
}

function division(num1, num2) {
    if (num1 % num2 == 0) {
        return console.log("El resultado de la división entre " + num1 + " y " + num2 + " es: " + (num1 / num2) + "\nLa división es exacta.");
    } else {
        return console.log("El resultado de la división entre " + num1 + " y " + num2 + " es: " + (num1 / num2) + "\nLa división NO es exacta.");
    }
}
