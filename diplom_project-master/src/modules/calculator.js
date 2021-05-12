const calculator = () => {
    const calcBlock = document.getElementById('card_order'),
          totalPrice = document.getElementById('price-total'),
          promoInput = document.getElementById('promocode');

    let result = 1999;

    const getTimeCount = e => {
        const mozaika = document.getElementById('card_leto_mozaika'),
              schelkovo = document.getElementById('card_leto_schelkovo');
        
        let target = e.target;

        if (mozaika.checked) {
            if (target.matches('input[name=card-type]')) {
                switch (+target.value) {
                    case 1:
                        result = 1999;
                        break;
                    case 6:
                        result = 9990;
                        break;
                    case 9:
                        result = 13900;
                        break;
                    case 12:
                        result = 19900;
                        break
                };
            };
        } else if (schelkovo.checked){
            if (target.matches('input[name=card-type]')) {
                switch (+target.value) {
                    case 1:
                        result = 2999;
                        break;
                    case 6:
                        result = 14990;
                        break;
                    case 9:
                        result = 21990;
                        break;
                    case 12:
                        result = 24990;
                        break;
                };
            };
        }

        return result;
    };

    const checkPromoCode = () => {
        let res = promoInput.value === 'ТЕЛО2019' ? true : false;

        return res;
    };

    const toCalc = e => {
        const timeCount = getTimeCount(e),
              promocode = checkPromoCode();

        if (promocode) {
            totalPrice.textContent = Math.floor(timeCount - (timeCount * 0.3));
            return;
        };

        totalPrice.textContent = timeCount;
    };

    promoInput.addEventListener('input', toCalc);
    calcBlock.addEventListener('click', toCalc);
};

export default calculator;