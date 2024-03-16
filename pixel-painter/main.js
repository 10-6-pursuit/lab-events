
const colorPalette = document.querySelectorAll(".color")
const currColor = document.querySelector("#current-color")
const main = document.getElementById("canvas");
const paletteBar = document.getElementById("palette");

for (let i = 0; i < 100; i++) {
    const newCell = document.createElement("div");

    newCell.className = "cell";
    newCell.addEventListener("click", (event) => {
    event.target.style.background = currColor.style.background;
});


    main.appendChild(newCell);
}



for (let color of colorPalette) {
    color.addEventListener("click", (event) => {
        currColor.style.background = event.target.style.background;
    });
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

const fillButton = document.createElement("button");
fillButton.textContent = "Fill";

resetButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.background = "none";
    });
});

fillButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.background = currColor.style.background;
    });
});

paletteBar.append(resetButton);
paletteBar.append(fillButton);