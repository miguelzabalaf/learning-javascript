"use strict"


// SWITCH

var question = prompt("¿Cuánto es 2 + 2?: \n a) 1 \n b) 2 \n c) 3 \n d) 4")


switch(question) {
    case 'a' || 'A':
        console.log("Error, la respuesta es la D");
        break;
        
    case 'b' || 'B':
        console.log("Error, la respuesta es la D");
        break;
        
    case 'c' || 'C':
        console.log("Error, la respuesta es la D");        
    break;

    case 'd' || 'D':
        console.log("RESPUESTA CORRECTA");
    break;

    default:
        console.log("No ingresaste una de las opciones");
    break;
}