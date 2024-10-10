import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

//Põhifunktsioon, mis algatab kõigi lehe vormide töötlemise. Võtab vastu vormi selektori ja modaalakna taimeri identifikaatori. Leiab kõik vormid selektori järgi ja rakendab igale neist funktsiooni bindPostData, mis käitleb vormi andmete saatmist.
//Основная функция, которая инициализирует обработку всех форм на странице. Принимает селектор форм и идентификатор таймера для открытия модального окна. Она находит все формы по селектору и применяет к каждой из них функцию bindPostData, которая будет обрабатывать отправку данных.
function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: "img/form/spinner.svg",
        success: "Aitäh! Võtame teiega peagi ühendust",
        failure: "Midagi läks valesti...",
    };

    forms.forEach((item) => {
        bindPostData(item);
    });

    //Määrab vormile esitamise sündmuse (submit). Esitamisel takistab lehe uuesti laadimist, loob laadimissõnumi (animaatoriga spinn), kogub vormi andmed ja saadab need serverile JSON-formaadis kasutades funktsiooni postData. Pärast edukat saatmist kuvatakse edusõnum, vea korral kuvatakse veateade. Mõlemal juhul vorm lähtestatakse.
    //Назначает событие отправки формы (submit). При отправке предотвращает перезагрузку страницы, создает элемент с сообщением о загрузке (анимированный спиннер), собирает данные из формы и отправляет их на сервер в формате JSON с помощью функции postData. После успешной отправки выводится сообщение об успехе, в случае ошибки – сообщение об ошибке. В обоих случаях форма сбрасывается.
    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("http://localhost:3000/requests", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    //Avab modaalakna tänusõnumi või veateatega pärast vormi esitamist. See peidab praeguse modaalakna sisu, loob uue modaalakna etteantud sõnumiga ja kuvab selle ekraanil. 4 sekundi pärast sulgub modaalaken automaatselt ja eelmine sisu taastatakse.
    //Открывает модальное окно с сообщением благодарности или ошибкой после отправки формы. Она скрывает текущее содержимое модального окна, создает новое модальное окно с переданным сообщением и отображает его на экране. Через 4 секунды модальное окно автоматически закрывается, и предыдущее содержимое восстанавливается.
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        openModal();

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>x</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }
}

export default forms;