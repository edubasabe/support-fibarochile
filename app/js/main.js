//-- Variables Globales --------------------------------------------------------
  var navHeight = $('.navbar').height();
  var body = $('body');
  var buttonNavbarToggle = $('button.navbar-toggle');

//-- Funciones -----------------------------------------------------------------
function calcularPadding(element) {
  var elementHeight = $(element).height();
  var elementMargin = (navHeight - elementHeight) / 2 + 'px';
  $(element).css({'padding-top': elementMargin, 'padding-bottom': elementMargin });
}

function calcularPaddingNav(element) {
  var elementHeight = $(element).height();
  var elementMargin = (navHeight - 20) / 2 + 'px';
  $(element).css({'padding-top': elementMargin, 'padding-bottom': elementMargin });
}

//-- Padding Nav
calcularPadding('.navbar-brand.navbar__logo-text');
calcularPaddingNav('.nav.navbar-nav li > a');

//-- Margin Top Body
$(function () {
  body.css('margin-top', navHeight);
});

//-- JQuery Easing -------------------------------------------------------------

//-- jQuery to collapse the navbar on scroll
$(window).scroll(function() {

    if ($(window).scrollTop() > 70) {
         $('.navbar').addClass("");
    } else {
         $('.navbar').removeClass("");
    }
});

//-- jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        $('.navbar-collapse.navbar-ex1-collapse.collapse').removeClass('in').attr('aria-expanded','false');
    });
});

//-- Boton del Menu ------------------------------------------------------------
$(function () {
 buttonNavbarToggle.click(function () {
   $(this).toggleClass('open-animation');
 });

 $('a.page-scroll').click(function () {
   buttonNavbarToggle.removeClass('open-animation');
 });
});
