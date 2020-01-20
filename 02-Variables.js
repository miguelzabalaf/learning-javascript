// VARIABLES:
// UNA VARIABLE ES UN CONTENEDOR DE INFORMACIÓN.

// 1 PALABRA RESERVADA VAR
// 2 NONBRE DE LA VARIABLE
// 3 SIGNO DE ASIGNACIÓN =
// 4 VALOR ASIGNADO A LA VARIABLE (STRING, INT, FLOAT, BOOL, ARRAY, ETC)

var city = 'Barranquilla';
var country = 'Colombia';

// CONCATENACIÓN EN JAVASCRIPT
var cityCountry = city + ', ' + country

var student = 'Miguel Zabala';
var age = 20;
var state = true;
var hobbies = ['Béisbol', 'Estudiar', 'Programar', 'crear', 'crear'];

// REASIGNANDO VALORES EN JS
student = 'Miguel Zabala Figueroa';
age = 21;

// RESULTADO
console.log(student + ', edad: ' + age + ', ' + 'localidad: ' + cityCountry + ', ' + 'Hobbies: ' + hobbies);

document.write(student + ', edad: ' + age + ', ' + 'localidad: ' + cityCountry + ', ' + 'Hobbies: ' + hobbies);

alert('Hola ' + student);