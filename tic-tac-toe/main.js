const container = document.querySelector(".tic-tac-toe");

 const resetButton = document.querySelector("button")

resetButton.addEventListener("click", (event) => {
    event.target.container.reset();
})

const makeBoard = () => {
    for(let i = 0; i < 9; i++){
        const cell = document.createElement("div");
        cell.classList.add("square" , "empty") ;
        container.append(cell);
    }
}

window.onload = makeBoard();

const emptyCell = document.querySelectorAll(".square");

let acc = 0;

const makeMove = () => {
    emptyCell.forEach(ele => ele.addEventListener("click", (event) => {
        acc++;
        if(event.target.classList.contains("empty") && acc % 2 !== 0) {
            event.target.innerText = "X";
            event.target.classList.remove("empty");
        } else if (event.target.classList.contains("empty") && acc % 2 === 0){
            event.target.innerText = "O";
            event.target.classList.remove("empty");
        }
    }))
}

makeMove()


