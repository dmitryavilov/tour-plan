const heroSlider = () => {
    const slider = document.querySelector('.main-slider'),
          slides = slider.querySelectorAll('.slide');

    let slideCounter = 0;

    const autoPlay = () => {
        setTimeout(() => {
            if (slideCounter + 1 === slides.length) {
                slideCounter = -1;
            };

            try {
                slides[slideCounter].style.display = 'none';
            } catch {
                slides[slides.length - 1].style.display = 'none';
            };

            slides[slideCounter + 1].style.display = 'flex';
            slideCounter++;
            autoPlay();
        }, 3000);
    };

    autoPlay();
};

export default heroSlider;