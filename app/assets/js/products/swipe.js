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
headlineAnimation('#section4 .content','fadeInDown', 'fadeInUp');

// -- Section 5 ----------------------------------------------------------------
headlineAnimation('#section5 .content .container .row','fadeInDown', 'fadeInUp');
$('#section5 .content .container-fluid .white').hide();

$('#section5 .btn-outline-white').click(function (e) {
  e.preventDefault();
  $('#section5 .content .container-fluid').toggleClass('white');
  $('#section5 .content .container-fluid .black').fadeOut('fast');
  $('#section5 .content .container-fluid .white').fadeIn('fast');
});
// -- Section 6 ----------------------------------------------------------------

$('#section6 .btn-outline-white').on('click', function (e) {
  e.preventDefault();


  $('#section6').toggleClass('white-bg');
});


// -- Section 7 ----------------------------------------------------------------
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

$('#section7').waypoint(function(direction) {
  if (direction === 'down') {
    swipeAnimar('abre');
  } else {
    swipeAnimar();
  }
},
{ offset: '50%'}
);

// -- Section 8 ----------------------------------------------------------------
headlineAnimation('#section8 .content .container .row','fadeInDown', 'fadeInUp')

// -- Section 9 ----------------------------------------------------------------
headlineAnimation('#section9 .content .container .row','fadeInDown', 'fadeInUp')

// -- Section 10 ----------------------------------------------------------------
headlineAnimation('#section10 .content .container .row','fadeInDown', 'fadeInUp')

// -- Section 11 ---------------------------------------------------------------
function encender(element, action) {
  if (action === 'on') {
    $(element).css('opacity', 0);
  } else if (action === 'off'){
    $(element).css('opacity', 1);
  }
}

$('#section11').waypoint(function(direction) {
  if (direction === 'down') {
    encender('#section11 .bg-second','on');
  } else if (direction === 'up') {
    encender('#section11 .bg-second','off');
  }
},
{ offset: '50%'}
);

// -- Section 12 ---------------------------------------------------------------
$('#section12 .bg').click(function () {
  $('#section12 .bg .empty').toggleClass('hide');
});

// -- Section 18 ---------------------------------------------------------------

$('#section18').waypoint(function() {
    $('#section18 ').addClass('')

},
{ offset: '50%'}
);

});
