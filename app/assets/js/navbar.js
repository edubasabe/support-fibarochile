/*
Vue.component('my-navbar', {
template: `<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <div class="navbar-header page-scroll">
        <a class="navbar-brand page-scroll navbar__logo-text navbar-icon-center" href="#page-top">
          <img src="./assets/images/logo/tamed-2017-blanco-sl.svg" alt="TAMED" class="white-logo">
        </a>
        <button type="button" class="navbar-toggle fixed-left" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
      </div>


      <div class="collapse navbar-collapse navbar-ex1-collapse yamm">
          <ul class="nav navbar-nav" id="menu-escrito">
              <li class="hidden"><a class="page-scroll" href="#page-top"></a></li>
              <li class="dropdown yamm-fullwidth">
                <a class="dropdown-toggle" href="#">Productos &nbsp;</a>
                <ul class="dropdown-menu--mobile list-unstyled">
                  <!-- Sensores Mobile -->
                  <li class="dropdown"><a href="#" class="dropdown-toggle menu-sub-toggle" data-toggle="dropdown">Sensores</a>
                    <ul id="sensores-mobile" class="list-unstyled">
                      <li v-for="data in titles">
                        <a v-bind:href="{{ data.link }}">
                          <img v-bind:src="data.url" v-bind:alt="data.text" class="img-responsive">
                          <span>{{ data.text }}</span>
                        </a></li>
                    </ul>
                  </li>
                  <!-- Actuadores Mobile -->
                  <li class="dropdown"><a href="#" class="dropdown-toggle menu-sub-toggle" data-toggle="dropdown">Actuadores</a>
                    <ul id="actuadores-mobile" class="list-unstyled">
                      <li v-for="data in titles">
                        <a v-bind:href="data.link">
                          <img v-bind:src="data.url" v-bind:alt="data.text" class="img-responsive">
                          <span>{{ data.text }}</span>
                        </a></li>
                    </ul>
                  </li>
                  <!-- Remotos Mobile -->
                  <li class="dropdown"><a href="#" class="dropdown-toggle menu-sub-toggle" data-toggle="dropdown">Remotos</a>
                    <ul id="remotos-mobile" class="list-unstyled">
                      <li v-for="data in titles">
                        <a v-bind:href="{{ data.link }}">
                          <img v-bind:src="data.url" v-bind:alt="data.text" class="img-responsive">
                          <span>{{ data.text }}</span>
                        </a></li>
                    </ul>
                  </li>
                  <!-- Puertas de Enlace Mobile -->
                  <li class="dropdown"><a href="#" class="dropdown-toggle menu-sub-toggle" data-toggle="dropdown">Puertas de Enlace</a>
                    <ul id="puertas-mobile" class="list-unstyled">
                      <li v-for="data in titles">
                        <a v-bind:href="{{ data.link }}">
                          <img v-bind:src="data.url" v-bind:alt="data.text" class="img-responsive">
                          <span>{{ data.text }}</span>
                        </a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="dropdown-menu dropdown-menu--desktop">
                  <li>
                    <div class="yamm-content container">
                      <div class="row">
                        <div class="span12">
                          <ul class="nav nav-pills text-center">
                            <li><a data-toggle="tab" href="#sensores">Sensores</a></li>
                            <li><a data-toggle="tab" href="#actuadores">Actuadores</a></li>
                            <li><a data-toggle="tab" href="#remotos">Remotos</a></li>
                            <li><a data-toggle="tab" href="#puerta-de-enlace">Puerta de Enlace</a></li>
                          </ul>
                        </div>
                        <div class="span12">
                          <div class="tab-content">
                            <div class="tab-pane" id="sensores">
                              <ul class="nav-product-tab-list list-unstyled">
                                <li class="product-nav" v-for="data in titles">
                                  <a v-bind:href="data.link">
                                    <img v-bind:src="data.url" v-bind:alt="data.text" class="img-responsive">
                                    <p>{{ data.text }}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-pane" id="actuadores">
                              <ul class="nav-product-tab-list list-unstyled">
                                <li class="product-nav" v-for="data in titles">
                                  <a v-bind:href="data.link">
                                    <img v-bind:src="data.url" v-bind:alt="data.text" class="img-responsive">
                                    <p>{{ data.text }}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-pane" id="remotos">
                              <ul class="nav-product-tab-list list-unstyled">
                                <li class="product-nav remotos" v-for="data in titles">
                                  <a v-bind:href="data.link">
                                    <img v-bind:src="data.url" v-bind:alt="data.text" class="img-responsive">
                                    <p>{{ data.text }}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-pane" id="puerta-de-enlace">
                              <ul class="nav-product-tab-list list-unstyled">
                                <li class="product-nav puerta-de-enlace" v-for="data in titles">
                                  <a v-bind:href="data.link">
                                    <img v-bind:src="data.url" v-bind:alt="data.text" class="img-responsive">
                                    <p>{{ data.text }}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li><a class="page-scroll" href="http://soporte.tuhogarinteligente.cl/instalacion">Instalación</a></li>
              <li><a class="page-scroll" href="http://www.proyectos.tuhogarinteligente.cl/">Proyectos</a></li>
              <li><a class="page-scroll" href="http://soporte.tuhogarinteligente.cl/">Soporte</a></li>
              <li><a class="page-scroll" href="http://expertos.tuhogarinteligente.cl/">Expertos</a></li>
              <li><a class="page-scroll" href="http://blog.tuhogarinteligente.cl">Blog</a></li>
          </ul>
      </div>
    </div>
  </div>
</div>`
}) */

