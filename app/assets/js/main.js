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

function is_iPad() {
  return (navigator.platform.indexOf("iPad") != -1)
}

function is_iPhone() {
  return (navigator.platform.indexOf("iPhone") != -1)
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

// function modalVideo(videolink) {
//   if (videolink !== '') {
//     $('.button-play').on('click', function(e) {
//       e.preventDefault();
//       $('#video-modal').modal('show');
//       $('#video-modal').attr('src', videolink);
//     });
//   }
// }

// function videosModales(handler, modal ,src) {
//   $(handler).on('click', function (e) {
//     e.preventDefault();
//     $(modal).modal('show');
//     $(modal).find('iframe').attr('src', src);
//   });
// }

function isMobile() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   return true;
  }
}

function autoplayYoutube(btn,iframe) {
  $(btn).click(function(e){
    $(iframe)[0].src += "&autoplay=1";
      e.preventDefault();
    });
}

function stopCloseYoutube() {
  $("#video-modal").on('hidden.bs.modal', function (e) {
      $("#video-modal iframe").attr("src", $("#video-modal iframe").attr("src"));
  });
}

function modalShutter(buttonId, modalId) {
  $(buttonId).on('click', function (e) {
    e.preventDefault();
    if ( buttonId === '' || modalId === '') {
      console.error('El buttonId o modalId está vacío');
    }
    $(modalId).modal();
  });
}

//-- Padding Nav  --------------------------------------------------------------
/* Centrar los elementos del menu con el padding */
// calcularPadding('.navbar-brand.navbar__logo-text');
// calcularMargin('.navbar-brand .color-logo');
// calcularPaddingNav('.nav.navbar-nav > li > a');


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

