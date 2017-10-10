//-- Navbar --------------------------------------------------------------------
  var sensores = new Vue({
    el: '#sensores',
    data: {
      titles: [
        { text: 'Motion Sensor', url: 'assets/images/nav/nav-motion.jpg', class: 'active', link: 'motion-sensor.html' },
        { text: 'Flood Sensor', url: 'assets/images/nav/nav-flood.jpg', link: 'flood-sensor.html' },
        { text: 'Door/Window Sensor', url: 'assets/images/nav/nav-dws.jpg', link: 'dw-sensor.html' },
        { text: 'Smoke Sensor', url: 'assets/images/nav/nav-smoke.jpg', link: 'smoke-sensor.html' },
        { text: 'Universal Binary Sensor', url: 'assets/images/nav/nav-ubs.jpg', link: 'universal-sensor.html' }
      ],
    }
  });

  var actuadores = new Vue({
    el: '#actuadores',
    data: {
      titles: [
        { text: 'Wall Plug', url: 'assets/images/nav/nav-wallplug.jpg', link: 'wall-plug.html' },
        { text: 'Dimmer 2', url: 'assets/images/nav/nav-dimmer.jpg', link: 'dimmer-2.html' },
        { text: 'Switches 2', url: 'assets/images/nav/nav-relay.jpg', link: 'switches-2.html' },
        { text: 'Roller Shutter 2', url: 'assets/images/nav/nav-roller.jpg', link: 'roller-shutter-2.html' },
        { text: 'RGBW Controller', url: 'assets/images/nav/nav-rgbw.jpg', link: 'rgbw-controller.html' }
      ],
    }
  });

  var actuadores = new Vue({
    el: '#remotos',
    data: {
      titles: [
        { text: 'KeyFob', url: 'assets/images/nav/nav-keyfob.jpg', link: 'keyfob.html' },
        { text: 'The Button', url: 'assets/images/nav/nav-button.jpg', link: 'the-button.html' },
        { text: 'Swipe', url: 'assets/images/nav/nav-swipe.jpg', link: 'swipe.html' }
      ],
    }
  });

  var puertaDeEnlace = new Vue({
    el: '#puerta-de-enlace',
    data: {
      titles: [
        { text: 'Home Center Lite', url: 'assets/images/nav/nav-hcl.jpg', link: 'hcl.html' },
        { text: 'Home Center 2', url: 'assets/images/nav/nav-hc2.jpg', link: 'hc2.html' }
      ],
    }
  });

  /* Menu en Mobile */
  var sensoresMobile = new Vue({
    el: '#sensores-mobile',
    data: {
      titles: [
        { text: 'Motion Sensor', texto: '(Sensor de Movimiento)', url: 'assets/images/nav/nav-motion.jpg', class: 'active', link: 'motion-sensor.html' },
        { text: 'Flood Sensor', texto: '(Sensor de Inundación)', url: 'assets/images/nav/nav-flood.jpg', link: 'flood-sensor.html' },
        { text: 'Door/Window Sensor', texto: '(Sensor de Puerta/Ventana)', url: 'assets/images/nav/nav-dws.jpg', link: 'dw-sensor.html' },
        { text: 'Smoke Sensor', texto: '(Sensor de Humo)', url: 'assets/images/nav/nav-smoke.jpg', link: 'smoke-sensor.html' },
        { text: 'Universal Binary Sensor', texto: '(Sensor Binario Universal)', url: 'assets/images/nav/nav-ubs.jpg', link: 'universal-sensor.html' }
      ],
    }
  });

  var actuadoresMobile = new Vue({
    el: '#actuadores-mobile',
    data: {
      titles: [
        { text: 'Wall Plug', texto: '(Enchufe inteligente)', url: 'assets/images/nav/nav-wallplug.jpg', link: 'wall-plug.html' },
        { text: 'Dimmer 2', texto: '(Control de iluminación)', url: 'assets/images/nav/nav-dimmer.jpg', link: 'dimmer-2.html' },
        { text: 'Switches 2', texto: '(Interruptores inteligentes)', url: 'assets/images/nav/nav-relay.jpg', link: 'switches-2.html' },
        { text: 'Roller Shutter 2', texto: '(Control de cortinas y motores)', url: 'assets/images/nav/nav-roller.jpg', link: 'roller-shutter-2.html' },
        { text: 'RGBW Controller', texto: '(Control de cintas LED RGBW)', url: 'assets/images/nav/nav-rgbw.jpg', link: 'rgbw-controller.html' }
      ],
    }
  });

  var remotosMobile = new Vue({
    el: '#remotos-mobile',
    data: {
      titles: [
        { text: 'KeyFob',texto: '(Control remoto personal)', url: 'assets/images/nav/nav-keyfob.jpg', link: 'keyfob.html' },
        { text: 'The Button',texto: '(Interruptor inalámbrico)', url: 'assets/images/nav/nav-button.jpg', link: 'the-button.html' },
        { text: 'Swipe',texto: '(Control por gestos)', url: 'assets/images/nav/nav-swipe.jpg', link: 'swipe.html' }
      ],
    }
  });

  var puertaDeEnlaceMobile = new Vue({
    el: '#puertas-mobile',
    data: {
      titles: [
        { text: 'Home Center Lite', url: 'assets/images/nav/nav-hcl.jpg', link: 'hcl.html' },
        { text: 'Home Center 2', url: 'assets/images/nav/nav-hc2.jpg', link: 'hc2.html' }
      ],
    }
  });

