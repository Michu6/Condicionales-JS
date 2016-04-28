// EJERCICIO 10
function determinante() {
	var a= [];
	for(i=1;i<=2;i++){
		a[i]=[];
		for(j=1;j<=2;j++){
			a[i][j]= Number(prompt("Ingresa tu número de la fila " + i + " y columna " + j));
		}
	}
	alert("Matriz" +"\n" + a[1][1] + " " + a[1][2] + "\n" + a[2][1] + " " + a[2][2]);
}