'use strict';

//Выпадающий список
import dropList from './modules/dropList';
//Модалка стандарт
import toggleModal from './modules/toggleModal';
//Слайдер в главном блоке
import heroSlider from './modules/heroSlider';
//Валидация
import sendForm from './modules/sendForm';
//Слайдер из блока services
import servicesSlider from './modules/servicesSlider';
//Фотогаллерея
import gallerySlider from './modules/gallerySlider';
//Калькулятор
import calculator from './modules/calculator';
//Стрелка вверх
import toTop from './modules/toTopArrow';
//Плавный скролл для якорных ссылок
import slowScroll from './modules/slowScroll';
import mobileMenu from './modules/mobileMenu';


//Выпадающий список
dropList();
//Открытие и закрытие модалок
toggleModal(document.getElementById('free_visit_form'), document.querySelector('.open-popup'));
toggleModal(document.getElementById('callback_form'), document.querySelector('.callback-btn'));
toggleModal(document.getElementById('thanks'));

try {
    toggleModal(
        document.getElementById('gift'), 
        document.querySelector('.fixed-gift'),
        () => {
            document.querySelector('.fixed-gift').style.display = 'none';
        }
    );
} catch {};

//Слайдер в главном блоке
heroSlider();
//Валидации и отправки форм
sendForm(document.getElementById('form1'));
sendForm(document.getElementById('form2'));
sendForm(document.getElementById('banner-form'));
sendForm(document.getElementById('card_order'));
sendForm(document.getElementById('footer_form'));
//Слайдер из блока services
servicesSlider();
//Фотогаллерея
gallerySlider();
//Калькулятор
try {
    calculator();
} catch {};
//Стрелка вверх
toTop();
//Плавный скролл для якорных ссылок
slowScroll();
//Мобильное меню
mobileMenu();