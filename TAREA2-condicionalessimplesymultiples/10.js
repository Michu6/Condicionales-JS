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






// EJERCICIO 10 GIAN
// function calcularGastoFabricacion(materiaPrima,tipoProducto) {
// 	var costoGastoFabricacion = null;
// 	if (tipoProducto === 2 || tipoProducto === 5) {
// 		costoGastoFabricacion = 0.30 * materiaPrima;
// 	}
// 	if (tipoProducto === 3 || tipoProducto === 6) {
// 		costoGastoFabricacion = 0.35 * materiaPrima;
// 	}
// 	if (tipoProducto === 1 || tipoProducto === 4) {
// 		costoGastoFabricacion = 0.28 * materiaPrima;
// 	}
// 	return costoGastoFabricacion;
// }
// ​
// function calcularManoObra(materiaPrima,tipoProducto) {
// 	var costoManoObra = null;
// 	if (tipoProducto === 3 || tipoProducto === 4) {
// 		costoManoObra = 0.75 * materiaPrima;
// 	}
// 	if (tipoProducto === 1 || tipoProducto === 5) {
// 		costoManoObra = 0.80 * materiaPrima;
// 	}
// 	if (tipoProducto === 2 || tipoProducto === 6) {
// 		costoManoObra = 0.85 * materiaPrima;
// 	}
// 	return costoManoObra;
// }
// ​
// function calcularCostoProduccion(materiaPrima,tipoProducto) {
// 	return materiaPrima + 
// 		   calcularManoObra(materiaPrima,tipoProducto) +
// 		   calcularGastoFabricacion(materiaPrima,tipoProducto);
// }
// ​
// function calcularPrecioVenta(materiaPrima,tipoProducto) {
// 	var costoProduccion = calcularCostoProduccion(materiaPrima,tipoProducto);
// 	return parseFloat((costoProduccion * 1.45).toFixed(2));
// }
// ​
// console.log(calcularPrecioVenta(300,1));
// console.log(calcularPrecioVenta(180,4));
// console.log(calcularPrecioVenta(100,6));