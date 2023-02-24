$(document).ready(function(){

  $('.carousel').slick({
  slidesToShow: 1,
  infinite: true,

  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '20px',
  autoplaySpeed: 3000,
  arrows: true,
  dots: true,
  variableWidth: true,
  responsive: [

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        variableWidth: true,
        centerPadding: '80px',
        
      },

    },
  ]
  })



  $("body.home").addClass('active')
});

// Slick version 1.5.8