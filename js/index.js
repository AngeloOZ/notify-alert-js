const btn = document.getElementById('boton')
let i = 1;

btn.addEventListener("click", _=>{
    notify.success('Se ha registrado el usuario: '+i, 'Todo ok');
    i++;
})

