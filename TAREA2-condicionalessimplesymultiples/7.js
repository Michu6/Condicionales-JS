// EJERCICIO 7
var costoalumno = function(alumnos){
	if (alumnos >= 100) {
		return 65
	} else if (alumnos >= 50 && alumnos <= 99) {
		return 95
	} else if (alumnos >= 30 && alumnos <= 49) {
		return 70
	} else if (alumnos < 30)
		return 4000/alumnos
}

var costobus = function(alumnos) {
	if (alumnos <= 30) {
		return 4000
	} else {
		return costoalumno(alumnos)*alumnos
	}
}

console.log("El costo por alumno es de S/." + costoalumno(30) + " y se debe pagar S/." + costobus(40));
console.log("El costo por alumno es de S/." + costoalumno(13) + " y se debe pagar S/." + costobus(32));