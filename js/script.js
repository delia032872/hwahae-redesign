$(document).ready(function(){

  $('.slide_con').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.slide-contents').slick({
    dots: true,
  });
});