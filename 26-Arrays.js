"use strict"

// ARRAYS, ARREGLOS, MATRICES

var nombre = "Miguel";
var nombres = ["Miguel", "Indira", "Alfonso", "Victoria"];
var deTodo = ["Miguel", 15, false, [1, 2, 3, 4], true, 4.7];


var lenguajes = new Array("PHP", "JS", "Go", "Java", "Pascal", "C++");

console.log(nombres); // MUESTRA TODO
console.log(deTodo);

console.log(nombres[2]) // MUESTRA EL ELEMENTO DEL INDICE #2

console.log(deTodo.length) // ME MUESTRA LA CANTIDAD DE ELEMENTOS QUE HAY EN UN ARRAY

// var elemento = parseInt(prompt("Cuál elemento del array quieres?: "));

// // if (elemento > nombres.length) {
// //     alert("Introduce un número correcto.")
// // } else {
// //     alert(nombres[elemento])
// // }

document.write("<h1>Lenguajes de programación</h1>")
document.write("<ul>")
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+ lenguajes[i] +"</li>")    
}
document.write("*****************");
lenguajes.forEach( (elemento, indice)=> {
    document.write("<li>" + indice + " - " + elemento + "</li>")
});
document.write("*****************");
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>")
}
document.write("</ul>")

document.write("******BUSQUEDAS******* </br>");

var busqueda = lenguajes.find(lenguaje => {
    return lenguaje == "PHP";
});

var busqueda2 = lenguajes.find(lenguaje => lenguaje == "PHP");

document.write(busqueda, "<br>",  busqueda2);

var precios = [10, 20, 30, 50];

var comprobar = precios.some(precio => precio < 30); // DEVUELVE TRUE PORQUE HAY PRECIOS MENORES A 30 (20, 10)