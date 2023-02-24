$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 3,
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  dots: true,
  responsive: [

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
  ]
  });
});

// Slick version 1.5.8