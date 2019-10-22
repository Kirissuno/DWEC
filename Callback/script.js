let arrayusuarios = [{id:4, nombre:"Pedro"}, {id:5, nombre:"Fernando"}];

const usuario1 = {
    id : 1,
    nombre : "Robert"
};
const usuario2 = {
    id : 2,
    nombre : "Juanma"
};
const usuario3 = {
    id : 3,
    nombre : "Manu"
};

arrayusuarios.push(usuario1, usuario2, usuario3);

const getUser = (idab, cb) => {
    let usuario = arrayusuarios.findIndex(x => x.id == idab);
    if(usuario > -1){
        cb(null, arrayusuarios[usuario] );
    }else{
        cb(`Usuario con id ${idab} no existe`);
    }
};

getUser(7, (error, usuario) => {
	if (error) {
        return console.error(error);
    }else{
        console.log(`Encontrado el usuario ${usuario.nombre}`);
    };
})