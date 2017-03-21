function altoNav() {
  var resultado = $('.navbar').height();
  return resultado + 'px';
}
var valorAlto = altoNav();
$(document).on('ready', function () {
    var margenTop = $('.hero').css('margin-top', valorAlto);
    // console.log(margenTop);
});



//-- Padding Nav
$(document).on('ready', function () {
 var navHeight = $('.navbar').height();
 var paddingNav = (navHeight - 20) / 2  + 'px';
  $('.nav.navbar-nav.navbar-right li > a').css({
      'padding-top': paddingNav,
      'padding-bottom': paddingNav,
    });

  $('.navbar-brand.navbar__logo-text').css({
      'padding-top': paddingNav,
      'padding-bottom': paddingNav,
    });

    console.log(paddingNav);
});

//-- JQuery Easing
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
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
