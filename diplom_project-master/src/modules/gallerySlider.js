const gallerySlider = () => {
    const slider = document.querySelector('.gallery-slider'),
          wrapper = document.getElementById('gallery-wrapper'),
          slides = slider.querySelectorAll('.slide'),
          dotsWrapper = document.querySelector('.dots-wrapper'),
          yellow = '#ffd11a';

    let slideCounter = 0,
        changeSlides;

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
            z-index: 10;
        `;
        wrapper.style.position = 'relative';

        const arrowPrev = document.createElement('button'),
              arrowNext = document.createElement('button');

        arrowPrev.style.cssText = arrowStyles + 'left: 50px';
        arrowNext.style.cssText = arrowStyles + 'right: 50px';

        arrowPrev.id = 'gl-prev';
        arrowNext.id = 'gl-next';

        arrowPrev.textContent = '<';
        arrowNext.textContent = '>';

        wrapper.insertAdjacentElement('afterbegin', arrowPrev);
        wrapper.insertAdjacentElement('afterbegin', arrowNext);
        
    };

    createArrows();

    const prevBtn = document.getElementById('gl-prev'),
          nextBtn = document.getElementById('gl-next');

    const createTimeOut = () => {
        changeSlides = setTimeout(() => {
            if (slideCounter + 1 === slides.length) {
                slideCounter = 0;
                autoPlay();
                return;
            };
    
            slideCounter++;
    
            autoPlay();
        }, 3000);
    };

    const deleteSlides = () => {
        slides.forEach(item => {
            item.style.display = 'none';
        });
    };

    const createDots = () => {
        let dot;

        slider.style.position = 'relative';
        dotsWrapper.style.cssText = `
            display: flex;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 40px;
        `;

        slides.forEach(() => {
            dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.cssText = `
                width: 37px;
                height: 7px;
                margin-left: 8px;
                margin-rigth: 8px;
                background-color: rgba(0, 0, 0, 0.3);
                cursor: pointer;
            `;

            dotsWrapper.insertAdjacentElement('afterbegin', dot);
        });

        const dots = dotsWrapper.querySelectorAll('div');

        const createAdaptive = () => {
            const style = document.createElement('style');

            style.textContent = `
                @media (max-width: 550px) {
                    #gl-prev, #gl-next {
                        width: 40px !important;
                        height: 40px !important;
                        font-size: 22px !important;
                    }

                    .dots-wrapper {
                        bottom: 20px !important;
                    }

                    .dot {
                        width: 30px !important;
                        height: 6px !important;
                    }
                }

                @media (max-width: 400px) {
                    #gl-prev, #gl-next {
                        width: 30px !important;
                        height: 30px !important;
                        font-size: 19px !important;
                    }

                    .dots-wrapper {
                        bottom: 13px !important;
                    }

                    .dot {
                        width: 25px !important;
                        height: 5px !important;
                    }
                }
            `;

            document.head.appendChild(style);
        };

        createAdaptive();

        dots.forEach((item, index) => {
            item.addEventListener('click', () => {
                deleteSlides();
                slideCounter = index;

                for (let i = 0; i < dots.length; i++) {
                    dots[i].style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; 
                };

                item.style.backgroundColor = yellow;
                slides[index].style.display = 'block';
            });
        });
    };

    createDots();

    const dots = dotsWrapper.querySelectorAll('div');

    const changeDot = () => {
        for (let i = 0; i < dots.length; i++) {
            dots[i].style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; 
        };

        dots[slideCounter].style.backgroundColor = yellow;
    };

    const autoPlay = () => {
        deleteSlides();

        slides[slideCounter].style.display = 'block';
        changeDot();
        createTimeOut();
    };

    const toPrevSlide = () => {
        if (slideCounter <= 0) {
            slideCounter = slides.length - 1;
            deleteSlides();

            slides[slideCounter].style.display = 'block';
            changeDot();
            return;
        };

        deleteSlides();

        slideCounter--;
        slides[slideCounter].style.display = 'block';
        changeDot();
    };

    const toNextSlide = () => {
        if (slideCounter + 1 === slides.length) {
            deleteSlides();
            slideCounter = 0;
            slides[slideCounter].style.display = 'block';
            changeDot();
            return;
        };

        deleteSlides();

        slideCounter++;
        slides[slideCounter].style.display = 'block';
        changeDot();
    };

    prevBtn.addEventListener('click', toPrevSlide);
    nextBtn.addEventListener('click', toNextSlide);

    wrapper.addEventListener('click', e => {
        let target = e.target;

        if (target.matches('#gl-prev') || target.matches('#gl-next') || target.matches('.dot')) {
            clearTimeout(changeSlides);
        };
    });

    wrapper.addEventListener('mouseenter', () => {
        const checkKeyNumber = e => {
            if (e.keyCode === 37) {
                clearTimeout(changeSlides);
                toPrevSlide();
                return;
            } else if (e.keyCode === 39) {
                clearTimeout(changeSlides);
                toNextSlide();
                return;
            };
        };

        document.onkeydown = checkKeyNumber;

        wrapper.onmouseleave = () => {
            document.onkeydown = '';
        };
    });

    autoPlay();
};

export default gallerySlider;