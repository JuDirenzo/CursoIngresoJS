/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
	var n1 = parseInt(txtIdNumeroDividendo.value);
	var n2 = parseInt(txtIdNumeroDivisor.value);
	var result = n1 % n2;

	alert("El resto es " + result);
}
