function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtIdEdad").value);
  //tomo la edad
  /*if (edad >= 13) {
    if (edad <= 17) {
      alert("Es adolescente.");
    }
  } else {
    alert("No es adolescente.");
  }*/
  if (edad >= 13 && edad <= 17) {
	alert("Es adolescente.")
  }
  else {
	  alert("No es adolescente.")
  }

  if (!(edad < 13 || edad > 17 )) {
    alert("Es adolescente.")
  }
}

