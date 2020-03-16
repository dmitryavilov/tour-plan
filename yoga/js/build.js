var swiper = new Swiper('.stock-slider-block', {
  slidesPerView: 'auto',
  slideActiveClass: 'stock-slide-active',
  slideVisibleClass: 'stock-slide-duplicate-active',
  slidesToScroll: 1,
  centeredSlides: true,
  loop: true,
  initialSlide: 1,
  slideClass: 'stock-slide',
  spaceBetween: 30,
  breakpoints: {
    710: {
      spaceBetween: 30
    },
    
    400: {
      spaceBetween: 15
    },

    320: {
      spaceBetween: 12
    }
  }
});

