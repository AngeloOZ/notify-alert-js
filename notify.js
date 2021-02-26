class Notify {
    content = undefined;
    title = "";
    message = "";
    options = {
        "closeButton": false,
        "progressBar": false,
        "positionClass": "top-right",
        "preventDuplicates": false,
        "escapeHtml": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    // <button class="notify_btn-close">x</button>

    constructor() {
        const notify = document.createElement('DIV');
        notify.classList.add('contenedor-notify');
        notify.id = 'contenedor-notify';
        document.querySelector('body').insertAdjacentElement('afterbegin', notify);
        this.content = document.getElementById('contenedor-notify');
    }


    infor(message = "No hay mensaje", title = "", options = null) {

    }
    warning(message = "No hay mensaje", title = "", options = null) {
 
    }
    success(message = "No hay mensaje", title = "", options = null) {
        	this.crearAlerta('success',message,title)
    }
    error(message = "No hay mensaje", title = "", options = null) {

    }

    crearAlerta(typeAlert, sms, title){
        const div = document.createElement('DIV');
        div.classList.add('notify','notify-'+typeAlert);
        div.innerHTML = `
                <div class="notify_logo">
                    <i class="far fa-check-circle"></i>
                </div>
                <div class="notify_content">
                    <div class="notify_content_title">${title}</div>
                    <div class="notify_content_message">${sms}</div>
                </div>
        `;
        // this.content.classList(this.options.positionClass);
        this.content.appendChild(div);
    }
}

const notify = new Notify();