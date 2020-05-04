document.addEventListener("DOMContentLoaded", function(event) { 
    var app = new Vue({
        el: '.wrapper',
        vuetify: new Vuetify(),
        data:{
            val: 1000,
            pr1: 10,
            pr2: 2,
            pr3: 5,
            service: [
                {
                    img: {
                        backgroundSize: '120px 225px'
                    },
                    text: "При работе над сервисом компания Такси Лайм стремилась к созданию интересного и простого приложения для водителя и пассажира",
    
                },
                {
                    img: {
                        backgroundSize: '293px 131px'
                    },
                    text: "IQ Taxi начало свою работу в 2015 году и сразу заявило о себе как об инновационном сервисе по вызову такси в Минске. Сейчас компания плавно расширяет горизонты."
                },
                {
                    img: {
                        backgroundSize: '153px 197px'
                    },
                    text: "Путь в борьбе за клиента такси Командир начало в ноябре 2014 года в Дзержинске. Основатели компании загорелись идеей создать службу."
                },
                {
                    img: {
                        backgroundSize: '192px 158px'
                    },
                    text: "Такси 135 раньше не осуществляло пассажирских перевозок - первоначально компания оказывала помощь в сфере эвакуации авто."
                },
                {
                    img: {
                        backgroundSize: '199px 199px'
                    },
                    text: "В конце 2017-го года запустилось такси В Десятку. Именно этот сервис принес на рынок белорусского такси новое понятие - фиксированную цену за поездку."
                },
                {
                    img: {
                        backgroundSize: '401px 110px'
                    },
                    text: "Летом 2018 года Минск встретил ЕвроТакси. Служба за счет правильной маркетинговой стратегии быстро расположила к себе жителей столицы."
                },
                {
                    img: {
                        backgroundSize: '322px 91px'
                    },
                    text: "В тестовом режиме Яндекс.Такси начало работать в Минске под крылом Такси 135 в 2016 году. Изначально популярностью сервис пользовался преимущественно у россиян, приезжающих в нашу столицу."
                },
                {
                    img: {
                        backgroundSize: '246px 52px'
                    },
                    text: "История заявившего о себе по всему миру сервиса такси Убер началась в Минске в конце 2015 года."
                }
            ],
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
        },
        methods: {
            preventDefault(event){
                event = event || window.event;
                if (event.preventDefault)
                  event.preventDefault();
                event.returnValue = false;  
            },
            navActive(event){
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
            fbActive(event){
                const fbBlock = document.querySelector('.feedback-block').classList,
                      overlay = document.querySelector('.overlay').classList;
                fbBlock.add('feedback-block_active');
                overlay.add('overlay_active');
                window.addEventListener('DOMMouseScroll', this.preventDefault, false);
                document.addEventListener('wheel', this.preventDefault, {passive: false});
                document.addEventListener('scroll', this.preventDefault, {passive: false});
            },
            overlayHidden(event){
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
            },
            cbActive(event){
                const cbAll = document.querySelectorAll('.callback-person-block'),
                      cbImgAll = document.querySelectorAll('.callback-img-block__img');
                for(i=0; i<cbAll.length;i++){
                   cbAll[i].classList.remove('callback-person-block_active');
                }
                for(i=0; i<cbAll.length;i++){
                    cbImgAll[i].classList.remove('callback-img-block_img_active');
                }
                if(event.target.classList.contains('callback-img-block_img_1')) {
                  cbAll[0].classList.add('callback-person-block_active');
                  cbImgAll[0].classList.add('callback-img-block_img_active');
                } else if(event.target.classList.contains('callback-img-block_img_2')) {
                    cbAll[1].classList.add('callback-person-block_active');
                    cbImgAll[1].classList.add('callback-img-block_img_active');
                } else if(event.target.classList.contains('callback-img-block_img_3')) {
                    cbAll[2].classList.add('callback-person-block_active');
                    cbImgAll[2].classList.add('callback-img-block_img_active');
                } else if(event.target.classList.contains('callback-img-block_img_4')) {
                    cbAll[3].classList.add('callback-person-block_active');
                    cbImgAll[3].classList.add('callback-img-block_img_active');
                } else if(event.target.classList.contains('callback-img-block_img_5')) {
                    cbAll[4].classList.add('callback-person-block_active');
                    cbImgAll[4].classList.add('callback-img-block_img_active');
                } else if(event.target.classList.contains('callback-img-block_img_6')) {
                    cbAll[5].classList.add('callback-person-block_active');
                    cbImgAll[5].classList.add('callback-img-block_img_active');
                }                
              },
              mapActive(event){
                  const maps = document.querySelectorAll('.map-content-block__map'),
                        variants = document.querySelectorAll('.map-content-block__variant');
                  for(i=0;i<maps.length;i++){
                      maps[i].classList.remove('map-content-block_map_active');
                      variants[i].classList.remove('map-content-block_variant_active');
                  }
                  if(event.target.classList.contains('map-content-block_variant_1')){
                    maps[0].classList.add('map-content-block_map_active');
                    variants[0].classList.add('map-content-block_variant_active');
                  } else if(event.target.classList.contains('map-content-block_variant_2')){
                      maps[1].classList.add('map-content-block_map_active');
                      variants[1].classList.add('map-content-block_variant_active');
                  } else if(event.target.classList.contains('map-content-block_variant_3')){
                      maps[2].classList.add('map-content-block_map_active');
                      variants[2].classList.add('map-content-block_variant_active');
                  } else if(event.target.classList.contains('map-content-block_variant_4')){
                      maps[3].classList.add('map-content-block_map_active');
                      variants[3].classList.add('map-content-block_variant_active');
                  }
              }
        },
        computed: {       
            price(){
                return Math.round((((+this.hours*15*+this.days*15*+this.comp)/+this.oil)/(+this.milleage+1))*7);
            }
        }
    });
});


