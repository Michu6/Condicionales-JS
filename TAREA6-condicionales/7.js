// EJERCICIO 7
function valores() {
	var sumaUno = 0,
		sumaDos = 0;
	for(i=1;i<=3;i++){
		var listaUno = parseInt(prompt("Ingresa el valor N° " + i + " de la primera lista"));
		sumaUno += listaUno;
	} document.write ("La suma de la primera lista es: " + sumaUno + "<br>");

	for(j=1;j<=3;j++){
		var listaDos = parseInt(prompt("Ingresa el valor N° " + j + " de la segunda lista"));
		sumaDos += listaDos;
	} document.write ("La suma de la segunda lista es: " + sumaDos);

	if(listaUno > listaDos) {
		alert("La lista UNO tiene el mayor valor");
	} else if (listaDos > listaUno) {
		alert("La lista DOS tiene el mayor valor");
	} else {
		alert("Listas iguales");
	}
};