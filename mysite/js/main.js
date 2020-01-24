
var mySwiper = new Swiper('.swiper-container', {
    speed: 400
});

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  }
});

new WOW().init();