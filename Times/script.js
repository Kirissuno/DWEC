let parrafo = document.createElement("p");
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

setInterval(() => {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anyo = fecha.getFullYear();

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    sec = fecha.getSeconds();
    parrafo.innerHTML = `Hoy es ${dia} de ${meses[mes]} ${anyo} y son las <span id="hor">${hora}</span>:<span id="min">${minutos}</span>:<span id="seg">${sec}</span>`;

    document.body.appendChild(parrafo);

}, 1000 );

const activaralarma = document.getElementById("activar");
activaralarma.addEventListener("click", () => {
    let p = document.createElement("span");
    
    let horas = document.getElementById("horas").value;
    let minutos = document.getElementById("minutos").value;

    p.innerHTML = `Alarma activada para la hora ${horas}:${minutos}`;
    p.style.color = 'red';
    document.getElementById("parrafo").appendChild(p);
    
    let intervalo = setInterval(() => {
        let hor = document.getElementById("hor").innerText;
        let min = document.getElementById("min").innerText;
        if(hor == horas && min == minutos){
            let conf = confirm("Soy tu alarma, despiértate, Acepta para posponer");
            if(conf == true){
                setTimeout(() => {
                    alert("Despiértateee!");
                    p.remove();
                }, 120000);
                clearInterval(intervalo);
            }else{
                alert("Que tenga un buen día");
                clearInterval(intervalo);
                p.remove();
            }
        }
    }, 0);
} );
 
