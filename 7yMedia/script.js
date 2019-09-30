//Array de los números de las cartas
let baraja = [1,2,3,4,5,6,7,8,9,10];
//Array de los palos de las cartas
let tipo = ["Bastos", "Copas", "Espadas", "Oros"];

//Instanciamos los puntos de las 2 entidades
let totaljugador = 0;
let totalbanco = 0;

//Inicio un array vacío para así guardar las combinaciones que ya han salido de la baraja.
let arraycombinaciones = [];

//Función para sacar un número aleatorio de 1-10
const numerosacado = () => {
    return baraja[Math.floor(Math.random()*baraja.length)];
}

//Función para sacar un palo aleatorio
const tiposacado = () => {
    return tipo[Math.floor(Math.random()*tipo.length)];
}

//Creamos el evento para pedir carta mediante un click
const pedircarta = document.getElementById("cartaabajojugador");
pedircarta.addEventListener('click', () => {

    //Saco la variable ganador para así una vez que nos hayamos plantado 
    // no nos deje seguir pidiendo cartas.
    let ganador = document.getElementById("ganador").innerText;

    let numero = numerosacado();
    let tipo = tiposacado();

    //Hacemos las comprobaciones de que el juego no haya acabado ya y que
    // el jugador esté por debajo de 7.5 para pedir nueva carta.
    if(totaljugador < 7.5 && ganador == ""){
        //Comprobamos que la combinación que haya salido no esté ya sacada.
        if(!arraycombinaciones.includes(numero+tipo)){
            //Comprobamos que si es una figura se aumente solo .5 puntos en vez de su valor total
            if(numero > 7){
                totaljugador+=0.5;
            }else{
                totaljugador+=numero;
            }

            //Creamos la ruta de las imágenes que van saliendo.
            let imagen = `imagenes/`+numero+tipo+`.jpg`;
    
            //Mostramos la imágen que ha salido mediante un img vacío en el HTML.
            document.getElementById("cartajugador").src = imagen;

            //Mostramos cada una de las cartas sacadas, más pequeñas en la parte inferior
            // del recuadro.
            let arrayjugador = document.getElementById("arraycartasjugador");
            let cartajugada = document.createElement("img");
            cartajugada.src = imagen;

            //Por cada carta que sacamos se añade un nuevo elemento de tipo img a nuestra página.
            arrayjugador.appendChild(cartajugada);
        
            //Actualizamos los puntos del jugador cada vez que saque una carta.
            let puntosjugador = document.getElementById("puntosjugador");
            puntosjugador.innerHTML = totaljugador;         
    
            //Añadimos al array de combinaciones la que acaba de salir.
            arraycombinaciones.push(numero+tipo);

            //Llamamos a una función que bloquea el juego si el jugador sobrepasa de 7.5.
            jugadorhaperdido();
        }
    }  
});

//Evento de click sobre el botón de Plantarse
const btnplantar = document.getElementById("btnplantar");
btnplantar.addEventListener('click', () => {
    //Al pulsar el botón el dorso de las cartas se cambia apra que no pueda pedir cartas.
    document.getElementById("pedircartajugador").src = "imagenes/trasera.jpg";
    let salir = false;

    //Y se activa la jugada de la banca.
    while(!salir){
        let numero = numerosacado();
        let tipo = tiposacado();
        if(totalbanco < totaljugador && totalbanco < 7.5){
            if(!arraycombinaciones.includes(numero+tipo)){

                if(numero > 7){
                    totalbanco+=0.5;
                }else{
                    totalbanco+=numero;
                }
    
                let imagen = `imagenes/`+numero+tipo+`.jpg`;
        
                document.getElementById("cartabanca").src = imagen;
                let arraybanca = document.getElementById("arraycartasbanca");
                let cartajugadabanca = document.createElement("img");

                cartajugadabanca.src = imagen;
            
                let puntosbanca = document.getElementById("puntosbanca");
                puntosbanca.innerHTML = totalbanco;
            
                arraybanca.appendChild(cartajugadabanca);
            
                arraycombinaciones.push(numero+tipo);
            }
        }else{
            salir = true;
        }
        //Se llama a la función que dice quien es el ganador.
        ganador();
    }
    
});

//Función que es llamada solo cuando el jugador sobrepasa de 7.5 que pierda automáticamente.
// y además cambie el dorso de la carta para que no salga que pida carta.
const jugadorhaperdido = () => {
    
    if(totaljugador > 7.5){
        document.getElementById("pedircartajugador").src = "imagenes/trasera.jpg";
        document.getElementById("btnplantar").disabled = true;
        ganador();
    }
    

}

//Evento para reiniciar la página, que lo que hace es refrescar la página.
let refresh = document.getElementById("reiniciar");
refresh.addEventListener("click", () => {
    window.location.reload();
});

//Función que sirve para decidir quien es el ganador de la partida.
const ganador = () => {
    let banca = "Ha ganado la banca";
    let jugador = "Has ganado!";
    let ganador = document.getElementById("ganador");

    if(totalbanco == totaljugador){
        ganador.innerHTML = banca;
    }else if (totalbanco > totaljugador && totalbanco <= 7.5) {
        ganador.innerHTML = banca;
    }else if ( totaljugador > 7.5 ){
        ganador.innerHTML = banca;
    }else{
        ganador.innerHTML = jugador;
    }

}