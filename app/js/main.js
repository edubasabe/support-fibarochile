//-- Funciones Globales --------------------------------------------------------
/* Si se clickea el Menu */
function clickeaMenu() {
  $('.navbar.navbar-default.nav-text-white.navbar-fixed-top li > a').click( function () {
    return true;
  });
}

/* Crear una cookie */
function setCookie() {
  document.cookie = "Subscripcion=Realizada";
}
/* Obtener una cookie */
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
 }

/* Checkear el ancho de la ventana para saber si es Mobile */
function checkWidth() {
  var windowSize = $(window).width();
  if ( windowSize <= 414) {
    return true;
  }

  else {
    return false;
  }
}

//-- Padding Nav  --------------------------------------------------------------
/* Centrar los elementos del menu con el padding */
$(document).on('ready', function () {
if ( !checkWidth() ) {

 var navHeight = $('.navbar').height();
 var paddingNav = (navHeight - 20) / 2  + 'px';
  $('.nav.navbar-nav li > a').css({
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
}
});


//-- JQuery Easing
/* jQuery to collapse the navbar on scroll */
function scrollCheck() {
  if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
}

$(window).scroll(function() {
  scrollCheck();
});

//-- jQuery for page scrolling feature - requires jQuery Easing plugin
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
  /*$('.owl-carousel').owlCarousel({
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
  }); */

  $('#owl-casos-de-exito').owlCarousel({
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
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:false,
              loop:false
          }
      }
  });

  $('#owl-alianzas').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:6000,
      margin:10,
      nav: false,
      dots:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:false
          },
          600:{
              items:4,
              nav:false
          },
          1000:{
              items:6,
              nav:false,
              loop:false
          }
      }
  });
});

//-- Button Close --------------------------------------------------------------
/* Animacion del hamburger btn */
var btnToggle = $('.navbar-toggle.fixed-left');
var navCollapse = $('.navbar-collapse.navbar-ex1-collapse.collapse');
var cenefa = $('.navbar-fixed-top.nav-text-white');
$(document).on('ready', function () {
  // Si el btn No tiene la clase 'cerrado'
  if (!btnToggle.hasClass('cerrado') ) {
    btnToggle.click(function () {
      $(this).toggleClass('cerrado');
      cenefa.toggleClass('blacking-bg');
      cenefa.removeClass('bg-gradient');
    });
  }

  // Si hacen click en una opcion del menu
  $('.navbar-collapse.navbar-ex1-collapse ul li > a').click(function () {
    $('.navbar-collapse.navbar-ex1-collapse').removeClass('in');
    if (btnToggle.hasClass('cerrado') && cenefa.hasClass('blacking-bg')) {
      btnToggle.removeClass('cerrado');
      cenefa.removeClass('blacking-bg');
    }
  });
});

//-- Cambiar bg del menu cuando haga scroll ------------------------------------
$(document).ready(function () {
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() < 50 && $(window).width() > 800) {
        cenefa.addClass('bg-gradient');
    } else {
        cenefa.removeClass('bg-gradient');
    }
  });
});

