"use strict"

// FUNCIONES ANONIMAS
// ES UNA FUNCION QUE NO TIENE NOMBRE

var pelicula = function(nombre = "Sin Nombre", año = "Sin año") {
    return "La película es: " +  nombre + " y fue hecha en el año: " + año;
}

// pelicula("Miguel", 1999) = Arroja: "La película es Miguel y fue hecha en el año 1999"

function sumame (num1, num2, sumaYMestra, sumaPorDos) {
    var sumar = num1 + num2;
    sumaYMestra(sumar);
    sumaPorDos(sumar);
    return sumar
}

sumame(5, 3, function(dato){
    console.log("La suma da un total de: " + dato);
},
function(dato) {
    console.log("La suma por dos es: " + (dato * 2));
});

console.log("************************************")


sumame(5, 3, (dato) =>{ // FUNCIONES DE FLECHAS, EL QUITAS LA PALABRA RESERVADA FUNCTION Y AGREGAS UNA FLECHA DESPUÉS DEL PARÁMETRO 
    console.log("La suma da un total de: " + dato);
},
function(dato) {
    console.log("La suma por dos es: " + (dato * 2));
});

console.log("************************************")

sumame(5, 3, dato =>{ // TAMBIÉN LE PUEDES QUITAR EL PARÉNTESIS AL PARÁMETRO
    console.log("La suma da un total de: " + dato);
},
function(dato) {
    console.log("La suma por dos es: " + (dato * 2));
});