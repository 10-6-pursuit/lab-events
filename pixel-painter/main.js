const colorPalette = document.querySelectorAll(".color");
let currColor = document.querySelector("#current-color");

const canvas = document.querySelector("#canvas");
const allCells = document.querySelectorAll(".cell");
const palette = document.querySelector("#palette")

for (let color of colorPalette) {
    color.addEventListener("click", (event) => {
        currColor.style.backgroundColor = event.target.style.background;
    })
}

for (let i = 0; i < 100; i++) {
    const newCell = document.createElement("div");
    newCell.className = "cell";
    canvas.appendChild(newCell);
    newCell.addEventListener("click", (event) => {
        event.target.style.background = currColor.style.backgroundColor;
    })
}

// Clear canvas of all color
const clearButton = document.createElement("button");
clearButton.innerText = "Clear";
clearButton.className = "color";
palette.appendChild(clearButton);

// Fill canvas with one color
const fillButton = document.createElement("button");
fillButton.innerText = "Fill";
fillButton.className = "color";
palette.appendChild(fillButton);

clearButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.style.background = "white";
    });
  });
  
fillButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.style.background = currColor.style.backgroundColor;
    });
  });

