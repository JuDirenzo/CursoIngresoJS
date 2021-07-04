/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

 //por qué declarando la variable globalmente esto no funciona??//

function sumar()
{	
	var n1 = txtIdNumeroUno.value;
	var n2 = txtIdNumeroDos.value;
	n1 = parseInt(n1);
	n2 = parseInt(n2);

	var result = n1 + n2;

	alert("La suma total es " + result);
}

function restar()
{ 
	var n1 = txtIdNumeroUno.value;
	var n2 = txtIdNumeroDos.value;
	n1 = parseInt(n1);
	n2 = parseInt(n2);

	var result = n1 - n2;

	alert("La resta da " + result);

	
}

function multiplicar()
{ 
	var n1 = txtIdNumeroUno.value;
	var n2 = txtIdNumeroDos.value;
	n1 = parseInt(n1);
	n2 = parseInt(n2);

	var result = n1 * n2;

	alert("La multiplicación da " + result);
	
}

function dividir()
{	
	var n1 = txtIdNumeroUno.value;
	var n2 = txtIdNumeroDos.value;
	n1 = parseInt(n1);
	n2 = parseInt(n2);

	var result = n1 / n2;

	alert("La división da " + result);
	
}

