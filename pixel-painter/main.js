const palette = document.querySelectorAll(".color");
const currentColor = document.getElementById("current-color")
const canvas = document.getElementById("canvas");
const paletteBar = document.getElementById("palette");



for (let i = 0; i < 100; i++) {
const newCell = document.createElement("div");
newCell.className = "cell";

newCell.addEventListener("click", (e) => {
    e.target.style.background = currentColor.style.background;
});

canvas.appendChild(newCell);
}

for (let color of palette) {
color.addEventListener("click", (event) => {
currentColor.style.background = event.target.style.background;
});
}

const resetButton = document.createElement("button");

resetButton.textContent = "Reset";


resetButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.background = "white"
    });
   const resetColor = document.querySelector("#current-color");
   resetColor.style.background = "white";
});

paletteBar.append(resetButton);

