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

const moon = ""

const clover = ""

const volcano ="0000000000000000000000000000000002200000000000000000222200000000000000044224400000000000004472777700000000000777777777700000000077777777777700000007777777777777000004777777777777770000477777777777777700077777777777777777004777777777777777770047777777777777777700477777777777777777047777777777777777770477777777777777777747777777777777777777477777777777777777774777777777777777777747777777777777777777"

const selections = document.querySelectorAll("input")

console.log(volcano.length)

let selection = ""

for (let choice of selections) {
    console.log(choice)
    choice.addEventListener("click", (event) => {
         if (event.target.id === "sunflower") {
            selection += sunflower
        } else if (event.target.id === "moon") {
            selection += moon
        } else if (event.target.id === "clover") {
            selection += clover
        } else if (event.target.id === "volcano") {
            selection += volcano
        }

        console.log(selection)
         for (let i = 0; i < selection.length; i++) {
            for (let j = i; j < cells.length; j++) {
                cells[j].textContent = selection[i]
                break;
            }
        
        }
    })
}

for (let cell of cells) {

    cell.addEventListener("click", (event) =>{

    const currColor = event.target.parentNode.parentNode.querySelector("#current-color")

    const color = currColor.getAttribute("style").split(" ")[1].slice(0, -1)

    cell.innerText = ""

    cell.style.background = color

    })
}



