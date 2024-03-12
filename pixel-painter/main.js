const currentColor = document.querySelector("#current-color")

const colors = document.querySelectorAll(".color")

for (let color of colors) {

    const currColor = color.getAttribute("style").split(" ")[1]

    color.addEventListener("click", () => {

    currentColor.style.background = currColor

    })
}

const cells = document.querySelectorAll(".cell")

const sunflower = `0000000111100000000000000011111110000000000011155555111000000001115555555111000000115555555555511000011155544445555111000111555444455551110001115554444555511100011155544445555111000111555444455551110001115554444555511100001155555555555110000001115555555111000000001115555511100000000000111111100000000000000111100000000000000000330000000000000000003300000000000000000033000000000000000000330000000000`


for (let i = 0; i < sunflower.length; i++) {
    for (let j = i; j < cells.length; j++) {
        cells[j].textContent = sunflower[i]
        break;
    }

}

for (let cell of cells) {

    cell.addEventListener("click", (event) =>{

    const currColor = event.target.parentNode.parentNode.querySelector("#current-color")

    const color = currColor.getAttribute("style").split(" ")[1].slice(0, -1)

    cell.innerText = ""

    cell.style.background = color

    })
}



