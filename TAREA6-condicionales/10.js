// EJERCICIO 10
function censo(){
	var documento;
	var edad;
	var totalPersonas = 0;
	var cantidadVarones = 0;
	var cantidadMujeres = 0;
	var cantidadVaronesGrandes = 0;
	do {
		documento=parseInt(prompt('Ingrese numero de documento:',''));
		if (documento > 0){
			edad=parseInt(prompt('Ingrese la edad:',''));
			sexo=prompt('Ingrese el sexo (masculino/femenino):','');
			if (sexo === "masculino"){ 
				cantidadVarones = cantidadVarones + 1; //cantidadVarones  + = 1;	    
			    if (edad >= 16 && edad <= 65){
					cantidadVaronesGrandes = cantidadVaronesGrandes + 1; //cantidadVaronesGrandes  + = 1;
			    }
			} 
			if (sexo === "femenino"){ 
			    cantidadMujeres = cantidadMujeres + 1; //cantidadMujeres  + = 1;
			} 
			totalPersonas = totalPersonas + 1; //totalPersonas  + = 1;
		}
	}while(documento<1);
	document.write('Total de personas censadas: '  +  totalPersonas  +  '<br>');
	document.write('Cantidad de varones: ' + cantidadVarones + '<br>'); 
	document.write('Cantidad de mujeres: ' + cantidadMujeres + '<br>');   
	document.write('Cantidad de varones entre 16 y 65 años: ' + cantidadVaronesGrandes + '<br>');
	// var personas = parseInt(prompt("¿Cuántas personas vas a censar?"));
		// edad = 0;
		// sexo = 0;
	// for(i=1;i<=personas;i++){
	// 	do {
	// 		var documento = parseInt(prompt("Ingresa el número de documento de la persona " + i));
	// 		if(documento>0) {
	// 			alert("holi");
	// 		} else {
	// 			alert("laaaaaaaaaaa");
	// 		}
	// 	} while(documento<1);
	// };
};

// Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo.
// De cada una de las personas censadas se tiene la siguiente información: número de documento,
// edad y sexo ('femenino' o 'masculino') Se pide confeccionar un programa que lea los datos de
// cada persona censada (para finalizar ingresar el valor cero en el número de documento) e informar:
// a) Cantidad total de personas censadas. b) Cantidad de varones. c) Cantidad de mujeres.
// d) Cantidad de varones cuya edad varía entre 16 y 65 años.