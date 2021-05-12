const servicesSlider = () => {
    const slider = document.querySelector('.services-slider'),
          sliderWrapper = document.getElementById('services-slider-wrapper'),
          wrapper = document.getElementById('serv-slider-wrapper'),
          slides = slider.querySelectorAll('.slide'),
          yellow = '#ffd11a';

    let sliderTransform = 0,
        baseSlideWidth,
        slideCounter = 0;

    const checkBaseSlideWitdh = () => {
        if (window.screen.width > 900) {
            baseSlideWidth = 210;
        };
        
        if (window.screen.width <= 900) {
            baseSlideWidth = 190;
        };
    };

    checkBaseSlideWitdh();

    const changeStyles = () => {
        sliderWrapper.style.cssText = `
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1110px;
        `;

        wrapper.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        `;

        slider.style.cssText = `
            padding: 0;
            transition: 0.4s;
        `;

        slides.forEach(item => {
            item.style.minWidth = `${baseSlideWidth}px`;
        });
    };

    const createArrows = () => {
        const arrowStyles = `
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: ${yellow};
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 25px;
            border: none;
        `

        const arrowPrev = document.createElement('button'),
              arrowNext = document.createElement('button');

        arrowPrev.style.cssText = arrowStyles + 'left: -50px';
        arrowNext.style.cssText = arrowStyles + 'right: -50px';

        arrowPrev.id = 'serv-prev';
        arrowNext.id = 'serv-next';

        arrowPrev.textContent = '<';
        arrowNext.textContent = '>';

        wrapper.insertAdjacentElement('afterbegin', arrowPrev);
        wrapper.insertAdjacentElement('afterbegin', arrowNext);
        
    };

    createArrows();

    const prevBtn = document.getElementById('serv-prev'),
          nextBtn = document.getElementById('serv-next');

    const createAdaptive = () => {
        const adaptiveStyles = document.createElement('style');

        adaptiveStyles.textContent = `
            @media (max-width: 1330px) {
                #services-slider-wrapper {
                    width: 890px !important;
                }

                #serv-next {
                    right: 50px !important;
                }

                #serv-prev {
                    left: 50px !important;
                }
            }

            @media (max-width: 1120px) {
                #services-slider-wrapper {
                    width: 665px !important;
                }

                #serv-prev {
                    left: 5% !important;
                }

                #serv-next {
                    right: 5% !important;
                }
            }

            @media (max-width: 900px) {
                #serv-prev {
                    left: 3% !important;
                }

                #serv-next {
                    right: 3% !important;
                }

                #serv-prev, #serv-next {
                    width: 40px !important;
                    height: 40px !important;
                    font-size: 20px !important;
                }

                .services-slider .slide {
                    width: 190px;
                    min-width: 190px !important;
                }

                #services-slider-wrapper {
                    width: 605px !important;
                }
            }

            @media (max-width: 750px) {
                #services-slider-wrapper {
                    width: 405px !important;
                }

                #serv-prev {
                    left: 7% !important;
                }

                #serv-next {
                    right: 7% !important;
                }
            }

            @media (max-width: 600px) {
                #services-slider-wrapper {
                    width: 205px !important;
                }

                #serv-prev {
                    left: 10% !important;
                }

                #serv-next {
                    right: 10% !important;
                }
            }

            @media (max-width: 390px) {
                #serv-prev, #serv-next {
                    width: 35px !important;
                    height: 35px !important;
                    font-size: 18px !important;
                }
                
                #serv-prev {
                    left: 4% !important;
                }

                #serv-next {
                    right: 4% !important;
                }
            }
        `;

        document.head.appendChild(adaptiveStyles);
    };

    createAdaptive();

    const toNextSlide = () => {
        if (window.screen.width > 1330) {
            if (slideCounter + 5 === slides.length) {
                return;
            };
        }
        
        if (window.screen.width <= 1330 && window.screen.width > 1120) {
            if (slideCounter + 4 === slides.length) {
                return;
            };
        }

        if (window.screen.width <= 1120 && window.screen.width > 750) {
            if (slideCounter + 3 === slides.length) {
                return;
            };
        }

        if (window.screen.width <= 750 && window.screen.width > 600) {
            if (slideCounter + 2 === slides.length) {
                return;
            };
        }

        if (window.screen.width <= 600) {
            if (slideCounter + 1 === slides.length) {
                return;
            };
        }

        sliderTransform += baseSlideWidth + 12;
        slider.style.transform = `translateX(${-sliderTransform}px)`;
        slideCounter++;
    };

    const toPrevSlide = () => {
        if (sliderTransform > 0) {
            sliderTransform -= baseSlideWidth + 12;
            slider.style.transform = `translateX(${-sliderTransform}px)`;
            slideCounter--;
        };
    };

    changeStyles();

    nextBtn.addEventListener('click', toNextSlide);
    prevBtn.addEventListener('click', toPrevSlide);

    wrapper.addEventListener('mouseenter', () => {
        const checkKeyNumber = e => {
            if (e.keyCode === 37) {
                toPrevSlide();
            } else if (e.keyCode === 39) {
                toNextSlide();
            }
        };

        document.addEventListener('keydown', checkKeyNumber);

        wrapper.addEventListener('mouseleave', () => {
            document.removeEventListener('keydown', checkKeyNumber);
        });
    });
};

export default servicesSlider;