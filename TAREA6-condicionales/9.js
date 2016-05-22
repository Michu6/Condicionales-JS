// EJERCICIO 9
function traductor(){
	var palabra = prompt("Ingresa una palabra: casa, mesa, perro o gato").toUpperCase();
	switch (palabra) {
		case "CASA":
			alert ("HOUSE");
			break;
		case "MESA":
			alert ("TABLE");
			break;
		case "PERRO":
			alert ("DOG");
			break;
		case "GATO":
			alert ("CAT");
			break;
		default:
			alert("No sé tu palabra :(");
			break;
	}
};