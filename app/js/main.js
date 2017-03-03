function altoNav() {
  var resultado = $('.navbar').height();
  return resultado + 'px';
}
var valorAlto = altoNav();
$(document).on('ready', function () {
    var margenTop = $('.hero').css('margin-top', valorAlto);
    // console.log(margenTop);
});
