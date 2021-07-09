/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  //declarar variables
  let sueldo;
  let aumento;
  let nuevoSueldo;
  // conseguir el sueldo
  sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
  // calcular el nuevo sueldo
  aumento = sueldo * 0.1;
  nuevoSueldo = sueldo + aumento;
  // mostrar el nuevo sueldo
  document.getElementById("txtIdResultado").value = nuevoSueldo;
}

/* function mostrarAumento() {
  let sueldo;
  let aumento;

  sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

  //para sacar el porcentaje de una manera más "formal", podemos * el núm por el porcentaje
  //y luego / por 100: sueldo * 10 /100;

  aumento = sueldo * 1.1;

  document.getElementById("txtIdResultado").value = aumento.toFixed(2);
}*/

/* function mostrarAumento() {
  let sueldo;
  let nuevoSueldo;

  sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

  nuevoSueldo = sueldo + sueldo * 0.1;

  document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);
}
*/

/* function mostrarAumento()
{
	let sueldo = parseFloat(txtIdSueldo.value);
	let nuevoSueldo;
	let aumento;

	aumento = sueldo * 10 / 100;
	nuevoSueldo = sueldo + aumento;
	txtIdResultado.value = nuevoSueldo;
}
*/
