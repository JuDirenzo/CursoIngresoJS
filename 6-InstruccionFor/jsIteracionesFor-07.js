function mostrar() {
  let num;
  let contadorDivisor = 0;

  num = parseInt(prompt("Ingrese un número: "));

  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      contadorDivisor++;
      console.log(i);
    }
  }

  console.log("La cantidad de números divisores es: " + contadorDivisor);
} //FIN DE LA FUNCIÓN
