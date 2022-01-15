const fontControl = document.querySelector("#font-size-control");
const textControl = document.querySelector("#text");

fontControl.addEventListener ("input", (event) => {
    // textControl.style.fontSize = fontControl.value + "px";
    textControl.style.fontSize = `${event.target.value}px`;
});
