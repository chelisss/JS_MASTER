'use strict'

//Transformación de textos
var numero = 333;
var texto1 = "  Bienvenido al curso de JS de Victor Robles  ";
var texto2 = "Es muy buen curso";


//Con el punto( . ) podemos acceder a las propiedades de la variable. 
var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto1.toUpperCase();

/* console.log(typeof dato); */
console.log(dato);

var nombre = "Luis Enrique";
console.log(nombre.length);


//Concatenar textos
//var textoTotal = texto1+ " " +texto2;
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);


//METODOS DE BUSQUEDA

//indexOf - primera coincidencia de la palabra
console.log("Busqueda Index of:");
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

//Search
console.log("Busqueda Search:");
var busqueda = texto1.search("curso");
console.log(busqueda);

//charAt
console.log("Busqueda charAt:");
var busqueda = texto1.charAt("20");
console.log(busqueda);

//METOODOS DE REEMPLAZO

//replace
console.log("Reemplazo replace:");
var busqueda = texto1.replace("curso", "Cursinis");
console.log(busqueda);


//slice
console.log("Reemplazo split:");
var busqueda = texto1.split(" ");
console.log(busqueda);

//trim
console.log("Reemplazo trim:");
var busqueda = texto1.trim();
console.log(busqueda);







