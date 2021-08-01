/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

estrategia de resolución
1- declarar variables
cosas que le tengo que pedir al usuario > tipo/precio/cantidad/marca/fabricante
punto a) cantAlBarato/fabAlBarato/precioAlBarato/flagAlcohol
punto b) acumA/acumB/acumJ/contadorA/contadorB/contadorJ
punto c) acumJ utilizada en el punto b

2- generar un bucle que se repita 5 veces (for)

cosas que se tienen que hacer 5 veces (van dentro del bucle)

2.1 - pido los valores en orden:
		tipo / valido tipo
		precio / valido precio
		cantidad / valido cantidad
		pido marca
		pido fabricante
		
3- cosas que tengo que hacer para poder contestar el punto a)

3.1 - me fijo si es un alcohol
si es alcohol me fijo si es la primera vez que se ingresa alcohol
o ya se había ingresado previamente (flag).
si es la primera vez cambio el flag, guardo el precio, la cantidad
y el fabricante como alcohol barato y por cada alcohol me fijo
si es más barato que el que ya tengo como barato.
de ser así, actualizo los datos del alohol barato.

3.2 - me fijo el tipo de producto (barbjo, alcohol o jabón) y actualizo
el acumulador y el contador según corresponda.

4 - cosas que tengo que hacer después del for:
me fijo cual es el tipo con más unidades vendidas y calculo el promedio

mostrar los resultados

*/

function mostrar()
{
	let tipo, 
	precio, 
	cantidad,
    marca,
	fabricante, 
	cantAlBarato, 
	fabAlBarato, 
	precioAlBarato, 
	flagAlcohol = 1, 
	acumA = 0,
	acumB = 0,
	acumJ = 0,
	contadorA = 0,
	contadorB = 0, 
	contadorJ= 0,
	promedio,
	mayorTipo;
	
	for (let i = 0; i < 5; i++) {

		tipo = prompt("Ingrese el tipo de producto: ").toLowerCase();
		while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {
			tipo = prompt("Tipo inválido. Reingréselo.")
		}

		precio = parseFloat(prompt("Ingrese el precio de producto entre $100 y $300: ")).toFixed(2);
		while (!(precio >= 100 && precio <= 300)) { //no hace falta poner isNaN() ya que NaN es menor a 100 y 300.
			precio= parseFloat(prompt("Precio inválido. Reingréselo.")).toFixed(2)
		}

		cantidad = parseInt(prompt("Ingrese cantidad máx 1000: ")); 
		while (!(cantidad >=0 && cantidad < 1000)) {
			cantidad = parseInt(prompt("Cantidad inválida. Reingrésela."))
		}

		marca = prompt("Ingrese la marca del producto: ").toLowerCase();
		while (marca.length < 2) {
			marca = prompt("Marca demasiado corta. Reingrésela.")
		}
		fabricante = prompt("Ingrese el fabricante del producto").toLowerCase();
		while (fabricante.length < 2 || fabricante.length > 10) {
			fabricante = prompt("Nombre de fabricante incorrecto. Reingréselo.")
		}

			if (tipo == "alcohol") {
				if (flagAlcohol || precio < precioAlBarato) {
				flagAlcohol = 0;
				precioAlBarato = precio;
				fabAlBarato = fabricante;
				cantAlBarato = cantidad;
				acumA += cantidad;
				contadorA ++;
			}} else if (tipo == "jabon") {

				acumJ += cantidad;
				contadorJ ++;
			} else {
				acumB += cantidad;
				contadorB ++;
			}

		if (acumA > acumB && acumA > acumJ) {
			mayorTipo = "alcohol";
			promedio = acumA / contadorA;
		} else if (acumB >= acumA && acumB > acumJ) {
			mayorTipo = "barbijo";
			promedio = acumB / contadorB;
		} else {
			mayorTipo = "jabon";
			promedio = acumJ / contadorJ;
		}
 	 }
if (!flagAlcohol) { 
alert("El alcohol más barato tiene como fabricante a " + fabAlBarato + " y la cantidad de unidades compradas fue de " + cantAlBarato);
} else {
	alert("No se compró ningún alcohol.")
}

alert("El tipo con más unidades es " + mayorTipo + " y el promedio por compra es de " + promedio.toFixed(2));
alert("En total, hay " + acumJ + " jabones comprados.");

}