//-- Owl -----------------------------------------------------------------------
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
              loop:true
          }
      }
  });
  /* Proyectos Inmobiliarios */
  $('#owl-proyectos').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:2000,
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




  /* compatibilidad*/
  $('#owl-compatibilidad').owlCarousel({
      loop:false,
      autoplay:true,
      autoplayTimeout:2000,
      margin:10,
      nav: false,
      dots:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
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

  /* Por que con FIBARO */
  $('#owl-why-fibaro').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:2000,
      margin:10,
      nav: false,
      dots:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:4,
              nav:false
          },
          1000:{
              items:4,
              nav:false,
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



  if (is_iPad() || is_iPhone()) {
    $('video').attr('controls','true');
  }


  //-- Waypoint Inicio ---------------------------------------------------------
  // Se cambia el fondo degradado del nav menu cuando es desktop
    $('#homevideo').waypoint(function () {
      if ( !navbar.hasClass('bg-white') ) {
      navbar.toggleClass('bg-white');
    }
      $('.inicio-tuhogar--homevideo').toggleClass('bg-no-gradient');
    }, { 'offset': '-50%' });

    /* Animacion del formulario floating right */
    $('#nuestras-alianzas').waypoint(function () {
      $('#contacto-modal .floating').addClass('animated fadeInUp').css('visibility', 'visible');
    }, { offset: '50%' });

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
        // fadeElementOffset('#contacto-modal', 'fadeInUp', '50%');


        //Al hacer click el en btn cerrarlo es decir colocarle display none
        $('.inicio-tuhogar__contact-form .close').on('click', function () {
          $('.inicio-tuhogar__contact-form').css('display', 'none');
        });
      }
  }
  // Al hacer click en el btn del icono de correo
  $('.inicio-tuhogar__icon-contact').on('click', function () {
    $('.floating.inicio-tuhogar__contact-form').toggleClass('hidden');
  });

  //Al hacer click el en btn cerrarlo es decir colocarle display none
  $('.inicio-tuhogar__contact-form .close').on('click', function () {
    $('.inicio-tuhogar__contact-form').addClass('hidden');
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


  /* Acciones Ventana Modal Telcos */
  $('#telcos, #retail').on('click', function (e) {
    e.preventDefault();
    $('#telcos-modal').modal();
  });

//-- videosModales -------------------------------------------------------------
/* autoplay videos function */
/*
$('#play-promo-video').click(function(e){
  $('#play-promocional')[0].src += "&autoplay=1";
    e.preventDefault();
});
*/

    /* Video Dimmer */
    // videosModales('#play-dimmer-video','https://www.youtube.com/embed/hSVadYFTp2M');
   //-- Video Promocional Inicio
  //  modalVideo('https://www.youtube.com/embed/PGL-CZEUOG0');
    // videosModales('#play-promo-video', 'https://www.youtube.com/embed/PGL-CZEUOG0');



//-- Waze ----------------------------------------------------------------------
$(document).ready(function () {

if ( isMobile() ) {
  // $('#waze-link').attr('href','waze://?ll=-33.3869005,-70.5405292');
  $('#waze-link').attr('href','waze://?q=<fibaro experience center>');
  $('#maps-link').attr('href','comgooglemaps://?q=fibaro experience center');
}

  // autoplayYoutube('#play-promo-video', '#play-promocional');
  stopCloseYoutube();
});


//-- shopping cart icon --------------------------------------------------------
//Si no es Mobile
if ( !isMobile() ) {
  $('.tienda-link > img').attr('src','http://nueva.tuhogarinteligente.cl/wp-content/themes/tamed2017/assets/images/icon/shopping-bag.svg');
} else {
  $('.dropdown-menu--desktop').hide();
}


//-- Notify Cookies
$('#close-notify').click(function () {
  $('.notify-cookies').addClass('hidden');
});


$('.notify-cookies').addClass('animated fadeInUp');

$(window).scroll(function () {
  if( $(this).scrollTop() > 1 ) {
    $('.notify-cookies').addClass('animated fadeOutDown');
  }
});

//-- Timer Switches ------------------------------------------------------------
var myTimer = false;

$('.single-product__section > .container').hover(function () {
  clearTimeout(myTimer);
}, function () {
  myTimer = setInterval(function () {
      $('.single-product__section .tab-content .active, .single-product__section .nav-pills .active').removeClass('active').siblings().addClass('active');
  }, 10000);
});

//-- Contacto Ventana Modal Consulta EXPERTO -----------------------------------
if ( !isMobile()) {
  $('#consulta-experto').click(function (e) {
    e.preventDefault();
    $('#telcos-modal').modal();
  });
}

function Modal(handler, modal ,src) {
 this.handler = handler;
 this.modal = modal;
 this.src = src;

 $(handler).on('click', function (e) {
   e.preventDefault();
   $(modal).find('iframe').attr('src', src);
   setTimeout(function () {
      $(modal).modal('show');
   }, 1000)
 });
}


/* Video Homepage */
var videoPromocional = new Modal('#play-promo-video','#video-modal', 'https://www.youtube.com/embed/PGL-CZEUOG0');

/* Página Compatibilidad */
var alexa = new Modal('#play-alexa', '#video-modal', 'https://www.youtube.com/embed/hrgbHUni-z0');
var todoEstaConectado = new Modal('#todo-conectado', '#video-modal', 'https://www.youtube.com/embed/ou2TdFWOMc4');


/* Videos Productos */
var cOsensor = new Modal('#play-co-sensor', '#video-modal', 'https://www.youtube.com/embed/EMge0LSmxuM');



 });


