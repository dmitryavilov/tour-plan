  const slBlocks = document.querySelectorAll('.stock-slider-block');
  //CONST-STOCK-SLIDER-BLOCK
//CONSTS


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
  //SLIDER-LIBRARY

  function onload(){
    for(i = 0; i<slBlocks.length; i++){
      slBlocks[i].classList.add('slider-block_optimize');
    }
  };  
  //SLIDER-OPTIMIZE-FUNCTION

//STOCK-SLIDER-BLOCK



