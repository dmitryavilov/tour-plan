var app = new Vue({
    el: '.wrapper',
    vuetify: new Vuetify(),
    data: {
        val: 1000,
        message: "hello",
        pr1: 10,
        pr2: 2,
        pr3: 5
    },
    data() {
        return {
          milleage: 3,
          hours: 2,
          color: '#6095ff',
          height: 0,
          comp: 1,
          oil: 2,
          trColor: '#eeeeee',
          days: 3,
          milleageList: [
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20'
          ],
          milleageListSm: [
            '4',
            '',
            '',
            '',
            '8',
            '',
            '',
            '',
            '12',
            '',
            '',
            '',
            '16',
            '',
            '',
            '',
            '20'
          ],
          hoursList: [
              '1',
              '6.75',
              '12.5',
              '18.25',
              '24'
          ],
          daysList: [
            '1',
            '8.25',
            '15.5',
            '22.75',
            '30'
          ]
        }
    },
    methods: {
        preventDefault(e){
            e = e || window.event;
            if (e.preventDefault)
              e.preventDefault();
            e.returnValue = false;  
        },
        navActive(e){
            const navCl = document.querySelector('.navigation-block-sm').classList,
                  line1 = document.querySelector('.navigation-sm-btn_line_1').classList,
                  line2 = document.querySelector('.navigation-sm-btn_line_2').classList,
                  line3 = document.querySelector('.navigation-sm-btn_line_3').classList;
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
        fbActive(e){
            const fbBlock = document.querySelector('.feedback-block').classList,
                  overlay = document.querySelector('.overlay').classList;
            fbBlock.add('feedback-block_active');
            overlay.add('overlay_active');
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
            document.addEventListener('wheel', this.preventDefault, {passive: false});
            document.addEventListener('scroll', this.preventDefault, {passive: false});
        },
        overlayHidden(e){
            const overlay = document.querySelector('.overlay').classList,
                  fbBlock = document.querySelector('.feedback-block').classList;
            overlay.remove('overlay_active');
            fbBlock.remove('feedback-block_active');
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            document.removeEventListener('wheel', this.preventDefault, {passive: false});
            document.removeEventListener('scroll', this.preventDefault, {passive: false});
        },
        resultActive(){
            const result = document.querySelector('.calculator-block__result-wrapper-sm').classList;
            result.add('calculator-block_result-wrapper-sm_active');
        },
        resultDisable(){
            const result = document.querySelector('.calculator-block__result-wrapper-sm').classList;
            result.remove('calculator-block_result-wrapper-sm_active');
        }
    },
    computed: {       
        price(){
            return Math.round((((+this.hours*15*+this.days*15*+this.comp)/+this.oil)/(+this.milleage+1))*7);
        }
    }
});