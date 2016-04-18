// EJERCICIO 5
var mayor = function(a,b,c){
	if (a > b && a > c) {
		return a + " es mayor que " + b + " y " + c
	} else if (b > a && b > c) {
		return b + " es mayor que " + a + " y " + c
	} else if (c > a && c > b) {
		return c + " es mayor que " + a + " y " + b
	}
}

console.log(mayor(4,5,9));
console.log(mayor(20,15,2));
console.log(mayor(2,100,0));