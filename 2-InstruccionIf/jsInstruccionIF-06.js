function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad > 17) {
    alert("Es un adulto.");
  } else if (edad < 13) {
    alert("Es un niño");
  } else {
    alert("Es un adolescente");
  }
}
