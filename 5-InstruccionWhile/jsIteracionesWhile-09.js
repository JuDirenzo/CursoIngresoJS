function mostrar() {
  let num;
  let numMax;
  let numMin;
  let seguir;
  let flag = 1;

  do {
    num = parseInt(prompt("Ingrese un número:"));

    if (flag || num > numMax) {
      numMax = num;
    }
    if (flag || num < numMin) {
      numMin = num;
      flag = 0; //esto es para que TODAS las demas iteraciones caigan en los if de los num, ya que se le asignó el valor a numMax y numMin
    }

    seguir = prompt("Quiere seguir ingresando números? S o N");
  } while (seguir == "S");

  document.getElementById("txtIdMaximo").value = numMax;
  document.getElementById("txtIdMinimo").value = numMin;
}