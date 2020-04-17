var app = new Vue({
    el: '.wrapper',
    methods: {
        preventDefault(e){
            e = e || window.event;
            if (e.preventDefault)
              e.preventDefault();
            e.returnValue = false;  
        },
        navActive(e){
            const navCl = document.querySelector('.navigation-block-sm').classList;
            const line1 = document.querySelector('.navigation-sm-btn_line_1').classList;
            const line2 = document.querySelector('.navigation-sm-btn_line_2').classList;
            const line3 = document.querySelector('.navigation-sm-btn_line_3').classList;
            if(navCl.contains('navigation-block-sm_active')){
                navCl.remove('navigation-block-sm_active');
                line1.remove('navigation-sm-btn_line_1_active');
                line2.remove('navigation-sm-btn_line_2_active');
                line3.remove('navigation-sm-btn_line_3_active');
                window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
                document.removeEventListener('wheel', this.preventDefault, {passive: false});
                document.removeEventListener('scroll', this.preventDefault, {passive: false});
            }else {
                navCl.add('navigation-block-sm_active');
                line1.add('navigation-sm-btn_line_1_active');
                line2.add('navigation-sm-btn_line_2_active');
                line3.add('navigation-sm-btn_line_3_active');
                window.addEventListener('DOMMouseScroll', this.preventDefault, false);
                document.addEventListener('wheel', this.preventDefault, {passive: false});
                document.addEventListener('scroll', this.preventDefault, {passive: false});
            }            
        },
        fbActive(){
            const fbBlock = document.querySelector('.feedback-block').classList;
            const overlay = document.querySelector('.overlay').classList;
            fbBlock.add('feedback-block_active');
            overlay.add('overlay_active');
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
            document.addEventListener('wheel', this.preventDefault, {passive: false});
            document.addEventListener('scroll', this.preventDefault, {passive: false});
        },
        overlayHidden(){
            const overlay = document.querySelector('.overlay').classList;
            const fbBlock = document.querySelector('.feedback-block').classList;
            overlay.remove('overlay_active');
            fbBlock.remove('feedback-block_active');
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            document.removeEventListener('wheel', this.preventDefault, {passive: false});
            document.removeEventListener('scroll', this.preventDefault, {passive: false});
        }
    }
});