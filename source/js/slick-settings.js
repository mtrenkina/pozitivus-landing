const slick = () => {
  $(document).ready(function () {
    $('.slider-list').slick({
      centerMode: true,
      centerPadding: '310px',
      dots: true,
      variableWidth: true,
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

slick();
