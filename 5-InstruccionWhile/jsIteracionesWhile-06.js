function mostrar() {
  let contador = 0;
  let numero;
  let acumulador = 0;
  let promedio;

  while (contador < 5) {
    numero = parseInt(prompt("Ingrese un número: "));

    acumulador = acumulador + numero;

    contador++;
  }

  promedio = acumulador / 5;

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = promedio;
}
