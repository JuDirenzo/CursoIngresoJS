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
        case "Invierno":
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
          break;
      }

      break;

    case "Verano":
      switch (destino) {
        case "Invierno":
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
          break;
      }

      break;

    case "Otoño":
    case "Primavera":
      switch (destino) {
        case "Invierno":
        case "Cataratas":
        case "Mar del plata":
          precio = precio + precio * 0.1;
          alert("El precio del viaje a " + destino + " es de $" + precio);
          break;
        case "Cordoba":
          alert("El precio del viaje a " + destino + " es de $" + precio);
      }
  }

  let destino;
  let estacion;
  let precioFinal;
  let descuento = 0;
  let aumento = 0;
  let precio = 15000;

  destino = document.getElementById("txtIdDestino").value;
  estacion = document.getElementById("txtIdEstacion").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Invierno") {
        aumento = 20; // alert(precio * 1.2) podría ser otra solución
      } else if (destino == "Mar del plata") {
        descuento = 20;
      } else {
        descuento = 10;
      }
      break;

    case "Verano":
      if (destino == "Invierno") {
        descuento = 20;
      } else if (destino == "Mar del plata") {
        aumento = 20;
      } else {
        aumento = 10;
      }
      break;

    case "Otoño":
    case "Primavera":
      if (destino != "Cordoba") {
        aumento = 10;
      } else {
        precioFinal = precio;
      }
      break;
  }

  precioFinal = precio + (aumento / 100) * precio - (descuento / 100) * precio;
  alert("Precio final: $" + precioFinal);

  let precio = 15000;
  let estacion;
  let destino;
  let precioFinal;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        precioFinal = precio * 1.2;
      } else if (destino == "Mar del plata") {
        precioFinal = precio * 0.8;
      } else {
        precioFinal = precio * 0.9;
      }
      break;
    case "Verano":
      if (destino == "Bariloche") {
        precioFinal = precio * 0.8;
      } else if (destino == "Mar del plata") {
        precioFinal = precio * 1.2;
      } else {
        precioFinal = precio * 1.1;
      }
      break;
    case "Otoño":
    case "Primavera":
      if (destino == "Cordoba") {
        precioFinal = precio;
      } else {
        precioFinal = precio * 1.1;
      }
      break;
  }

  alert("El precio final es $" + precioFinal);

  //CON LA SITUACIÓN INVERTIDA

  
}