//-- Alianzas ------------------------------------------------------------------
var alianzas = new Vue({
  el: '#owl-alianzas',
  data: {
    item:[
      { src: 'assets/images/partners/partners-yale.jpg', srcset: 'assets/images/partners/partners-yale.jpg 1x, assets/images/partners/partners-yale@2x.jpg 2x' },
      { src: 'assets/images/partners/partners-sonos.jpg', srcset: 'assets/images/partners/partners-sonos.jpg 1x, assets/images/partners/partners-sonos@2x.jpg 2x' },
      { src: 'assets/images/partners/partners-evolux.jpg', srcset: 'assets/images/partners/partners-evolux.jpg 1x, assets/images/partners/partners-evolux@2x.jpg 2x' },
      { src: 'assets/images/partners/partners-zwave.jpg', srcset: 'assets/images/partners/partners-zwave.jpg 1x, assets/images/partners/partners-zwave@2x.jpg 2x' },
      // { src: 'assets/images/partners/partners-leed.jpg', srcset: 'assets/images/partners/partners-leed.jpg 1x, assets/images/partners/partners-leed@2x.jpg 2x' },
      { src: 'assets/images/partners/partners-dlink.jpg', srcset: 'assets/images/partners/partners-dlink.jpg 1x, assets/images/partners/partners-dlink@2x.jpg 2x' },
      { src: 'assets/images/partners/partners-hunterdouglas.jpg', srcset: 'assets/images/partners/partners-hunterdouglas.jpg 1x, assets/images/partners/partners-hunterdouglas@2x.jpg 2x' },
      { src: 'assets/images/partners/partners-rollerhouse.jpg', srcset: 'assets/images/partners/partners-rollerhouse.jpg 1x, assets/images/partners/partners-rollerhouse@2x.jpg 2x' },
    ]
  }
});

//-- Proyectos Inmobiliarios ---------------------------------------------------
var alianzas = new Vue({
  el: '#owl-proyectos',
  data: {
    item:[
      { src: 'assets/images/proyectos/proyectos-logos-1.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-2.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-3.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-4.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-5.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-6.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-7.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-8.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-9.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-10.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-11.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-12.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-13.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-14.jpg'},
      { src: 'assets/images/proyectos/proyectos-logos-15.jpg'}
    ]
  }
});

//-- Proyectos Inmobiliarios ---------------------------------------------------
var alianzas = new Vue({
  el: '#owl-compatibilidad',
  data: {
    item:[
      { src: 'assets/images/icon/icon-multimedia.svg', text: 'Multimedia'},
      { src: 'assets/images/icon/icon-security.svg', text: 'Seguridad'},
      { src: 'assets/images/icon/icon-temperature.svg', text: 'Temperatura'},
      { src: 'assets/images/icon/icon-lights.svg', text: 'Luces'},
      { src: 'assets/images/icon/icon-home.svg', text: 'Casa'}
    ]
  }
});


//-- Ventana Modal -------------------------------------------------------------

/* Ventana Modal Telcos */
Vue.component('modal-telcos', {
  template: `
        <div class="modal-dialog" style="max-width:414px;">
          <div class="modal-content">
            <div class="modal-header">
              <img src="./assets/images/logo/tamed-logo-2017.svg" height="20" alt="TAMED">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <svg width="10" height="10">
                <line x1="0" y1="0" x2="10" y2="10" style="stroke:rgb(0,0,0);stroke-width:2"></line>
                <line x1="0" y1="10" x2="10" y2="0" style="stroke:rgb(0,0,0);stroke-width:2"></line>
              </svg>
              </button>
              <h4 class="modal-title" id=""></h4>
            </div>
            <div class="modal-body">
              <h3 class="text-center">Comunícate con nosotros</h3>
              <p class="lead text-center">Escríbenos y nos comunicaremos contigo.</p>
              <form class="form form-subscribe" action="https://s242003202.t.eloqua.com/e/f2" method="post" id="modal-subscribe">
                <input type="hidden" name="elqFormName" value="Gracias_Newsletter">
                <input type="hidden" name="elqSiteID" value="242003202">
                <input type="hidden" name="elqCustomerGUID" value="">
                <input type="hidden" name="elqCookieWrite" value="0">
                <div class="form-group">
                  <input type="text" class="form-control" id="name" name="firstName" placeholder="Nombre" required>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="email" name="emailAddress" placeholder="E-mail" required>
                </div>
                <div class="form-group">
                  <textarea class="form-control" id="mensaje" name="message" placeholder="Mensaje" required></textarea>
                </div>
                <input type="submit" class="btn btn-default btn-subscribe" value="Enviar Mensaje" onclick="setCookie()">
              </form>
            </div>
          </div>
        </div>`
});

