//ex1
const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

console.log(people.sort((a, b) => a.age - b.age));

//ex2
function isPositive(el) {
  // писать код тут
  return el >= 0;
}
function isMale(el) {
    return el.gender === "male"
}
function filter(arr, callback) {
  // писать код тут
  const sorted = [];
  for(const el of arr) {
    if(callback(el)) sorted.push(el);
    continue;
  }
  return sorted;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people1, isMale));

//ex3
const timer = (mls) =>
  setTimeout(() => {
    clearInterval(int);
    console.log("30 секунд прошло");
  }, mls);

const int = setInterval(() => {
    console.log(new Date());
}, 3000);

timer(30000);

//ex4
function delayForSecond(callback) {
  // Код писать можно только внутри этой функции
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб! (ex4)");
});

//ex5
// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi("Глеб (ex5)"));
