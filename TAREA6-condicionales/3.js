// EJERCICIO 3
function operaciones() {
	var a = Number(prompt("Ingresa tu primer número"));
	var b = Number(prompt("Ingresa tu segundo número"));
	if (a>b){
		var suma = a+b;
		alert("La suma de tus números es: " + suma);
	} else if (a==b){
		alert("Tus números son iguales!");
	} else {
		var multiplicar = a*b;
		var division = a/b;
		alert("La multiplación de tus números es: " + multiplicar + ", y la división entre: " + a + " y " + b + " es: " + division);
	}
}
