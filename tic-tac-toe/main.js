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

console.log(ticTacToe)

