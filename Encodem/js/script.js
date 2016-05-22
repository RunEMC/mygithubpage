
$(document).ready(function() {
    $(window).stellar();

});

$(document).ready(

    function() { 

        $("html").niceScroll({
            cursorcolor:"rgba(30,30,30,.5)",
            zindex:999,
            scrollspeed:80,
            mousescrollstep:50,
            cursorborder:"0px solid #fff",
        });


    }

);


$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


$(function(){
    $('#nav').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#nav').data('size') == 'big')
        {
            $('#nav').data('size','small');
            $('#nav').stop().animate({
                height:'40px'
            },600);
            $('#logo img').stop().animate({
                height:'30px'
            },600);
            $('#menu').stop().animate({
                marginTop:'8px',
            },600);
            $('#menu a').stop().animate({
                fontSize:'14px',
            },600);
        }
    }
    else
    {
        if($('#nav').data('size') == 'small')
        {
            $('#nav').data('size','big');
            $('#nav').stop().animate({
                height:'70px'
            },400);
            $('#logo img').stop().animate({
                height:'60px'
            },400);
            $('#menu').stop().animate({
                marginTop:'21px',
            },400);
            $('#menu a').stop().animate({
                fontSize:'18px',
            },400);
        }  
    }
});



