/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar() {
  let nombre;
  let edad;
  let sexo;
  let estadoCivil;
  let tempCorporal;
  let seguir;
  let tempMax;
  let nombreMax;
  let flagTemp = 1;
  let contadorViudos = 0;
  let contadorEdadTemp = 0;
  let contadorHombre = 0;
  let contadorHombreSoltero = 0;
  let contadorHombreViudo = 0;
  let promedioEdad = 0;

  do {
    nombre = prompt("Bienvenido/a! Ingrese su nombre: ");
    while (!(isNaN(nombre))) {
      nombre = prompt("El nombre ingresado tiene que contener letras, no números. Vuelva a ingresarlo: ");
    }

    edad = parseInt(prompt("Ingrese su edad: "));
    while (isNaN(edad)) {
      edad = parseInt(prompt("Edad inválida. Vuelva a ingresarla: "));
    }

    sexo = prompt("Ingrese su sexo (f/m): ").toLowerCase();
    while (sexo != 'f' && sexo != 'm') {
      sexo = prompt("Sexo inválido. Vuelva a ingresarlo: ").toLowerCase();
    }

	estadoCivil = prompt("Ingrese su estado civil (Soltero/Casado/Viudo): ").toLowerCase();
	while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
		estadoCivil = prompt("Vuelva a ingresar su estado civil correctamente: ").toLowerCase();
	}

	tempCorporal = parseFloat(prompt("Ingrese su temperatura corporal: "));
	while (isNaN(tempCorporal)) {
		tempCorporal = parseFloat(prompt("Vuelva a ingresar su temperatura corporal: "));
	}

	if (flagTemp || tempCorporal > tempMax) {
		flagTemp = 0;
		nombreMax = nombre;
		tempMax = tempCorporal;
	}

	if (edad > 18 && estadoCivil == "viudo") {
		contadorViudos ++;
	} else if (edad > 60 && tempCorporal > 38) {
		contadorEdadTemp ++;
	}

	if (sexo == 'm' && estadoCivil == "soltero") {
		contadorHombreSoltero ++;
		promedioEdad += edad;
	} else if (sexo == 'm' && estadoCivil == "viudo") {
		contadorHombreViudo ++;
	}

	contadorHombre = contadorHombreSoltero + contadorHombreViudo;

	seguir = prompt("Quiere seguir ingresando pasajeros? (Si/No): ").toLowerCase();

  } while (seguir == "si");


  document.write("a) El nombre de la persona con más temperatura es: " + nombreMax + " con " + tempMax + " grados de temperatura." + "<br>");
  document.write("b) La cantidad de gente mayor de edad viuda es: " + contadorViudos + "<br>");
  document.write("c) La cantidad de hombres solteros o viudos es de: " + contadorHombre + "<br>" );
  document.write("d) La cantidad de personas de tercera edad que tienen más de 38 de temperatura es: " + contadorEdadTemp + "<br>");

  if(promedioEdad != 0) { 
  document.write("e) El promedio de edad de los hombres solteros es: " + (promedioEdad / contadorHombreSoltero).toFixed(2) + "<br>");
  }	

}
