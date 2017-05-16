function altoNav() {
  var resultado = $('.navbar').height();
  return resultado + 'px';
}
var valorAlto = altoNav();
$(document).on('ready', function () {
    var margenTop = $('.hero').css('margin-top', valorAlto);
    // console.log(margenTop);
});

function clickeaMenu() {
  $('.navbar.navbar-default.nav-text-white.navbar-fixed-top li > a').click( function () {
    return true;
  });
}



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

    $('button.navbar-toggle.fixed-left').css({
      'margin-top':paddingNav,
      'margin-bottom': paddingNav
    });


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
            scrollTop: $($anchor.attr('href')).offset().top - 30
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        $('.navbar-collapse.navbar-ex1-collapse.collapse').removeClass('in').attr('aria-expanded','false');
    });
});

//-- Owl Testimonios
$(document).on('ready', function() {
  $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:15000,
      margin:10,
      nav: false,
      dots:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:1,
              nav:false
          },
          1000:{
              items:1,
              nav:false,
              loop:true
          }
      }
  });
});

//-- Button Close
var btnToggle = $('.navbar-toggle.fixed-left');
var navCollapse = $('.navbar-collapse.navbar-ex1-collapse.collapse');
var cenefa = $('.navbar-fixed-top.nav-text-white');
$(document).on('ready', function () {

  if (!btnToggle.hasClass('cerrado') ) {
    btnToggle.click(function () {
      $(this).toggleClass('cerrado');
      cenefa.toggleClass('blacking-bg');
      cenefa.removeClass('bg-gradient');
    });
  }

  $('.navbar-collapse.navbar-ex1-collapse ul li > a').click(function () {
    if (btnToggle.hasClass('cerrado') && cenefa.hasClass('blacking-bg')) {
      btnToggle.removeClass('cerrado');
      cenefa.removeClass('blacking-bg');
    }
  });
});

//-- Cambiar bg del menu cuando haga scroll
$(document).ready(function () {
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() < 50 && $(window).width() > 800) {
        cenefa.addClass('bg-gradient');
    } else {
        cenefa.removeClass('bg-gradient');
    }
  });
});


// -- waypoints
$(document).ready(function () {

// //-- funcion para animar
// function fadeAnimate(element, section, animation) {
//   $(element).css('opacity', 0);
//
//   $(section).waypoint(function () {
//       $(element).addClass(animation);
//   }, { offset: '50%' });
// }

  // fadeAnimate('#beneficios h2', '#beneficios', 'fadeIn');
  // fadeAnimate('#beneficios .headline--subheadline', '#beneficios', 'fadeIn');

function fadeElement(element, animation) {
  $(element).css('opacity', 0);
  $(element).each(function() {
      $(this).waypoint(function() {
          $(this.element).addClass('animated').addClass(animation);
      },
      { offset: '80%'});
  });
}

  //-- hero
  fadeElement('#hero-container .landing-expertos__title', 'fadeInDown');
  fadeElement('#hero-container .landing-expertos__titular', 'fadeInLeft');
  fadeElement('#hero-container .landing-expertos__subtitular', 'fadeIn');
  fadeElement('#hero-container .viviendas', 'fadeIn');
  fadeElement('#hero-container .asegura-lugar', 'fadeInUp');

  //-- Beneficios
  fadeElement('#beneficios h2', 'fadeIn');
  fadeElement('#beneficios .headline--subheadline', 'fadeIn');
  fadeElement('#beneficios .landing-expertos__beneficios__list li', 'fadeIn');
  fadeElement('#beneficios .btn-fibaro', 'fadeInUp');

  //-- Proceso
  fadeElement('#proceso h2', 'fadeInUp');
  fadeElement('#proceso .row:nth-child(2) .col-sm-4', 'fadeIn');
  fadeElement('#proceso .col-sm-4 h4', 'fadeIn');
  fadeElement('#proceso .col-sm-4 p', 'fadeInDown');
  fadeElement('#proceso .col-sm-4 img', 'fadeInUp');
  fadeElement('#proceso .col-sm-4 a', 'fadeInUp');

  //-- Resevar cupo
  fadeElement('#reservar-cupo h2','fadeIn');
  fadeElement('#reservar-cupo .headline--subheadline', 'fadeIn');
  fadeElement('#reservar-cupo .landing-expertos__tachado','fadeInDown');
  fadeElement('#reservar-cupo iframe', 'fadeInUp');

  //-- Testimonios
  fadeElement('#testimonios h2', 'fadeIn');
  fadeElement('#testimonios .owl-stage-outer', 'fadeIn');

  //-- Dudas
  fadeElement('#contacto-pato h2', 'fadeIn');
  fadeElement('#contacto-pato table', 'fadeInUp');









});
