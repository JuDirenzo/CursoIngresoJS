function mostrar() {
  let destino;

  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Bariloche":
      alert("El destino se encuentra en el Oeste.");
      break;
    case "Cataratas":
      alert("El destino se encuentra en el Norte.");
      break;
    case "Mar del plata":
      alert("El destino se encuentra en el Este.");
      break;
    case "Ushuaia":
      alert("El destino se encuentra en el Sur.");
  }
}