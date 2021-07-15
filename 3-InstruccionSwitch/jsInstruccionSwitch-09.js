function mostrar() {
  let precio = 15000;
  let estacion;
  let destino;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  /*por qué los else-if anidados tienen que ir por fuera de los {} de los else-if anteriores
  y los switch anidados tienen que ir dentro de los {} anteriores? */

  switch (estacion) {
    case "Invierno":
      switch (destino) {
        case "Bariloche":
          precio = precio + precio * 0.2;
          alert("El precio del viaje a " + destino + " es de $" + precio);
          break;

        case "Cataratas":
        case "Cordoba":
          precio = precio - precio * 0.1;
          alert("El precio del viaje a " + destino + " es de $" + precio);
          break;

        case "Mar del plata":
          precio = precio - precio * 0.2;
          alert("El precio del viaje a " + destino + " es de $" + precio);
      }
  }

  switch (estacion) {
    case "Verano":
      switch (destino) {
        case "Bariloche":
          precio = precio - precio * 0.2;
          alert("El precio del viaje a " + destino + " es de $" + precio);
          break;

        case "Cataratas":
        case "Cordoba":
          precio = precio + precio * 0.1;
          alert("El precio del viaje a " + destino + " es de $" + precio);
          break;

        case "Mar del plata":
          precio = precio + precio * 0.2;
          alert("El precio del viaje a " + destino + " es de $" + precio);
      }
  }

  switch (estacion) {
    case "Otoño":
    case "Primavera":
      switch (destino) {
        case "Bariloche":
        case "Cataratas":
        case "Mar del plata":
          precio = precio + precio * 0.1;
          alert("El precio del viaje a " + destino + " es de $" + precio);
          break;
        case "Cordoba":
          alert("El precio del viaje a " + destino + " es de $" + precio);
      }
  }
}
