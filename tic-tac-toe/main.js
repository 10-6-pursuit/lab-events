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

const modal = document.getElementById("myModal");

const span = document.getElementById("everybody");

const squares = document.querySelectorAll(".square")

const msg = document.querySelector("p")

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
            sqr.classList.add(`${letter}`)
        }

        let leftCol = squares[0].textContent + squares[1].textContent + squares[2].textContent
        let midCol = squares[3].textContent + squares[4].textContent + squares[5].textContent
        let rightCol = squares[6].textContent + squares[7].textContent + squares[8].textContent
        let topRow = squares[0].textContent + squares[3].textContent + squares[6].textContent
        let midRow = squares[1].textContent + squares[4].textContent + squares[7].textContent
        let botRow = squares[2].textContent + squares[5].textContent + squares[8].textContent
        let leftDia = squares[0].textContent + squares[4].textContent + squares[8].textContent
        let rightDia = squares[6].textContent + squares[4].textContent + squares[2].textContent

        const winCon = [leftCol, midCol, rightCol, topRow, midRow, botRow, leftDia, rightDia]

        for (let win of winCon) {
            if (win.includes("XXX")) {
                msg.innerText = "O is the loser!!!"
                modal.style.display = "block";
            }
            if (win.includes("OOO")) {
                msg.innerText = "X is the loser!!!"
                modal.style.display = "block";
            }
        }

        if (emptySquares.length === 1) {
            msg.innerText = "Everybody loses!!!"
            modal.style.display = "block";
        }
    })
}

span.onclick = function() {
    modal.style.display = "none";
  }

const reset = document.querySelector("button")

reset.addEventListener("click", () => {
    for (let square of squares) {
        square.textContent = ""
        square.classList.add("empty", "square")
        modal.style.display = "none";
    }
})




