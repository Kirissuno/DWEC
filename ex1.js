function aplicar(){
	let posicion = document.getElementById('posicion').value;
	let equipo = document.getElementById('equipo').value;
	let puntos = document.getElementById('puntos').value;

	let tabla = document.getElementById("tabla");
	
	var x = tabla.rows.length -1 ;

	if (posicion <= x) {
		tabla.deleteRow(posicion);
		let tr = tabla.insertRow(posicion);
		let td1 = tr.insertCell(0);
		let td2 = tr.insertCell(1);
		let td3 = tr.insertCell(2);
		
		td1.innerHTML = posicion;
		td2.innerHTML = equipo;
		td3.innerHTML = puntos;
	}else{
		let tr = tabla.insertRow(posicion);
		let td1 = tr.insertCell(0);
		let td2 = tr.insertCell(1);
		let td3 = tr.insertCell(2);
		
		td1.innerHTML = posicion;
		td2.innerHTML = equipo;
		td3.innerHTML = puntos;
	}

	console.log(x);
}
