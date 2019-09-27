let baraja = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10];
let tipo = ["Bastos", "Copas", "Espadas", "Oros"];

let totaljugador = 0;
let totalbanco = 0;

let arraycombinaciones = [];

const numerosacado = () => {
    return baraja[Math.floor(Math.random()*baraja.length)];
}

const tiposacado = () => {
    return tipo[Math.floor(Math.random()*tipo.length)];
}

const pedircarta = document.getElementById("cartaabajojugador");

pedircarta.addEventListener('click', (event) => {

    let numero = numerosacado();
    let tipo = tiposacado();

    if(totaljugador < 7.5){
        
    
        if(!arraycombinaciones.includes(numero+tipo)){

            if(numero > 7){
                totaljugador+=0.5;
            }else{
                totaljugador+=numero;
            }

            let imagen = `imagenes/`+numero+tipo+`.jpg`;
    
            document.getElementById("cartajugador").src = imagen;
            let arrayjugador = document.getElementById("arraycartasjugador");
            let cartajugada = document.createElement("img");
            cartajugada.src = imagen;
        
            let puntosjugador = document.getElementById("puntosjugador");
            puntosjugador.innerHTML = totaljugador;
        
            arrayjugador.appendChild(cartajugada);
    
            baraja.splice( baraja.indexOf(numero),1 );

            arraycombinaciones.push(numero+tipo);

            jugadorhaperdido();
        }

    }  

});

const btnplantar = document.getElementById("btnplantar");

btnplantar.addEventListener('click', () => {
    document.getElementById("pedircartajugador").src = "imagenes/trasera.jpg";
    let salir = false;

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
        
                baraja.splice( baraja.indexOf(numero),1 );
    
                arraycombinaciones.push(numero+tipo);
            }
        }else{
            salir = true;
        }ganador();
    }
    
});



const jugadorhaperdido = () => {
    
    if(totaljugador > 7.5){
        document.getElementById("pedircartajugador").src = "imagenes/trasera.jpg";
        document.getElementById("btnplantar").disabled = true;
        ganador();
    }
    

}

let refresh = document.getElementById("reiniciar");

refresh.addEventListener("click", () => {
    window.location.reload();
});

const ganador = () => {
    let banca = "Ha ganado la banca";
    let jugador = "Has ganado!";
    let ganador = document.getElementById("ganador");

    if(totaljugador <= 7.5){
        if(totalbanco > totaljugador){
            ganador.innerHTML = jugador;
        }else if(totalbanco == totaljugador){
            ganador.innerHTML = banca;
        }else{
            ganador.innerHTML = banca;
        }
    }else{
        ganador.innerHTML = banca;
    }
}