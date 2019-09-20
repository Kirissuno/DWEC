let tabla = document.getElementById("tabla");

mostrar();

let listadni = ["77332344K", "23445677J", "12345678H"];
let listaids = ['1', '2', '3'];


function Insertar(){
    let idempleado = document.getElementById('idempleado').value;
	let dni = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;
	let apellidos = document.getElementById('apellidos').value; 

    if(!listadni.includes(dni)){
        if( !(listaids.includes(idempleado)) && (idempleado > 0) ){
            let tr = tabla.insertRow(idempleado);
            let td1 = tr.insertCell(0);
            let td2 = tr.insertCell(1);
            let td3 = tr.insertCell(2);
            let td4 = tr.insertCell(3);
            
            td1.innerHTML = idempleado;
            td2.innerHTML = dni;
            td3.innerHTML = nombre;
            td4.innerHTML = apellidos;

            listadni.push(dni);
            listaids.push(idempleado);

            mostrar();
        }else{
            alert(`Ese número de empelado ya existe o es negativo.`);
        }
    }else{
        alert("DNI ya existente");
    }  
}

function Modificar(){
    let idempleado = document.getElementById('idempleado').value;
    let dni = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;
	let apellidos = document.getElementById('apellidos').value; 

    if(listaids.includes(idempleado)){
        let postBorrar = listaids.indexOf(idempleado);
        tabla.deleteRow(postBorrar+1);
        listaids.splice(postBorrar,1);
        listadni.splice(postBorrar,1);

        let tr = tabla.insertRow(postBorrar+1);
        let td1 = tr.insertCell(0);
        let td2 = tr.insertCell(1);
        let td3 = tr.insertCell(2);
        let td4 = tr.insertCell(3);
        
        td1.innerHTML = idempleado;
        td2.innerHTML = dni;
        td3.innerHTML = nombre;
        td4.innerHTML = apellidos;

        listadni.push(dni);
        listaids.push(idempleado);

        mostrar();

        /*listadni.splice(postBorrar,1);
        listaids.splice(postBorrar,1);*/

    }else{
        alert("Número de empleado no existente");
    }

    mostrar();
}

function Borrar(){
    let dni = document.getElementById('dni').value;

    if(listadni.includes(dni)){
        let postBorrar = listadni.indexOf(dni);
        tabla.deleteRow(postBorrar+1);

        listadni.splice(postBorrar,1);
        listaids.splice(postBorrar,1);

        alert(listadni);
        alert(listaids);

    }else{
        alert("DNI no existente");
    }

    mostrar();
}

function CountRows() {
    let totalRowCount = 0;
    let rowCount = 0;
    let table = document.getElementById("tabla");
    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        totalRowCount++;
    }
    return totalRowCount-1;
}

function mostrar(){
    let span = document.getElementById("numempleados");
    span.innerHTML = CountRows();
}
