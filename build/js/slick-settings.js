const desktopWidth = 1440;
const mobileWidth = 1439;

function slider() {
  $(document).ready(function () {
    $('.slider-list').slick({
      centerMode: true,
      centerPadding: '310px',
      dots: true,
      prevArrow: $('.slider-controls__button--prev'),
      nextArrow: $('.slider-controls__button--next'),
      appendDots: $('.slider-controls__wrapper'),
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerMode: true,
            centerPadding: '310px',
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1439,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
          },
        },
      ],
    });
  });
}

slider();
