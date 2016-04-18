// EJERCICIO 4
var descuento = function(precio){
	if (precio > 2500) {
		return "Felicidades obtuviste un descuento del 15% y has ahorrado S/." + precio*0.15
	} else {
		return "Felicidades obtuviste un descuento del 8% y has ahorrado S/." + precio*0.08 
	}
}

console.log(descuento(2501));
console.log(descuento(100));
