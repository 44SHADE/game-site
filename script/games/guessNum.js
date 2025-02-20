import { generateRandomNum, promptQuestion } from "./utils.js";

const guessNumGameBtn = document.querySelector(".button__randomNum");

const range = 100;

function guessNum(num, result) {
  if (result > 100 || result < 1) {
    alert("Ваше число не попадает в диапазон 1-100! Попробуйте еще раз.");
    return;
  }

  if(result === num) {
    alert("Отлично! Вы угадали!");
    return;
  }

  if (result > num) {
    result = Number(promptQuestion("Хм... ваше число БОЛЬШЕ! Попробуйте еще раз!"))
  } else {
    result = Number(promptQuestion("Хм... ваше число МЕНЬШЕ! Попробуйте еще раз!"))
  }

  return guessNum(num, result);
};

const init = () => {
    const num = generateRandomNum(range);
    const result = Number(promptQuestion("Выберите число в диапазоне от 1 до 100 и начните игру!"));
    
    return guessNum(num, result);
}


guessNumGameBtn.addEventListener("click", init);
