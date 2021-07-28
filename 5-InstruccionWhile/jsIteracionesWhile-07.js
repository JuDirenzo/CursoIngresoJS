function mostrar() {
  let respuesta = 0;
  let suma = 0;
  let promedio;
  let contador = -1;

  do {
    suma = suma + respuesta;
    contador++;
    respuesta = parseInt(
      prompt("Elija un número para continuar o escriba que no quiere seguir contando.")
    );
  } while (!isNaN(respuesta));

  promedio = suma / contador;

  document.getElementById("txtIdSuma").value = suma;
  document.getElementById("txtIdPromedio").value = promedio;

  // o sino:

  let contador = 0;
  let acumulador = 0;
  let respuesta;
  let numeroIngresado;
  let promedio;

  do {
    numeroIngresado = parseInt(prompt("Ingrese un número"));
    while (isNaN(numeroIngresado)) {
      numeroIngresado = parseInt(prompt("ERROR. Ingrese sólo números. Reintentelo.")
      );
    }

    acumulador += numeroIngresado;
    contador++;

    respuesta = prompt("¿Desea seguir ingresando números? (Sí = 's'; No = 'n)").toLowerCase();
  } while (respuesta == "s");

  promedio = acumulador / contador;

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = promedio;
}