/*

Vue.component('my-navbar', {
template: `<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <div class="navbar-header page-scroll">
        <a class="navbar-brand page-scroll navbar__logo-text navbar-icon-center" href="#page-top">
          <img src="./assets/images/logo/tamed-2017-blanco-sl.svg" alt="TAMED" class="white-logo">
        </a>
        <button type="button" class="navbar-toggle fixed-left" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
      </div>


      <div class="collapse navbar-collapse navbar-ex1-collapse yamm">
          <ul class="nav navbar-nav" id="menu-escrito">
              <li class="hidden"><a class="page-scroll" href="#page-top"></a></li>
              <li class="dropdown yamm-fullwidth">
                <a class="dropdown-toggle" href="#">Productos &nbsp;</a>
                <ul class="dropdown-menu--mobile list-unstyled">
                  <!-- Sensores Mobile -->
                  <li class="dropdown"><a href="#" class="dropdown-toggle menu-sub-toggle" data-toggle="dropdown">Sensores</a>
                    <ul id="sensores-mobile" class="list-unstyled">
                      <li v-for="data in titles">
                        <a :href="data.link">
                          <img :src="data.url" :alt="data.text" class="img-responsive">
                          <span>{{ data.text }}</span>
                        </a></li>
                    </ul>
                  </li>
                  <!-- Actuadores Mobile -->
                  <li class="dropdown"><a href="#" class="dropdown-toggle menu-sub-toggle" data-toggle="dropdown">Actuadores</a>
                    <ul id="actuadores-mobile" class="list-unstyled">
                      <li v-for="data in titles">
                        <a :href="data.link">
                          <img :src="data.url" :alt="data.text" class="img-responsive">
                          <span>{{ data.text }}</span>
                        </a></li>
                    </ul>
                  </li>
                  <!-- Remotos Mobile -->
                  <li class="dropdown"><a href="#" class="dropdown-toggle menu-sub-toggle" data-toggle="dropdown">Remotos</a>
                    <ul id="remotos-mobile" class="list-unstyled">
                      <li v-for="data in titles">
                        <a :href="data.link">
                          <img :src="data.url" :alt="data.text" class="img-responsive">
                          <span>{{ data.text }}</span>
                        </a></li>
                    </ul>
                  </li>
                  <!-- Puertas de Enlace Mobile -->
                  <li class="dropdown"><a href="#" class="dropdown-toggle menu-sub-toggle" data-toggle="dropdown">Puertas de Enlace</a>
                    <ul id="puertas-mobile" class="list-unstyled">
                      <li v-for="data in titles">
                        <a :href="data.link">
                          <img :src="data.url" :alt="data.text" class="img-responsive">
                          <span>{{ data.text }}</span>
                        </a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="dropdown-menu dropdown-menu--desktop">
                  <li>
                    <div class="yamm-content container">
                      <div class="row">
                        <div class="span12">
                          <ul class="nav nav-pills text-center">
                            <li><a data-toggle="tab" href="#sensores">Sensores</a></li>
                            <li><a data-toggle="tab" href="#actuadores">Actuadores</a></li>
                            <li><a data-toggle="tab" href="#remotos">Remotos</a></li>
                            <li><a data-toggle="tab" href="#puerta-de-enlace">Puerta de Enlace</a></li>
                          </ul>
                        </div>
                        <div class="span12">
                          <div class="tab-content">
                            <div class="tab-pane" id="sensores">
                              <ul class="nav-product-tab-list list-unstyled">
                                <li class="product-nav" v-for="data in titles">
                                  <a :href="data.link">
                                    <img :src="data.url" :alt="data.text" class="img-responsive">
                                    <p>{{ data.text }}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-pane" id="actuadores">
                              <ul class="nav-product-tab-list list-unstyled">
                                <li class="product-nav" v-for="data in titles">
                                  <a :href="data.link">
                                    <img :src="data.url" :alt="data.text" class="img-responsive">
                                    <p>{{ data.text }}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-pane" id="remotos">
                              <ul class="nav-product-tab-list list-unstyled">
                                <li class="product-nav remotos" v-for="data in titles">
                                  <a :href="data.link">
                                    <img :src="data.url" :alt="data.text" class="img-responsive">
                                    <p>{{ data.text }}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="tab-pane" id="puerta-de-enlace">
                              <ul class="nav-product-tab-list list-unstyled">
                                <li class="product-nav puerta-de-enlace" v-for="data in titles">
                                  <a :href="data.link">
                                    <img :src="data.url" :alt="data.text" class="img-responsive">
                                    <p>{{ data.text }}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li><a class="page-scroll" href="http://soporte.tuhogarinteligente.cl/instalacion">Instalación</a></li>
              <li><a class="page-scroll" href="http://www.proyectos.tuhogarinteligente.cl/">Proyectos</a></li>
              <li><a class="page-scroll" href="http://soporte.tuhogarinteligente.cl/">Soporte</a></li>
              <li><a class="page-scroll" href="http://expertos.tuhogarinteligente.cl/">Expertos</a></li>
              <li><a class="page-scroll" href="http://blog.tuhogarinteligente.cl">Blog</a></li>
          </ul>
      </div>
    </div>
  </div>
</div>`
})


new Vue({
  el: '#nav'
})

*/

