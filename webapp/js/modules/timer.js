//Функция timer создает таймер обратного отсчета до заданной даты и времени (дедлайна). Она принимает два аргумента: селектор элемента, в который будет помещен таймер, и сам дедлайн.
//Funktsioon timer loob tagasivaatetimeri, mis loendab aega kuni määratud kuupäeva ja kellaajani (tähtaeg). See võtab vastu kaks argumenti: elementi, kuhu timer paigaldatakse, ja ise tähtaeg.
function timer(id, deadline) {
    //вычисляет оставшееся время до дедлайна. Она возвращает объект с оставшимся временем в миллисекундах, днях, часах, минутах и секундах. Для этого используется разница между текущей датой и дедлайном.
    //arvutab, kui palju aega on jäänud tähtajani. See tagastab objekti, mis sisaldab jäänud aega millisekundites, päevades, tundides, minutites ja sekundites. Selleks kasutatakse praeguse kuupäeva ja tähtaja vahe.
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor( (t/(1000*60*60*24)) ),
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60),
        hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
        
    }

    //добавляет ноль перед числами от 0 до 9 для форматирования времени, чтобы всегда отображалось 2 цифры.
    //lisab numbrite ette nulli, et vormindada aega nii, et alati kuvatakse 2 numbrit, kui number on vahemikus 0 kuni 9.
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    //инициализирует таймер на странице. Она получает элемент таймера по селектору и создает интервалы, чтобы обновлять отображение оставшегося времени каждую секунду. Внутри нее также определена функция updateClock, которая обновляет значения таймера и очищает интервал, когда время истекает.
    // initsialiseerib lehe peal timeri. See saab timeri elemendi selektori järgi ja loob vaheaja, et uuendada jäänud aega iga sekundi tagant. Selle sees on ka funktsioon updateClock, mis värskendab timeri väärtusi ja puhastab vaheaja, kui aeg on otsa saanud.
    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, '2024-12-11');
}

export default timer;