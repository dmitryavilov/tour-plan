const slBlocks=document.querySelectorAll(".stock-slider-block");var swiper=new Swiper(".stock-slider-block",{slidesPerView:"auto",slideActiveClass:"stock-slide-active",slideVisibleClass:"stock-slide-duplicate-active",slidesToScroll:1,loop:!0,centeredSlides:!0,initialSlide:1,slideClass:"stock-slide",spaceBetween:30,breakpoints:{710:{spaceBetween:30},400:{spaceBetween:15},320:{spaceBetween:12}}});function onload(){for(i=0;i<slBlocks.length;i++)slBlocks[i].classList.add("slider-block_optimize")}