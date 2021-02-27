const btn = document.querySelectorAll('button')
let i = 1;

const notify = new Notify();
const notify2 = new Notify();
btn[0].addEventListener("click", _=>{
    notify.success('Se ha registrado el usuario: '+i, 'Todo ok');
    i++;
})

btn[1].addEventListener("click", _=>{
    notify.warning('Se ha registrado el usuario: '+i, 'Todo ok');
    i++;
})
btn[2].addEventListener("click", _=>{
    notify.error('Se ha registrado el usuario: '+i, 'Todo ok');
    i++;
})
btn[3].addEventListener("click", _=>{
    notify.infor('Se ha registrado el usuario: '+i, 'Todo ok');
    i++;
})
btn[4].addEventListener("click", _=>{
    notify2.options.activeCustomIcon = true;
    notify2.options.customIcon = '<i class="fas fa-envelope"></i>';
    notify2.infor('Este es un icono personalizado ', 'Todo ok');
})

