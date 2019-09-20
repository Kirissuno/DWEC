function ordenar(){
	let ciudades = ['Sevilla', 'Cadiz', 'Huelva', 'Malaga', 'Granada', 'Almeria', 'Jaen', 'Cordoba'];
	ciudades.sort();

	let tabla = document.createElement('table');
	tabla.style.border = "1px solid #000";

	ciudades.forEach(function(ciudad){
		let fila = document.createElement('tr');
		let celda = document.createElement('td');

		celda.appendChild(document.createTextNode(ciudad));
		fila.appendChild(celda);
		tabla.appendChild(fila);

	});

	document.body.appendChild(tabla);

	console.log(ciudades);
}