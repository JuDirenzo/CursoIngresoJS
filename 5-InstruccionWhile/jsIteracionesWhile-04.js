function mostrar() {
  num = parseInt(prompt("Escriba un número entre el 0 y el 9: "));

  while (!(num >= 0 && num <= 9)) { //while (num <0 || num > 9)
    num = parseInt(prompt("El número tiene que estar en un rango de 0 a 9. Vuelva a escribirlo: "));
  }

  document.getElementById("txtIdNumero").value = "El número " + num + " es correcto.";
}

// algo que NO es numérico (str) no puede estar dentro de un rango numérico, por ejemplo:
// (num >= 0 && num <= 9) NO hace falta poner isNaN()
// pero en (num < 0 || num > 9) SÍ hace falta poner isNaN() ya que se utiliza un OR 
