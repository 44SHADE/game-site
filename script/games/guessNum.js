const guessNumGameBtn = document.querySelector(".button__randomNum");

const range = 100;

const generateRandomNum = (range) => Math.floor(Math.random() * range + 1);

function promptQuestion () {
    return Number(prompt("Выберите число в диапазоне от 1 до 100 и начните игру!"));
}

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
    result = Number(prompt("Хм... ваше число БОЛЬШЕ! Попробуйте еще раз!"))
  } else {
    result = Number(prompt("Хм... ваше число МЕНЬШЕ! Попробуйте еще раз!"))
  }

  return guessNum(num, result);
};

const init = () => {
    const num = generateRandomNum(range);
    const result = promptQuestion();
    console.log(num);
    
    return guessNum(num, result);
}


guessNumGameBtn.addEventListener("click", init);
