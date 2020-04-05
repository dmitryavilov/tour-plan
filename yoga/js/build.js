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
    //STOCK-SLIDER

    var swiper = new Swiper('.instructors-slider-block', {
      slidesPerView: 'auto',
      slideActiveClass: 'instructors-slide-active',
      slidesToScroll: 1,
      spaceBetween: 5,
      slideClass: 'instructors-slide',

      pagination: {
        el: '.instructors-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'instructors-pagination__bullet',
        bulletActiveClass: 'instructors-pagination__bullet-active',
        bulletElement: 'div'
      }
    });

    var swiper = new Swiper('.instructors-slider-block-2', {
      slidesPerView: 'auto',
      slideActiveClass: 'instructors-slide-active-2',
      slidesToScroll: 1,
      spaceBetween: 5,
      slideClass: 'instructors-slide_slider-2',

      pagination: {
        el: '.instructors-pagination-2',
        type: 'bullets',
        clickable: true,
        bulletClass: 'instructors-pagination__bullet-2',
        bulletActiveClass: 'instructors-pagination__bullet-active',
        bulletElement: 'div'
      }
    });
    //INSTRUCTORS-SLIDER

    var swiper = new Swiper('.reviews-slider-block', {
      slidesPerView: 'auto',
      slideActiveClass: 'review_active',
      slidesToScroll: 1,
      spaceBetween: 5,
      slideClass: 'review',
      pagination: {
        el: '.reviews-pagination',
        type: 'bullets',
        bulletClass: 'reviews-bullet',
        bulletActiveClass: 'reviews-bullet-active',
        clickable: true,
        bulletElement: 'div'
      },
      navigation: {
        nextEl: '.reviews-next-btn',
        prevEl: '.reviews-prev-btn',
      }
    });
    //REVIEWS-SLIDER
//SLIDER-LIBRARY

  function onload(){
    for(i = 0; i<slBlocks.length; i++){
      slBlocks[i].classList.add('slider-block_optimize');
    }
  };  
  //SLIDER-OPTIMIZE-FUNCTION
//STOCK-SLIDER-BLOCK

  var app = new Vue({
    el: '.garanty',
    methods: {
      preventDefault(e){
        e = e || window.event;
        if (e.preventDefault)
          e.preventDefault();
        e.returnValue = false;  
      },
      select(e){
        const documents = document.querySelectorAll('.document');
        const overlay = document.querySelector('.overlay');
        const active = document.querySelector('.document_active');
        documents.forEach(function(el){
          el.classList.remove('document_active');
        });
        t = event.target;
        if(t.classList.contains('document')) {
          overlay.classList.add('overlay_active');
          t.classList.add('document_active');
          window.addEventListener('DOMMouseScroll', this.preventDefault, false);
          document.addEventListener('wheel', this.preventDefault, {passive: false});
          document.addEventListener('scroll', this.preventDefault, {passive: false});
        } else {
          return;
        }
      },
      unselect(){
        const overlay = document.querySelector('.overlay');
        const documents = document.querySelectorAll('.document');
        overlay.classList.remove('overlay_active');
        documents.forEach(function(el){
          el.classList.remove('document_active');
        });
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        document.removeEventListener('wheel', this.preventDefault, {passive: false});
        document.removeEventListener('scroll', this.preventDefault, {passive: false});
      }
    }
  })
  //DOCUMENTS-SELECT-FUNCTION
//GARANTY-BLOCK



