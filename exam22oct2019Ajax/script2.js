//Creamos el evento del botón consultar
document.getElementById("consulta").addEventListener("click", () =>{
    let select = document.getElementById("select");
    let tamanoselect = select.length;

    //Si el tamaño del select es menor o igual que el por defecto "1", me crea las opciones del select.
    if(tamanoselect <= 1){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res) )
        .then(res => res.json())
        .then(res => {
            for(usuario of res){
                let option = document.createElement("option");
                option.setAttribute("value", usuario.id);
                option.innerHTML = usuario.name;
                select.appendChild(option);
            }
         })
    }else{
        //Si es mayor, entonces llamaremos a la función consultaTabla que está más abajo pasándole el id de la opción.
        let id = select.value;
        consultaTabla(id);
    }
})

//Función para introducir en la tabla los datos del select.
const consultaTabla = (id) => {
    let tabla = document.getElementById("tabla");
    //Lo que cambia del fetch anterior es simplemente que aquí hacemos una búsqueda por ID
    fetch("https://jsonplaceholder.typicode.com/users?id="+id)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res) )
        .then(res => res.json())
        .then(res => {
            for(user of res){
                let tr = document.createElement("tr");
                let id = document.createElement("td");
                let name = document.createElement("td");
                let username = document.createElement("td");
                let email = document.createElement("td");
                let direccion = document.createElement("td");
                let telefono = document.createElement("td");

                id.innerHTML = user.id;
                name.innerHTML = user.name;
                username.innerHTML = user.username;
                email.innerHTML = user.email;
                //Concateno toda la información de la direccion del usuario
                let direccioncompleta = user.address.street + " " + user.address.suite +" "+user.address.city +" "+user.address.zipcode;
                direccion.innerHTML = direccioncompleta;
                telefono.innerHTML = user.phone;

                tr.appendChild(id);
                tr.appendChild(name);
                tr.appendChild(username);
                tr.appendChild(email);
                tr.appendChild(direccion);
                tr.appendChild(telefono);

                tabla.appendChild(tr);

            }
         }) 
}