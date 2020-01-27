"use strict"

// TRANSFORMACIÓN DE TEXTOS

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Es muy buen curso";

var dato = numero.toString();

console.log(dato);
console.log(numero)

dato = texto1.toUpperCase()

console.log(dato);

dato = texto1.toLocaleLowerCase();

console.log(dato);

var longitud = texto1.length

console.log("La cantidad de catacteres de texto 1 es: " + longitud)

var textoTotal = texto1 + " " + texto2;

console.log(textoTotal)

var textoTotal2 = texto1.concat(" " + texto2);

console.log(textoTotal2)

// BÚSQUEDA DE CARACTERES EN UN STRING

console.log("******************************")

var palabra = "Hola me llamo Miguel";

var busqueda = palabra.indexOf("Miguel");
var busqueda2 = palabra.search("Miguel");
var busqueda3 = palabra.startsWith("Ho") // TRUE
var busqueda4 = palabra.endsWith("Hola") // FALSE
var busqueda5 = palabra.includes("Miguel") // TRUE
var reemplazar = palabra.replace("Miguel", "Alfonso");
var unSplit = palabra.split(" "); // CREACIÓN DE UN ARRAR A PARTIR DE LA SEPARACIÓN POR ESPACIOS
var eliminarEspacios = palabra.trim() // POR LO GENERAL SE USA AL GUARDAR LOS CORREOS

console.log(busqueda2);
console.log(busqueda);
console.log(reemplazar)
console.log(unSplit)