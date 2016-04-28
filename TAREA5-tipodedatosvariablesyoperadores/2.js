// EJERCICIO 2
function life() {
	var nombre = prompt("¿Cuál es tu nombre?");
	var edad = Number(prompt("¿Cuál es tu edad?"));
	var days = edad * 365;
	document.getElementById("name").innerHTML = ("Hola " + nombre);
	document.getElementById("days").innerHTML = ("Has vivido " + days + " días");
}