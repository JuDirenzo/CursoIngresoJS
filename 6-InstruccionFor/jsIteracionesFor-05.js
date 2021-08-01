function mostrar() {

  for (; ;) { //se pueden dejar los campos vacíos para entrar en un bucle infinito.
    numero = parseInt(prompt("Ingrese un número"));
    while (isNaN(numero)) {
      numero = parseInt(prompt("ERROR. Ingrese un número"));
    }

    if (numero == 9) {
      break;
    }
  }
} //FIN DE LA FUNCIÓN
