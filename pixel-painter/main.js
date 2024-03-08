const currentColor = document.querySelector("#current-color")

const colors = document.querySelectorAll(".color")

for (let color of colors) {

    const currColor = color.getAttribute("style").split(" ")[1]

    color.addEventListener("click", () => {

    currentColor.style.background = currColor

    })
}

const cells = document.querySelectorAll(".cell")

for (let cell of cells) {

    cell.addEventListener("click", (event) =>{

    const currColor = event.target.parentNode.parentNode.querySelector("#current-color")

    const color = currColor.getAttribute("style").split(" ")[1].slice(0, -1)

    cell.style.background = color

    })
}



