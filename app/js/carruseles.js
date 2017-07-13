$(document).on('ready', function() {
  //-- Owl Testimonios ---------------------------------------------------------
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

  //-- Alianzas ----------------------------------------------------------------
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

  //-- Inmobi ------------------------------------------------------------------
  $('#owl-inmobi').owlCarousel({
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
              nav:false,
              dots:false
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
});
