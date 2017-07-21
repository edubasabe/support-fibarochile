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
