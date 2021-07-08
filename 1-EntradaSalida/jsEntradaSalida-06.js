/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let n1 = parseInt(document.getElementById("txtIdNumeroUno").value); //acá se puede utilizar getElementById("id").value
  let n2 = parseInt(document.getElementById("txtIdNumeroDos").value);

  resultado = n1 + n2;
  //resultado = parseInt(n1) + parseInt(n2);
  //sin embargo, esto sólo se guarda en la variable resultado,
  //fuera de ella, n1 y n2 siguen siendo str.

  alert("La suma total es " + resultado);
}
