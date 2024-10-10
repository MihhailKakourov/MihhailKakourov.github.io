//Функция tabs создает систему вкладок на веб-странице, позволяя пользователю переключаться между разными наборами контента. Она принимает селекторы для вкладок, контента вкладок, родительского элемента вкладок и класс активной вкладки.
//Funktsioon tabs loob veebilehele vahelehed, mis võimaldavad kasutajal vahetada erinevate sisu vahel. See võtab vastu selektorid vahelehtede, vahelehtede sisu, vahelehtede vanemelemendi ja aktiivse vahelehe klassi jaoks.
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    //скрывает все вкладки и удаляет активный класс у всех элементов вкладок.
    //peidab kõik vahelehed ja eemaldab aktiivse klassi kõikidelt vahelehe elementidelt.
    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    //отображает содержимое вкладки по индексу и добавляет активный класс к соответствующей вкладке.
    //kuvab vahelehe sisu vastavalt indeksile ja lisab aktiivse klassi vastavale vahelehele.
    function showTabContent(i=0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;