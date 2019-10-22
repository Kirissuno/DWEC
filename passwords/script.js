let usuario = document.getElementById('usuario');
let password = document.getElementById('password');
let alta = document.getElementById('alta');
let borrarTodo = document.getElementById('borrarTodo');
let borrarUsuario = document.getElementById('borrarUsuario');
let recuperarContrasena = document.getElementById('recuperarContrasena');

alta.addEventListener('click', () =>{
   
    if( usuario.value !== '' && password.value !== ''){
        localStorage.setItem('usuario', usuario.value);
        localStorage.setItem('password', password.value);
    }else {
        alert('Escribe un usuario y/o contrasena')
    }
    
})

borrarTodo.addEventListener('click', () => {
    localStorage.clear();
})

borrarUsuario.addEventListener('click', () => {
    localStorage.removeItem('usuario');
})

recuperarContrasena.addEventListener('click', () => {
    let password = localStorage.getItem('password');
    alert('Tu contraseña es: ' + password)
})