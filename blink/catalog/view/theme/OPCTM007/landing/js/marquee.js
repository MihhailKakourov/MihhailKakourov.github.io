const marquee = (selector, reverse = false) => {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;

    if (reverse) {
        parentSelector.insertAdjacentHTML('afterbegin', clone);
        parentSelector.insertAdjacentHTML('afterbegin', clone);

        setInterval(function () {
            firstElement.style.marginRight = `-${i}px`;
            if (i > firstElement.clientWidth) {
                i = 0;
            }
            i = i + .2;
        }, 0);
    } else {
        parentSelector.insertAdjacentHTML('beforeend', clone);
        parentSelector.insertAdjacentHTML('beforeend', clone);

        setInterval(function () {
            firstElement.style.marginLeft = `-${i}px`;
            if (i > firstElement.clientWidth) {
                i = 0;
            }
            i = i + .23;
        }, 0);
    }
}

window.addEventListener('load', function () {
    marquee('.marque-blink-and-drink');
    marquee('.marque-hear-the-beer', true);
    marquee('.marque-open-the-portal');
})