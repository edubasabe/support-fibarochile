//-- Navbar --------------------------------------------------------------------
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
        { text: 'Home Center Lite', url: 'images/nav-hcl.jpg' },
        { text: 'Home Center 2', url: 'images/nav-hc2.jpg' }
      ],
    }
  });

  /* Menu en Mobile */
  var sensoresMobile = new Vue({
    el: '#sensores-mobile',
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

  var actuadoresMobile = new Vue({
    el: '#actuadores-mobile',
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

  var actuadoresMobile = new Vue({
    el: '#remotos-mobile',
    data: {
      titles: [
        { text: 'KeyFob', url: 'images/nav-keyfob.jpg' },
        { text: 'The Button', url: 'images/nav-button.jpg' },
        { text: 'Swipe', url: 'images/nav-swipe.jpg' }
      ],
    }
  });

  var puertaDeEnlaceMobile = new Vue({
    el: '#puertas-mobile',
    data: {
      titles: [
        { text: 'Home Center Lite', url: 'images/nav-hcl.jpg' },
        { text: 'Home Center 2', url: 'images/nav-hc2.jpg' }
      ],
    }
  });

//-- Alianzas ------------------------------------------------------------------
var alianzas = new Vue({
  el: '#owl-alianzas',
  data: {
    item:[
      { src: 'images/partners-yale.jpg', srcset: 'images/partners-yale.jpg 1x, images/partners-yale@2x.jpg 2x' },
      { src: 'images/partners-sonos.jpg', srcset: 'images/partners-sonos.jpg 1x, images/partners-sonos@2x.jpg 2x' },
      { src: 'images/partners-evolux.jpg', srcset: 'images/partners-evolux.jpg 1x, images/partners-evolux@2x.jpg 2x' },
      { src: 'images/partners-zwave.jpg', srcset: 'images/partners-zwave.jpg 1x, images/partners-zwave@2x.jpg 2x' },
      { src: 'images/partners-leed.jpg', srcset: 'images/partners-leed.jpg 1x, images/partners-leed@2x.jpg 2x' },
      { src: 'images/partners-dlink.jpg', srcset: 'images/partners-dlink.jpg 1x, images/partners-dlink@2x.jpg 2x' },
      { src: 'images/partners-hunterdouglas.jpg', srcset: 'images/partners-hunterdouglas.jpg 1x, images/partners-hunterdouglas@2x.jpg 2x' },
      { src: 'images/partners-rollerhouse.jpg', srcset: 'images/partners-rollerhouse.jpg 1x, images/partners-rollerhouse@2x.jpg 2x' },
    ]
  }
});

//-- Proyectos Inmobiliarios ---------------------------------------------------
var alianzas = new Vue({
  el: '#owl-proyectos',
  data: {
    item:[
      { src: 'images/proyectos-logos-1.jpg'},
      { src: 'images/proyectos-logos-2.jpg'},
      { src: 'images/proyectos-logos-3.jpg'},
      { src: 'images/proyectos-logos-4.jpg'},
      { src: 'images/proyectos-logos-5.jpg'},
      { src: 'images/proyectos-logos-6.jpg'},
      { src: 'images/proyectos-logos-7.jpg'},
      { src: 'images/proyectos-logos-8.jpg'},
      { src: 'images/proyectos-logos-9.jpg'},
      { src: 'images/proyectos-logos-10.jpg'},
      { src: 'images/proyectos-logos-11.jpg'},
      { src: 'images/proyectos-logos-12.jpg'},
      { src: 'images/proyectos-logos-13.jpg'},
      { src: 'images/proyectos-logos-14.jpg'},
      { src: 'images/proyectos-logos-15.jpg'}
    ]
  }
});

//-- Proyectos Inmobiliarios ---------------------------------------------------
var alianzas = new Vue({
  el: '#owl-inmobi',
  data: {
    item:[
      { src: 'images/partners/partners-logos-1.png'},
      { src: 'images/partners/partners-logos-2.png'},
      { src: 'images/partners/partners-logos-3.png'},
      { src: 'images/partners/partners-logos-4.png'},
      { src: 'images/partners/partners-logos-5.png'},
      { src: 'images/partners/partners-logos-6.png'},
      { src: 'images/partners/partners-logos-7.png'},
      { src: 'images/partners/partners-logos-8.png'},
      { src: 'images/partners/partners-logos-9.png'},
      { src: 'images/partners/partners-logos-10.png'},
      { src: 'images/partners/partners-logos-11.png'},
      { src: 'images/partners/partners-logos-12.png'},
      { src: 'images/partners/partners-logos-13.png'},
      { src: 'images/partners/partners-logos-14.png'},
      { src: 'images/partners/partners-logos-15.png'},
      { src: 'images/partners/partners-logos-16.png'},
      { src: 'images/partners/partners-logos-17.png'},
      { src: 'images/partners/partners-logos-18.png'},
    ]
  }
});

//-- Inmobi --------------------------------------------------------------------
var novedades = new Vue({
  el: '.proyectos__novedades-list',
  data: {
    item:[
      { src: 'images/novedades/1.jpg', text: 'Garantiza la seguridad de tu familia con un clic', link: 'http://blog.tuhogarinteligente.cl/como-garantizar-la-seguridad-de-tu-familia-y-tu-hogar-inteligente-con-un-solo-clic/'},
      { src: 'images/novedades/2.jpg', text: 'Un Hogar Inteligente es una solución para la familia', link: 'http://blog.tuhogarinteligente.cl/un-hogar-inteligente-es-una-solucion-para-la-familia/'},
      { src: 'images/novedades/3.jpg', text: 'Un Hogar Inteligente cuida la salud de tu familia', link: 'http://blog.tuhogarinteligente.cl/un-hogar-inteligente-cuida-la-salud-de-tu-familia/'},
      { src: 'images/novedades/4.jpg', text: 'Tu Hogar Inteligente alivia tu llegada del supermercado', link: 'http://blog.tuhogarinteligente.cl/tu-hogar-inteligente-alivia-tu-llegada-del-supermercado/'},
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
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
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
