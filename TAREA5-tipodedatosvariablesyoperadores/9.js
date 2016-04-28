// EJERCICIO 9
function determinante() {
	var a1=Number(prompt("Ingresa tu primera matriz" + "\n ?" + " ? " + "\n ?" + " ? "));
	var a2=Number(prompt("Ingresa tu segunda matriz" + "\n" + a1 + " ? " + "\n?" + " ? "));
	var a3=Number(prompt("Ingresa tu tercera matriz" + "\n" + a1 + " " + a2 + "\n?" + " ? "));
	var a4=Number(prompt("Ingresa tu cuarta matriz" + "\n" + a1 + " " + a2 + "\n" + a3 + " ? "));
	var determinante= (a1*a4) - (a2*a3);
	alert("Matriz" +"\n" + a1 + " " + a2 + "\n" + a3 + " " + a4 + "\nEl determinante es: " + determinante);
}