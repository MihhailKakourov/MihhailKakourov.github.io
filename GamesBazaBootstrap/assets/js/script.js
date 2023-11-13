document.addEventListener("DOMContentLoaded", function () {
    var body = document.querySelector("body");

    body.classList.add("loading-animation");

    var animationDuration = 1000;
    setTimeout(function () {
        body.classList.remove("loading");
    }, animationDuration);
});
