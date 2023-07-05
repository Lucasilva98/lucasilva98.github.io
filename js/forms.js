$('#formcontato').submit(function(){
    
    
    var name = $('#name');
    var mail = $('#mail');
    var mobile = $('#mobile'); //whatsapp
    var message = $('#message');
    var erro = $('.alert');
    var campo = $('#erroforms');
    
    // removendo elemento da tela sempre que submeter ao formulario
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');
    
    if (name.val () == '') {
        erro.removeClass ('d-none');
        campo.html('Nome'); //campo sem informação
        name.focus();
        name.addClass('is-invalid');
        return false;
    }
    
    if (mail.val () == '') {
        erro.removeClass ('d-none');
        campo.html('E-mail'); //campo sem informação
        mail.focus();
        mail.addClass('is-invalid');
        return false;
    }
    
     if (mobile.val () == '') {
        erro.removeClass ('d-none');
        campo.html('Whatsapp'); //campo sem informação
        mobile.focus();
        mobile.addClass('is-invalid');
        return false;
    }
    if (message.val () == '') {
        erro.removeClass ('d-none');
        campo.html('Mensagem'); //campo sem informação
        message.focus();
        message.addClass('d-none');
        return false;
    }
    
    
    //pode enviar
    return true;
});
                         