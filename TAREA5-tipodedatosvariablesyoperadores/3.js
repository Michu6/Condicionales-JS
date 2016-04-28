// EJERCICIO 3
function output() {
	var nombre = prompt("¿Cuál es tu nombre?");
	var lastName = prompt("Hola " + nombre + " dime, ¿cuál es tu primer apellido?");
	var ciudad = prompt("¿Y en qué distrito vives?");
	var equals = "=========================";
	document.getElementById("equal").innerHTML = (equals);
	document.getElementById("name").innerHTML = ("Hola " + nombre + " " + lastName);
	document.getElementById("city").innerHTML = ("Adiós habitante de " + ciudad);
	document.getElementById("equal2").innerHTML = (equals);
}