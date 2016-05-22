// EJERCICIO 2
function factorial() {
	var num = parseInt(prompt("Indica el número que desees saber su factorial"));
	var fact=1;
	for(i=num;i>1;i--){
		fact=fact*i;
		document.write(fact + "<br/>");
	}
}

// POR CONSOLA
// function factorial(n) {
// 	if (n == 0){
// 		return 1;
// 	}
// 	else {
// 		return factorial(n-1) * n;
// 	}
// }
// console.log(factorial(8));