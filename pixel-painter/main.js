const currentColor = document.querySelector("#current-color")

const colors = document.querySelectorAll(".color")

for (let color of colors) {
    const currColor = color.getAttribute("style")
    color.addEventListener("click", () => {
        currentColor.style.background = currColor.split(" ")[1]
    })
}

