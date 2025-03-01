import { generateRandomNum, promptQuestion } from "../common/utils.js";

const randomMathBtn = document.querySelector(".button__randomMath");

const levels = {
    "easy": 10,
    "medium": 30,
    "hard": 50,
    "death": 100,
}

const signsMap = {
  0: "+",
  1: "-",
  2: "*",
  3: "/",
};

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const randomSign = () => Math.floor(Math.random() * 4);

const generateTwoNums = (complexityExample) => {
  const numsArr = [];
  for (let i = 0; i < 2; i++) {
    const num = generateRandomNum(complexityExample);
    numsArr.push(num);
  }

  return numsArr;
};

const generateExample = (complexityExample) => {
  const sign = signsMap[randomSign()];
  const [a, b] = generateTwoNums(complexityExample);

  if (sign === "/" && a % b !== 0) {
    return generateExample(complexityExample);
  }

  const exampleString = `${a} ${sign} ${b} = ***?`;
  const answer = operations[sign](a, b);

  return { answer, exampleString };
};

const generateMultipleExamples = (fn, complexityExample, countExamples) => {
    const exampleStringArr = [];
    const answerArr = [];
  
    for (let i = 0; i < countExamples; i++) {
      const ex = fn(complexityExample);
  
      exampleStringArr.push(ex.exampleString);
      answerArr.push(ex.answer);
    }
  
    return { answerArr, exampleStringArr };
  };

const gameProgressQuestion = (examplesAndAnswersObj) => {
  const answers = examplesAndAnswersObj.answerArr.join(" |xx| ");
  const examples = examplesAndAnswersObj.exampleStringArr.join("\n");

  const answersToTheExamples = promptQuestion(`Решите эти примеры (Ответы впишите через ПРОБЕЛ):\n${examples}`);
  const answersToTheExamplesPretty = answersToTheExamples.split(" ").join(" |xx| ");

  return alert(
    `Сверься с правильными ответами и делай выводы!\n\nМои ответы:\n${answers}\n\nТвои:\n${answersToTheExamplesPretty}\n\n\n\nP.S: ПРОГРАММА ВСЕГДА ПРАВА`
  );
};

const init = () => {
  alert(
    "1. выберите сложнось примеров!\n2. впишите сложность в поле: 'easy', 'medium', 'hard', 'death'\n3. впиши желаемое колличество примеров!\n4. РЕШАЙ!"
  );

  const level = promptQuestion(
    "Выберите сложность: easy, medium, hard, death."
  );

  const examplesCount = +promptQuestion(
    "Сколько примеров ты хочешь решить ?\n\n(Впиши целое число без пробелов и других знаков, ТОЛЬКО число!)\n\n\nP.S: Ты, верно, задаёшься вопросом: - 'А насколько много примеров ты можешь мне дать?'\nМогу много))) Но alert отдаст только - 23 :D"
  );

  if (!level) return alert("Выберите уровень!");
  if (!examplesCount) return alert("Нет - нет - нет! Впиши кол-во примеров!");

  const levelValid = level.trim().split(" ").join("").toLowerCase();

  if(levelValid === "easy" || "medium" || "hard" || "death") {
    const lvl = levels[levelValid];
    const examplesObj = generateMultipleExamples(generateExample, lvl, examplesCount);
    gameProgressQuestion(examplesObj);
  } else {
    return alert(
        "Введите сложность без цифр и дополнительных символов!\nПример: easy -> press 'OK'"
      );
  }
};

randomMathBtn.addEventListener("click", init);
