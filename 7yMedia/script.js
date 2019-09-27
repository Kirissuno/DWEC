let baraja = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10];
let tipo = ["Bastos", "Copas", "Espadas", "Oros"];

let totaljugador = 0;
let totalbanco = 0;

const numerosacado = () => {
    return baraja[Math.floor(Math.random()*baraja.length)];
}

const tiposacado = () => {
    return tipo[Math.floor(Math.random()*tipo.length)];
}

const pedircarta = document.getElementById("cartaabajojugador");

pedircarta.addEventListener('click', (event) => {

    let imagen = `imagenes/`+numerosacado()+tiposacado()+`.jpg`;

    document.getElementById("cartajugador").src = imagen;
    let arrayjugador = document.getElementById("arraycartasjugador");
    let cartajugada = document.createElement("img");
    cartajugada.src = imagen;

    arrayjugador.appendChild(cartajugada);

});

