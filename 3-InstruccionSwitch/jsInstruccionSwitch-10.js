function mostrar() {
  let estacion;
  let destino;
  let seViaja = 1; //técnica flag.

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  /*switch (estacion) {
    case "Invierno":
      if (destino != "Bariloche") {
        seViaja = 0;
      }

      break;

    case "Verano":
      if (destino != "Mar del plata" && destino != "Cataratas") {
        seViaja = 0;
      }

      break;

    case "Primavera":
      if (destino == "Bariloche") {
        seViaja = 0;
      }
  }

  if (seViaja) {
    //si seViaja = 0, if (!seViaja)
    alert("Se viaja.");
  } else {
    alert("No se viaja.");
  }*/

    //CON LA SITUACIÓN INVERTIDA

  switch (destino) {
    case "Bariloche":
      if (estacion != "Invierno" && estacion != "Otoño") {
        seViaja = 0;  
      }
      break;

    case "Mar del plata":
    case "Cataratas":
      if (estacion == "Invierno") {
        seViaja = 0;
      }
      break;

    case "Cordoba":
      if (estacion != "Otoño" && estacion != "Primavera") {
        seViaja = 0;
      }
    
  }

  if (seViaja) {
    alert("Se viaja.");
  } else {
    alert("No se viaja.");
  }

}