jQuery(document).ready(function ($) {



//-- Revisar si es ipad
function is_iPad() {
  return (navigator.platform.indexOf("iPad") != -1);
}

function is_iPhone() {
  return (navigator.platform.indexOf("iPhone") != -1);
}

if (is_iPad() || is_iPhone()) {
  $('video').attr('controls','true');
}

else {
  // console.log('No es iPad');
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
  $(this).parent().children('li.dropdown').toggleClass('open');
  $(this).parent().siblings().children('ul').removeClass('collapsed').addClass('collapse');
});

/* Guardar el menu si el usuario hace click fuera */
$('body').on('click', function (e) {
  if (!$('li.dropdown.yamm-fullwidth').is(e.target) && $('li.dropdown.yamm-fullwidth').has(e.target).length === 0 && $('.open').has(e.target).length === 0 ) {
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
  $('.dropdown-menu--mobile').addClass('collapse');
} else {
  $('.dropdown-menu--mobile').hide();
}




// Mobile
//------------------------------------------------------------------------------

// Darle la clase open a la segunda generacion
$('#menu-escrito li li.dropdown').on('click', function () {
  $(this).toggleClass('open');
});


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





// $('.dropdown-menu--mobile > li.dropdown').on('click',function () {
//   if ( $(this).children('ul').hasClass('collapse') ) {
//     $(this).children('ul').removeClass('collapse').addClass('collapsed');
//   }
//
//   else {
//     $(this).children('ul').removeClass('collapsed').addClass('collapse');
//   }
//
// });



//
// $('#menu-escrito > li.level-1').on('click', function () {
//
//   if ( $(this).children('ul').hasClass('collapse') )
//   {
//     $(this).children('ul').toggleClass('collapsed collapse');
//   }
//
//   else if ( !$(this).hasClass('open') )
//   {
//     $(this).toggleClass('open');
//     $(this).children('ul').toggleClass('collapse collapsed');
//   }
//
// });

//  $('#menu-escrito > li').on('click', function(){
// //Definiendo el hijo de la 1era generacion
//  var hijo1g = $(this).children('ul');
//
//    // Si el hijo de la 1G y tiene algo que expandir expandirlo
//    if ( hijo1g.hasClass('collapse') )
//    {
//     hijo1g.removeClass('collapse').addClass('collapsed');
//
//     //Definiendo el hijo de la 2da generacion
//     var hijo2g = hijo1g.children('ul');
//
//     if ( hijo2g.hasClass('collapse') ) {
//       hijo2g.removeClass('collapse').addClass('collapsed');
//     }
//    }
//
//    else {
//     hijo1g.removeClass('collapsed').addClass('collapse');
//    }
//
//
//  });
//
//
//


if ( !checkWidth() || !isTablet() ) {
  // $('.dropdown.yamm-fullwidth .dropdown-toggle').append('<span class="arrow-down"></span>');
  $('#menu-escrito > .dropdown .dropdown-toggle').append('<span class="arrow-down"></span>');
}



// Despliegue collapse del Inmobiliaria smart

var inmobiSmart = $('.casas-deptos a');
var tieneCollapse = $('.casas-deptos.open ul');
  inmobiSmart.click(function () {
    var parentClass = $(this).parent().attr('class');

    if ( parentClass.indexOf('open') && tieneCollapse.hasClass('collapsed'))
    {
      alert('tiene la clase open y esta collapsado');
      // $('.casas-deptos.open ul.dropdown-menu--mobile')
    }
  });







});
