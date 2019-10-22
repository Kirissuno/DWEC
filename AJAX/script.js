const boton = document.getElementById("boton");

//XHR
boton.addEventListener("click", () => {
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsofr.XMLHTTP");
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener("load", (data) => {       

        const listado = JSON.parse(data.target.response);
        let ul = document.createElement("ul");
        document.body.appendChild(ul);

        for(elemento in listado){
            let li = document.createElement("li");
            li.innerHTML = listado[elemento].id + " - "+ listado[elemento].name;
            ul.appendChild(li);
        }       

    })
    boton.disabled = true;
    xhr.send();

})

//FETCH
/*boton.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res) )
    .then(res => res.json())
    .then(res => {
        let ul = document.createElement("ul");
        document.body.appendChild(ul);
        for(elemento in res){
            let li = document.createElement("li");
            li.innerHTML = res[elemento].id + " - "+ res[elemento].name;
            ul.appendChild(li);
        } 
        
    })
    boton.disabled = true;
} )*/