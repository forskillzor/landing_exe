$(document).ready(function(){
    const info = $('.works__info button, .works__info a');
    $(info).on('focus', function(){
        $(this).parents('.works__info').addClass('active');
        $(this).addClass('active');
    });
    $(info).on('blur', function(){
        $(this).parents('.works__info').removeClass('active');
        $(this).removeClass('active');
    });
});
