//Funktsioon closeModal sulgeb modaalakna, leidnud selle antud selektori järgi. See lisab klassi hide, eemaldades klassi show, et akent peita, ja taastab lehe kerimise, seades body elemendi overflow vaikeseisundisse.
//Функция closeModal закрывает модальное окно, находя его по переданному селектору. Она добавляет класс hide, убирая класс show, чтобы скрыть окно, и восстанавливает прокрутку страницы, устанавливая overflow для элемента body в значение по умолчанию.
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    if (modal) {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }else{
        console.error("Error")
    }

}

//Функция openModal открывает модальное окно, находя его по селектору, добавляя класс show и убирая класс hide, чтобы сделать окно видимым. Она блокирует прокрутку страницы, устанавливая для элемента body стиль overflow: hidden, и очищает таймер, если он был передан, чтобы предотвратить повторное открытие окна.
//Funktsioon openModal avab modaalakna, leidnud selle selektori põhjal, lisades klassi show ja eemaldades klassi hide, et akent nähtavaks teha. See blokeerib lehe kerimise, seades body elemendi stiili overflow: hidden, ning tühistab taimeri, kui see on antud, et vältida akna korduvat avamist.
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    if (modal){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    
        if (modalTimerId) {
            clearInterval(modalTimerId);
        }
    }else{
        console.error("Error")
    }
}

//Funktsioon modal algatab modaalakna funktsionaalsuse, võttes vastu selektorid käivitamiseks ja modaalakna jaoks, samuti taimeri identifikaatori. See lisab kõikidele käivitajatele klikkimise sündmuste töötlejad, et akent avada. Samuti on rakendatud loogika, mis sulgeb akna, kui klikkida väljaspool akent või sulgemisnuppu, ning klahvi Escape vajutamisel. Funktsiooni sees on ka täiendav loogika, mis avab modaalakna, kui kasutaja kerib lehe põhja.
//Функция modal инициализирует работу модального окна, принимая селекторы для триггеров и самого окна, а также идентификатор таймера. Она добавляет обработчики событий клика для всех триггеров, чтобы открывать модальное окно. Также реализована логика закрытия окна при клике вне его или на кнопку закрытия и при нажатии клавиши Escape. Внутри функции есть дополнительная логика, которая открывает модальное окно, когда пользователь прокручивает страницу до конца.
function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    //Функция showModalByScroll открывает модальное окно, если пользователь прокручивает страницу до самого низа. Она отслеживает положение прокрутки и, если нижняя часть страницы достигнута, вызывает функцию openModal, а затем удаляет себя как обработчик события прокрутки, чтобы предотвратить повторное открытие.
    //Funktsioon showModalByScroll avab modaalakna, kui kasutaja kerib lehe põhja. See jälgib kerimise asukohta ja kui lehe alumine osa on saavutatud, kutsub see välja funktsiooni openModal, eemaldades end seejärel kerimise sündmuste töötlejana, et vältida akna korduvat avamist.
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};