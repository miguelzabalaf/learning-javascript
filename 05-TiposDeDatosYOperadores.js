"use strict"

// OPERADORES
var number1 = 7;
var number2 = 8;
var suma;
var resta;
var mult;
var divs;
var exp;
var residuo;

console.log('El resultado de la suma entre ' + number1 + ' y ' + number2 + ' es: ' + (suma = number1 + number2));

console.log('El resultado de la resta entre ' + number1 + ' y ' + number2 + ' es: ' + (resta = number1 - number2));

console.log('El resultado de la multiplicacion entre ' + number1 + ' y ' + number2 + ' es: ' + (mult = number1 * number2));

console.log('El resultado de la suma entre ' + number1 + ' y ' + number2 + ' es: ' + (divs = number1 / number2));

console.log('El resultado de la exponenciación entre ' + number1 + ' y ' + number2 + ' es: ' + (exp = number1 ** number2));

console.log('El resultado del residuo entre ' + number1 + ' y ' + number2 + ' es: ' + (residuo = number1 % number2));




// TIPOS DE DATOS
var integers = 40;
var strings = 'hola';
var trues = true;
var falses = false;

var n1 = '22';
var n2 = 22;
var total = parseInt(n1) + n2; // SIN EL PARSEINT LO QUE HARÍA LA OPERACIÓN SERÍA CONCATENAR EL NÚMERO A LA CADENA DE TEXT, Y COMO RESULTADO DARÍA 2222, PERO GRACIAS AL MÉTODO PARSEINT SE PUEDE HACER LA OPERACIÓN DE UN STRING PASADO A ENTERO + UN ENTERO.
