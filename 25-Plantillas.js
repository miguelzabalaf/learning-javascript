"use strict"

// PLANTILLAS DE TEXTO

var name = prompt("Ingresa un nombre: ");
var lastName = prompt("Ingresa tus apellidos: ");

// var text = "Mi nombre es: " + name + ", y mis apellidos son: " + lastName;

var text = `
    <h1>Hola, ¿Qué tal?</h1>
    <h3>Mi nombre es: ${name} </br>
    Mis apellidos son: ${lastName}
    </h3>
`;
document.write(text);