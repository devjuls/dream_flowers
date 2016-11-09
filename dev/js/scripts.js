$(document).ready(function() {

 $('.slick-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    // {
    //   breakpoint: 1150,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2
    //   }
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});
