"use strict"

var categories = ['Acción', 'Terror', 'Comedia'];
var movies = ['King Kong', 'La vida es bella', 'Kimi no na Wa'];

var cine = [categories, movies];

console.log(cine[0][1]); // Terror
console.log(cine[1][2]); // Kimi no na Wa

// do {
//     var introducir = prompt("Introduce una película: ")
//     movies.push(introducir); // INDRODUCIR UN ELEMENTO NUEVO AL ARRAY
// } while (introducir != "x");
//     movies.pop(); // ELIMINAR EL ÚLTIMO ELEMENTO DE MI ARRAY
//     console.log(movies);

// PARA ELIMINAR UN ELEMENTO EN CONCRETO

var indice = movies.indexOf('King Kong');
console.log(indice);

if (indice > -1) {
    movies.splice(indice, 1); // A PARTIR DEL INDICE ESPECIFICADO BÓRRAME UN INDICE
    console.log(movies)
}

var stringTransform = movies.join();

console.log(stringTransform) // La vida es bella,Kimi no na Wa

console.log("*****************");

var texto1 = "Miguel, Alsonfo, Zabala, Figueroa";
var texto1_arr = texto1.split(", ");
console.log(texto1_arr);

texto1_arr.sort() // ORGANIZAR EL ARRAY ALFABETICAMENTE
texto1_arr.reverse() // ORGANIZAR DE FORMA ALREVEZ