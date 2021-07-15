function mostrar() {
  let destino;

  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Bariloche":
    case "Ushuaia":
      alert("En este lugar hace frío.");
      break;
    case "Mar del plata":
    case "Cataratas":
      alert("En este lugar hace calor.");
  }
}
