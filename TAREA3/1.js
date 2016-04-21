// ESTRUCTURAS REPETITIVAS
var suma = 0; // VARIABLE SUMA DEFINIDO PARA TODOS LOS EJERCICIOS!!!!

// EJERCICIO 1
var i = 0;
function btn1() {
	while(i < 10) {
		numero = Number(prompt("Porfavor ingresa tu número " + (i+1)));
		suma = suma + numero; // Se almacena la suma
		i++;
	}
	document.getElementById("ej1").innerHTML = 
	"La suma de tus números es " + suma;
}

// EJERCICIO 2
var b = 0;
function btn2() {
	do {
		numero = Number(prompt("Porfavor ingresa tu número " + (b+1)));
		suma = suma + numero; // Se almacena la suma
		b++;
	} while(b < 10);
	document.getElementById("ej2").innerHTML = 
	"La suma de tus números es " + suma;
}

// EJERCICIO 3
function btn3() {
	for (c = 0; c < 10; c++) {
		numero = Number(prompt("Porfavor ingresa tu número " + (c+1)));
		suma = suma + numero; // Se almacena la suma
	}
	document.getElementById("ej3").innerHTML = 
	"La suma de tus números es " + suma;
}

// EJERCICIO 4
// EJERCICIO 4.1
var d = 0;
var promedio = 0;
function btn41() {
	while(d < 5) {
		numero = Number(prompt("Porfavor ingresa tu número " + (d+1)));
		promedio = promedio + numero; // Se almacena la suma
		d++;
	}
	document.getElementById("ej41").innerHTML = 
	"El promedio de tus números es " + promedio/5;
}

// EJERCICIO 4.2
var e = 0;
function btn42() {
	do {
		numero = Number(prompt("Porfavor ingresa tu número " + (e+1)));
		promedio = promedio + numero; // Se almacena la suma
		e++;
	} while(e < 5);
	document.getElementById("ej42").innerHTML = 
	"El promedio de tus números es " + promedio/5;
}

// EJERCICIO 4.3
function btn43() {
	for (f = 0; f < 3; f++) {
		numero = Number(prompt("Porfavor ingresa tu número " + (f+1)));
		promedio = promedio + numero; // Se almacena la suma
		f++;
	} 
	document.getElementById("ej43").innerHTML = 
	"El promedio de tus números es " + promedio/3;
}

// EJERCICIO 5
var g = 0;
function pares() {
	while (g < 100) {
		g = g + 2; // Se almacena el número cambiante
		console.log(g);
	}
}
pares();

// EJERCICIO 6
