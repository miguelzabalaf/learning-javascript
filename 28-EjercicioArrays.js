"use strict"

/*
    1. PIDA 6 NÚMEROS POR PANTALLA Y LOS META EN UN ARRAY
    2. MOSTRAR EL ARRAY ENTERO (TODOS SUS ELEMENTOS), EN EL CUERPO DE LA PANTALLA Y EN LA CONSOLA.
    3. ORDENARLO Y MOSTRARLO.
    4. INVERTIR SU ORDEN Y MOSTRARLO.
    5. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
    6. BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO, QUE NOS DIGA SI LO ENCUENTRA Y SU INDICE
        (SE VALORARÁ EL USO DE FUNCIONES)
*/

const maxNumbers = 6;

var numbers = [];

do {
    var newNumber = parseInt(prompt("Ingresa un número cualquiera positivo: "));
    numbers.push(newNumber);
} while (numbers.length < maxNumbers)

document.write(`
    <h1> Tus números escogidos son: </h1>
    <ul>
`);
for (let i in numbers) {
    document.write("<li>" + numbers[i] + "</li>");
}
document.write("</ul>")

document.write(`
    <h1> Los números en orden </h1>
    <ul>
`);
var orderNumbers = numbers.sort(function(a, b) {return a-b});
for (let i in orderNumbers) {
    document.write("<li>" + orderNumbers[i] + "</li>");
}
document.write("</ul>")

var cantidad = numbers.length
document.write(`
    <h1> La cantidad de elementos que hay son ${cantidad} </h1>
`);