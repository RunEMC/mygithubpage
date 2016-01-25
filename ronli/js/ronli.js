var main = function() {
    $('.arrow-next').click(function() {
        var currentslide = $('.active-slide');
        var nextslide = currentslide.next();
        
        var currentdot = $('.active-dot');
        var nextdot = currentdot.next();
        
        if(nextslide.length === 0) {
            nextslide = $('.slide').first();
            nextdot = $('.dot').first();
        }

        currentslide.fadeOut(600).removeClass('active-slide');
        nextslide.fadeIn(600).addClass('active-slide');
        
        currentdot.removeClass('active-dot');
        nextdot.addClass('active-dot');
    });
    
    $('.arrow-prev').click(function() {
        var currentslide = $('.active-slide');
        var prevslide = currentslide.prev();
        
        var currentdot = $('.active-dot');
        var prevdot = currentdot.prev();
        
        if(prevslide.length === 0) {
            prevslide = $('.slide').last();
            prevdot = $('.dot').last();
        }
        
        currentslide.fadeOut(600).removeClass('active-slide');
        prevslide.fadeIn(600).addClass('active-slide');
        
        currentdot.removeClass('active-dot');
        prevdot.addClass('active-dot');
    });
};

$(document).ready(main);