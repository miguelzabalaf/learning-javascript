"use strict"

// FUNCIONES
// UNA FUNCION ES UNA AGRUPACIÓN REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES QUE PODEMOS REUTILIZAR TODAS LAS VECES QUE QUERAMOS.

function suma (num1 = 1, num2 = 1) { //HE ESTABLECIDO UN VALOR POR DEFECTO
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


function tabla(num, min, max) {
    for (var i = min; i <= max; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

function typeNumber(num) {
    if (num % 2 == 0) {
        console.log("El número " + num + " es par.");
    } else {
        console.log("El número " + num + " es impar.");
    }
}

function betweenOf(number1, number2) {
    if (number1 < number2) {
        var min = number1;
        var max = number2;
        for(var i = (min + 1); i <= (max - 1); i++) {
            if (i % 2 != 0) {
                console.log(i + " Es impar");
            } else {
                console.log(i + " Es par");
            }
        }
    } else if (number2 < number1) {
        var min = number2;
        var max = number1;
        for(var i = (min + 1); i <= (max - 1); i++) {
            if (i % 2 != 0) {
                console.log(i + " Es impar");
            } else {
                console.log(i + " Es par");
            }
        }    
    } 
    
}