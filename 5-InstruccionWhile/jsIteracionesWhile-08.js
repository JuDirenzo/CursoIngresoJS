function mostrar() {
 /* let numero = 0;
  let respuesta;
  let acumuladorPositivo = 0;
  let acumuladorNegativo = 1;

  do {
    numero = parseInt(prompt("Ingrese un número, ya sea positivo o negativo."));
    respuesta = prompt("Quiere seguir ingresando números? Continúe con S ó N:");

    if (numero > 0) {
      acumuladorPositivo += numero;
    } else {
      acumuladorNegativo *= numero;
    }
  } while (respuesta == "S");

  document.getElementById("txtIdSuma").value = acumuladorPositivo;
  document.getElementById("txtIdProducto").value = acumuladorNegativo;
*/
  //

  let numero = 0;
  let respuesta;
  let acumuladorPositivo = 0; 
  let acumuladorNegativo = 1; //para que cuando empecemos a multiplicar no lo haga por 0
  let flag = 0;

  do {
    numero = parseInt(prompt("Ingrese un número, ya sea positivo o negativo."));

    while (isNaN(numero)) {
      numero = parseInt(prompt("El valor ingresado no es un número."));
    }

	if (numero >= 0) {
		alert("El número es positivo.");
		acumuladorPositivo += numero;
	} else {
		flag = 1;
		alert("El número es negativo.");
		acumuladorNegativo *= numero;
	}

    respuesta = prompt("Quiere seguir ingresando números? Continúe con S ó N:");


  } while (respuesta == "S");


if (!flag) {
	acumuladorNegativo = 0;
}

document.getElementById("txtIdSuma").value = acumuladorPositivo; 
document.getElementById("txtIdProducto").value = acumuladorNegativo; //o se puede declarar la variable en 0 y hacer el resultado * flag ya que si entra en el while va a ser 1

}
