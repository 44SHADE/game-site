//ex1
const str = "Privet!";
for (let i = 0; i < 2; i++) {
  console.log(str);
}
//ex2
console.log(`-------------ex2`);
let num = 1;
while (num <= 5) {
  console.log(num++);
}
//ex3
console.log(`-------------ex3`);
for (let i = 7; i <= 22; i++) {
  console.log(i);
}
//ex4
console.log(`-------------ex4`);

const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};

for (user in obj) {
  console.log(`имя сотрудника: ${user}, "сумма" долларов: ${obj[user]}`);
}
//ex5
console.log(`-------------ex5`);
let n = 1000;
let result = 0;
let count = 0;

for (let i = 0; i <= n; i++) {
  count++;
  n /= 2;
  if (n < 50) {
    result = n;
    break;
  }
}
console.log(`count: ${count}, res: ${result}`);
//ex6
console.log(`-------------ex6`);
const monthDays = 31;
const friday = 3;
const week = 7;

for(let i = friday; i <= monthDays; i + week) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}


