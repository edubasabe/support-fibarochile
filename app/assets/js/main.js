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

function modalVideo(videolink) {
  $('.button-play').on('click', function(e) {
    e.preventDefault();
    $('#video-modal').modal('show');
    $('#video-modal').attr('src', videolink);
  });
}

function videosModales(element, src) {
  $(element).on('click', function (e) {
    e.preventDefault();
    $('#video-modal').modal('show');
    $('#video-modal iframe').attr('src', src);
  });

}

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
  $("#myModal").on('hidden.bs.modal', function (e) {
      $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
  });
}


//-- Padding Nav  --------------------------------------------------------------
/* Centrar los elementos del menu con el padding */
calcularPadding('.navbar-brand.navbar__logo-text');
calcularMargin('.navbar-brand .color-logo');
calcularPaddingNav('.nav.navbar-nav > li > a');


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


  //-- Tu Hogar Inicio ---------------------------------------------------------

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
    // console.log('No es iPad');
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
    $('#smarthome').waypoint(function () {
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
    $('.floating.inicio-tuhogar__contact-form').addClass('mostrar');
  });

  //Al hacer click el en btn cerrarlo es decir colocarle display none
  $('.inicio-tuhogar__contact-form .close').on('click', function () {
    $('.inicio-tuhogar__contact-form').hide();
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
$('#play-promo-video').click(function(e){
  $('#play-promocional')[0].src += "&autoplay=1";
    e.preventDefault();
});
    /* Video Dimmer */
    videosModales('#play-dimmer-video','https://www.youtube.com/embed/hSVadYFTp2M');
    videosModales('#play-promo-video', 'https://www.youtube.com/embed/m7Ra7G-4cis?ecver=1');
//-- Waze ----------------------------------------------------------------------


$(document).ready(function () {
  autoplayYoutube('#play-promo-video', '#play-promocional');
  stopCloseYoutube();
});


//-- shopping cart icon --------------------------------------------------------
//Si no es Mobile
if ( !isMobile() ) {
  $('.tienda-link > img').attr('src','./assets/images/icon/shopping-bag.svg');
} else {
  $('.dropdown-menu--desktop').hide();
}








 });
