//-- Variables Globales --------------------------------------------------------
var navHeight = $('.navbar').height();
var navbar = $('.navbar.navbar-default');
var body = $('body');
var buttonNavbarToggle = $('button.navbar-toggle');
var windowHeight = $(window).height();
var windowWidth = $(window).width();
//-- Funciones Globales --------------------------------------------------------
/* Si se clickea el Menu */
function clickeaMenu() {
  $('.navbar.navbar-default.navbar-fixed-top li > a').click( function () {
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
/* Checkear si es Tablet */
function isTablet() {
  var calcAspectRatio = windowHeight / windowWidth;
  var aspectRatio = calcAspectRatio.toFixed(2);

  if ( windowHeight > windowWidth) {
    if ( aspectRatio == 1.33) {
      return true;
    }
    else {
      return false;
    }
  }
}


function calcularPadding(element) {
  var elementHeight = $(element).height();
  var elementMargin = (navHeight - elementHeight) / 2 + 'px';
  $(element).css({'padding-top': elementMargin, 'padding-bottom': elementMargin });
}
function calcularMargin(element) {
  var elementHeight = $(element).height();
  var elementMargin = (navHeight - elementHeight) / 2 + 'px';
  $(element).css({'padding-top': elementMargin, 'padding-bottom': elementMargin });
}

function calcularPaddingNav(element) {
  var elementHeight = $(element).height();
  var elementMargin = (navHeight - 20) / 2 + 'px';
  $(element).css({'padding-top': elementMargin, 'padding-bottom': elementMargin });
}
//-- Padding Nav  --------------------------------------------------------------
/* Centrar los elementos del menu con el padding */
calcularPadding('.navbar-brand.navbar__logo-text');
calcularMargin('.navbar-brand .color-logo');
calcularPaddingNav('.nav.navbar-nav li > a');


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
/* Funcion al hacer click */
  buttonNavbarToggle.on('click', function () {
    $(this).toggleClass('open-animation');

    /* Cuando el usuario haga click si el navbar no tiene el bg-white agregarselo  */
    if ( !navbar.hasClass('bg-white')) {
      navbar.addClass('bg-white');
    }
  });

//-- Si hacen click en una opcion del menu
$(function () {
    if (clickeaMenu()){
      $('.navbar-collapse.navbar-ex1-collapse').removeClass('in');
    }
})


// var btnToggle = $('.navbar-toggle.fixed-left');
// var navCollapse = $('.navbar-collapse.navbar-ex1-collapse.collapse');
// var cenefa = $('.navbar-fixed-top.nav-text-white');
// $(document).on('ready', function () {
//   // Si el btn No tiene la clase 'cerrado'
//   if (!btnToggle.hasClass('cerrado') ) {
//     btnToggle.click(function () {
//       $(this).toggleClass('cerrado');
//       cenefa.toggleClass('blacking-bg');
//       cenefa.removeClass('bg-gradient');
//     });
//   }
//
//   // Si hacen click en una opcion del menu
//   $('.navbar-collapse.navbar-ex1-collapse ul li > a').click(function () {
//     $('.navbar-collapse.navbar-ex1-collapse').removeClass('in');
//     if (btnToggle.hasClass('cerrado') && cenefa.hasClass('blacking-bg')) {
//       btnToggle.removeClass('cerrado');
//       cenefa.removeClass('blacking-bg');
//     }
//   });
// });


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


  //-- Tu Hogar Inicio ---------------------------------------------------------
  /* $(document).on('ready', function () {
    setTimeout(function () {
      $('.preloader').css({
        'opacity':'0',
        'visibility':'hidden'
      });
    },  1000);
  });
  */
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
    $('#homevideo').waypoint(function () {
      if ( !navbar.hasClass('bg-white') ) {
      navbar.toggleClass('bg-white');
    }
      $('.inicio-tuhogar--homevideo').toggleClass('bg-no-gradient');
    }, { 'offset': '-50%' });

  //-- Formulario de Contacto --------------------------------------------------
  // Si es IPad y seleccionan el campo de nombre subir más el formulario flotante
  if (is_iPad() ) {
    $('#name').on('focus', function () {
      $('.floating.inicio-tuhogar__contact-form').toggleClass('sube');
    });
  }

  var myCookie = getCookie("Subscripcion");
  // Si no existe una cookie del formulario
  if ( myCookie !== "Realizada" ) {
    // Mostrar solo si no es mobile
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

  if ( isTablet() || is_iPad() ) {
    $('.floating').css({'display':'none'});
  }

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


  //-- Navbar Animacion Yamm ---------------------------------------------------

  /* Darle clase open al hacer click, para que se despliegue el menu*/
  $('li.dropdown.yamm-fullwidth > a').on('click', function (event) {
    $(this).parent().toggleClass('open');
  });

  /* Guardar el menu si el usuario hace click fuera */
  $('body').on('click', function (e) {
    if (!$('li.dropdown.yamm-fullwidth').is(e.target)
        && $('li.dropdown.yamm-fullwidth').has(e.target).length === 0
        && $('.open').has(e.target).length === 0
    ) {
        $('li.dropdown.yamm-fullwidth').removeClass('open');
    }
  });

  var sensores = new Vue({
    el: '#sensores',
    data: {
      titles: [
        { text: 'Motion Sensor', url: 'images/nav-motion.jpg', class: 'active' },
        { text: 'Flood Sensor', url: 'images/nav-flood.jpg' },
        { text: 'Door/Window Sensor', url: 'images/nav-dws.jpg' },
        { text: 'Smoke Sensor', url: 'images/nav-smoke.jpg' },
        { text: 'Universal Binary Sensor', url: 'images/nav-ubs.jpg' }
      ],
    }
  });
  var actuadores = new Vue({
    el: '#actuadores',
    data: {
      titles: [
        { text: 'Wall Plug', url: 'images/nav-wallplug.jpg' },
        { text: 'Dimmer 2', url: 'images/nav-dimmer.jpg' },
        { text: 'Switches 2', url: 'images/nav-relay.jpg' },
        { text: 'Roller Shutter 2', url: 'images/nav-smoke.jpg' },
        { text: 'RGBW Controller', url: 'images/nav-ubs.jpg' }
      ],
    }
  });

  var actuadores = new Vue({
    el: '#remotos',
    data: {
      titles: [
        { text: 'KeyFob', url: 'images/nav-keyfob.jpg' },
        { text: 'The Button', url: 'images/nav-button.jpg' },
        { text: 'Swipe', url: 'images/nav-swipe.jpg' }
      ],
    }
  });

  var puertaDeEnlace = new Vue({
    el: '#puerta-de-enlace',
    data: {
      titles: [
        { text: 'Home Center 2', url: 'images/nav-hcl.jpg' },
        { text: 'The Button', url: 'images/nav-hc2.jpg' }
      ],
    }
  });

  $('.dropdown-toggle').click(function () {
    /* Agrega clase active al primer li*/
    $('.open .nav.nav-pills > li:first-child').addClass('active');
    /* Agrega clase bg-white al navbar*/
    $('nav').addClass('bg-white');
    /* Agrega clase activa  sensores */
    $('#sensores').addClass('active');
    /* Agrega el atributo aria expanded */
    $('.open .nav.nav-pills > li:first-child > a').attr('aria-expanded',true);
  });








 });
