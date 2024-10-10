//Функция postData отправляет POST-запрос на указанный URL с данными в формате JSON. Она принимает два параметра: url — адрес, на который отправляются данные, и data — данные, которые нужно отправить. Функция возвращает ответ сервера в виде JSON.
//Funktsioon postData saadab POST-päringu määratud URL-ile JSON-formaadis andmetega. See võtab vastu kaks parameetrit: url — aadress, kuhu andmed saadetakse, ja data — saadetavad andmed. Funktsioon tagastab serveri vastuse JSON-vormingus.
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
}

//Функция getResource выполняет GET-запрос на указанный URL и возвращает ответ в формате JSON. Если запрос завершился неудачно, функция выбрасывает ошибку с информацией о статусе.
//Funktsioon getResource teeb GET-päringu määratud URL-ile ja tagastab vastuse JSON-vormingus. Kui päring ei õnnestu, viskab funktsioon vea koos teabega staatuse kohta.
async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData};
export {getResource};