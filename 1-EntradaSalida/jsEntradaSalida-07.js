/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

//por qué declarando la variable globalmente esto no funciona??

// let n1 = parseInt(document.getElementById("txtIdNumeroUno").value); //se puede pasar a Int declarando la variable
// let n2 = parseInt(document.getElementById("txtIdNumeroDos").value);

function sumar() {
  let n1 = parseInt(txtIdNumeroUno.value);
  let n2 = parseInt(txtIdNumeroDos.value);
  let res = n1 + n2;

  alert("La suma total es " + res);
}

function restar() {
  let n1 = parseInt(txtIdNumeroUno.value);
  let n2 = parseInt(txtIdNumeroDos.value);
  let res = n1 - n2;

  alert("La resta da " + res);
}

function multiplicar() {
  let n1 = parseInt(txtIdNumeroUno.value);
  let n2 = parseInt(txtIdNumeroDos.value);
  let result = n1 * n2;

  alert("La multiplicación da " + result);
}

function dividir() {
  let n1 = parseInt(txtIdNumeroUno.value);
  let n2 = parseInt(txtIdNumeroDos.value);
  let result = n1 / n2;

  alert("La división da " + result);
}
