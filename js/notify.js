class Notify {
    constructor() {
        this.title = "";
        this.message = "";
        this.options = {
            "closeButton": true,
            // "progressBar": false,
            "positionClass": "top-right",
            "preventDuplicates": false,
            "escapeHtml": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            // "showEasing": "swing",
            // "hideEasing": "linear",
            // "showMethod": "fadeIn",
            // "hideMethod": "fadeOut"
        }
    }


    infor(message = "No hay mensaje", title = "", config = null) {
        const $contenedor = getContainerAlert();
        this.applyConfiguration(config, $contenedor)
        const $alerta = crearAlerta(message, title, 'infor', this.options);
        bottonCloseAdd($alerta, this.options);
        insertAlertContainer($contenedor, $alerta, this.options);
        showAndHideAlert($alerta, this.options);
    }
    warning(message = "No hay mensaje", title = "",  config = null) {
        const $contenedor = getContainerAlert();
        this.applyConfiguration(config, $contenedor)
        const $alerta = crearAlerta(message, title, 'warning', this.options);
        bottonCloseAdd($alerta, this.options);
        insertAlertContainer($contenedor, $alerta, this.options);
        showAndHideAlert($alerta, this.options);
    }
    success(message = "No hay mensaje", title = "", config = null) {
        const $contenedor = getContainerAlert();
        this.applyConfiguration(config, $contenedor)
        const $alerta = crearAlerta(message, title, 'success', this.options);
        bottonCloseAdd($alerta, this.options);
        insertAlertContainer($contenedor, $alerta, this.options);
        showAndHideAlert($alerta, this.options);
    }
    error(message = "No hay mensaje", title = "", config = null) {
        const $contenedor = getContainerAlert();
        this.applyConfiguration(config, $contenedor)
        const $alerta = crearAlerta(message, title, 'error', this.options);
        bottonCloseAdd($alerta, this.options);
        insertAlertContainer($contenedor, $alerta, this.options);
        showAndHideAlert($alerta, this.options);
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
    div.innerHTML = `
            <div class="notify_logo">
                <i class="far fa-check-circle"></i>
            </div>
            <div class="notify_content">
                <div class="notify_content_title"></div>
                <div class="notify_content_message"></div>
            </div>
    `;
    const $titulo = div.querySelector('.notify_content_title');
    const $sms = div.querySelector('.notify_content_message');


    if(options.escapeHtml){
        $titulo.textContent = title;
        $sms.textContent = sms;
    }else{
        $titulo.innerHTML = title;
        $sms.innerHTML = sms;
    }
    return div;
}
function bottonCloseAdd($nodo, op){
    if(op.closeButton){
        const $button = document.createElement('BUTTON')
        $button.classList.add('notify_btn-close')
        $button.textContent = 'x';
        $button.addEventListener('click', e =>{
            $nodo.classList.remove('show');
            clearTimeout(); 
            setTimeout(() => {
                e.target.parentElement.remove();
            }, 400);
        })
        $nodo.appendChild($button);
    }
}
function showAndHideAlert($nodo, op){
    let time;
    setTimeout(() => {
        $nodo.classList.add('show');
    }, op.showDuration);

    time = setTimeout(() => {
        $nodo.classList.remove('show');
        setTimeout(() => {
            $nodo.remove();
        }, op.hideDuration);
    }, op.timeOut);

    $nodo.addEventListener("mouseenter",_ =>{
        clearTimeout(time)
    })

    $nodo.addEventListener("mouseleave", _ =>{
        time = setTimeout(() => {
            $nodo.classList.remove('show');
            setTimeout(() => {
                $nodo.remove();
            }, (op.extendedTimeOut/2));
        }, op.extendedTimeOut);
    })
}
function insertAlertContainer($container, $nodo, options){
    if(options.preventDuplicates){
        if(!$container.hasChildNodes()){
            $container.appendChild($nodo);
        }
    }else{
        $container.appendChild($nodo);
    }
}




const notify = new Notify();