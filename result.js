//import { a } from "./a.js";
//console.log("El resultado es: Te amo jejejeje. Mentis es: " + a);
// var edad = 20
//let Helados = 3
/*let Nombre = "Juan"
var Julis

if (edad > 10){
	Helados = 15
	Nombre = "Pedro"
	var mayor = true
}*/

var lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,	11, 12]
var lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]


/*for ( let i = 0; i < lista1.length; i++) {
	let resultado1 =lista1[i] + 3;
	console.log("lista 1", resultado1)
}

for ( let i = 1; i < lista2.length; i = i + 2) {
	let resultado = lista2[i]
	console.log("lista 2", resultado)
}*/
/*for ( let i of lista1){
	i = i + 3;
	console.log("lista 1 " + i);
}

for ( let i of lista2){
	let residuo = (i % 2);
	if ( residuo == 0) {
		console.log("lista 2 " + i)
	}
}*/

var caja1 = {id: 999, hijos: ["Pedro", "Pepe", "Pablo"], nombre: "Juliana"};
var caja2 = {id: 333, hijos: ["Lucas", "Lulú", "Loly", "Lulo"], nombre: "Eduardo"};

//console.log("Caja uno es igual a: ", caja1);
//console.log("Caja dos es igual a: ", caja2);

var id1 = caja1["id"]
var id2 = caja2["id"]

//console.log("El ID de la caja uno es: ", id1);
//console.log("El ID de la caja dos es: ", id2);

caja1.hijos = lista1
caja2.hijos = lista2

for ( let i of caja1.hijos){
	let residuo = (i % 2);
	if ( residuo == 1) {
		console.log("hijos 1 " + i)
	}
}
for ( let i of caja2.hijos){
	let residuo = (i % 2);
	if ( residuo == 0) {
		console.log("hijos 2 " + i)
	}
}





