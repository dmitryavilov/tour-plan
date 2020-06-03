document.addEventListener('DOMContentLoaded', function(){


        const menuBlock = document.querySelector('.navigation-block'),
              menuBtn = document.querySelector('.phone-and-menu-block__menu-btn-wrapper');
        //HEADER
    //VARS
    const container = {
        props: {
            styles: String
        },
        template: `
        <div :style="" style="max-width:1140px; overflow:hidden; margin:0 auto; width: 95%">
             <slot></slot>
        </div>`
    }

    const textField = {
        data(){
            return{
                def: {
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    paddingLeft: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#606060',
                    fontSize: '13px',
                    fontWeight: '100'
                }
            }
        },
        props: {
            width: String,
            height: String,
            placeholder: String,
            classes: String
        },
        template: `
        <input required aria-required="true" :class="classes" type="text" :style="[def, {width: width + 'px', height: height + 'px'}]" :placeholder="placeholder"></input>
        `
    }

    const btn = {
        data(){
            return {
                btnDef: {
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    position: 'relative',
                    zIndex: 0
                }
            }
        },
        props: {
            bgc: String,
            width: String,
            height: String,
            textSize: String,
            btnText: String,
            classes: String
        },
        template: `
        <button :style="[btnDef, {width: width + 'px', height: height + 'px', fontSize: textSize + 'px', backgroundColor: bgc}]" :class="classes">{{btnText}}</button>`
    }

    const menuNavigation = {
        data(){
            return {
                styles: {
                    fontSize: '17px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    marginTop: '14px',
                    marginBottom: '14px',
                    color: 'white',
                    textAlign: 'center'
                },
                menuElems: [
                    {text: 'Наши услуги', link: '#block-1'},
                    {text: 'Рассчитать стоимость', link: '#block-2'},
                    {text: 'Портфолио', link: '#block-3'},
                    {text: 'Почему мы', link: '#block-4'},
                    {text: 'Процесс взаимодействия', link: '#block-5'},
                    {text: 'Наша Команда', link: '#block-6'},
                    {text: 'Наш блог', link: '#block-7'},
                    {text: 'Обратная связь', link: '#block-8'}               
                ]
            }        
        },
        methods: {
            menuToggle(){
                document.querySelector('.navigation-block').classList.toggle('navigation-block_toggle');
                document.querySelectorAll('.phone-and-menu-block__elem')[0].classList.toggle('phone-and-menu-block_elem_1_active');
                document.querySelectorAll('.phone-and-menu-block__elem')[1].classList.toggle('phone-and-menu-block_elem_2_active');
                document.querySelectorAll('.phone-and-menu-block__elem')[2].classList.toggle('phone-and-menu-block_elem_3_active');
            }
        },
        template: `
        <nav class="navigation-block navigation-block_pos">
            <div class="navigation-block__content" style="height: 95%; width:100%; overflow-y: auto; display:flex; align-items: center; justify-content: center">
                <div class="navigation-block__content-wrapper" style="display:flex; flex-direction: column; align-items: center">
                    <p :style="styles" class="navigation-block__elem" v-for="elem in menuElems">
                        <a href="#" v-scroll-to=elem.link @click="menuToggle()" style="text-decoration:none; color:white" class="navigation-block__link">{{elem.text}}</a>
                    </p>
                </div>
            </div>
        </nav>`
    }

    const blockTitle = {
        data(){
            return {
                blockStyles: {
                    width: '100%',
                    height: '56px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '62px',
                    marginBottom: '30px'
                },
                lineStyles: {
                    width: '377px',
                    height: '1px'
                }
            }
        },
        props: {
            text: String,
            textColor: String,
            lineColor: String
        },
        template: `
        <div class="page-title-block" :style="blockStyles">
            <h2 class="page-title-block__text" :style="{color: textColor}" style="font-size: 36px; font-family: 'Roboto';font-weight: 400">{{text}}</h2>
            <div class="page-title-block__underline" :style="[lineStyles, {backgroundColor: lineColor}]"></div>
        </div>`
    }

    const transferList = {
        data(){
            return {
                blockStyles: {
                    width: '100%',
                    height: '340px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                titleStyles: {
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '28px',
                    color: '#19b5fe'
                },
                descriptionStyles: {
                    fontFamily: 'Roboto',
                    fontWeight: 300,
                    fontSize: '18px',
                    color: '#464646',
                    lineHeight: '24px'
                },
                mainWrapperStyles: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    height: '191px'
                },
                textWrapperStyles: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '115px',
                    width: '555px'
                },
                imgStyles: {
                    width: '555px',
                    height: '320px'
                },
                transfers: [
                    {
                        title: 'Дизайн интерьера',
                        description: `
                            Услуга, направленная на разработку интерьеров помещений с
                            целью обеспечить удобство и эстетически приятное ощущение у
                            человека при нахождении в помещении`,
                        imgLink: 'img/transfer/1.webp'
                    },
                    {
                        title: 'Дизайн экстерьера',
                        description: `
                            Услуга, направленная на разработку дизайна прилегающих элементов 
                            зданий, а также дизайн самих зданий, позволяющая обе 
                            спечить удобство людей при нахождении на территории`,
                        imgLink: 'img/transfer/2.webp'
                    },
                    {
                        title: 'Визуализация',
                        description: `
                            Услуга, направленная на визуализацию помещений с
                            понять, как оно будет выглядеть в итоге. Это позволяет
                            исключить ошибки при выборе дизайна`,
                        imgLink: 'img/transfer/3.webp'
                    }
                ]
            }
        },
        template: `
        <div class="transfer-list-block">
            <div class="transfer-list-block__elem" v-for="transfer in transfers" :style="blockStyles">
                <div class="transfer-list-block__main-wrapper" :style="mainWrapperStyles">
                    <div class="transfer-list-block__text-wrapper" :style="textWrapperStyles">
                        <h2 :style="titleStyles" class="transfer-list-block__title">{{transfer.title}}</h2>
                        <p  :style="descriptionStyles" class="transfer-list-block__description">{{transfer.description}}</p>
                    </div>
                    <slot>
                    
                    </slot>
                </div>
               <img :src="transfer.imgLink" :style="imgStyles" class="transfer-list-block__img">
            </div>
        </div>`
    }

    const tabulation = {
        data(){
            return {
                tabs: [
                    {text: 'ВСЕ ПРОЕКТЫ', class:"tabulation-block_tab_active tabulation-block_tab_1"},
                    {text: 'ЭКСТЕРЬЕРЫ', class:"tabulation-block_tab_2"},
                    {text: 'ЖИЛЫЕ ИНТЕРЬЕРЫ', class: "tabulation-block_tab_3"},
                    {text: 'ОБЩЕСТВЕННЫЕ ИНТЕРЬЕРЫ', class: "tabulation-block_tab_4"}
                ],
                allProjects: [
                    {img: 'img/portfolio/1.webp'},
                    {img: 'img/portfolio/2.webp'},
                    {img: 'img/portfolio/3.webp'},
                    {img: 'img/portfolio/4.webp'},
                    {img: 'img/portfolio/5.webp'},
                    {img: 'img/portfolio/6.webp'}
                ],
                exteriors: [
                    {img: 'img/portfolio/1.webp'},
                    {img: 'img/portfolio/2.webp'},
                    {img: 'img/portfolio/3.webp'},
                    {img: 'img/portfolio/6.webp'}
                ],
                liveInteriors: [
                    {img: 'img/portfolio/1.webp'},
                    {img: 'img/portfolio/2.webp'},
                    {img: 'img/portfolio/4.webp'},
                    {img: 'img/portfolio/5.webp'},
                    {img: 'img/portfolio/6.webp'}
                ],
                publicInteriors: [
                    {img: 'img/portfolio/5.webp'},
                    {img: 'img/portfolio/4.webp'},
                    {img: 'img/portfolio/6.webp'}
                ],
            }
        },
        methods: {
            tabToggle(e){
                const tabs = document.querySelectorAll('.tabulation-block__tab');
                const projects = document.querySelectorAll('.tabulation-block__projects-wrapper');
                for (i=0; i<tabs.length; i++){
                    tabs[i].classList.remove('tabulation-block_tab_active');
                    projects[i].classList.remove('tabulation-block_projects_active');
                }
                let t = event.target;
                t.closest('.tabulation-block__tab').classList.add('tabulation-block_tab_active');
                if(t.closest('.tabulation-block__tab').classList.contains('tabulation-block_tab_1')){
                    projects[0].classList.add('tabulation-block_projects_active');
                } else if(t.closest('.tabulation-block__tab').classList.contains('tabulation-block_tab_2')){
                    projects[1].classList.add('tabulation-block_projects_active');
                } else if(t.closest('.tabulation-block__tab').classList.contains('tabulation-block_tab_3')){
                    projects[2].classList.add('tabulation-block_projects_active');
                } else if(t.closest('.tabulation-block__tab').classList.contains('tabulation-block_tab_4')){
                    projects[3].classList.add('tabulation-block_projects_active');
                }
            }
        },
        template: `
        <div class="tabulation-block">
            <div class="tabulation-block__tabs-wrapper">
                <div :class="tab.class" class="tabulation-block__tab" @click="tabToggle($event)" v-for="tab in tabs">
                    <h2 class="tabulation-block__tab-text">{{tab.text}}</h2>
                </div>
            </div>
            <div class="tabulation-block__content-wrapper">
                <div class="tabulation-block__projects-wrapper tabulation-block_projects_active animation fade-in">
                    <img v-for="project in allProjects" class="tabulation-block__project" :src="project.img">
                </div>
                <div class="tabulation-block__projects-wrapper animation fade-in">
                    <img v-for="project in exteriors" class="tabulation-block__project" :src="project.img">
                </div>
                <div class="tabulation-block__projects-wrapper animation fade-in">
                    <img v-for="project in liveInteriors" class="tabulation-block__project" :src="project.img">
                </div>
                <div class="tabulation-block__projects-wrapper animation fade-in">
                    <img v-for="project in publicInteriors" class="tabulation-block__project" :src="project.img">
                </div>          
            </div>
        </div>`
    }

    const advantages = {
        data(){
            return {
                advantages: [
                    {img: "img/advantages/1.png", text: `Профессиональные дизайнеры и визуализаторы с зарубежной практикой работы`, width: "73px", height: "58px"},
                    {img: "img/advantages/2.png", text: `Интеративный подход, работаем до полного согласования с Вами`, width: "75px", height: "65px"},
                    {img: "img/advantages/3.png", text: `Решаем вопрос закупки, берем авторский надзор на себя (пакет Full)`, width: "60px", height: "57px"},
                    {img: "img/advantages/4.png", text: `Над проектом работает группа специалистов под началом project менеджера в ERP системе`, width: "70px", height: "61px"},
                    {img: "img/advantages/5.png", text: `Выполнение раньше установленных сроков`, width: "70px", height: "64px"},
                    {img: "img/advantages/6.png", text: `Дарим альбом проекта, вместе с 25% скидкой на следующее обращение`, width: "74px", height: "64px"}
                ]
            }
        },
        template: `
        <div class="advantages-block">
            <div class="advantages-block__advantage" v-for="advantage in advantages">
                <div class="advantages-block__img-wrapper">
                    <img class="advantages-block__img" :style="{height: advantage.height, width: advantage.width}" :src="advantage.img">
                </div>
                <p class="advantages-block__text">
                    {{advantage.text}}
                </p>
            </div>
        </div>`
    }

    const processList = {
        data(){
            return {
                items:[
                    {text:"Заполнение брифа", img: "img/process/1.webp"},
                    {text:"Исследование", img: "img/process/2.webp"},
                    {text:"Идея", img: "img/process/3.webp"},
                    {text:"Завершение", img: "img/process/4.webp"},
                ]
            }
        },
        template: `
        <div class="process-list-block">
            <div class="process-list-block__item" v-for="item in items">
                <img class="process-list-block__img" :src="item.img">
                <div class="process-list-block__text-wrapper">
                    <h2 class="process-list-block__text">{{item.text}}</h2>
                </div>
            </div>
        </div>`
    }

    const teamList = {
        data(){
            return {
                team: [
                    {img:"img/team/1.webp", name: "Ирина Притыкина", desc: "Директор компании"},
                    {img:"img/team/2.webp", name: "Игорь Карий", desc: "Финансовый директор"},
                    {img:"img/team/3.webp", name: "Илья Кондрашин", desc: "Инженер модельер"},
                    {img:"img/team/4.webp", name: "Маргарита Гордеева", desc: "3D дизайнер"},
                    {img:"img/team/5.webp", name: "Светлана Коток", desc: "Дизайнер интерьеров"},
                    {img:"img/team/6.webp", name: "Максим Ковальский", desc: "Дизайнер ландшафтов"}
                ]
            }
        },
        template: `
        <div class="team-block">
            <div class="team-block__person" v-for="item in team">
                <img :src="item.img" class="team-block__img">
                <h2 class="team-block__title">{{item.name}}</h2>
                <p class="team-block__description">{{item.desc}}</p>
            </div>
        </div>`
    }

    const blog = {
        data() {
            return {
                blogList: [
                    {
                        img: "img/blog/1.webp",
                        text: "Минимализм – это самый простой, практичный и «спорный» стиль в дизайне интерьеров",
                        link: "#"
                    },
                    {
                        img: "img/blog/2.webp",
                        text: "Прованс - это спокойный южный регион Франции, с великолепнейшей природой",
                        link: "#"
                    }
                ]
            }
        },
        template: `
        <div class="blog-block">
            <div class="blog-block__elem" v-for="item in blogList">
                <img class="blog-block__img" :src="item.img">
                <a :href="item.link" class="blog-block__link"><span class="blog-block__text">{{item.text}}</span></a>
            </div>
        </div>`
    }

    const contactsList = {
        data() {
            return {
                variants: [
                    {img: "img/contacts/1.png", text: "+ 7 896 876 66 77"},
                    {img: "img/contacts/2.png", text: "+ 7 896 876 66 77"},
                    {img: "img/contacts/3.png", text: "sales@23degree.kz"},
                    {img: "img/contacts/4.png", text: "skype: 23degree"},
                    {img: "img/contacts/5.png", text: "telegram: 23degree"}
                ]
            }
        },
        template: `
        <div class="contacts-variants contacts-variants_left">
            <div class="contacts-variants__elem" v-for="elem in variants">
                <div class="contacts-variants__img-wrapper">
                    <img class="contacts-variants__img" :src="elem.img">
                </div>
                <p class="contacts-variants__text">{{elem.text}}</p>
            </div>
            <slot></slot>
        </div>`
    }
    //COMPONENTS
    

    VueScrollTo.setDefaults({
        container: "body",
        duration: 500,
        easing: "ease",
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    });

    new Vue({
        el: '.wrapper',
        data: {
            meter: 5,
            defaultPrice: 4850,
            objectPrice: 48500,
            finalPrice: 64020
        },
        components: {
            container,
            textField,
            btn,
            menuNavigation,
            blockTitle,
            transferList,
            tabulation,
            advantages,
            processList,
            teamList,
            blog,
            contactsList
        },
        filters: {
            format(value) {
              return value.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
            },
        },
        methods: {
            menuToggle(){
                document.querySelector('.navigation-block').classList.toggle('navigation-block_toggle');
                document.querySelectorAll('.phone-and-menu-block__elem')[0].classList.toggle('phone-and-menu-block_elem_1_active');
                document.querySelectorAll('.phone-and-menu-block__elem')[1].classList.toggle('phone-and-menu-block_elem_2_active');
                document.querySelectorAll('.phone-and-menu-block__elem')[2].classList.toggle('phone-and-menu-block_elem_3_active');
            },
            calcBtnActive(e){
                const btns = document.querySelectorAll('.calculator-block__button');
                for (i=0; i<btns.length; i++){
                    btns[i].classList.remove('calculator-block_button_active');
                }
                t = event.target.closest('.calculator-block__button');
                t.classList.add('calculator-block_button_active');
                if(btns[0].classList.contains('calculator-block_button_active')){
                    return this.finalPrice = ((+this.defaultPrice + +this.objectPrice) * 3) / 5
                } else if(btns[1].classList.contains('calculator-block_button_active')){
                    return this.finalPrice = ((+this.defaultPrice + +this.objectPrice) * 6) / 5
                } else if(btns[2].classList.contains('calculator-block_button_active')){
                    return this.finalPrice = ((+this.defaultPrice + +this.objectPrice) * 9) / 5
                }    
            },
            resultToggleOn(){
                if(document.querySelector('.calculator-block__result-wrapper-sm').classList.contains('calculator-block_result-wrapper-sm_active')){
                    return;
                } else {
                    document.querySelector('.calculator-block__result-wrapper-sm').classList.add('calculator-block_result-wrapper-sm_active');
                }                
            },
            resultToggleOff(){
                document.querySelector('.calculator-block__result-wrapper-sm').classList.remove('calculator-block_result-wrapper-sm_active');
            }
        }
    });
});

