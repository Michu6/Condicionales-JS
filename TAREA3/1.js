// ESTRUCTURAS REPETITIVAS
// EJERCICIO 1
var sumaUno = 0;
var i = 0;
function btn1() {
	while(i < 10) {
		numero = Number(prompt("Porfavor ingresa tu número " + (i+1)));
		sumaUno = sumaUno + numero; // Se almacena la sumaUno
		i++;
	}
	document.getElementById("ej1").innerHTML = "La suma de tus números es " + sumaUno;
}

// EJERCICIO 2
var sumaDos = 0;
var b = 0;
function btn2() {
	do {
		numero = Number(prompt("Porfavor ingresa tu número " + (b+1)));
		sumaDos = sumaDos + numero; // Se almacena la sumaDos
		b++;
	} while(b < 10);
	document.getElementById("ej2").innerHTML = "La suma de tus números es " + sumaDos;
}

// EJERCICIO 3
var sumaTres = 0;
function btn3() {
	for (c = 0; c < 10; c++) {
		numero = Number(prompt("Porfavor ingresa tu número " + (c+1)));
		sumaTres = sumaTres + numero; // Se almacena la sumaTres
	}
	document.getElementById("ej3").innerHTML = "La suma de tus números es " + sumaTres;
}

// EJERCICIO 4
// EJERCICIO 4.1
var d = 0;
var promedioUno = 0;
function btn41() {
	while(d < 5) {
		numero = Number(prompt("Porfavor ingresa tu número " + (d+1)));
		promedioUno = promedioUno + numero; // Se almacena la suma
		d++;
	}
	document.getElementById("ej41").innerHTML = "El promedio de tus números es " + promedioUno/5;
}

// // EJERCICIO 4.2
var promedioDos=0;
var e = 0;
function btn42() {
	do {
		numero = Number(prompt("Porfavor ingresa tu número " + (e+1)));
		promedioDos = promedioDos + numero; // Se almacena la suma
		e++;
	} while(e < 5);
	document.getElementById("ej42").innerHTML = "El promedio de tus números es " + promedioDos/5;
}

// EJERCICIO 4.3
function btn43() {
	for (f=0;f<5;f++) {
		var promedioTres = 0;
		numero = Number(prompt("Porfavor ingresa tu número " + (f+1)));
		promedioTres = promedioTres + numero;
	}
	document.getElementById("ej43").innerHTML = "El promedio de tus números es " + promedioTres/5;
}

// EJERCICIO 5
var g = 0;
function pares() {
	while (g < 100) {
		g = g + 2;
		console.log(g);
	}
}
pares();

// // EJERCICIO 6
// // h=hipotenusa, j=catopuesto, k=catadyacente
// for(h=1;h<=500;h++) {
// 	for(j=1;j<=500;j++) {
// 		for(k=1;k<=500;k++) {
// 			if(h*h===(j*j)+(k*k)) {
// 				console.log("La hipotenusa es " + h + " el cateto opuesto es " + j + " y el cateto adyacente es " + k);
// 			}
// 		}
// 	}
// }

// EJERCICIO 7
function btn7() {
	numero = Number(prompt("Porfavor ingresa tu número"));
	document.write('<br>' + "TABLA DE MULTIPLICAR DE " + numero + " ES:")
	for(l=0;l<=10;l++) {
		var multiplicar = 0;
		multiplicar = l * numero;
		document.write('<br>' + "Tu número " + numero + " por " + l + " es " + multiplicar);
	}
}

// EJERCICIO 8