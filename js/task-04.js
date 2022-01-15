const idValue = document.querySelector("#value");
let counterValue = 0;
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const incrementValue = () => {
    counterValue += 1;
    idValue.textContent = counterValue;
    console.log("click, incrementValue");
};
incrementBtn.addEventListener("click", incrementValue);

const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const decrementValue = () => {
    counterValue -= 1;
    idValue.textContent = counterValue;
    console.log("click, decrementValue");
};
decrementBtn.addEventListener("click", decrementValue);

