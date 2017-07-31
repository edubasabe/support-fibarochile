//-- Functions -----------------------------------------------------------------
function headlineAnimation(element, animation, inverse, offsetvalue) {
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
      { offset: offsetvalue});
  });
}


function isMobile() {
  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   return true;
  }
}

function isTabletOrIpad() {
  var calcAspectRatio = windowHeight / windowWidth;
  var aspectRatio = calcAspectRatio.toFixed(2);

  if ( windowHeight > windowWidth)
  {
    if ( aspectRatio === 1.33)
    {
      if ( /iPad/i.test(navigator.userAgent) )
      {
       return true;
      }
    }
    else {
      return false;
    }
  }
}




$(document).ready(function () {

// -- Section 4 ----------------------------------------------------------------
headlineAnimation('#section4 .content','fadeInDown', 'fadeInUp', '50%');

// -- Section 5 ----------------------------------------------------------------
headlineAnimation('#section5 .content .container .row','fadeInDown', 'fadeInUp', '50%');
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

$('#section7 #anim-frame-pt').on('click', function () {
  // $('#section7 .description li:first-child').css('color', 'red');
  console.log('hover');
});
// -- Section 8 ----------------------------------------------------------------
headlineAnimation('#section8 .content .container .row','fadeInDown', 'fadeInUp', '50%');

// -- Section 9 ----------------------------------------------------------------
headlineAnimation('#section9 .content .container .row','fadeInDown', 'fadeInUp', '50%');

// -- Section 10 ----------------------------------------------------------------
headlineAnimation('#section10 .content .container .row','fadeInDown', 'fadeInUp', '50%');

// -- Section 11 ---------------------------------------------------------------
function encender(element, action) {
  if (action === 'on') {
    $(element).fadeIn();
  } else {
    $(element).fadeOut();
  }
}

$('#section11').waypoint(function(direction) {
  if (direction === 'down') {
    $('#section11 > .bg > img:nth-child(2)').css('opacity', 1);
  } else if (direction === 'up') {
    $('#section11 > .bg > img:nth-child(2)').css('opacity', 0);
  }
},
{ offset: '170%'}
);



// -- Section 12 ---------------------------------------------------------------
$('#section12 .bg').click(function() {
  $('#section12 .bg .empty').toggleClass('hide');
});

// -- Section 15 ----------------------------------------------------------------
headlineAnimation('#section15 .content .container .row','fadeInLeft', 'fadeInRight','190%');
// -- Section 16 ---------------------------------------------------------------
headlineAnimation('#section16 .content .container .row','fadeInDown', 'fadeInUp','190%');
// -- Section 17 ---------------------------------------------------------------
headlineAnimation('#section17 .content .container .row','fadeInDown', 'fadeInUp','190%');
// -- Section 18 ---------------------------------------------------------------

headlineAnimation('#section18 .content .container .row','fadeInDown', 'fadeInUp','190%');

$('#section18').waypoint(function(direction) {
  if (direction === 'down') {
    $('#section18  .bg img:nth-child(1)').css('opacity', 1);
  } else if (direction === 'up'){
    $('#section18 .bg img:nth-child(1)').css('opacity', 0);
  }

},
{ offset: '163%'}
);

});

//-- Swipe ---------------------------------------------------------------------
$(window).load(function() {
  $("#container-section10").twentytwenty();
});
