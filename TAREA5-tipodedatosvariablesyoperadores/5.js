// EJERCICIO 5
function product() {
	var a = Number(prompt("Ingresa tu primer vector"));
	var b = Number(prompt("Ingresa tu segundo vector"));
	var c = Number(prompt("Ingresa tu tercer vector"));
	var d = Number(prompt("Ingresa tu cuarto vector"));
	var uno = "["+a+","+b+"]";
	var dos = "["+c+","+d+"]";
	var resultado = (a*c) + (b*d);
	var escalar = alert("El producto escalar de los vectores: \n" + uno + " y " + dos + " es " + resultado);
}

function productEsc(){
	var u = [-2,3], v = [5,-2];
	var resultado = u[0]*v[0] + u[1]*v[1];
	alert("El producto escalar de los vectores: \n" + "[" + u + "]" + " y " + "[" + v + "]" + " es " + resultado);
}