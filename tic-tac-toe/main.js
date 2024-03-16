const container = document.querySelector(".tic-tac-toe");

const resetButton = document.querySelector("button");

resetButton.addEventListener("click", () => {
     document.querySelectorAll(".square").forEach(ele =>{
        ele.innerText = "";
        ele.classList.add("empty");
    });

    acc = 1;
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

let acc = 1;

const makeMove = () => {
    emptyCell.forEach(ele => ele.addEventListener("click", (event) => {
        if(event.target.classList.contains("empty") && acc % 2 !== 0) {
            event.target.innerText = "X";
            event.target.classList.remove("empty");
            acc++;
        } else if (event.target.classList.contains("empty") && acc % 2 === 0){
            event.target.innerText = "O";
            event.target.classList.remove("empty");
            acc++;
        }
    }))
}

makeMove()


