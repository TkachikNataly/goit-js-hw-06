function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorButton = document.querySelector(".change-color");
const colorSpain = document.querySelector(".color");

colorButton.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpain.textContent = getRandomHexColor();
});