//-- Funciones para Elementos animados con Animate.css -------------------------
$(document).ready(function () {

function fadeElement(element, animation) {
  $(element).css('opacity', 0);
  $(element).each(function() {
      $(this).waypoint(function() {
          $(this.element).addClass('animated').addClass(animation);
      },
      { offset: '80%'});
  });
}

function fadeElementOffset(element, animation, offsetvalue) {
  $(element).css('opacity', 0);
  $(element).each(function() {
      $(this).waypoint(function() {
          $(this.element).addClass('animated').addClass(animation);
      },
      { offset: offsetvalue
    });
  });
}


//-- Página Expertos TAMED -----------------------------------------------------
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
  fadeElement('#proceso .col-sm-4.col-sm-offset-4 img', 'fadeInUp');
  fadeElement('#proceso .col-sm-4 a', 'fadeInUp');

  //-- Resevar cupo
  fadeElement('#reservar-cupo h2','fadeIn');
  fadeElement('#reservar-cupo .headline--subheadline', 'fadeIn');
  fadeElement('#reservar-cupo .landing-expertos__tachado','fadeInDown');
  // fadeElement('#reservar-cupo iframe', 'fadeInUp');

  //-- Testimonios
  fadeElement('#testimonios h2', 'fadeIn');
  fadeElement('#testimonios .owl-stage-outer', 'fadeIn');

  //-- Dudas
  // fadeElement('#contacto-pato h2', 'fadeIn');
  // fadeElement('#contacto-pato table', 'fadeInUp');


  //-- Tu Hogar Inicio ---------------------------------------------------------
  $(document).on('ready', function () {
    setTimeout(function () {
      $('.preloader').css({
        'opacity':'0',
        'visibility':'hidden'
      });
    },  1000);

  });
  //-- Revisar si es ipad
  function is_iPad() {
    return (navigator.platform.indexOf("iPad") != -1)
  }

  function is_iPhone() {
    return (navigator.platform.indexOf("iPhone") != -1)
  }

  if (is_iPad() || is_iPhone()) {
    $('video').attr('controls','true');
  }

  else {
    console.log('No es iPad');
  }

  //-- Waypoint Inicio ---------------------------------------------------------
  // Se cambia el fondo degradado del nav menu cuando es desktop
  if ( !checkWidth() ) {
      $('#homevideo').waypoint(function () {
        $('.navbar-default').toggleClass('bg-black');
        $('.inicio-tuhogar--homevideo').toggleClass('bg-no-gradient');
      }, { 'offset': '-80%' });
  }else {
    $('.inicio-tuhogar--homevideo').addClass('bg-no-gradient');
    $('#homevideo').waypoint(function () {
      // $('.navbar-default').toggleClass('bg-black');
      $('.inicio-tuhogar--homevideo').toggleClass('bg-no-gradient');
    }, { 'offset': '-80%' });
  }


  //-- Formulario de Contacto --------------------------------------------------
  // Si es IPad y seleccionan el campo de nombre subir más el formulario flotante
  if (is_iPad()) {
    $('#name').on('focus', function () {
      $('.floating.inicio-tuhogar__contact-form').toggleClass('sube');
    });
  }

  var myCookie = getCookie("Subscripcion");
  // Si no existe una cookie del formulario
  if ( myCookie !== "Realizada" ) {
    // Mostar solo si no es mobile
      if ( !checkWidth()) {
        // Apertura de la pop up de contacto con el waypoint al 50%
        fadeElementOffset('#porque-fibaro .floating', 'fadeInUp', '50%');

        //Al hacer click el en btn cerrarlo es decir colocarle display none
        $('.inicio-tuhogar__contact-form .close').on('click', function () {
          $('.inicio-tuhogar__contact-form').css('display', 'none');
        });
      }
  }
  // Al hacer click en el btn del icono de correo
  $('.inicio-tuhogar__icon-contact').on('click', function () {
    $('.floating.inicio-tuhogar__contact-form').addClass('mostrar');
  });

  //Al hacer click el en btn cerrarlo es decir colocarle display none
  $('.inicio-tuhogar__contact-form .close').on('click', function () {
    $('.inicio-tuhogar__contact-form').removeClass('mostrar');
  });

  //-- Ventana Modal de Subscripcion -------------------------------------------
  /* Mientras la cantidad de mouse over sea menor a 2 y no haya cookie del
  formulario de suscripcion mostrar ventana modal */
  var contar = 0;
  var myCookie = getCookie("Subscripcion");
  $(document).on('mouseleave', function () {
    contar++;
    if (contar < 2 && myCookie !== "Realizada") {
      $('#modal-subscribirse').modal();
    }
  });

  //-- Breaks en Mobile de la seccion Experience center ------------------------
  if ( checkWidth() ) {
    $('.horario').html('Lunes a Viernes: <br> 9:00 AM – 07:00 PM <br> Sábado:  10:00 AM – 07:00 PM <br><br>');
  }

 });
