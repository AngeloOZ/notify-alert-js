const btn = document.querySelectorAll('button')
let i = 1;
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

