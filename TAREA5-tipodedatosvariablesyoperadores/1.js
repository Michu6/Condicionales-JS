// EJERCICIO 1
function division() {
	var a = Number(prompt("Porfavor ingresa tu primer número"));
	var b = Number(prompt("Porfavor ingresa tu segundo número"));
	division = a/b;
	document.getElementById("ej1-1").innerHTML = ("La división de tus 2 números es: " + division);
}

function divisiontext() {
	var a = prompt("Porfavor ingresa tu primera palabra");
	var b = prompt("Porfavor ingresa tu segunda palabra");
	division = a/b;
	document.getElementById("ej1-2").innerHTML = ("La división de tus 2 palabras es: " + division);
}

function divisionzero() {
	var a = Number(prompt("Porfavor ingresa un número"));
	var b = 0;
	division = a/b;
	document.getElementById("ej1-3").innerHTML = ("La división de tus 2 números es: " + division);
}