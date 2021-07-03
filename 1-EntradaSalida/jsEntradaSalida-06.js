/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let n1 = txtIdNumeroUno.value; //acá se puede utilizar getElementById("id").value
	let n2 = txtIdNumeroDos.value;

	n1 = parseInt(n1);
	n2 = parseInt(n2);

	let result = n1 + n2;

	alert(result);
}

