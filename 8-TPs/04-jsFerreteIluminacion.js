function CalcularPrecio() {
  //se declaran variables y se les asigna valor a precio e impuesto 
  //para que en el caso de querer cambiar sus valores, estén a nuestro alcance fácilmente.
  let cantidad;
  let marca;
  let precio = 35;
  let descuento;
  let impuesto = 1.1;

  cantidad = parseInt(document.getElementById("txtIdCantidad").value);
  marca = document.getElementById("Marca").value;
  precio = precio * cantidad;

  switch (cantidad) {
    case 5:
      if (marca == "ArgentinaLuz") {
        descuento = precio * 0.6;
      } else {
        descuento = precio * 0.7;
      }
      break;

    case 4:
      if (marca == "ArgentinaLuz" || marca == "FelipeLampras") {
        descuento = precio * 0.75;
      } else {
        descuento = precio * 0.8;
      }
      break;

    case 3:
      if (marca == "ArgentinaLuz") {
        descuento = precio * 0.85;
      } else if (marca == "FelipeLamparas") {
        descuento = precio * 0.9;
      } else {
        descuento = precio * 0.95;
      }
      break;

    case 2:
    case 1:
      descuento = precio; //esta asignación es gracias a que precio ya tiene guardado el resultado de la cuenta "unidad por $35"
      break;

    default:
      descuento = precio * 0.5;
  }

  if (descuento > 120) {
    descuento = descuento * impuesto;
    document.getElementById("txtIdprecioDescuento").value = "IIBB Usted pagó $" + descuento.toFixed(2);
  } else if (cantidad > 0 && descuento <= 120) { //con cantidad > 0 nos aseguramos que no haya números inválidos dentro de la cuenta
    document.getElementById("txtIdprecioDescuento").value = "Usted pagó $" + descuento.toFixed(2);
  } else { 
    document.getElementById("txtIdprecioDescuento").value = "¡Tiene que seleccionar una cantidad primero!";
  }

} 
  // CON SWITCH DOBLE

/*switch (cantidad) {
    case 5:
      switch (marca) {
        case "ArgentinaLuz":
          descuento = precio * 0.6;
          break;
        case "FelipeLamparas":
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
          descuento = precio * 0.7;
      }
      break;

    case 4:
      switch (marca) {
        case "ArgentinaLuz":
        case "FelipeLamparas":
          descuento = precio * 0.75;
          break;
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
          descuento = precio * 0.8;
      }
      break;

    case 3:
      switch (marca) {
        case "ArgentinaLuz":
          descuento = precio * 0.85;
          break;
        case "FelipeLamparas":
          descuento = precio * 0.9;
          break;
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
          descuento = precio * 0.95;
      }
      break;

    case 2:
    case 1:
      descuento = precio;
      break;

    default:
      descuento = precio * 0.5;
  }

  if (descuento > 120) {
    descuento = descuento * impuesto;
    document.getElementById("txtIdprecioDescuento").value = "IIBB Usted pagó $" + descuento.toFixed(2);
  } else if (cantidad > 0 && descuento <= 120) {
    document.getElementById("txtIdprecioDescuento").value = "Usted pagó $" + descuento.toFixed(2);
  } else {
    document.getElementById("txtIdprecioDescuento").value = "¡Tiene que seleccionar una cantidad primero!";
  }
}
*/




// CAMBIO DE LADO

/*switch (marca) {
    case "ArgentinaLuz":
    case "FelipeLamparas":
    case "JeLuz":
    case "HazIluminacion":
    case "Osram":
      if (cantidad >= 6) {
              descuento = precio * 0.5;
      }
      break;*/
