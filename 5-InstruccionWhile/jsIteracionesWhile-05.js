function mostrar() {
  let sexo;
  sexo = prompt("Ingrese f ó m: ").toLowerCase(); //por si el usuario tiene el CAPS LOCK activado

  while (sexo != "f" && sexo != "m") {
    sexo = prompt("Sexo inválido. Ingrese f ó m: ").toLowerCase();
  }

  if (sexo == "f") {
    document.getElementById("txtIdSexo").value = "El sexo ingresado es Femenino.";
  } else {
    document.getElementById("txtIdSexo").value = "El sexo ingresado es Masculino.";
  }
}
