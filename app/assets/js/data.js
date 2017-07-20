//-- Navbar --------------------------------------------------------------------
  var sensores = new Vue({
    el: '#sensores',
    data: {
      titles: [
        { text: 'Motion Sensor', url: 'assets/images/nav-motion.jpg', class: 'active' },
        { text: 'Flood Sensor', url: 'assets/images/nav-flood.jpg' },
        { text: 'Door/Window Sensor', url: 'assets/images/nav-dws.jpg' },
        { text: 'Smoke Sensor', url: 'assets/images/nav-smoke.jpg' },
        { text: 'Universal Binary Sensor', url: 'assets/images/nav-ubs.jpg' }
      ],
    }
  });

  var actuadores = new Vue({
    el: '#actuadores',
    data: {
      titles: [
        { text: 'Wall Plug', url: 'assets/images/nav-wallplug.jpg' },
        { text: 'Dimmer 2', url: 'assets/images/nav-dimmer.jpg' },
        { text: 'Switches 2', url: 'assets/images/nav-relay.jpg' },
        { text: 'Roller Shutter 2', url: 'assets/images/nav-smoke.jpg' },
        { text: 'RGBW Controller', url: 'assets/images/nav-ubs.jpg' }
      ],
    }
  });

  var actuadores = new Vue({
    el: '#remotos',
    data: {
      titles: [
        { text: 'KeyFob', url: 'assets/images/nav-keyfob.jpg' },
        { text: 'The Button', url: 'assets/images/nav-button.jpg' },
        { text: 'Swipe', url: 'assets/images/nav-swipe.jpg' }
      ],
    }
  });

  var puertaDeEnlace = new Vue({
    el: '#puerta-de-enlace',
    data: {
      titles: [
        { text: 'Home Center Lite', url: 'assets/images/nav-hcl.jpg' },
        { text: 'Home Center 2', url: 'assets/images/nav-hc2.jpg' }
      ],
    }
  });

  /* Menu en Mobile */
  var sensoresMobile = new Vue({
    el: '#sensores-mobile',
    data: {
      titles: [
        { text: 'Motion Sensor', url: 'assets/images/nav-motion.jpg', class: 'active' },
        { text: 'Flood Sensor', url: 'assets/images/nav-flood.jpg' },
        { text: 'Door/Window Sensor', url: 'assets/images/nav-dws.jpg' },
        { text: 'Smoke Sensor', url: 'assets/images/nav-smoke.jpg' },
        { text: 'Universal Binary Sensor', url: 'assets/images/nav-ubs.jpg' }
      ],
    }
  });

  var actuadoresMobile = new Vue({
    el: '#actuadores-mobile',
    data: {
      titles: [
        { text: 'Wall Plug', url: 'assets/images/nav-wallplug.jpg' },
        { text: 'Dimmer 2', url: 'assets/images/nav-dimmer.jpg' },
        { text: 'Switches 2', url: 'assets/images/nav-relay.jpg' },
        { text: 'Roller Shutter 2', url: 'assets/images/nav-smoke.jpg' },
        { text: 'RGBW Controller', url: 'assets/images/nav-ubs.jpg' }
      ],
    }
  });

  var actuadoresMobile = new Vue({
    el: '#remotos-mobile',
    data: {
      titles: [
        { text: 'KeyFob', url: 'assets/images/nav-keyfob.jpg' },
        { text: 'The Button', url: 'assets/images/nav-button.jpg' },
        { text: 'Swipe', url: 'assets/images/nav-swipe.jpg' }
      ],
    }
  });

  var puertaDeEnlaceMobile = new Vue({
    el: '#puertas-mobile',
    data: {
      titles: [
        { text: 'Home Center Lite', url: 'assets/images/nav-hcl.jpg' },
        { text: 'Home Center 2', url: 'assets/images/nav-hc2.jpg' }
      ],
    }
  });

