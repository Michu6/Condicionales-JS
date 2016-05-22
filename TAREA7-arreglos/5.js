// EJERCICIO 5
function numeros(){
	var numeros = [];
	var suma = 0;

	for(var i = 0; i<10; i++) {
		numeros[i] = parseInt(prompt("Coloca tu número " + (i+1)));	
		suma += numeros[i];
	};
	document.write(numeros + "<br>");
	document.write("La suma de tu arreglo es: " + suma);
};