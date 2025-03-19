//ex1
const hideBtn = document.querySelector(".hide");
const hideH1 = document.getElementById("hide_h1");

const visibilityText = (param) => (hideH1.style.visibility = param);

hideBtn.addEventListener("click", () => {
  const isHidden = hideH1.style.visibility;
  isHidden === "hidden" ? visibilityText("visible") : visibilityText("hidden");
});

//ex2
const colorBtn = document.querySelector(".color");
const colorParagraph = document.getElementById("color_p");

colorBtn.addEventListener("click", () => {
  colorParagraph.style.color = "blue";
});

//ex3
const changeTextBtn = document.querySelector(".change");
const changeTextH1 = document.getElementById("change_h1");

changeTextBtn.addEventListener("click", () => {
  changeTextH1.innerText = "Привет, мир!";
});

//ex4
const changeDescriptionBtn = document.querySelector(".change_p-description");
const changeDescriptionParagraph = document.querySelectorAll(".description");

changeDescriptionBtn.addEventListener("click", () => {
  changeDescriptionParagraph.forEach(
    (el) => (el.textContent = "Измененный текст")
  );
});

//ex5
const changeDescriptionBtn2 = document.querySelector(".change_p-description-2");

changeDescriptionBtn2.addEventListener("click", () => {
  changeDescriptionParagraph.forEach((el) => (el.textContent = "Новый текст"));
});

//ex6
const addElemParagraphBtn = document.querySelector(".add-elem_p");

addElemParagraphBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  document.body.append("Новый абзац", p);
});

//ex7
const deleteDescriptionBtn = document.querySelector(".delete_description");
const deleteDescriptionParagraph = document.querySelector(".description");

deleteDescriptionBtn.addEventListener("click", () => {
  deleteDescriptionParagraph.remove();
});
