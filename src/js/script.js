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

    function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500){
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progress+'%'
            }, animationLength);
            $(item).find(tooltip).show(animationLength);
        });
    }

    moveProgressBar('.progress__bar', '.progress__line', '.progress__tooltip');
});
