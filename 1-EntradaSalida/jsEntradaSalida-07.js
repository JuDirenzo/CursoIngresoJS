/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//por qué declarando la variable globalmente esto no funciona??

// var n1 = parseInt(document.getElementById("txtIdNumeroUno").value); //se puede pasar a Int declarando la variable
// var n2 = parseInt(document.getElementById("txtIdNumeroDos").value);

function sumar()
{	
	var n1 = parseInt(txtIdNumeroUno.value);
	var n2 = parseInt(txtIdNumeroDos.value);
	var res = n1 + n2;
	
	alert("La suma total es " + res);
}

function restar()
{ 
	var n1 = parseInt(txtIdNumeroUno.value);
	var n2 = parseInt(txtIdNumeroDos.value);
	var res = n1 - n2;

	alert("La resta da " + res);
}

function multiplicar()
{ 
	var n1 = parseInt(txtIdNumeroUno.value);
	var n2 = parseInt(txtIdNumeroDos.value);
	var result = n1 * n2;

	alert("La multiplicación da " + result);	
}

function dividir()
{	
	var n1 = parseInt(txtIdNumeroUno.value);
	var n2 = parseInt(txtIdNumeroDos.value);
	var result = n1 / n2;

	alert("La división da " + result);

}

