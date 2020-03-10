$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true
  });

  $('.weekly__slider-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendArrows: $('.weekly__slider-arows'),
    prevArrow: '.slick_prev',
    nextArrow: '.slick_next'

  });

  $('.feed__slider-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    appendArrows: $('feed__slider-arrows'),
    prevArrow: '.slick_prev1',
    nextArrow: '.slick_next1'

  });

  $(".menu__list-items").click(function () {
    $(".menu__list-items").removeClass("active");
    $(this).addClass("active");        
});

$('.menu-pages').click(function () {
  $('.drop-down__pages').slideToggle();
});

$('.menu-home').click(function () {
  $('.drop-down__home').slideToggle();
});

$('.menu-prod').click(function () {
  $('.drop-down__prod').slideToggle();
});

$('.menu-wordpress').click(function () {
  $('.drop-down__wordpress').slideToggle();
});

  var mixer = mixitup('.filter__items');

});