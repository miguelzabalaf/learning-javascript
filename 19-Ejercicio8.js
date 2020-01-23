"use strict"

/*
    CALCULADORA:
        -PIDA DOS NUMEROS POR PANTALLA
        -SI METEMOS UNO MALQUE NOS LO VUELVA A PEDIR
        -QUE NOS MUESTRE EL RESULTADO DE SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR DE ESOS DOS NÚMEROS.
*/

do {
    var num1 = parseInt(prompt("Ingrese el primer número: "));
} while (isNaN(num1));

do {
    var num2 = parseInt(prompt("Ingrese el segundo número: "));
} while (isNaN(num2));

document.write("<h1>Haz introducido los números " + num1 + " y " + num2 + "</h1>");
document.write("<ul>");
document.write("<li>" + num1 + " + " + num2 + " = " + (num1 + num2) + "</li>");
document.write("<li>" + num1 + " - " + num2 + " = " + (num1 - num2) + "</li>");
document.write("<li>" + num1 + " X " + num2 + " = " + (num1 * num2) + "</li>");
document.write("<li>" + num1 + " / " + num2 + " = " + (num1 / num2) + "</li>");
document.write("</ul>");