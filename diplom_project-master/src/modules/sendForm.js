const sendForm = form => {
    const checkbox = form.querySelector('input[type=checkbox]'),
          thanksMessage = document.getElementById('thanks'),
          phone = form.querySelector('input[type=tel]'),
          clubNames = form.querySelectorAll('input[name=club-name]'),
          name = form.querySelector('input[name=name]');

    const phoneValidation = () => {
        phone.value = phone.value.match(/^\+?[1-9]{1,2}[-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g);
        phone.value = phone.value.split(',').join('');
    };

    const nameValidation = () => {
        const valueReplace = elem => {
            name.value = elem;
        };

        valueReplace(name.value.replace(/( |\-){1}[a-z]( |\-){1}/gi, ''));
        valueReplace(name.value.replace(/\d/gi, ''));
        valueReplace(name.value.replace(/((\-){2,}|)*((\-){2,}|)*/gi, ''));
        valueReplace(name.value.replace(/\s+/gi, ' '));
        valueReplace(name.value.replace(/( |^)[а-яё]/g, x => x.toUpperCase()));
        valueReplace(name.value.replace(/(\w)/gi, ''));

        try {
            if (name.value.length < 2) {
                name.value = '';
            };

            if (name.value[0] === ' ') {
                name.value = name.value.substr(1);
            };
        } catch {};
    }; 

    const sendData = () => {
        const thanksText = document.getElementById('thanks-text');
        let data;

        const checkData = () => {
            if (clubNames[0]) {
                if (clubNames[0].checked) {
                    data = {
                        name: name !== null ? name.value : 'Имя не указано',
                        phone: phone.value,
                        club: 'Мозаика',
                        card: 'Карта не указана'
                    };
                } else if (clubNames[1].checked) {
                    data = {
                        name: name !== null ? name.value : 'Имя не указано',
                        phone: phone.value,
                        club: 'Щелково',
                        card: 'Карта не указана'
                    };
                };
            } else {
                data = {
                    name: name.value !== null ? name.value : 'Имя не указано',
                    phone: phone.value,
                    card: 'Карта не указана'
                };
            };
        };

        checkData();

        const formWithCards = () => {
            const cards = form.querySelectorAll('input[name=card-type]');

            cards.forEach(item => {
                if (item.checked) {
                    switch (item.value) {
                        case '1':
                        case '1s':
                            data.card = '1 Месяц, Соло';
                            break;
                        case '6':
                        case '6s':
                            data.card = '6 Месяцев, Соло';
                            break;
                        case '9':
                        case '9s':
                            data.card = '9 Месяцев, Соло';
                            break;
                        case '12':
                        case '12s':
                            data.card = '12 Месяцев, Соло';
                            break;
                        case '12d':
                            data.card = '12 Месяцев, Дневная';
                            break;
                    };
                };
            });
        };

        formWithCards();

        const toggleModal = () => {
            try {
                    form.closest('.popup').style.display = 'none';
            } catch {};
            thanksMessage.style.display = 'block';
            
            setTimeout(() => {
                thanksMessage.style.display = 'none';
            }, 5000);
        };

        toggleModal();

        const clearInputs = () => {
            form.querySelectorAll('input').forEach(item => {
                item.value = '';
            });

            try {
                checkbox.checked = false;
                document.querySelectorAll('input[name=card-type]')[0].checked = true;
            } catch {};
        };

        thanksText.textContent = 'Загрузка';

        fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }).then(response => {
            if (response.status === 200) {
                thanksText.innerHTML = `
                    Ваша заявка отправлена. <br />
                    Мы свяжемся с вами в ближайшее время.
                `
            } else {
                thanksText.innerHTML = `
                    При отправке произошла ошибка!. <br />
                    Статус ошибки ${response.status}.
                `
                throw new Error('status network not 200.');
            }
        }).then(() => {
            clearInputs();
        })
        .catch(error => {
            clearInputs();
            console.error(error);
        });
    };

    phone.addEventListener('change', phoneValidation);

    try {
        name.addEventListener('change', nameValidation);
    } catch {};

    form.addEventListener('submit', e => {
        e.preventDefault();

        const showErrorText = message => {
            if (form.id !== 'banner-form') {
                    if (document.querySelectorAll('.checkbox-error')[1]) {
                        document.querySelectorAll('.checkbox-error').forEach(item => {
                            item.style.display = 'none';
                        });
                    };

                    form.querySelector('button').insertAdjacentHTML('afterend', message);
                    setTimeout(() => {
                        document.querySelector('.checkbox-error').style.display = 'none';
                    }, 3000);
                } else {
                    if (document.querySelectorAll('.checkbox-error')[1]) {
                        document.querySelectorAll('.checkbox-error').forEach(item => {
                            item.style.display = 'none';
                        });
                    };
                    form.querySelector('button').insertAdjacentHTML('afterend', message);
                    setTimeout(() => {
                        document.querySelector('.checkbox-error').style.display = 'none';
                }, 3000);
            };
        };

        try {
            if(!checkbox.checked) {
                showErrorText(`<p style="color: red; margin-top: 10px" class="checkbox-error">Поставьте галочку!</p>`);
                return;
            };
        } catch {};

        try {
            if (form.id == 'footer_form') {
                if (clubNames[0].checked || clubNames[1].checked) {
                    sendData();
                } else {
                    showErrorText(`<p style="color: red; margin-top: 10px" class="checkbox-error">Выберите клуб!</p>`);
                    return;
                };
            } else {
                sendData();
            };
        } catch {
            sendData();
        };
    });
};

export default sendForm;