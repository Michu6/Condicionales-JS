// EJERCICIO 8
function triangulo(){ 
	var lado1= parseInt(prompt("Ingresa el lado 1 del triangulo" ));
	var lado2= parseInt(prompt("Ingresa el lado 2 del triangulo" ));
	var lado3= parseInt(prompt("Ingresa el lado 3 del triangulo" ));
	if(lado1==lado2 || lado1==lado3 || lado2==lado3){
		document.write("El triangulo es isosceles");
	}
	if(lado1==0 || lado2==0 || lado3==0){
		document.write("El triangulo no existe");
	}
	if((lado1*lado1)==((lado2*lado2)+(lado3*lado3))||(lado2*lado2)==((lado1*lado1)+(lado3*lado3))||(lado3*lado3)==((lado2*lado2)+(lado1*lado1))){
		document.write("El triangulo es rectangulo");
	}
	if( (lado1 !=lado2) && (lado2!=lado3) && (lado3!=lado1)){
		document.write("El triangulo es escaleno");
	}
};