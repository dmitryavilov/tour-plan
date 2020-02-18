  var overlayCl = document.getElementById('overlay1').classList;
  var overlay = document.getElementById('overlay1');
  var feedback = document.getElementById('fb').classList;
  var body = document.getElementById('header');
  var fbtn = document.getElementById('f_btn');
  // HEADER-VARS
  var var1 = document.getElementById('var1').classList;
  var var2 = document.getElementById('var2').classList;
  var var3 = document.getElementById('var3').classList;
  var vardef1 = document.getElementById('var1');
  var vardef2 = document.getElementById('var2');
  var vardef3 = document.getElementById('var3');
  // PROJECTS-VARS
  var planSlideOne = document.getElementById('pl-1');
  var planSlideTwo = document.getElementById('pl-2');
  var planSlideThree = document.getElementById('pl-3');
  var planSlideFour = document.getElementById('pl-4');
  var planSlideFive = document.getElementById('pl-5');
  var planSlideSix = document.getElementById('pl-6');
  var planSlideSeven = document.getElementById('pl-7');
  var planSlideEight = document.getElementById('pl-8');
  var planSlideNine = document.getElementById('pl-9');
  var planSlideTen = document.getElementById('pl-10');

  // PLANS-VARS

// VARS

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
    // PROJECTS-VARIANTS-SELECT-FUNCTIONS

    vardef1.addEventListener('click', selectVar1);
    vardef2.addEventListener('click', selectVar2);
    vardef3.addEventListener('click', selectVar3);
    // PROJECTS-VARIANT-SELECT-EVENTS

// PROJECTS-SLIDER-BLOCK

    var swiper = new Swiper('.plan-swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.plan-button-next',
        prevEl: '.plan-button-prev',
      }
    });
    // PLANS-SLIDER

    function plSelectedOne() {
      planSlideOne.innerHTML="<div class='plan-slide_selected'></div>";
      planSlideTwo.innerHTML="";
      planSlideThree.innerHTML="";
      planSlideFour.innerHTML="";
      planSlideFive.innerHTML="";
    }

    function plSelectedTwo() {
      planSlideOne.innerHTML="";
      planSlideTwo.innerHTML="<div class='plan-slide_selected'></div>";
      planSlideThree.innerHTML="";
      planSlideFour.innerHTML="";
      planSlideFive.innerHTML="";
    }

    function plSelectedThree() {
      planSlideOne.innerHTML="";
      planSlideTwo.innerHTML="";
      planSlideThree.innerHTML="<div class='plan-slide_selected'></div>";
      planSlideFour.innerHTML="";
      planSlideFive.innerHTML="";
    }

    function plSelectedFour() {
      planSlideOne.innerHTML="";
      planSlideTwo.innerHTML="";
      planSlideThree.innerHTML="";
      planSlideFour.innerHTML="<div class='plan-slide_selected'></div>";
      planSlideFive.innerHTML="";
    }

    function plSelectedFive() {
      planSlideOne.innerHTML="";
      planSlideTwo.innerHTML="";
      planSlideThree.innerHTML="";
      planSlideFour.innerHTML="";
      planSlideFive.innerHTML="<div class='plan-slide_selected'></div>";
    }

    function plSelectedSix() {
      planSlideSix.innerHTML="<div class='plan-slide_selected'></div>";
      planSlideSeven.innerHTML="";
      planSlideEight.innerHTML="";
      planSlideNine.innerHTML="";
      planSlideTen.innerHTML="";
    }

    function plSelectedSeven() {
      planSlideSix.innerHTML="";
      planSlideSeven.innerHTML="<div class='plan-slide_selected'></div>";
      planSlideEight.innerHTML="";
      planSlideNine.innerHTML="";
      planSlideTen.innerHTML="";
    }

    function plSelectedEight() {
      planSlideSix.innerHTML="";
      planSlideSeven.innerHTML="";
      planSlideEight.innerHTML="<div class='plan-slide_selected'></div>";
      planSlideNine.innerHTML="";
      planSlideTen.innerHTML="";
    }

    function plSelectedNine() {
      planSlideSix.innerHTML="";
      planSlideSeven.innerHTML="";
      planSlideEight.innerHTML="";
      planSlideNine.innerHTML="<div class='plan-slide_selected'></div>";
      planSlideTen.innerHTML="";
    }

    function plSelectedTen() {
      planSlideSix.innerHTML="";
      planSlideSeven.innerHTML="";
      planSlideEight.innerHTML="";
      planSlideNine.innerHTML="";
      planSlideTen.innerHTML="<div class='plan-slide_selected'></div>";
    }
    //PLANS-SLIDE-SELECTED-FUNCTIONS
    

    planSlideOne.addEventListener('click', plSelectedOne);
    planSlideTwo.addEventListener('click', plSelectedTwo);
    planSlideThree.addEventListener('click', plSelectedThree);
    planSlideFour.addEventListener('click', plSelectedFour);
    planSlideFive.addEventListener('click', plSelectedFive);
    planSlideSix.addEventListener('click', plSelectedSix);
    planSlideSeven.addEventListener('click', plSelectedSeven);
    planSlideEight.addEventListener('click', plSelectedEight);
    planSlideNine.addEventListener('click', plSelectedNine);
    planSlideTen.addEventListener('click', plSelectedTen);
    //PLANS-SLIDE-EVENTS

    

// PLANS-SLIDER-BLOCK



