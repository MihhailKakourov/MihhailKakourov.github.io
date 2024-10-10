function calc() {
    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    //See funktsioon arvutab päevase kalorite vajaduse, lähtudes kasutaja soost, pikkusest, kaalust, vanusest ja aktiivsuse koefitsiendist. Erinevad valemid meestele ja naistele.
    //Эта функция рассчитывает суточную норму калорийности на основе пола, роста, веса, возраста и коэффициента активности. В зависимости от пола использует разные формулы для мужчин и женщин.
    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '___';
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();


    //See funktsioon määrab lehel algsed seaded soo ja aktiivsuse koefitsiendi jaoks, lisades aktiivse klassi elementidele, kasutades localStorage andmeid.
    //Эта функция устанавливает начальные настройки пола и коэффициента активности на странице, добавляя активный класс элементам на основе данных из localStorage.
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


    //Töötleb klikke elementidel, mis vastutavad soo ja aktiivsuse koefitsiendi valiku eest. Salvestab valitud väärtused localStorage ja arvutab tulemuse uuesti.
    //Обрабатывает клики по элементам, отвечающим за выбор пола и коэффициента активности. Сохраняет выбранные значения в localStorage и пересчитывает результат.
    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


    //See funktsioon töötleb sisestust dünaamilise teabe jaoks (pikkus, kaal, vanus). Kui sisestatakse mittearvulised sümbolid, tähistatakse väli punase piiriga. Uuendab andmeid ja arvutab tulemuse.
    //Эта функция обрабатывает ввод в поля для динамической информации (рост, вес, возраст). Если вводятся нецифровые символы, поле подсвечивается красным. Обновляет данные и пересчитывает результат.
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;;
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
    
}

export default calc;