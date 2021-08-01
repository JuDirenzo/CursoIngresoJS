function mostrar()
{
	let num;
	let contadorPar = 0;

	num = parseInt(prompt("Ingrese un número"));

	for(let i = 1 ; i <= num ; i++)
	{
		if(i % 2 == 0)
		{
			contadorPar++;
			console.log(i); //muestra los números pares 1 x 1.
		}
	}

	console.log("Pares encontrados: " + contadorPar); //muestra la cantidad de pares.


}//FIN DE LA FUNCIÓN