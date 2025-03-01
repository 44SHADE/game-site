import { quiz } from "../common/quizQuestions.js";
import { promptQuestion } from "../common/utils.js";

const quizBtn = document.querySelector(".button__quiz");
const quizLen = quiz.length;

const getQuestion = () => {
    const randomIndex = Math.floor(Math.random() * quizLen);
    const questionObj = quiz[randomIndex];
    return questionObj;
};

const randomThreeQuestion = () => {
    const questions = [];

    for(let i = 0; i < 3; i++) {
        const question = getQuestion();
        const simular = questions.some((el) => el.text === question.text);

        if(!simular) {
            questions.push(question);
        }
    }

    return questions;
}

const init = () => {
    alert("Это квиз! Тебе дадут 3 вопроса, а ты попытайся ответить. Удачи!");

    const questions = randomThreeQuestion();
    questions.forEach((el) => {
        const answers = el.options.join("\n");
        const correctAnswer = el.correctAnswer;

        const answer = +promptQuestion(`${el.text}\n\n${answers}`);

        answer === correctAnswer ? alert("Верный ответ!") : alert("Ты ошибся!");
    })
}

quizBtn.addEventListener("click", init);
