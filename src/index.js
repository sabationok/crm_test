// ================================ SLIDER__TEST_1
$(document).ready(function () {
  // тут вказується клас DIVчика яз якого потрібно зробити слайдер
  $('.product-cards_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // rtl: true,

    // prevArrow: '<button type="button" class="slick-prev">&#60;</button>',
    // nextArrow: '<button type="button" class="slick-next">&#62;</button>',
  });
});