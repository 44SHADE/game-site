//ex1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === 10) {
    console.log(arr1[i]);
    break;
  }
}

//ex2
console.log("-----------ex2");

const arr2 = [1, 5, 4, 10, 0, 3];
const index = arr2.findIndex((index) => index === 4);
console.log(index);

//ex3
console.log("-----------ex3");

const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(" "));

//ex4
console.log("-----------ex4");

const arr4 = [];
for (let i = 0; i < 3; i++) {
    arr4.push([]);
  for (let j = 0; j < 3; j++) {
    arr4[i].push(1);
  }
}
console.log(arr4);

//ex5
console.log("-----------ex5");

const arr5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
  arr5.push(2);
}
console.log(arr5);

//ex6
console.log("-----------ex6");

const arr6 = [9, 8, 7, "a", 6, 5];
const sorted = arr6
  .sort((a, b) => a - b)
  .filter((el) => typeof el === "number");
console.log(sorted);

//ex7
console.log("-----------ex7");
const arr7 = [9, 8, 7, 6, 5];
const num = +prompt("Угадай число от 1 до 10");
const answer = arr7.find((el) => el === num);
if (answer) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

//ex8 
console.log("-----------ex8");

const str = 'abcdef'
console.log(str.split("").reverse().join(""));

//ex9
console.log("-----------ex9");

const arr9 = [[1, 2, 3],[4, 5, 6]];
console.log(arr9.flat());

//ex10
console.log("-----------ex10");

const arr10 = [1,4,5,3,7,6];
for (let i = 0; i < arr10.length; i++) {
    if(arr10[i] === arr10[arr10.length - 1]) break;
    console.log(arr10[i] + arr10[i+1]);
}

//ex11
console.log("-----------ex11");

const arr11 = [1,2,3,4,5]
function arrFnNum (arrNums) {
    return arrNums.map((el) => el ** 2);
}

console.log(arrFnNum(arr11));

//ex12
console.log("-----------ex12");

const arr12 = ["asdfsadf", "214r24", "almdksnf2oln2l3"];
function arrFnStr (arrStr) {
    return arrStr.map((el) => el.length);
}
console.log(arrFnStr(arr12));

//ex13
console.log("-----------ex13");

const arr13 = [3,42,1,5,-1];
function arrFnMinus (arrNums) {
    return arrNums.filter((el) => el < 0);
}
console.log(arrFnMinus(arr13));

//ex14
console.log("-----------ex14");

const arr14 = [];
for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * 11);
    arr14.push(num);
}
const even = arr14.filter((el) => el % 2 === 0);
console.log(arr14, even);

//ex15
console.log("-----------ex15");

const arr15 = [];
for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 11);
    arr15.push(num);
}

const len = arr15.length;
const sum = arr15.reduce((num, acc) => num + acc);
const mid = sum / 15;
console.log(mid);


