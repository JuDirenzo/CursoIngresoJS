function CalcularPrecio() {
  //se declaran variables y se les asigna valor a precio e impuesto 
  //para que en el caso de querer cambiar sus valores, estén a nuestro alcance fácilmente.
  let cantidad;
  let marca;
  let precio = 35;
  let descuento = 0;
  let impuesto = 0.1;
  let precioFinal;
  let precioIIBB;

  cantidad = parseInt(document.getElementById("txtIdCantidad").value);
  marca = document.getElementById("Marca").value;
  precio = 35 * cantidad;

  switch (cantidad) {
    case 5:
      if (marca == "ArgentinaLuz") {
        descuento = 0.4; //precio * 0.6 sería otra manera
      } else {
        descuento = 0.3;
      }
      break;

    case 4:
      if (marca == "ArgentinaLuz" || marca == "FelipeLampras") {
        descuento = 0.25;
      } else {
        descuento = 0.2;
      }
      break;

    case 3:
      if (marca == "ArgentinaLuz") {
        descuento = 0.15;
      } else if (marca == "FelipeLamparas") {
        descuento = 0.1;
      } else {
        descuento = 0.05;
      }
      break;
      
    case 2:
    case 1:
      descuento = 0; //esta asignación se hace ya que debajo hacemos uso de "default" para cantidades mayores a 6
      break;

    default:
      descuento = 0.5;
  }

  descuento = precio * descuento;
  precioFinal = precio - descuento;

  if (precioFinal > 120) {
    impuesto = precioFinal * 0.1;
    precioIIBB = precioFinal + impuesto;
    document.getElementById("txtIdprecioDescuento").value = "Usted pagó un total de $" + precioIIBB.toFixed(2) + ". Siendo $" + impuesto.toFixed(2) + " el impuesto que se pagó.";
  } else if (cantidad > 0 && precioFinal <= 120) { //con cantidad > 0 nos aseguramos que no haya números inválidos dentro de la cuenta
    document.getElementById("txtIdprecioDescuento").value = "Usted pagó $" + precioFinal.toFixed(2);
  } else { 
    document.getElementById("txtIdprecioDescuento").value = "¡Tiene que seleccionar una cantidad primero!";
  }


  //estrategia de resolución
  // 1. declaro variables
  // 1.1 precio/cantidad/marca/porDescuento/importeFinal/IIBB
  // 2. levantar los datos (cantidad, marca)
  // 3. de acuerdo a la cantidad comprada y la marca calculo el porcentaje de descuento
  // 4. una vez que tengo el % de descuento calculo el precio de una lampara con el descuento
  // 5. escribo en la caja de texto inferior el precio unitario de la lampara
  // 6. calculo el importe final (precio de la lampara con descuento)
  // 7. me fijo si corresponde el IIBB
  // 8. muestro el importe final y de corresponder el impuesto

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