jQuery(document).ready(function ($) {




if (is_iPad() || is_iPhone()) {
  $('video').attr('controls','true');
}


//------------------------------------------------------------------------------
// Navbar Animacion Yamm
//------------------------------------------------------------------------------



// Desktop
//------------------------------------------------------------------------------

/* Darle clase open al padre del a al hacer click, para que se despliegue el menu */
$('li.dropdown > a').on('click', function (event) {
  event.preventDefault();
  $(this).parent().toggleClass('open');
  $(this).parent().children('li.dropdown').toggleClass('open')
  $(this).parent().siblings().children('ul').removeClass('collapsed').addClass('collapse');
});

/* Guardar el menu si el usuario hace click fuera */
$('body').on('click', function (e) {
  if (!$('li.dropdown.yamm-fullwidth').is(e.target)
      && $('li.dropdown.yamm-fullwidth').has(e.target).length === 0
      && $('.open').has(e.target).length === 0
  ) {
      $('li.dropdown.yamm-fullwidth').removeClass('open');

      // Remueve clase para que no queden desplegados 2 tab-content
      $('.dropdown-menu.dropdown-menu--desktop .tab-pane').removeClass('active');
      $('.dropdown-menu.dropdown-menu--desktop .nav.nav-pills > li').removeClass('active');
      $('.dropdown-menu.dropdown-menu--desktop .nav.nav-pills > li a').attr('aria-expanded','true');
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

/* Collapsando todos los submenus */
$('.dropdown-menu--mobile > li.dropdown > ul').addClass('collapse');

/* Eliminar el otro menu si no es mobile o iPad */
if ( checkWidth() || isTablet() || is_iPad())
{
  $('.dropdown-menu--desktop').hide();
  $('.dropdown-menu--mobile').addClass('collapse')
} else {
  $('.dropdown-menu--mobile').hide();
}




// Mobile
//------------------------------------------------------------------------------

// Darle la clase open a la segunda generacion
$('#menu-escrito li li.dropdown').on('click', function () {
  $(this).toggleClass('open');
})


  $('.dropdown-menu--mobile > li.dropdown').on('click',function () {
    if ( $(this).children('ul').hasClass('collapse') ) {
      $(this).children('ul').removeClass('collapse').addClass('collapsed');
    } else {
      $(this).children('ul').removeClass('collapsed').addClass('collapse');
    }

  });



  $('#menu-escrito > li').on('click', function () {

    // Quitarle la clase open a los hermanos
    $(this).siblings().removeClass('open');

    // Quitar clase collapse a los sobrinos
    $(this).siblings().children('ul').removeClass('collapsed').addClass('collapse');

    //Quitarle la clase open a los sobrinos
    $(this).siblings().children('ul').children('ul').removeClass('collapsed').addClass('collapse');


    if ( $(this).children('ul').hasClass('collapse') ) {
      $(this).children('ul').removeClass('collapse').addClass('collapsed');
    }else if ( !$(this).hasClass('open') ) {
      $(this).children('ul').removeClass('collapsed').addClass('collapse');
    }
  });



if ( !checkWidth() || !isTablet() ) {
  // $('.dropdown.yamm-fullwidth .dropdown-toggle').append('<span class="arrow-down"></span>');
  // $('#menu-escrito > .dropdown .dropdown-toggle').append('<span class="arrow-down"></span>');
}



// Despliegue collapse del Inmobiliaria smart

var inmobiSmart = $('.casas-deptos a');
var tieneCollapse = $('.casas-deptos.open ul');
  inmobiSmart.click(function () {
    var parentClass = $(this).parent().attr('class');

    if ( parentClass.indexOf('open') && tieneCollapse.hasClass('collapsed'))
    {


    }
  });

//-- Ventanas Modales Contacto
modalShutter('#btn-retail-form', '#retail-modal-form');
modalShutter('#btn-dist-form', '#dist-modal-form');
modalShutter('#btn-telcos-form', '#telcos-modal-form');

//-- Typed ---------------------------------------------------------------------

/*
var typed = new Typed('#type-word', {
strings: ["calefacción", "cámara", "iluminación", "seguridad", "dispositivo", "termostato", "casa"],
typeSpeed: 50,
fadeOut:true,
loop: false,
onComplete: function () {
  $('.typed-cursor').fadeOut('slow');
}
});

//-- Conteo de plugins
var ciclo = 0;
function numberAnimation() {
  $('text.c').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });

      ciclo = 1;
  });
}

var sectionPlugins = $('.compatibilidad__plugins');
sectionPlugins.waypoint(function (direction) {
  if (direction == 'down') {
      if (ciclo < 1) {
        numberAnimation();
      }
    }
}, { offset: '90%' });
*/

});
