const colorPalette = document.querySelectorAll('.color');
const currentColor = document.querySelector('#current-color')
const main = document.getElementById("canvas")

for (let i = 0; i < 100; i++) {
    const newCell = document.createElement("div");
    newCell.className = "cell"
    main.appendChild(newCell)
}
for(let color of colorPalette){
    color.addEventListener("click", (e) =>{
        currentColor
        e.target.style.background = e.target.style.background
    })
}