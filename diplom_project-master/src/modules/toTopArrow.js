const toTop = callback => {
    const arrow = document.getElementById('totop'),
          head = document.querySelector('.head'),
          nav = document.querySelector('.top-menu'),
          firstBlock = document.querySelector('.head-slider');

    const toggleArrow = () => {
        let height = firstBlock.clientHeight + head.clientHeight + nav.clientHeight;

        if(document.documentElement.scrollTop >= height) {
            arrow.style.display = 'block';
            
            arrow.addEventListener('click', e => {
                e.preventDefault();

                document.querySelector('.head').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        } else {
            arrow.style.display = 'none';
        };
    };

    document.addEventListener('scroll', toggleArrow);
};

export default toTop;