new Vue({
  el: '#telcos-modal',
});

/* Modal Contacto */

Vue.component('modal-contacto', {
  template: `<div class="floating inicio-tuhogar__contact-form">
    <img src="./assets/images/logo/tamed-logo-2017.svg" height="20" alt="TAMED">
    <span class="close">
    <svg width="10" height="10">
      <line x1="0" y1="0" x2="10" y2="10" style="stroke:rgb(0,0,0);stroke-width:2"></line>
      <line x1="0" y1="10" x2="10" y2="0" style="stroke:rgb(0,0,0);stroke-width:2"></line>
    </svg>
    </span>
    <h4 class="lead text-center">Contáctanos</h4>
    <form class="form form-subscribe" action="https://s242003202.t.eloqua.com/e/f2" method="post" id="floating-subscribe">
      <input type="hidden" name="elqFormName" value="Gracias_Contacto">
      <input type="hidden" name="elqSiteID" value="242003202">
      <input type="hidden" name="elqCustomerGUID" value="">
      <input type="hidden" name="elqCookieWrite" value="0">
      <div class="form-group">
        <input type="text" class="form-control" id="name" name="firstName" placeholder="Nombre">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="email" name="emailAddress" placeholder="E-mail">
      </div>
      <div class="form-group">
        <textarea class="form-control" id="mensaje" name="message" placeholder="Mensaje"></textarea>
      </div>
      <input type="submit" class="btn btn-default btn-subscribe" value="Enviar" id="btn-subscripcion" onclick="setCookie()">
    </form>
  </div>`
});

new Vue({
  el:'#contacto-modal'
});



/* Footer **********************************************************************/
Vue.component('my-footer', {
  template: `
  <div class="container-fluid">
    <div class="row footer__menu-bg">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1">
        <div class="footer__menu">
          <ul class="list-unstyled">
            <li><a href="https://tuhogarinteligente.cl/politica-de-cookies/">Política de Privacidad</a></li>
            <li><a href="https://id.cloud.fibaro.com/">FIBARO ID</a></li>
            <li><a href="https://tuhogarinteligente.cl/contactenos/">Contacto</a></li>
            <li><a href="https://tuhogarinteligente.cl/trabaje-con-nosotros/">Trabaja con nosotros</a></li>
            <li><a href="https://tuhogarinteligente.cl/wp-content/uploads/2017/02/CatalogoPreciosNuevosProductos2017.pdf" download>Catálogo</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="social col-xs-12 col-md-4 col-md-offset-4">
        <div class="footer__social">
          <ul class="list-unstyled">
            <li><a href="https://www.facebook.com/fibarochile/" target="_blank"><i class="fa fa-lg center-block fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/fibaro_chile/" target="_blank"><i class="fa fa-lg center-block fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/fibarochile/" target="_blank"><i class="fa fa-lg center-block fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/company/tamed-spa" target="_blank"><i class="fa fa-lg center-block fa-linkedin"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCyq2iy8aEUjKmFatmGPicYg" target="_blank"><i class="fa fa-lg center-block fa-youtube-play"></i></a></li>
          </ul>
        </div>
       </div>
    </div>
  </div>`
})

new Vue({
  el: '#footer'
})

Vue.component('my-nav', {
  template: `<div>hola</div>`
})

new Vue({
  el: '#elemento'
})




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




/* Script Eloqua */
<!--//
var timerId = null, timeout = 5;
//-->
<!--//
function WaitUntilCustomerGUIDIsRetrieved() {
if (!!(timerId)) {
    if (timeout == 0) {
return;
}
if (typeof this.GetElqCustomerGUID === 'function') {
        document.forms["Gracias_Contacto"].elements["elqCustomerGUID"].value = GetElqCustomerGUID();
return;
}
timeout -= 1;
}
timerId = setTimeout("WaitUntilCustomerGUIDIsRetrieved()", 500);
return;
}
window.onload = WaitUntilCustomerGUIDIsRetrieved;
// _elqQ.push(['elqGetCustomerGUID']);
//-->
