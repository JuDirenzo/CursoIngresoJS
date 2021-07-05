/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var n1 = parseInt(txtIdSueldo.value);
	var n2 =parseInt(txtIdResultado.value);
	n2 = n1 * 1.1;
	txtIdResultado.value = n2;
}
