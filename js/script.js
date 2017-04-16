
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


$(function(){
    $('#sitenav').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#sitenav').data('size') == 'big')
        {
            $('#sitenav').data('size','small');
            $('#sitenav').stop().animate({
                height:'32px'
            },600);
            $('#bar a').stop().animate({
                fontSize:'14px',
                padding:'6px',
                paddingLeft:'18px',
                paddingRight:'18px'
            },600);
        }
    }
    else
    {
        if($('#sitenav').data('size') == 'small')
        {
            $('#sitenav').data('size','big');
            $('#sitenav').stop().animate({
                height:'45px'
            },400);
            $('#bar a').stop().animate({
                fontSize:'18px',
                padding:'10px',
                paddingLeft:'30px',
                paddingRight:'30px'
            },400);
        }  
    }
});



