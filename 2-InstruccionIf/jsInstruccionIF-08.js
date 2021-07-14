function mostrar() {
  let edad;
  let estado;

  edad = parseInt(document.getElementById("txtIdEdad").value);
  estado = document.getElementById("estadoCivil").value;

  if (edad > 17 && estado == "Soltero") {
    alert("Es soltero y no es menor.");
  }

  if (!(edad < 18 || estado != "Soltero")) {
    alert("Es soltero y no es menor.");
  }
}
