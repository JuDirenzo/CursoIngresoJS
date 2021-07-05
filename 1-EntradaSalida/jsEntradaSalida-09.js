/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var sueldo = parseFloat(txtIdSueldo.value);
	var aumento = parseFloat(txtIdResultado.value);
	//para sacar el porcentaje de una manera más "formal", podemos * el núm por el porcentaje
	//y luego / por 100: sueldo * 10 /100;
	aumento = sueldo * 1.1;
	txtIdResultado.value = aumento;
}

/* function mostrarAumento()
{
	var sueldo = parseFloat(txtIdSueldo.value);
	var nuevoSueldo;
	var aumento;

	aumento = sueldo * 0.1;
	nuevoSueldo = sueldo + aumento;
	txtIdResultado.value = nuevoSueldo;
}
*/

/* function mostrarAumento()
{
	var sueldo = parseFloat(txtIdSueldo.value);
	var nuevoSueldo;
	var aumento;

	aumento = sueldo * 10 / 100;
	nuevoSueldo = sueldo + aumento;
	txtIdResultado.value = nuevoSueldo;
}
*/