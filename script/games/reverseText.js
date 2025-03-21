import { promptQuestion } from "../common/utils.js";

const reverseTextBtn = document.querySelector(".button__reverseText");

const reverseText = (text) => {
  return text.split("").reverse().join("");
};

const init = () => {
  const text = promptQuestion("Введите любой текст...");
  if(!text) return 0;
  const reversedText = reverseText(text);
  alert(reversedText);
};

reverseTextBtn.addEventListener("click", init);
