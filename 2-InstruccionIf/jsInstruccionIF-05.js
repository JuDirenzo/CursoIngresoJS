function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtIdEdad").value);
  if (edad > 17 || edad < 13) {
    alert("No es adolescente.");
  }
} //FIN DE LA FUNCIÓN
