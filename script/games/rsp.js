import { promptQuestion } from "../common/utils.js";

const rspBtn = document.querySelector(".button__rsp");

const rspMap= {
    "1": "Камень",
    "2": "Ножницы",
    "3": "Бумага",
};

const init = () => {
    alert("Игра: камень, ножницы, бумага.\nСделай выбор и напиши цифру.\nУдачи!");

    const userChoice = +promptQuestion("1. КАМЕНЬ || 2. НОЖНИЦЫ || 3. БУМАГА");
    const programChoice = Math.floor(Math.random() * 3 + 1);

    if(isNaN(userChoice) || !userChoice) {
        alert("Нужно выбрать цифру для продолжения.");
        return;
    };

    if(userChoice < 1 || userChoice > 3) {
        alert("Выбранное число меньше/больше представленных.");
        return;
    };

    let resultMsg = `User: ${rspMap[userChoice]}\nComputer: ${rspMap[programChoice]}`;
    
    if(userChoice === programChoice) {
        alert(`${resultMsg}`);
        alert(`Это ничья !`);
    };
    if(userChoice === 1 && programChoice === 2 ||
        userChoice === 2 && programChoice === 3 ||
        userChoice === 3 && programChoice === 1 
    ) {
        alert(`${resultMsg}`);
        alert(`ВЫ ПОБЕДИЛИ`);
    } else {
        alert(`${resultMsg}`);
        alert(`ВЫ ПРОИГРАЛИ`);
    }
}

rspBtn.addEventListener("click", init);