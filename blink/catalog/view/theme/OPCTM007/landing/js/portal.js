let portal = 1;

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const nextPortal = () => {
    let number = rand(1, 6);
    return (portal === number) ? nextPortal(portal) : number;
}

$('.portal-1').fadeIn(500);

setTimeout(function () {
    $('.portal-2').fadeIn(500);
    $('.portal-3').fadeIn(500);
    $('.portal-4').fadeIn(500);
    $('.portal-5').fadeIn(500);
}, 500);

setTimeout(function () {
    $('.portal-1').addClass('active');
}, 500);

setInterval(function () {
    if ($(window).width() >= 768) {
        $(`.portal-${portal}`).removeClass('active');

        portal = nextPortal(portal);

        setTimeout(function () {
            $(`.portal-${portal}`).addClass('active');
        }, 500);
    } else {
        $(`.portal-${portal}`).removeClass('active');

        portal = 1;

        $(`.portal-${portal}`).addClass('active');
    }
}, 2000);
