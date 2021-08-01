/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validar("arena";"cal";"cemento")
cantidadBolsas de bolsas,
Precio por bolsa (más de 0),

Si compro más de 10 bolsas en total se tiene 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total se tiene 25% de descuento sobre el total a pagar.
a) El importe total a pagar, bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde).
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro.
*/


function mostrar() {
  let tipo;
  let precio;
  let cantidadBolsas;
  let acumCal = 0;
  let acumCemento = 0;
  let acumArena = 0;
  let importeBruto = 0;
  let importeNeto;
  let descuento = 0;
  let maxTipo;
  let maxPrecio;
  let flagCaro = 1;
  let subTotal;
  let seguir;
  let totalBolsas;

  do {
    //se piden y se validan los datos
    tipo = prompt("Ingrese el material: arena/cal/cemento");
    while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento")) {
      tipo = prompt("Material incorrecto. Reingréselo.");
    }
    cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas del material seleccionado: "));
    while (isNaN(cantidadBolsas) || cantidadBolsas <= 0) {
      cantidadBolsas = parseInt(prompt("Cantidad inválida. Reingrésela."));
    }
    precio = parseInt(prompt("Ingrese el precio del material: "));
    while (!(precio > 0)) {
      precio = parseInt(prompt("Precio inválido. Reingréselo."));
    }

    subTotal = precio * cantidadBolsas; //se hace el subtotal con el precio y la cantidad de CADA material ingresado
    importeBruto += subTotal; //se suma CADA subtotal al importe bruto final

    if (tipo == "cemento") {
      //por cada iteración dependiendo del tipo que sea se suma al acumulador de cantidades del tipo correspondiente
      acumCemento += cantidadBolsas;
    } else if (tipo == "cal") {
      acumCal += cantidadBolsas;
    } else {
      acumArena += cantidadBolsas;
    }

    if (flagCaro || precio > maxPrecio) {
      //se usa un flag para entrar y determinar un precio máximo
      maxPrecio = precio;
      maxTipo = tipo;
      flagCaro = 0;
    }

    seguir = prompt("Quiere ingresar otro material? Si/No").toLowerCase();
  } while (seguir == "si");

  totalBolsas = acumArena + acumCal + acumCemento;

  if (totalBolsas > 30) {
    descuento = importeBruto * 0.25;
  } else if (totalBolsas > 10) {
    descuento = importeBruto * 0.15;
  }

  importeNeto = importeBruto - descuento;

  if (acumArena > acumCemento && acumArena > acumCal) {
    mayorTipo = "arena";
  } else if (acumCemento >= acumArena && acumCemento > acumCal) {
    mayorTipo = "cemento";
  } else {
    mayorTipo = "cal";
  }

  document.write("a) Importe bruto: " + importeBruto + "<br>");
  if (totalBolsas > 30) {
    document.write("b) Importe neto con descuento del 25% por haber comprado más de 30 bolsas: $" +  importeNeto + "<br>");
  } else if (totalBolsas > 10) {
    document.write( "b) Importe neto con descuento del 15% por haber comprado más de 10 bolsas: $" + importeNeto + "<br>");
  } else {
    document.write("b) No se efectuó ningun descuento <br>");
  }

  document.write("d) El tipo con más cantidad de bolsas compradas es: " + mayorTipo + "<br>");

  document.write("e) El tipo más caro es " + maxTipo + " costando $" + maxPrecio + " la unidad." + "<br>");

}
