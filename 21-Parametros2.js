"use strict"

// PARÁMETROS DE RESTO Y SPREAD

function listadoFrutas (fruta1, fruta2, ...otras) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log("Otras furtas: " + otras);
}

listadoFrutas("A", "B", "C", "D", "E");
console.log("**************************")

var frutas = ["Coco", "Naranja"];

listadoFrutas(...frutas, "Pera", "Melon")