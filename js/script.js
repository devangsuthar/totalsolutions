$(jQuery(function(){
    let HeaderHi = $('header').innerHeight();
    console.log(HeaderHi);
    $('body').css('padding-top',HeaderHi + 'px');


    $('.logo-slider').slick({
        infinite: false,
        dots: true,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
          ]
      });

}))