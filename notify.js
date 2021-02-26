class Notify{
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

    constructor(){
        const notify = document.createElement('DIV');
        notify.classList.add('notify');
        notify.id = 'notify';
        notify.innerHTML = `
            <div class="notify_logo"></div>
            <div class="notify_content">
                <div class="notify_content_title"></div>
                <div class="notify_content_message"></div>
            </div>
        `;
        document.querySelector('body').insertAdjacentElement('afterbegin', notify);
        this.content = document.getElementById('notify');
    }
    infor(){

    }
    warning(){

    }
    success(message = "No hay mensaje", title = "", options = null){
        
    }
    error(){

    }

}

// const notify = new Notify();