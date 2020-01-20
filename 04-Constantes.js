"use strict"

// CONSTANTES
// ES COMO UNA VARIABLE CUYO CONTENIDO NO SE PUEDE SER ALTERADO

var web = "https://miguelzabalaf.com"; // VARIABLE EXPUESTA A CAMBIOS
const ip = "192.88.0.13" // CONSTANTE

web = "https://miguelzabalaf.co" // ESTE CAMBIO ES PERMITIDO POR SER UNA VARUABLE.
// ip = 2 => ESTE CAMBIO NO ES PERMITIO PORQUE IP ES UNA CONSTANTE.

console.log('url de mi web: ' + web,  ', Mi ip: ' + ip);