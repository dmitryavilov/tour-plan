const mobileMenu = () => {
    const menuBtn = document.getElementById('menu-btn'),
          menu = document.getElementById('hidden-menu'),
          head = document.querySelector('.head'),
          menuWrapper = document.querySelector('.menu-button'),
          topMenu = document.querySelector('.top-menu');

    const showMenu = () => {
        menu.style.display = 'flex';
    };

    const hideMenu = () => {
        menu.style.display = 'none';
    };

    const slickMenu = () => {
        let height = head.clientHeight + menuWrapper.clientHeight;

        if (window.screen.width <= 768) {
            if (document.documentElement.scrollTop >= height) {
            topMenu.style.cssText = `
                position: fixed;
                z-index: 10;
            `;
            } else {
                topMenu.style.cssText = `
                    position: relative;
                `;
            };
        };
    };

    menuBtn.addEventListener('click', showMenu);
    menu.addEventListener('click', e => {
        let target = e.target;

        if (target.closest('#close-btn') || target.closest('.scroll')) {
            hideMenu();
        };
    });
    document.addEventListener('scroll', slickMenu);
};

export default mobileMenu;