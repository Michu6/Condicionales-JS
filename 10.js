// EJERCICIO 10
var manodeobra = function(materia, articulo){
	if (articulo == 3 || articulo == 3) {
		return materia*0.75
	} else if (articulo == 1 || articulo == 5) {
		return materia*0.8
	} else if (articulo == 2 || articulo == 6) {
		return materia*0.85
	} else if (articulo < 1 && articulo > 6) {
		return "Ingresa clave correcta"
	}
} 

var gastofabricacion = function(materia, articulo){
	if (articulo == 2 || articulo == 5) {
		return materia*0.3
	} else if (articulo == 3 || articulo == 6) {
		return materia*0.35
	} else if (articulo == 1 || articulo == 4) {
		return materia*0.28
	} else if (articulo < 1 && articulo > 6) {
		return "Ingresa clave correcta"
	}
}

var costoproduccion = function (materia, articulo) {
	if (articulo <= 7 && articulo > 0) {
		return materia + manodeobra(materia,articulo) + gastofabricacion(materia,articulo)
	} else {
		return "Ingresa clave correcta"
	}
}

var precioventa = function (materia, articulo) {
	if (articulo <= 7 && articulo > 0) {
		return costoproduccion(materia,articulo)*1.45
	} else {
		return "Ingresa clave correcta"
	}
}

console.log("El precio de venta del artículo es de S/." + precioventa(15,3));
console.log("El precio de venta del artículo es de S/." + precioventa(0.5,9));
console.log("El precio de venta del artículo es de S/." + precioventa(1,2));