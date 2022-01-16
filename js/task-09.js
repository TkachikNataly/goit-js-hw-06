function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorButton = document.querySelector(".change-color");
const colorSpain = document.querySelector(".color");

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

const showSpain = () => {
  showSpain.textContent = getRandomHexColor();
}

colorButton.addEventListener("click", changeColor);
colorSpain.addEventListener("click", showSpain);