const section = document.querySelector(".tic-tac-toe");
section.style.display = "grid";
section.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)";
// section.style.width = "max-content";
// section.style.height = "max-content";

let acc = false;

function makeBoard() {
    for (let i = 0; i < 9; i++) {
        const div = document.createElement("div");
        div.className = "empty square";

        section.append(div);

        div.addEventListener("click", (event) => {
            if (event.target.classList.contains("empty") && acc) {
                event.target.innerText = "X";
                event.target.classList.remove("empty");
                acc = !acc;
            } else if (event.target.classList.contains("empty") && !acc) {
                event.target.innerText = "O";
                event.target.classList.remove("empty");
                acc = !acc;
            }
        })
    };
};

const resetButton = document.querySelector("button");

resetButton.addEventListener("click", (event) => {
    const allDivs = document.querySelectorAll(".square");
    allDivs.forEach(cell => {
        cell.innerText = "";
        cell.classList.add("empty");
    });
});

makeBoard();