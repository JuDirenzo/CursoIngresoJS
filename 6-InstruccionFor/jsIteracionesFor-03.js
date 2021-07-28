function mostrar() {
  let repeticion = parseInt(prompt("Ingrese el número de repeticiones: "));
  let mensaje = "Hola UTN-FRA";

  for (let i = 0; i < repeticion; i++) { //se inicializa i en 0 y se dice que i es menor al número base de repeticiones (5, 10, 15 ,etc.)
    alert(mensaje);					     //como i es 0, y repeticiones un número positivo, se hace un contador de i ++ para que llegue a él.
  }
  //si el bucle empieza en 0, termina en < (numero), no termina con el número exacto de la repeticion.

  //Break dentro del for:

  for (let i = 0; i < repeticion; i++) {
    if (i == 10) {
      break;
    }
  }
  console.log(i); //muestra del 0 al 9, al llegar al 10 corta.
} //FIN DE LA FUNCIÓN
