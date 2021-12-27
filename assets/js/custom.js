$(document).ready(function() {
    "use strict";

    $('.header .header-content .mobile').on('click', function() {
      $('.header .header-content .list').slideToggle(150);
    })

    new WOW().init();

    $('.gallery .gallery-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              infinite: true,
            }
          }
        ]
      });


      new VenoBox({
        selector: '.venobox',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
});