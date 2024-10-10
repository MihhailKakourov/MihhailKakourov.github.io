import {getResource} from '../services/services';

//See klass loob menüükaardi, võtab vastu parameetrid (pilt, alternatiivne tekst, pealkiri, kirjeldus, hind, vanemelement, täiendavad klassid) ja renderdab kaardi lehele.
//Этот класс создает карточку меню, принимает параметры (изображение, альтернативный текст, заголовок, описание, цену, родительский элемент, дополнительные классы), и рендерит карточку на странице.
function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1;
            this.changeToUSD();
        }


        //See meetod teisendab hinna teise valuutasse (antud juhul muutusi ei toimu, kuna koefitsient on 1). Funktsioon on mõeldud hinna valuuta muutmise võimaldamiseks.
        //Этот метод преобразует цену в другую валюту (в данном случае, никаких изменений не происходит, так как коэффициент равен 1). Функция предназначена для возможности изменения валюты цены.
        changeToUSD() {
            this.price = this.price * this.transfer;
        }

        //See meetod teisendab hinna teise valuutasse (antud juhul muutusi ei toimu, kuna koefitsient on 1). Funktsioon on mõeldud hinna valuuta muutmise võimaldamiseks.
        //Этот метод преобразует цену в другую валюту (в данном случае, никаких изменений не происходит, так как коэффициент равен 1). Функция предназначена для возможности изменения валюты цены.
        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt="${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-devider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Hind:</div>
                    <div class="menu__item-total"><span>${this.price}</span> EUR/päev</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    //See funktsioon saadab serverisse päringu menüüandmete saamiseks määratud URL-ist. Pärast andmete saamist töötleb funktsioon iga menüüelemendi ja loob selle jaoks MenuCard klassi eksemplari, mis seejärel renderdatakse lehele.
    //Эта функция отправляет запрос на сервер для получения данных меню из указанного URL. После получения данных функция обрабатывает каждый элемент меню и создает для него экземпляр класса MenuCard, который затем рендерится на странице.
    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });
}

export default cards;