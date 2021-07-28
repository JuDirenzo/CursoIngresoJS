/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
    let num = 0,
    acumuladorPositivo = 0,
    acumuladorNegativo = 0,
    acumuladorCero = 0,
    acumuladorPar = 0,
    sumaPositivo = 0,
    sumaNegativo = 0,
    promedioPositivo = 0,
    promedioNegativo = 0,
    diferencia = 0,
    respuesta;

  do {
    num = parseInt(prompt("Ingrese un número positivo o negativo:"));

    while (isNaN(num)) {
      num = parseInt(prompt("Ingrese un número válido:"));
    }

    respuesta = prompt("Quiere seguir ingresando números? S / N");

    if (num > 0) {
      sumaPositivo += num;
      acumuladorPositivo++;
    } else if (num == 0) {
      acumuladorCero++;
    } else {
      sumaNegativo += num;
      acumuladorNegativo++;
    }

    if (num % 2 == 0) {
      acumuladorPar++;
    }
  } while (respuesta == "S");

  if (acumuladorPositivo != 0) {
    promedioPositivo = sumaPositivo / acumuladorPositivo;
  }

  if (acumuladorNegativo != 0) {
    promedioNegativo = sumaNegativo / acumuladorNegativo;
  }

  diferencia = acumuladorPositivo - acumuladorNegativo;

  document.write("La suma de los números negativos es: " + sumaNegativo + "<br>");
  document.write("La suma de los números positivos es: " + sumaPositivo + "<br>");
  document.write("----------------------------------------------------" + "<br>");
  document.write("La cantidad de números negativos es: " + acumuladorNegativo + "<br>");
  document.write("La cantidad de números positivos es " + acumuladorPositivo + "<br>");
  document.write("----------------------------------------------------" + "<br>");
  document.write("La cantidad de números ceros es: " + acumuladorCero + "<br>");
  document.write("La cantidad de números pares es: " + acumuladorPar + "<br>");
  document.write("----------------------------------------------------" + "<br>");
  document.write("El promedio de números negativos es: " + promedioNegativo + "<br>");
  document.write("El promedio de números positivos es: " + promedioPositivo + "<br>");
  document.write("----------------------------------------------------" + "<br>");
  document.write("La diferencia de cantidades entre positivos y negativos es: " + diferencia);
} //FIN DE LA FUNCIÓN
