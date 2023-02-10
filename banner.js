//slideshow style interval
var autoSwap = setInterval( swap,10000);

//pause slideshow and reinstantiate on mouseout
$('ul, span').hover(
  function () {
    clearInterval(autoSwap);
}, 
  function () {
   autoSwap = setInterval( swap,10000);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.b-items li.b-item').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.b-item').each(function(index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
  var direction = action;
  
  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }
    
    $('.right').removeClass('right').addClass('back');
    $('.main').removeClass('main').addClass('right');
    $('.left').removeClass('left').addClass('main');
    $('#'+leftitem+'').removeClass('back').addClass('left');
    
    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }
  
  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(positionvalue) {
      if(positionvalue != 'leftposition') {
        //increment image list id
        position++;
        
        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }
    
      //setting the left positioned item
      if(positionvalue == 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;
      
        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }
   
      return position;
    }  
  
   $('#'+ startItem +'').removeClass('main').addClass('left');
   $('#'+ (startItem+pos()) +'').removeClass('right').addClass('main');
   $('#'+ (startItem+pos()) +'').removeClass('back').addClass('right');
   $('#'+ pos('leftposition') +'').removeClass('left').addClass('back');

    startItem++;
    position=0;
    if(startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$('#next').click(function() {
  console.log(1)
  swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function() {
  if($(this).attr('class') == 'item left') {
     swap('counter-clockwise'); 
  }
  else {
    swap('clockwise'); 
  }
});