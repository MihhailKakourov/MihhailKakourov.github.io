"use strict";

const inputEur = document.querySelector("#eur");
const inputUsd = document.querySelector("#usd");
const inputRub = document.querySelector("#rub");

inputEur.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "script/current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener("load", () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = inputEur.value * data.current.usd;
            inputRub.value = inputEur.value * data.current.rub;
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });
})