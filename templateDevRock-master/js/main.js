$(document).ready(function(){
    var num = 300; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

    $('.top a').click(function(e){
        e.preventDefault();
        var offset = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop:offset}, 600);
        return false;
    });

});