const ticTacToe = document.querySelector(".tic-tac-toe")

function makeBoard(height, width) {


    for (let i = 1; i <= height; i++) {

        const row = document.createElement("div")

        for (let j = 1; j <= width; j++) {
            const square = document.createElement("div")
            square.classList.add("empty")
            square.classList.add("square")
            row.append(square)
        }
        ticTacToe.append(row)
    }

}

makeBoard(3, 3)

const squares = document.querySelectorAll(".square")

for (let square of squares) {
    square.addEventListener("click", function makeMove(e) {
        const emptySquares = document.querySelectorAll(".empty")
        let letter;
        if (emptySquares.length % 2 === 0) {
            letter = "O"
        } else {
            letter = "X"
        }
        const sqr = e.target
        const attribute = sqr.getAttribute("class")
        if (attribute.includes("empty")) {
            sqr.textContent = `${letter}`
            sqr.classList.remove("empty")
            console.log(emptySquares.length)
        }
    })
}

const reset = document.querySelector("button")

reset.addEventListener("click", () => {
    for (let square of squares) {
        square.textContent = ""
        square.classList.add("empty")
    }
})




