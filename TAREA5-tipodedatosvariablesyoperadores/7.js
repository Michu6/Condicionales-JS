// EJERCICIO 7
function area(){
	var radio = Number(prompt("Coloca el radio de tu círculo"));
	var pi = Math.PI;
	var area = pi*(radio*radio);
	document.getElementById("result").innerHTML = ("El área de tu círculo es de: " + area);
}
