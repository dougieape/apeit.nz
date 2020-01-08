$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
 
/*    $('#sunrays').css({
        opacity: function() {
            var elementHeight = $(this).height();
            if (elementHeight >= (scrollTop*2)) {
                return  .8 - ((elementHeight - (scrollTop*2)) / elementHeight);
            } else if (elementHeight >= scrollTop) {
                return  ((elementHeight - scrollTop)) / elementHeight * 1.6;
            } else {
                return  0;
            }
        }
    });

    $('#leaves, #hero').css({
        opacity: function() {
            var elementHeight = $('#sunrays').height();
            //alert (elementHeight);
            if (elementHeight >= (scrollTop*2)) {
                return  ((elementHeight - (scrollTop*2)) / elementHeight);
            /*} else if (elementHeight >= scrollTop) {
                return  ((elementHeight - scrollTop)) / elementHeight * 2;
            } else {
                return  0;
            }
        }
    });
 /*
    $('nav').css({
        background: function() {
            return rgba(0,0,0,scrollTop/200);
        }
    });
*/
  });


  /**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('#logo').addClass("scrolled");
        $('#darklogo').addClass("scrolled");
        $('.nav-item.active>.nav-link').addClass("scrolled");
        $('i').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
        $('#logo').removeClass("scrolled");
        $('#darklogo').removeClass("scrolled");
        $('.nav-item.active>.nav-link').removeClass("scrolled");
        $('i').removeClass("scrolled");
    }

    $('.hidefade').each( function(i){
            
        var middle_of_object = $(this).position().top + 100; //($(this).outerHeight()/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > middle_of_object ){
            
            $(this).addClass('in-view');
            $(this).find('.hideleft').addClass('in-view'); 
            $(this).find('.hidelow').addClass('in-view'); 
        } else {
            $(this).removeClass('in-view');
            $(this).find('.hideleft').removeClass('in-view'); 
            $(this).find('.hidelow').removeClass('in-view'); 
        }
        
    }); 
}

$(window).on("scroll load resize", function(){
    checkScroll();
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $('.navbar').height()
    }, 500);
});
