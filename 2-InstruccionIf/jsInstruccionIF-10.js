function mostrar() {
  //let max = 10;
  //let min = 1;
  let nota = Math.floor(Math.random() * 10 + 1);

  console.log(nota);

  if (nota >= 9) {
    alert("EXCELENTE.");
  } else if (nota > 3) {
    alert("AROBÓ.");
  } else {
    alert("Vamos, la próxima se puede.");
  }
}