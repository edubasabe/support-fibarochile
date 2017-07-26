//-- Functions -----------------------------------------------------------------
function headlineAnimation(element, animation, inverse) {
  $(element).css({
    'opacity': 0,
    'transition': 'all 300ms ease'
  });
  $(element).each(function() {
      $(this).waypoint(function(direction) {
        if (direction === 'down') {

          $(this.element).removeClass(inverse).addClass('animated').addClass(animation);
        } else if (direction === 'up'){
          $(this.element).removeClass(animation).css({'opacity': 0});
        }
      },
      { offset: '50%'});
  });
}




$(document).ready(function () {

// -- Section 4 ----------------------------------------------------------------
headlineAnimation('#section4 .content','fadeInDown', 'fadeInUp')

// -- Section 5 ----------------------------------------------------------------
headlineAnimation('#section5 .content .container .row','fadeInDown', 'fadeInUp')

// -- Section 6 ----------------------------------------------------------------
function swipeAnimar(action){
  if (action === 'abre') {
    $('#anim-sensor, #anim-screen, #anim-frame').css({
      'transform': 'matrix(1, 0, 0, 1, 0, 0)'
    });
  } else {
    $('#anim-sensor, #anim-screen, #anim-frame').css({
      'transform': ''
    });
  }
}

$('#section6').waypoint(function(direction) {
  if (direction === 'down') {
    swipeAnimar('abre');
  } else {
    swipeAnimar();
  }
},
{ offset: '50%'}
);

// -- Section 7 ----------------------------------------------------------------
headlineAnimation('#section7 .content .container .row','fadeInDown', 'fadeInUp')

// -- Section 8 ----------------------------------------------------------------
headlineAnimation('#section8 .content .container .row','fadeInDown', 'fadeInUp')

// -- Section 9 ----------------------------------------------------------------
headlineAnimation('#section9 .content .container .row','fadeInDown', 'fadeInUp')



});
