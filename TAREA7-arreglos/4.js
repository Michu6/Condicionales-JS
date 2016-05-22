// EJERCICIO 4
function operacion(){
	var valores = [true, 5, false, "hola", "adios", 2];
	
	var saludoHola = valores[3].length;
	var saludoAdios = valores[4].length;
	if (saludoHola>saludoAdios){
		document.write("Hola es mayor <br>");
	} document.write("Adiós es mayor <br>");


	var bool1 = valores[0],
		bool2 =valores[2];
	var booleanos = bool1 || bool2;
	document.write(booleanos + "<br>");
	var booleanos = bool1 && bool2;
	document.write(booleanos + "<br>");


	var numeroUno = valores[1];
	var numeroDos = valores[5];
	var suma = numeroUno + numeroDos,
		resta = numeroUno - numeroDos,
		multi = numeroUno * numeroDos,
		divi = numeroUno / numeroDos,
		modulo = numeroUno % numeroDos;
	document.write("La suma de tus números es: " + suma + ", la resta es: " + resta + ", la división es: " + divi + ", la mutliplicación es: " + multi + " y el módulo es: " + modulo);
};