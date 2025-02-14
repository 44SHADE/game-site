//ex1
const pass = "password";
const auth = prompt("Введите пароль...");

auth === pass ? alert("Пароль введен верно!") : alert("Пароль введен неправильно!");

//ex2
// const c = 0;
// const c = 10;
// const c = -3;
const c = 2;

if (c > 0 && c < 10) {
    alert("Верно")
} else {
    alert("Неверно")
}

//ex3
const d = 1337;
const e = 88;

if (d || e > 100) {
    alert("Верно")
} else {
    alert("Неверно")
}

//ex4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(+a + +b);

//ex5
const month = Number(prompt("Введите номер месяца..."));

const winter = "зима";
const spring = "весна";
const summer = "лето";
const autumn = "осень";

switch (month) {
  case 1:
  case 2:
  case 12:
    alert(winter);
    break;
  case 3:
  case 4:
  case 5:
    alert(spring);
    break;
  case 6:
  case 7:
  case 8:
    alert(summer);
    break;
  case 9:
  case 10:
  case 11:
    alert(autumn);
    break;
  default:
    alert("Введите месяц в диапазоне: 1-12");
}
