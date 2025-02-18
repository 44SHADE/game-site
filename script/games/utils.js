const generateRandomNum = (range) => Math.floor(Math.random() * range + 1);

function promptQuestion(string) {
  return prompt(string);
}

export { generateRandomNum, promptQuestion };