//-- Alianzas ------------------------------------------------------------------
var alianzas = new Vue({
  el: '#owl-alianzas',
  data: {
    item:[
      { src: 'assets/images/partners-yale.jpg', srcset: 'assets/images/partners-yale.jpg 1x, assets/images/partners-yale@2x.jpg 2x' },
      { src: 'assets/images/partners-sonos.jpg', srcset: 'assets/images/partners-sonos.jpg 1x, assets/images/partners-sonos@2x.jpg 2x' },
      { src: 'assets/images/partners-evolux.jpg', srcset: 'assets/images/partners-evolux.jpg 1x, assets/images/partners-evolux@2x.jpg 2x' },
      { src: 'assets/images/partners-zwave.jpg', srcset: 'assets/images/partners-zwave.jpg 1x, assets/images/partners-zwave@2x.jpg 2x' },
      { src: 'assets/images/partners-leed.jpg', srcset: 'assets/images/partners-leed.jpg 1x, assets/images/partners-leed@2x.jpg 2x' },
      { src: 'assets/images/partners-dlink.jpg', srcset: 'assets/images/partners-dlink.jpg 1x, assets/images/partners-dlink@2x.jpg 2x' },
      { src: 'assets/images/partners-hunterdouglas.jpg', srcset: 'assets/images/partners-hunterdouglas.jpg 1x, assets/images/partners-hunterdouglas@2x.jpg 2x' },
      { src: 'assets/images/partners-rollerhouse.jpg', srcset: 'assets/images/partners-rollerhouse.jpg 1x, assets/images/partners-rollerhouse@2x.jpg 2x' },
    ]
  }
});

//-- Proyectos Inmobiliarios ---------------------------------------------------
var alianzas = new Vue({
  el: '#owl-proyectos',
  data: {
    item:[
      { src: 'assets/images/proyectos-logos-1.jpg'},
      { src: 'assets/images/proyectos-logos-2.jpg'},
      { src: 'assets/images/proyectos-logos-3.jpg'},
      { src: 'assets/images/proyectos-logos-4.jpg'},
      { src: 'assets/images/proyectos-logos-5.jpg'},
      { src: 'assets/images/proyectos-logos-6.jpg'},
      { src: 'assets/images/proyectos-logos-7.jpg'},
      { src: 'assets/images/proyectos-logos-8.jpg'},
      { src: 'assets/images/proyectos-logos-9.jpg'},
      { src: 'assets/images/proyectos-logos-10.jpg'},
      { src: 'assets/images/proyectos-logos-11.jpg'},
      { src: 'assets/images/proyectos-logos-12.jpg'},
      { src: 'assets/images/proyectos-logos-13.jpg'},
      { src: 'assets/images/proyectos-logos-14.jpg'},
      { src: 'assets/images/proyectos-logos-15.jpg'}
    ]
  }
});


//-- Ventana Modal -------------------------------------------------------------

/* Ventana Modal Telcos */
Vue.component('modal-telcos', {
  template: `
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
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
                  <input type="text" class="form-control" id="name" name="firstName" placeholder="Nombre">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="email" name="emailAddress" placeholder="E-mail">
                </div>
                <div class="form-group">
                  <textarea class="form-control" id="mensaje" name="message" placeholder="Mensaje"></textarea>
                </div>
                <input type="submit" class="btn btn-default btn-subscribe" value="Suscríbete" onclick="setCookie()">
              </form>
            </div>
            <!--<div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary">Alguna Acción</button>
            </div> -->
          </div>
        </div>`
});

new Vue({
  el: '#telcos-modal',
});

/* Modal Contacto */

Vue.component('modal-contacto', {
  template: `<div class="floating inicio-tuhogar__contact-form">
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
            <li><a href="https://tuhogarinteligente.cl/nosotros/">Nosotros</a></li>
            <li><a href="https://www.fibaro.com/en/patents/">Patentes</a></li>
            <li><a href="https://tuhogarinteligente.cl/politica-de-cookies/">Política de Privacidad</a></li>
            <li><a href="https://id.cloud.fibaro.com/">FIBARO ID</a></li>
            <li><a href="https://tuhogarinteligente.cl/contactenos/">Contacto</a></li>
            <li><a href="https://tuhogarinteligente.cl/trabaje-con-nosotros/">Trabaja con nosotros</a></li>
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
