'use strict';

var sliderTrainers = document.querySelector('.slider');
var sliderComments = document.querySelector('.comments__slider');

$(document).ready(function () {
  if (sliderTrainers.classList.contains('multiple-items')) {
    $('.multiple-items').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    });
  }
  if (sliderComments.classList.contains('multiple-comments')) {
    $('.multiple-comments').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000
    });
  }
});

var linkNav = document.querySelectorAll('[href^="#"]');
var rate = 0.5;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) {
    e.preventDefault();
    var heightScroll = window.pageYOffset;
    var hash = e.currentTarget.href.replace(/[^#]*(.*)/, '$1');
    var position = document.querySelector(hash).getBoundingClientRect().top;
    var start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) {
        start = time;
      }
      var progress = time - start;
      var resultPosition = (position < 0 ? Math.max(heightScroll - progress / rate, heightScroll + position) : Math.min(heightScroll + progress / rate, heightScroll + position));
      window.scrollTo(0, resultPosition);
      if (resultPosition !== heightScroll + position) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash;
      }
    }
  }, false);
}
