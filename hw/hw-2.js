//ex1
let a = 10;
a = 20;
alert(a);

//ex2
const iphoneRelease = 2007;
alert(iphoneRelease);

//ex3
const creatorName = "Брендан Эйк";
alert(creatorName);

//ex4
const ten = 10;
const two = 2;
alert(
  "SUM: " +
    (ten + two) +
    "\n" +
    "DIFF: " +
    (ten - two) +
    "\n" +
    "MULTI: " +
    ten * two +
    "\n" +
    "DIV: " +
    ten / two
);

//ex5
let powFive = 2**5
const result = powFive;
alert(result)

//ex6
const nine = 9;
const b = 2;
const result1 = nine % b;
alert(result1);

//ex7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//ex8
const age = prompt("Сколько вам лет ?");
alert(age);

//ex9
const user = {
    name: "Fog",
    age: 2222,
    isAdmin: false,
};

//ex10
const question = prompt("Введите свое имя")
const name = question;
alert(`Привет, ${name}`);
