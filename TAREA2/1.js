// EJERCICIO 1
var promedio = function(a,b,c){
	if (a >= 1 && a <= 10 && b >= 1 && b <= 10 && b >= 1 && b <= 10) {
		return (a+b+c)/3
	} else {
		return "hola"
	}
}

var nota = function(promedio) {
	if (promedio >= 6) {
		return "Tienes " + promedio + " de promedio ¡Muy bien! Aprobaste!!"
	} else {
		return "Tienes " + promedio + " de promedio y acabas de desaprobar..."
	}
}

console.log(nota(promedio(8,3,4)));
console.log(nota(promedio(2,8,10)));
