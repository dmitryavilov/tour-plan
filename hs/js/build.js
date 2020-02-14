var overlayCl = document.getElementById('overlay1').classList;
var overlay = document.getElementById('overlay1');
var feedback = document.getElementById('fb').classList;
var body = document.getElementById('header');
var fbtn = document.getElementById('f_btn');
var var1 = document.getElementById('var1').classList;
var var2 = document.getElementById('var2').classList;
var var3 = document.getElementById('var3').classList;
var vardef1 = document.getElementById('var1');
var vardef2 = document.getElementById('var2');
var vardef3 = document.getElementById('var3');

// VARS

    function overlayOn() {
        overlayCl.add('overlay1_active');
        feedback.add('feedback-form_active');
    }

    function overlayClick() {
        overlayCl.remove('overlay1_active');
        feedback.remove('feedback-form_active');
    }

    //FEEDBACK-FUNCTIONS

    fbtn.addEventListener('click', overlayOn);
    overlay.addEventListener('click', overlayClick);

    //FEEDBACK-EVENTS
    
// FEEDBACK-FORM-BLOCK

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
        nextEl: '.swiper-button-next',
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

    //SWIPE-SLIDER-LIB

    function selectVar1() {
      var1.add('projects-variants-block_variant_selected');
      var2.remove('projects-variants-block_variant_selected');
      var3.remove('projects-variants-block_variant_selected');
    }

    function selectVar2() {
      var1.remove('projects-variants-block_variant_selected');
      var2.add('projects-variants-block_variant_selected');
      var3.remove('projects-variants-block_variant_selected');
    }

    function selectVar3() {
      var1.remove('projects-variants-block_variant_selected');
      var2.remove('projects-variants-block_variant_selected');
      var3.add('projects-variants-block_variant_selected');
    }

    // VARIANTS-SELECT-FUNCTIONS

    vardef1.addEventListener('click', selectVar1);
    vardef2.addEventListener('click', selectVar2);
    vardef3.addEventListener('click', selectVar3);

    // VARIANT-SELECT-EVENTS

// SLIDER-BLOCK



// TABULATION