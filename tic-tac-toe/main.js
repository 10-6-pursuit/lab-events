const section = document.querySelector(".tic-tac-toe");
section.style.display = "grid";
section.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)";
section.style.width = "max-content";
section.style.height = "max-content";

let counter = 0;

function makeBoard() {
    for (let i = 0; i < 9; i++) {
        const div = document.createElement("div");
        div.classList.add("empty", "square");
        section.append(div);
    

        div.addEventListener("click", event => {
            if (event.target.classList.contains("empty") && counter % 2 !== 0) {
                event.target.innerText = "O";
                event.target.classList.remove("empty");
                counter++;
            } else if (event.target.classList.contains("empty") && counter % 2 === 0) {
                event.target.innerText = "X";
                event.target.classList.remove("empty");
                counter++;
            }
        });

        const winner = document.querySelectorAll(".square");
        console.log(winner);
    }

}

makeBoard();

const button = document.querySelector("button");

button.addEventListener("click", e => {
    const allBoxes = document.querySelectorAll(".square");
    allBoxes.forEach(elem => {
        elem.innerText = "";
        elem.classList.add("empty");
    });
   
})







