$(jQuery(function(){
    let HeaderHi = $('header').innerHeight();
    console.log(HeaderHi);
    $('body').css('padding-top',HeaderHi + 'px');


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if (scroll >= 300) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
}))