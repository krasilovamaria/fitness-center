'use strict';

$(document).ready(function () {
  $('.slider-list__item').slick({
    infinite: true,
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        infinite: true,
        // prevArrow: "<class='.trainers__button--left' alt='1'>",
        // nextArrow: "<class='.trainers__button--right' alt='2'>"
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }]
  });
});

