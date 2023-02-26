$(document).ready(function(){

  $('.carousel').slick({
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
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

  var degrees = 0
  $("#btnLeft").click(function(){
    console.log(degrees)
    degrees = degrees - 10
    $(".subjects-container").css({
      '-webkit-transform' : 'rotate('+degrees+'deg)',
     '-moz-transform' : 'rotate('+degrees+'deg)',  
      '-ms-transform' : 'rotate('+degrees+'deg)',  
       '-o-transform' : 'rotate('+degrees+'deg)',  
          'transform' : 'rotate('+degrees+'deg)',  
    })
  })
  $("#btnRight").click(function(){
    console.log(degrees)
    degrees = degrees + 10
    $(".subjects-container").css({
      '-webkit-transform' : 'rotate('+degrees+'deg)',
     '-moz-transform' : 'rotate('+degrees+'deg)',  
      '-ms-transform' : 'rotate('+degrees+'deg)',  
       '-o-transform' : 'rotate('+degrees+'deg)',  
          'transform' : 'rotate('+degrees+'deg)',  
    })
  })

  $("body.home").addClass('active')
});

// Slick version 1.5.8