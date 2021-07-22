/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	clave = prompt("Ingrese la clave: ")
	
	while (clave != "utn750") {
		clave = prompt("Clave incorrecta. Vuélvala a ingresar: ") //importante pedir el prompt dentro de la variable
	}

alert ("Clave correcta.")
}//FIN DE LA FUNCIÓN
