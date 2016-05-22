// EJERCICIO 5
function repetir() {
	var texto = prompt("Ingresa un texto");
	var repeticion = parseInt(prompt("¿Cuántas veces quieres que se repita?"))
	for(i=0;i<repeticion;i++){
		document.write(texto + "<br>");
	}
};