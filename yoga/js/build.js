var swiper = new Swiper('.stock-slider-block', {
  slidesPerView: 'auto',
  slideActiveClass: 'stock-slide-active',
  slideVisibleClass: 'stock-slide-duplicate-active',
  slidesToScroll: 1,
  loop: true,
  centeredSlides: true,
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

function onload(){
  const slBlock = document.querySelector('.stock-slider-block').classList;
  slBlock.add('slider-block_optimize');
};



