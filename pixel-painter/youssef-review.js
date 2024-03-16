const colorPalette = document.querySelectorAll(".color");
const currColor = document.querySelector("#current-color");
const main = document.getElementById("canvas");
const paletteBar = document.getElementById("palette")


for (let i = 0; i < 100; i++) {
    const newCell = document.createElement("div");
    newCell.className = "cell";

    newCell.addEventListener("click", (e) => {
        e.target.style.background = currColor.style.background;
    })

    main.appendChild(newCell);
}

for (let color of colorPalette) {
    color.addEventListener("click", (e) => {
        currColor.style.background = e.target.style.background;
    })
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

const fillButton = document.createElement("button");
fillButton.textContent = "Fill";

resetButton.addEventListener("click", (e) => {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.background = "none"
    });
});

paletteBar.append(resetButton)
paletteBar.append(fillButton);