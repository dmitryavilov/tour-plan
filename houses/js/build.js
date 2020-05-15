document.addEventListener('DOMContentLoaded', function(){
        const menuBlock = document.querySelector('.navigation-block'),
              menuBtn = document.querySelector('.phone-and-menu-block__menu-btn-wrapper');
        //HEADER
    //VARS
    const container = {
        template: `
        <div style="max-width:1140px; overflow:hidden; margin:0 auto; width: 95%">
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
                    fontWeight: '400'
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
                    {text: 'Рассчитать стоимость', link: '#'},
                    {text: 'Портфолио', link: '#'},
                    {text: 'Почему мы', link: '#'},
                    {text: 'Процесс взаимодействия', link: '#'},
                    {text: 'Компании', link: '#'},
                    {text: 'Наша Команда', link: '#'},
                    {text: 'Наши услуги', link: '#'},
                    {text: 'Обратная связь', link: '#'}               
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
                    alignItems: 'center'
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
        <div class="page-title-block" style="margin-top: 62px; margin-bottom: 30px" :style="blockStyles">
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
    })

    new Vue({
        el: '.wrapper',
        data: {
          menuBl: document.querySelector('.navigation-block'),
          menuBtn: menuBtn
        },
        components: {
            container,
            textField,
            btn,
            menuNavigation,
            blockTitle,
            transferList
        },
        methods: {
            menuToggle(){
                document.querySelector('.navigation-block').classList.toggle('navigation-block_toggle');
                document.querySelectorAll('.phone-and-menu-block__elem')[0].classList.toggle('phone-and-menu-block_elem_1_active');
                document.querySelectorAll('.phone-and-menu-block__elem')[1].classList.toggle('phone-and-menu-block_elem_2_active');
                document.querySelectorAll('.phone-and-menu-block__elem')[2].classList.toggle('phone-and-menu-block_elem_3_active');
            }
        }
    });
});