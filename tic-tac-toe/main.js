const container = document.querySelector(".tic-tac-toe");

const makeBoard = () => {
    for(let i = 0; i < 9; i++){
        const cell = document.createElement("div");
        cell.className = "square";
        container.append(cell);
    }
}

window.onload = makeBoard();

const emptyCell = document.querySelectorAll(".square");

emptyCell.forEach(ele => ele.addEventListener("click", (event) => {
    event.target.innerText = "x";
}))