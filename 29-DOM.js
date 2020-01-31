"use  strict"

// DOCUMENT OBJECT MODEL


// CONSEGUIR ELEMENTOS CON EL ID
var caja = document.getElementById("caja"); // CREO UNA VARIABLE CAJA QUE ME OBTENGA LA INFORMACIÓN DE ELEMENTO CON EL ID CAJA EN MI HTML

var caja2 = document.querySelector("#caja")

var texto = caja.innerHTML; // MUESTRA EL HTML

var modificar = caja.innerHTML = "Miguel"; // CAMBIA EL HTML

caja.style.background = "gray";
caja.style.padding = "1em"

caja.className = "clase1 clase2"; // AÑADIR CLASES A ELEMENTOS

function cambiaColor (color) {
    caja.style.background = color;
}

cambiaColor("#3a3a3a"); // CAMBIAMOS EL COLOR 

console.log(caja) // ME MUESTRA EL DIV COMPLETO DE CAJA
console.log(caja2)
console.log(texto) // ME MUESTRA SOLO EL TEXTO, EL CONTENIDO DE LA CAJA


// CONSEGUIR ELEMENTOS POR SU ETIQUETA
console.log("*************************************")
var todoslosDivs = document.getElementsByTagName("div")
console.log(todoslosDivs)
console.log(todoslosDivs[2]) // ME MUESTRA TODO EL DIV
console.log(todoslosDivs[2].textContent) // ME MUESTRA SOLO EL TEXTO
todoslosDivs[2].innerHTML = "Nuevo texto para el segundo"



    var valor
for (valor in todoslosDivs) {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todoslosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miSeccion").appendChild(parrafo);
}




// CONSEGUIR ELEMENTOS POR SU CLASE