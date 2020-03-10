  const overlayCl = document.querySelector('.overlay1').classList,
   overlay = document.querySelector('.overlay1'),
   feedback = document.querySelector('.feedback-form').classList,
   body = document.querySelector('.header'),
   fbtn = document.querySelector('.feedback__btn');
  // HEADER-CONSTS
  const tabs = document.querySelectorAll('.projects-variants-block__variant-text');
  const tabSelected = (e) => {
    tabs.forEach(function(el){
      el.classList.remove('projects-variants-block_variant_selected');
    });
    t = event.target;
    t.classList.add('projects-variants-block_variant_selected');
  };
  // PROJECTS-CONSTS/FUNCTIONS

  const planSlides = document.querySelectorAll('.plan-slide');
  const planSlideSelected = (e) => {
    planSlides.forEach(function(el){
      el.innerHTML = '';
    });
    t = event.target;
    t.innerHTML = '<div class="plan-slide_selected"></div>';
  };

  // PLANS-CONSTS/FUNCTIONS

// LET'S/CONSTS

    function overlayOn() {
        overlayCl.add('overlay1_active');
        feedback.add('feedback-form_active');
    }

    function overlayClick() {
        overlayCl.remove('overlay1_active');
        feedback.remove('feedback-form_active');
    }
    //HEADER-FEEDBACK-FUNCTIONS

    fbtn.addEventListener('click', overlayOn);
    overlay.addEventListener('click', overlayClick);
    //HEADER-FEEDBACK-EVENTS
    
// HEADER

    var swiper = new Swiper('.slider-block', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true,
      },
      navigation: {
        nextEl: '.projects-next',
        prevEl: '.projects-prev',
      },

      breakpoints: {

        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },

        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        }
      }
    });
    //PROJECTS-SLIDER

    for (i = 0; i<tabs.length; i++){
      tabs[i].addEventListener('click', tabSelected);
    }
    // PROJECTS-VARIANTS-SELECT-CYCLES

// PROJECTS-SLIDER-BLOCK

    var swiper = new Swiper('.plan-swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      preloadImages: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.plan-button-next',
        prevEl: '.plan-button-prev',
      },
      breakpoints: {

        940: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },

        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        }
      }
    });

    var swiper = new Swiper('.plan-swiper-container-2', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      preloadImages: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.plan-button-next',
        prevEl: '.plan-button-prev',
      },
      breakpoints: {

        940: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },

        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        }
      }
    });
    // PLANS-SLIDER

    for (i = 0; i < planSlides.length; i++){
      planSlides[i].addEventListener('click', planSlideSelected);
    }
    //PLANS-SLIDE-CYCLES

// PLANS-SLIDER-BLOCK



