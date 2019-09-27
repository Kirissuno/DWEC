const cuadrado = document.getElementById("box");

cuadrado.addEventListener('mouseenter', () => {
    cuadrado.style.backgroundColor = "green";
} );

cuadrado.addEventListener('mouseleave', () => {
    cuadrado.style.backgroundColor = "red";
} );

cuadrado.addEventListener('mousedown', () => {
    console.log("Has pulsado la caja");
} );

cuadrado.addEventListener('mouseup', () => {
    console.log("Has soltado el botón izquierdo dentro de la caja");
} );



const texto = document.getElementById("texto");

texto.addEventListener('keydown', () => {
    console.log("Has presionado una tecla");
} );

texto.addEventListener('keyup', () => {
    console.log("Has soltado una tecla");
} );

/*texto.addEventListener('keydown', function(event) {
    console.log(event.key);
} );*/

const boton = document.getElementById("enviar");

boton.addEventListener('click', () => {
    const input = document.getElementById("inform");

    input.addEventListener('keyup', (event) => {
        console.log(event.key);
    } );
});


let galeria = document.getElementById("gallery");


galeria.addEventListener('click', (event) => {
    event.target.classList.toggle('gallery__item__rojo');
} );



