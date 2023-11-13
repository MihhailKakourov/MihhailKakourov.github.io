document.addEventListener("DOMContentLoaded", function () {
    // Получаем элемент body
    var body = document.querySelector("body");

    // Добавляем класс loading-animation после загрузки DOM
    body.classList.add("loading-animation");

    // Удаляем класс loading после окончания анимации
    var animationDuration = 1000; // Длительность анимации в миллисекундах (2 секунды в данном случае)
    setTimeout(function () {
        body.classList.remove("loading");
    }, animationDuration);
});
