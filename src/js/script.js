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

    let progressDone = false;

    function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500){
        const progressElement = $(node);
        progressElement.each(function (index, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progress+'%'
            }, animationLength).find(tooltip).css('opacity', 1);
            $(item).find(tooltip).show(animationLength);
        });
    }
    $(window).scroll(function(){
        if (!progressDone && $('.skills').offset().top <= $(window).scrollTop() + 200){
            moveProgressBar('.progress__bar', '.progress__line', '.progress__tooltip');
            progressDone = true;
        }
    });

});

