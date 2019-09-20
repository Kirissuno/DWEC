function inicializar(){
    let nombres = [];
    let i = nombres.length;
    
    while(i < 5){
        let nombre = prompt("Introduce nombre");
        if(isNaN(nombre)){
            if(!nombres.includes(nombre)){
                nombres.push(nombre);
                i = nombres.length;
            }else{
                i = nombres.length;
            }
        }else{
            alert("Ese no es un nombre");
            i=nombre.length;
        }
        
    }
    nombres.sort();
    nombres.forEach(function (nombre){
        console.log(nombre.charAt(0).toUpperCase()+nombre.slice(1));
    })
}
