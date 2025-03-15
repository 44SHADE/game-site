import { gradients } from "../common/gradients.js";

const main = document.getElementById("main");
const changeColorBtn = document.querySelector(".button__change-color");

changeColorBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    
    const len = gradients.length;
    const randomGradientNum = Math.floor(Math.random() * len);
    const gradient = gradients[randomGradientNum].colors;

    main.style.background = `linear-gradient(to right, ${gradient.join(", ")})`;
})