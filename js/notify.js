class Notify {
    constructor() {
        this.title = "";
        this.message = "";
        this.options = {
            "closeButton": true,
            "progressBar": false,
            "positionClass": "top-right",
            "preventDuplicates": false,
            "escapeHtml": false,
            "activeCustomIcon": true,
            "customIcon": null,
            "fontSizeIcon": 28,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
        }
    }


    infor(message = "No hay mensaje", title = "", config = null) {
        const $contenedor = getContainerAlert();
        this.applyConfiguration(config, $contenedor)
        const $alerta = crearAlerta(message, title, 'infor', this.options);
        addBottonClose($alerta, this.options);
        addProgressBar($alerta,this.options);
        insertAlertContainer($contenedor, $alerta, this.options);
        showAndHideAlert($alerta, this.options);
    }
    warning(message = "No hay mensaje", title = "",  config = null) {
        const $contenedor = getContainerAlert();
        this.applyConfiguration(config, $contenedor)
        const $alerta = crearAlerta(message, title, 'warning', this.options);
        addBottonClose($alerta, this.options);
        addProgressBar($alerta,this.options);
        insertAlertContainer($contenedor, $alerta, this.options);
        showAndHideAlert($alerta, this.options);
    }
    success(message = "No hay mensaje", title = "", config = null) {
        const $contenedor = getContainerAlert();
        this.applyConfiguration(config, $contenedor)
        const $alerta = crearAlerta(message, title, 'success', this.options);
        addBottonClose($alerta, this.options);
        addProgressBar($alerta,this.options);
        insertAlertContainer($contenedor, $alerta, this.options);
        showAndHideAlert($alerta, this.options);
    }
    error(message = "No hay mensaje", title = "", config = null) {
        const $contenedor = getContainerAlert();
        this.applyConfiguration(config, $contenedor)
        const $alerta = crearAlerta(message, title, 'error', this.options);
        addBottonClose($alerta, this.options);
        addProgressBar($alerta,this.options);
        insertAlertContainer($contenedor, $alerta, this.options);
        showAndHideAlert($alerta, this.options);
    }
    clear(){
        if(document.getElementById('contenedor-notify')){
            const $contenedor = document.getElementById('contenedor-notify')
            if($contenedor.hasChildNodes()){
                const $notifies = document.querySelectorAll('.notify');
                $notifies.forEach(element => {
                    element.classList.remove('show');
                });
                setTimeout(() => {
                    while($contenedor.firstElementChild){
                        $contenedor.removeChild($contenedor.firstElementChild);
                    }
                    $contenedor.remove();
                }, 500);
            }
        }
    }
    applyConfiguration(config, $container){
        if(config != null){
            for (const key in config) {
                if(this.options.hasOwnProperty(key)){
                    this.options[key] = config[key];
                }
            }
        }
        $container.classList.add(this.options.positionClass);
    }

}
function getContainerAlert(){
    if(document.getElementById('contenedor-notify')){
        return document.getElementById('contenedor-notify');
    }else{
        const notify = document.createElement('DIV');
        notify.classList.add('contenedor-notify');
        notify.id = 'contenedor-notify';
        document.querySelector('body').insertAdjacentElement('afterbegin', notify);
        return notify;
    }
}
function crearAlerta(sms, title, type, options){
    const div = document.createElement('DIV');
    div.classList.add('notify','notify-'+type);
    div.innerHTML = `<div class="notify_logo"></div><div class="notify_content"><div class="notify_content_title"></div><div class="notify_content_message"></div></div>`;
    const $icono = div.querySelector('.notify_logo');
    const $titulo = div.querySelector('.notify_content_title');
    const $sms = div.querySelector('.notify_content_message');

    if(options.activeCustomIcon && options.customIcon != null){
        $icono.style.fontSize = `${options.fontSizeIcon}px`
        $icono.innerHTML = options.customIcon;
    }else{
        $icono.classList.add(type)
    }
    if(options.escapeHtml){
        $titulo.textContent = title;
        $sms.textContent = sms;
    }else{
        $titulo.innerHTML = title;
        $sms.innerHTML = sms;
    }
    return div;
}
function addProgressBar($nodo, options){
    if(options.progressBar){
        const $span = document.createElement('SPAN');
        $span.classList.add('notify_progress-bar');
        $nodo.appendChild($span);
    }
}
function progressBar($progress,time, options){
    if(options.progressBar){ 
        $progress.style.display = "block";
        $progress.style.width = "100%";

        let interval = 100
        let intervalFinal = time;
        const prg = setInterval(() => {
            intervalFinal-= interval;
            let width = (intervalFinal * interval)/time;
            if(width <= 0){
                $progress.style.width = '0';
                clearInterval(prg);
            }else{
                $progress.style.width = `${width}%`
            }
        }, interval);
        return prg
    }
}
function addBottonClose($nodo, options){
    if(options.closeButton){
        const $button = document.createElement('BUTTON')
        $button.classList.add('notify_btn-close')
        $button.textContent = 'x';
        $button.addEventListener('click', e =>{
            console.log('click');
            $nodo.classList.remove('show');
            if(options.progressBar){
                $nodo.querySelector('.notify_progress-bar').style.display = "none";
            }
            clearTimeout(); 
            setTimeout(() => {
                e.target.parentElement.remove();
            }, 300);
        })
        $nodo.appendChild($button);
    }
}
function showAndHideAlert($nodo, options){
    let time;
    const $nodoProgresBar = $nodo.querySelector('.notify_progress-bar');
    let intervalProgres = progressBar($nodoProgresBar,options.timeOut, options);

    setTimeout(() => {
        $nodo.classList.add('show');
    }, options.showDuration);
    time = setTimeout(() => {
        $nodo.classList.remove('show');
        setTimeout(() => {
            $nodo.remove();
        }, options.hideDuration);
    }, options.timeOut);

    $nodo.addEventListener("mouseenter",_ =>{
        clearTimeout(time)
        if(options.progressBar){
            clearInterval(intervalProgres);
            $nodoProgresBar.style.display = "none";
        }
    })

    $nodo.addEventListener("mouseleave", _ =>{
        intervalProgres = progressBar($nodoProgresBar,options.extendedTimeOut, options);
        time = setTimeout(() => {
            $nodo.classList.remove('show');
            setTimeout(() => {
                $nodo.remove();
            }, (options.extendedTimeOut/2));
        }, options.extendedTimeOut);
    })
}
function insertAlertContainer($container, $nodo, options){
    if(options.preventDuplicates){
        if($container.hasChildNodes()){
            $smsFirt = $container.lastElementChild.querySelector('.notify_content_message');
            $newNode = $nodo.querySelector('.notify_content_message');
            if($smsFirt.innerHTML != $newNode.innerHTML){
                $container.appendChild($nodo);
            }
        }else{
            $container.appendChild($nodo);
        }
    }else{
        $container.appendChild($nodo);
    }
}
