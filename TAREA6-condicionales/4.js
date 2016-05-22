// EJERCICIO 4
function saldo() {
	var numeroCuentas = parseInt(prompt("¿cuántas cuentas hay en el banco?"));
	var sumaSaldo = 0;
	
	for(i=0;i<numeroCuentas;i++){
		var cuenta = parseInt(prompt("Ingresa tu número de cuenta"));
		var nombre = prompt("Ingresa tu nombre");
		var saldo = parseInt(prompt("Ingresa tu saldo"));
		if (cuenta>0 && saldo>0) {
			sumaSaldo = sumaSaldo + saldo;
			document.write("Hola " + nombre + ",tu número de cuenta es: " + cuenta + " y tu saldo es de: " + saldo + " y eres ACREEDOR <br>");	
			document.write("La suma de tus saldos es" + sumaSaldo + "<br>");
		} else {
			document.write("Hola " + nombre + " eres DEUDOR");	
		}
	}
};