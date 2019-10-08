/*Cuando no sabemos cuantos parámetros vamos a recibir, con
"..." en la función, guardamos en un arreglo los demás valores
que se reciban al hacer la llamada. */

function listadoFrutas(fruta1, fruta2, ... restoDeFrutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(restoDeFrutas);//Este es el arreglo de las demás variables que no se capturaron. 
}

listadoFrutas("Naranja", "Sandía", "Manzana", "Pera", "Melón");

/* Ahora, cuando tenemos un arreglo y queremos guardarlo por separado en nuestro arreglo
usamos SPREAD, es decir*/

/*Tenemos un arreglo con dos valores, queremos que el primer parámetro
de la función sea Lichi y no "TODO EL ARREGLO"*/
console.log("Aqui tenemos un arreglo como parámetro");
frutas = ["Lichi", "Granada"]; 
listadoFrutas( frutas, "Sandía", "Pera", "Melón", "Coco"); //Aqui nos traer un arreglo pero queremos individualemtne las frutas.

//Aqui tomamos de forma individual el arreglo
console.log("Aqui tenemos de forma individual los parámetros");
listadoFrutas( ...frutas, "Sandía", "Pera", "Melón", "Coco");   