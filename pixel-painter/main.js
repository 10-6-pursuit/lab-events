const currentColorPalette = document.querySelectorAll(".color");

const currentColorBox = document.querySelector("#current-color");

currentColorPalette.forEach(ele => ele.addEventListener("click", () => {
    currentColorBox.style.background = ele.style.background;
}))

const emptyCanvas = document.querySelector("#canvas");


const makeCanvas = () => {
    for(let i = 0; i < 100; i++){
        const div = document.createElement("div");
        div.className = "cell";
        emptyCanvas.appendChild(div);
    }
}

window.onload = makeCanvas();

const emptyCell = document.querySelectorAll(".cell");

emptyCell.forEach(ele => ele.addEventListener("click", (event) => {
    event.target.style.background = currentColorBox.style.background;
}))
