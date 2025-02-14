//ex1
const returnMin = (a, b) => (a >= b ? b : a);

//ex2
const returnString = (num) =>
  num % 2 === 0 ? "Число четное" : "Число нечетное";

//ex3
const logSquare = (num) => {
  console.log(num ** 2);
};

const squareNum = (num) => {
  const square = num ** 2;
  return square;
};

//ex4
function ageQuestion() {
  const result = prompt("Сколько вам лет?");

  if (result < 0) {
    alert("Вы ввели неправильное значение");
    return;
  }

  if (result >= 0 && result <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }

  return;
}

//ex5
const multi = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return alert("Одно или оба значения не являются числом");
  }

  return a * b;
};

//ex6
const cubeNum = () => {
    const number = +prompt("Введите число...");

    if(typeof number !== "number") {
        alert("Переданный параметр не является числом");
        return;
    }

    let result = number ** 3;
    
    return alert(`n в кубе равняется ${result}`);
}
