import '../babel'
import '../scss/style.scss'
import WOW from 'wowjs'
import Swiper from 'swiper/bundle';
//LIBS AND FRAMEWORKS
import Sprite from '../img/sprite.svg'
import Card1 from '../img/portfolio/1.jpg'
import Card2 from '../img/portfolio/2.jpg'
import Card3 from '../img/portfolio/3.jpg'
import Card4 from '../img/portfolio/4.jpg'
import Arrow from '../img/portfolio/arrow.svg'
//IMAGES
import FuturaBold from '../fonts/FuturaPTBold.woff'
import FuturaBook from '../fonts/FuturaPTBook.woff'
import FuturaEB from '../fonts/FuturaPTExtraBold.woff'
import FuturaBold2 from '../fonts/FuturaPTBold.woff2'
import FuturaBook2 from '../fonts/FuturaPTBook.woff2'
import FuturaEB2 from '../fonts/FuturaPTExtraBold.woff2'
//FONTS

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.portfolio__pagination',
    clickable: true,
    bulletClass: 'portfolio__pagination-bullet',
    bulletActiveClass: 'portfolio__pagination-bullet--active'
  },
  navigation: {
    nextEl: '.portfolio__arrow--next',
    prevEl: '.portfolio__arrow--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    993: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    601: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});


