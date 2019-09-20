function anadir(){

	let elemento = document.getElementById('elemento').value;
	let posicion = document.getElementById('posicion').value;

	if(posicion > 0){
		let nuevo = document.createElement('li');
		nuevo.appendChild(document.createTextNode(elemento));

		let lista = document.getElementById('lista');

		lista.insertBefore(nuevo, document.getElementsByTagName('li')[posicion-1])
	}else{
		alert("Nanai");
	}
	
}

function borrar(){
	let posicion = document.getElementById('posicion').value;

	let aborrar = document.getElementsByTagName('li')[posicion-1];
	aborrar.remove();

}