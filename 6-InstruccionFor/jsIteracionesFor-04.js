function mostrar() {
  //Break dentro del for:

  for (let i = 0; i < 10; i++) {

	console.log(i) //muestra hasta el 5
    if (i == 5) {
      break;
    }

	console.log(i) //muestra hasta el 4
  }

  for (let i = 0; i < 10; i++) {

	console.log(i) //muestra hasta el 9
    if (i == 5) {
      continue;
    }

	console.log(i) //muestra hasta el 9 pero saltea el 5 
  }

} //FIN DE LA FUNCIÓN
