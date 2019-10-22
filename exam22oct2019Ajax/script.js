//Validador de contraseña moderada que me devuelve 1 si es correcta y 0 si no.
const validarPasswd = (password) => {
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if(passwordRegex.test(password)) return 1
    else return 0
}

//Evento para dar de alta al usuario
document.getElementById("registrar").addEventListener("click", (e) => {
    e.preventDefault();
    //valido la contraseña
    let contravalida = validarPasswd(document.getElementById("password").value);

    //Si es correcta continúo con su alta.
    if(contravalida == 1){
        let fecha = new Date();
        let nombre = document.getElementById("nombre").value;
        let password = document.getElementById("password").value;
        let dni = document.getElementById("dni").value;
        let edad = document.getElementById("edad").value;
        //Concateno la fecha de alta
        let fechaalta = fecha.getDate() +"-"+ fecha.getMonth() + "-" + fecha.getFullYear() + "-" + fecha.getHours();
        //Creo el objeto usuario
        const usuario = {"nombre": nombre, "password": password, "dni": dni, "edad": edad, "fechaalta": fechaalta};

        let nickname = document.getElementById("nickname");
        //Guardamos en la local Storage el objeto usuario con su key
        localStorage.setItem(nickname.value, JSON.stringify(usuario));
    }else{
        //Si la contraseña es incorrecta salta el siguiente mensaje
        alert("La contraseña no cumple los requisitos mínimos, al menos 1 Mayus, 1 Minus, 1 Número y mínimo 8 carácteres.")
    }
})

//Evento de borrar que simplemente limpia toda la localStorage
document.getElementById("borrar").addEventListener("click", () => {
    localStorage.clear();
})

//Evento de consultar un usuario mediante su nickname
document.getElementById("consultar").addEventListener("click", () => {
    let tabla = document.getElementById("tabla");    
    let nickname = document.getElementById("nickname");
    //Guardo en la variable usuario en forma de JSON el objeto con el valor especificado.
    let usuario = JSON.parse(localStorage.getItem(nickname.value));
    //Si el usuario existe me lo introduce en la tabla.
    if(usuario != null){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        td1.innerText = usuario.nombre;
        td2.innerText = usuario.password;
        td3.innerText = usuario.dni;
        td4.innerText = usuario.edad;
        td5.innerText = usuario.fechaalta;
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
    
        tabla.appendChild(tr);
    }else{
        //Si no existe me salta un mensaje.
        alert("Introduce un nickname válido")
    }
    
})

//Evento para consultar el último usuario creado
document.getElementById("consultarLogin").addEventListener("click", () => {
    //Inicializo 2 variables contenedoras usadas para la comparación.
    let ultimousuario = null;
    let fecha = `22-9-2019-1`;

    for(i = 0; i < localStorage.length; i++){
        let usuario = JSON.parse(localStorage.getItem(localStorage.key(i)));
        //Creo que esta parte puede fallar por el simple hecho que comparo cadenas de texto, pero lo he dejado así porque probé con
        //varias fechas y me ha funcionado
        if(usuario.fechaalta > fecha){
            fecha = usuario.fechaalta;
            ultimousuario = usuario;
        }
    }

    //Y me muestra la información
    if(ultimousuario != null){
        alert(`El último usuario dado de alta ha sido ${ultimousuario.nombre} con la contraseña ${ultimousuario.password} con el dni ${ultimousuario.dni}, tiene ${ultimousuario.edad} años y ha sido dado de alta el día y la hora ${ultimousuario.fechaalta}`);
    }else{
        alert("No hay usuarios dados de alta")
    }
})


