let sexoabuscar = null;
let alignmentabuscar = null;

const getData = () => {
    const alignments = [];
    fetch("marvel.php")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res) )
    .then(res => res.json())
    .then(res => {
        for(elemento of res){
            if(!alignments.includes(elemento.Alignment)){
                alignments.push(elemento.Alignment);
            }
        }
    
        let select = document.getElementById("select");
        let tamanoselect = select.length;
        
        if(tamanoselect > 1){
            let masculino = document.getElementById("Male");
            let femenino = document.getElementById("Female");
            let sexo = null;
            if(masculino.checked){
                sexo = masculino.value;
            }else{
                sexo = femenino.value;
            }
            
            sexoabuscar = sexo;
            alignmentabuscar = select.value;
        
            datosEspecificos(alignmentabuscar, sexoabuscar);
        }else{
            for(element of alignments){
                let option = document.createElement("option");
                option.setAttribute("value", element);
                option.innerHTML = element;
                select.appendChild(option);
            }
        }

        
    })

}

const datosEspecificos = (alignment, gender) =>{
    fetch("marvel.php?alignment="+alignment+"&gender="+gender)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res) )
    .then(res => res.json())
    .then(res => {
        let tabla = document.getElementById("tabla");
        for(heroe of res){
            let tr = document.createElement("tr");
            let nombre = document.createElement("td");
            let align = document.createElement("td");
            let skill = document.createElement("td");

            nombre.innerHTML = heroe.Name;
            align.innerHTML = heroe.Gender;
            skill.innerHTML = heroe.Fighting_Skills;

            tr.appendChild(nombre);
            tr.appendChild(align);
            tr.appendChild(skill);

            tabla.appendChild(tr);

        }
    })
}

let boton = document.getElementById("getdata");
boton.addEventListener("click", (e) => {
    e.preventDefault();
    getData();
})