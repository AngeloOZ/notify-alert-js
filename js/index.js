const btn = document.querySelectorAll('button')
const notify = new Notify();
notify.options.timeOut = 50000;

btn[0].addEventListener("click", _=>{
    notify.infor('Notify está esjecutandose correctamente');
})
btn[1].addEventListener("click", _=>{
    notify.success('Se registro el usuario correctamente', 'Registro Exitoso');
})
btn[2].addEventListener("click", _=>{
    notify.warning('El correo ingresado ya ha sido registrado', 'Alerta');
})
btn[3].addEventListener("click", _=>{
    notify.error('No se pudo registrar el usuario', 'Error de registro');
})

const notify2 = new Notify();
btn[4].addEventListener("click", _=>{
    notify2.options.activeCustomIcon = true;
    notify2.options.customIcon = '<i class="fas fa-envelope"></i>';
    notify2.infor('Ud. tiene 20 e-mail sin leer', 'Email',{"progressBar": true});
})

btn[5].addEventListener("click", _=>{
    notify.clear();
})


