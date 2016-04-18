// EJERCICIO 6
var costoplato = function(personas){
	if (personas <= 200) {
		return 95
	} else if (personas >= 300) {
		return 75
	} else {
		return 85
	}
}
var costobanquete = function(personas) {
	return costoplato(personas) * personas
}

console.log("El costo del banquete es de $"+costobanquete(300));
console.log("El costo del banquete es de $"+costobanquete(1));
console.log("El costo del banquete es de $"+costobanquete(500));