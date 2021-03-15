$(".hobby-slick").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 592,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

$(".project-slick").slick({
  prevArrow:
    '<span class="prev-arrow"><i class="fas fa-arrow-circle-left"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fas fa-arrow-circle-right"></i></span>',
});
