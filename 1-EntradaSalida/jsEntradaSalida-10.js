/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	let importe = parseFloat(txtIdImporte.value);
	let descuento;
	let resultado = parseFloat(txtIdResultado.value);
	//para sacar el porcentaje de una manera más "formal", podemos * el núm por el porcentaje
	//y luego / por 100: sueldo * 10 /100;
	descuento = importe * 0.25;
	resultado = importe - descuento;
	txtIdResultado.value = resultado.toFixed(2); //toFixed agrega 2 decimales al número
}

/*function mostrarAumento()
{
	let importe = parseFloat(txtIdImporte.value);
	let descuento;
	let resultado = parseFloat(txtIdResultado.value);

	descuento = importe * 25 / 100;
	resultado = importe - descuento;
	txtIdResultado.value = resultado;
}*/

