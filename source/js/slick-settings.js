const mobileWidth = window.matchMedia('(max-width: 1439px)');

const slickTestimonials = () => {
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
};

const slickCases = () => {
  $(document).ready(function () {
    $('.cases-list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      variableWidth: true,
    });
  });
};

$(window).on('load resize', function () {
  if (mobileWidth.matches) {
    $('.cases-list:not(.slick-initialized)').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      variableWidth: true,
    });
  } else {
    $('.cases-list.slick-initialized').slick('unslick');
  }
});

slickTestimonials();
if (mobileWidth.matches) {
  slickCases();
};
