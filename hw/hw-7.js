//ex1
const str1 = "js".toUpperCase();

//ex2
function fn(strArr, strSimular) {
    const simularArr = [];

    for(let str of strArr) {
        if(str.includes(strSimular)) simularArr.push(str);
        continue;
    }

    return simularArr;
}

console.log(fn(["avdofiy i grr", "gzzuz gulyaet", "float left avdofiy", "lmsknale"], "gzz"));

//ex3
const num = 32.58884;
Math.floor(num); //32
Math.ceil(num); //33
Math.round(num); //33

//ex4
const numArr = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numArr);
const max = Math.max(...numArr);
console.log(min, max);

//ex5
const num1 = Math.floor(Math.random() * 10 + 1);
console.log(num1);

//ex6
function fn2 (num) {
    const arr = []
    for (let i = 0; i < Math.floor(num / 2); i++) {
        const rnd = Math.floor(Math.random() * (num + 1));
        arr.push(rnd);
    }
    return arr;
}

console.log(fn2(23));

//ex7
function fn3 (min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

console.log(fn3(30, 39));


//ex8
console.log(new Date());

//ex9
const date2 = new Date();
date2.setDate(date2.getDate() + 73)
console.log(date2);

//ex10
const date = new Date();
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

console.log(
  `Дата: ${date.getDate()} ${date.getMonth()} ${date.getFullYear()} — это ${
    days[date.getDay()]
  }`,
  `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
);
