function mostrar() {
  let num;
  let contadorDivisor = 0;
  let flag = 1;

  num = parseInt(prompt("Ingrese un número para saber si es primo: "));

  while (isNaN(num) || num < 2) {
    num = parseInt(prompt("Debe ingresar un número para saber si es primo: "));
  }

  for (let i = 2; i <= num; i++) {
    if (!(num % i)) {
      flag = 0;

      break;
    }
  }

  if (!flag) {
    alert("El número es primo.");
  } else {
    alert("El número no es primo.");
  }


  let x = 50,
  y = 40,
  z = 30,


	if (x > y && x > z) {
		alert(x)
	} else if ( y >= x && y > z) {
		alert(y)
	} else {
		alert(z)
	}
  
} //FIN DE LA FUNCIÓN
