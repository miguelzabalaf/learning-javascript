"use strict"

var texto = "Soy una variable global"; // VARIABLE GLOBAL

function holaMundo (text) {
    var hola_mundo = "Texto dentro de funcion" // SÓLO SE PUEDE ACCEDER A ESTA VARIABLE DENTRO DE LA FUNCIÓN, SI LA LLAMO FUERA DE ELLA, NO FUNCIONARÁ YA QUE NO ES GLOBAL
    console.log(text);
    console.log(numero.toString());
    console.log(hola_mundo)
}


var numero = 25;
console.log(hola_mundo); // NO FUNCIONARÁ YA QUE ESTÁ LLAMANDO A UN FUNCION PROPIA DE UNA FUNCIÓN