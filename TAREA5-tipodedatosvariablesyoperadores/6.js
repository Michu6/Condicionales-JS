// EJERCICIO 6
function puntoMedioUno(){
	var a = Number(prompt("Ingresa tu primera coordenada X"));
	var b = Number(prompt("Ingresa tu segunda coordenada X"));
	var c = Number(prompt("Ingresa tu primera coordenada Y"));
	var d = Number(prompt("Ingresa tu segunda coordenada Y"));
	var uno = "("+a+","+b+")";
	var dos = "("+c+","+d+")";
	var resultado = "(" + ((a+c)/2) + "," + ((b+d)/2) + ")";
	alert("El punto medio del segmento: \n" + uno + " y " + dos + " es " + resultado);
}


function puntoMedio(){
	var x = [7,-4], y = [5,6];
	var resultado = ((x[0]+y[0])/2) + "," + ((x[1]+y[1])/2);
	alert("El punto medio del segmento de extremos, los puntos: " + "\n (" + x + ") y " + "(" + y + ") es (" + resultado + ")");
}