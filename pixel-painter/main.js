const currentColor = document.querySelector("#current-color")

const colors = document.querySelectorAll(".color")

for (let color of colors) {
    const currColor = color.getAttribute("style")
    color.addEventListener("click", () => {
    currentColor.style.background = currColor.split(" ")[1]
    
    })
}

const cells = document.querySelectorAll(".cell")

for (let cell of cells) {
    cell.addEventListener("click", (event) =>{
    const currColor = event.target.parentNode.parentNode.querySelector("#current-color")
    const color = currColor.getAttribute("style")
    cell.style.background = color.split(" ")[1].slice(0, -1)
    console.log(color.split(" ")[1].slice(0, -1))
    })
}


